import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import Icon from '@mdi/react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { mdiVolumeLow } from '@mdi/js';
import { changeAudio } from '../../store/audio'
import { mdiVolumeHigh } from '@mdi/js';
import { mdiVolumeMedium } from '@mdi/js';
import { mdiVolumeOff } from '@mdi/js';

import BlindMemories from '../../assets/music/BlindMemories-Cheel.mp3'
import CircleDance from '../../assets/music/CircleDance-SefChol.mp3'
import Cattle from '../../assets/music/Cattle-DelicateSteve.mp3'
import DangerousToys from '../../assets/music/DangerousToys-SefChol.mp3'
import Dolphin from '../../assets/music/Dolphin-esque-Godmode.mp3'
import EternalGarden from '../../assets/music/EternalGarden-DanHenig.mp3'
import FastandRun from '../../assets/music/FastandRun-NicoStaf.mp3'
import FutureRennaisance from '../../assets/music/FutureRennaisance-Godmode.mp3'
import Headphones from '../../assets/music/Headphones-RKVC.mp3'
import KotoSan from '../../assets/music/KotoSan-Ofshane.mp3'
import Kurt from '../../assets/music/KotoSan-Ofshane.mp3'
import LateNightTrain from '../../assets/music/LateNightTrain-VansInJapan.mp3'
import Lights from '../../assets/music/Lights-PatrickPatrikios.mp3'
import LikeThat from '../../assets/music/LikeThat-AnnoDominiBeats.mp3'
import Orient from '../../assets/music/Orient-SefChol.mp3'
import OuttaTime from '../../assets/music/OuttaTime-RKVC.mp3'
import SunsetDream from '../../assets/music/SunsetDream-Cheel.mp3'
import ThatOneBarScene from '../../assets/music/ThatOneBarScene-RKVC.mp3'
import WalkingIInTheSky from '../../assets/music/WalkingIInTheSky-NicoStaf.mp3'


import { mdiTuneVerticalVariant } from '@mdi/js';
import { randomArr } from '../../utils'

const Sound = () => {
  const audio = useSelector(state => state.audio)
  const audioDOM = useRef(null);
  console.log(BlindMemories)
  const dispatch = useDispatch()
  const [isActive, setActive] = useState(false)
  const [currI, setCurrI] = useState(0)
  const [audios, setAudios] = useState([
    BlindMemories,
    Cattle,
    CircleDance,
    DangerousToys,
    Dolphin,
    EternalGarden,
    FastandRun,
    FutureRennaisance,
    Headphones,
    KotoSan,
    Kurt,
    LateNightTrain,
    Lights,
    LikeThat,
    Orient,
    OuttaTime,
    SunsetDream,
    ThatOneBarScene,
    WalkingIInTheSky
  ])
  const [ranAudios, setRanAudios] = useState(randomArr(audios))
  const [srcAudio, setSrcAudio] = useState('')
  const [length, setLength] = useState(0)

  const path = `../../assets/music/`

  useEffect(() => {
    setSrcAudio(ranAudios[currI])
    // playAudio()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    // setSrcAudio(ranAudios[currI])
    // playAudio()
    //eslint-disable-next-line
  }, [audio])

  const playAudio = (audio) => {

      // audioDOM.current.src = `${path}${audios[audio.value]}`
     

      // var audiovar = new Audio(audios[audio]);
      // console.log(audiovar)
      // console.log(audiovar.networkState)
      // audiovar.play();
      setSrcAudio(audios[audio])
      console.log(srcAudio)
      console.log(audios[audio], audio)
      audioDOM.current.pause()
      audioDOM.current.load()
      audioDOM.current.addEventListener(
        'canplaythrough',
        function (params) {
          this.play()
          handleDuration(this.duration)
        },
        false,
      )

  }

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
          handleDuration(this.duration)
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

  const handleAudio = (event) => {
    event.preventDefault()
    const audioSrc = parseInt(event.target?.value)
    dispatch(changeAudio(audioSrc));
    console.log(audioSrc)
    playAudio(audioSrc)
}

  const handleDuration = (len, cur) => {
    const duration = len / 100
    setTimeout(() => {
      console.log(duration)
    }, 1000)
  }

  return (
    <div className="wrapper-sound">
      {audio.value && <>
        <Icon path={mdiVolumeOff} size={2} onClick={stopMusic} />
        <Icon path={mdiVolumeMedium} size={2} onClick={reload} />
        <Icon path={mdiVolumeMedium} size={2} onClick={volumeUp} />
        <Icon path={mdiVolumeLow} size={2} onClick={volumeDown} />
        <Icon path={mdiTuneVerticalVariant} size={2} onClick={reload} />
      </>}
      <audio ref={audioDOM} src={srcAudio} onEnded={reload} />
      <md-outlined-select label='Select audio' onInput={handleAudio}>
        <md-select-option value='' selected>
            <div slot="headline"></div>
          </md-select-option>
        {audios.map(function (object, i) {
          return <md-select-option value={i} key={i}>
            <div slot="headline">{object}</div>
          </md-select-option>
        })}
      </md-outlined-select>
    </div>
  )
}

export default Sound