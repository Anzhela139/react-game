import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import Icon from '@mdi/react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { mdiVolumeLow } from '@mdi/js';
import { changeAudio } from '../store/audio'
import { mdiVolumeHigh } from '@mdi/js';
import { mdiVolumeMedium } from '@mdi/js';
import { mdiVolumeOff } from '@mdi/js';


import { mdiTuneVerticalVariant } from '@mdi/js';
import { randomArr } from '../utils'

const AudioControls = () => {
    const audio = useSelector(state => state.audio)
    const audioDOM = useRef(null);
    const dispatch = useDispatch()
    const [isActive, setActive] = useState(false)
    const [currI, setCurrI] = useState(0)
    const audios = []
    const [ranAudios, setRanAudios] = useState(randomArr(audios))
    const [srcAudio, setSrcAudio] = useState('')
    const [length, setLength] = useState(0)

    const reload = useCallback(() => {
        try {
            setActive(true)
            setCurrI(currI + 1)
            const song = ranAudios[currI]
            // setSrcAudio(song)
            // audioDOM.current.src = `${path}${song}`
            console.log(audioDOM.current)
            audioDOM.current.pause()
            audioDOM.current.load()
            audioDOM.current.addEventListener(
                'canplaythrough',
                function (params) {
                    this.play()
                    // handleDuration(this.duration)
                },
                false,
            )
        } catch (error) {
            console.log(error)
        }
        //eslint-disable-next-line
    }, [currI, srcAudio, audioDOM])

    const stopMusic = (event) => {
        audioDOM.pause()
        audioDOM.currentTime = 0
        setActive(false)
    }

    const volumeUp = (event) => {
        if (audioDOM.volume < 1) audioDOM.volume += 0.1
    }

    const volumeDown = (event) => {
        if (audioDOM.volume > 0) audioDOM.volume -= 0.1
    }

    return (
        <>
            <Icon path={mdiVolumeOff} size={2} onClick={stopMusic} />
            <Icon path={mdiVolumeMedium} size={2} onClick={reload} />
            <Icon path={mdiVolumeMedium} size={2} onClick={volumeUp} />
            <Icon path={mdiVolumeLow} size={2} onClick={volumeDown} />
            <Icon path={mdiTuneVerticalVariant} size={2} onClick={reload} />
        </>
    )
}

export default AudioControls