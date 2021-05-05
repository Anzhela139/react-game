import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Icon } from '@iconify/react'
import soundOff from '@iconify/icons-akar-icons/sound-off'
import soundDown from '@iconify/icons-akar-icons/sound-down'
import soundOn from '@iconify/icons-akar-icons/sound-on'
import soundUp from '@iconify/icons-akar-icons/sound-up'
import randomIcon from '@iconify/icons-fe/random'
import { randomArr } from '../utils'

const Audio = () => {
  const [isActive, setActive] = useState(false)
  const [currI, setCurrI] = useState(0)
  const [audios, setAudios] = useState([
    'BlindMemories-Cheel.mp3',
    'BlindMemories-Cheel.mp3',
    'Cattle-DelicateSteve.mp3',
    'CircleDance-SefChol.mp3',
    'DangerousToys-SefChol.mp3',
    'Dolphin-esque-Godmode.mp3',
    'EternalGarden-DanHenig.mp3',
    'FastandRun-NicoStaf.mp3',
    'FutureRennaisance-Godmode.mp3',
    'Headphones-RKVC.mp3',
    'KotoSan-Ofshane.mp3',
    'Kurt-Cheel.mp3',
    'LateNightTrain-VansInJapan.mp3',
    'Lights-PatrickPatrikios.mp3',
    'LikeThat-AnnoDominiBeats.mp3',
    'Orient-SefChol.mp3',
    'OuttaTime-RKVC.mp3',
    'SunsetDream-Cheel.mp3',
    'ThatOneBarScene-RKVC.mp3',
    'WalkingIInTheSky-NicoStaf.mp3',
  ])
  const [ranAudios, setRanAudios] = useState(randomArr(audios))
  const [srcAudio, setSrcAudio] = useState('')
  const [length, setLength] = useState(0)

  const path = `./assets/music/`
  let audioEl

  useEffect(() => {
    setSrcAudio(ranAudios[currI])
      //eslint-disable-next-line
  }, [])

  const reload = useCallback(() => {
    try {
      setActive(true)
      setCurrI(currI + 1)
      const song = ranAudios[currI]
      setSrcAudio(song)
      audioEl.src = `${path}${song}`
      audioEl.pause()
      audioEl.load()
      audioEl.addEventListener(
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
  }, [currI, srcAudio, audioEl])

  const stopMusic = (event) => {
    audioEl.pause()
    audioEl.currentTime = 0
    setActive(false)
  }

  const volumeUp = (event) => {
    if (audioEl.volume < 1) audioEl.volume += 0.1
  }

  const volumeDown = (event) => {
    if (audioEl.volume > 0) audioEl.volume -= 0.1
  }

  const handleDuration = (len, cur) => {
    const duration = len / 100
    setTimeout(() => {
      console.log(duration)
    }, 1000);
  }

  console.log(setAudios, setRanAudios, setLength, length)

  return (
    <div className="wrapper-sound">
      {isActive && <Icon icon={soundOff} style={{ fontSize: '36px' }} onClick={stopMusic} />}
      <Icon icon={soundOn} style={{ fontSize: '36px' }} onClick={reload} />
      {isActive && <Icon icon={soundUp} style={{ fontSize: '36px' }} onClick={volumeUp} />}
      {isActive && <Icon icon={soundDown} style={{ fontSize: '36px' }} onClick={volumeDown} />}
      {isActive && <Icon icon={randomIcon} style={{ fontSize: '36px' }} onClick={reload} />}
      {isActive && <input type="text" name="title" id="title" readOnly value={srcAudio} />}
      {// isActive && <span style={{width: `${length}%`}} />}
      }{isActive && (
        <audio ref={(el) => (audioEl = el)} src={`${path}${srcAudio}`} onEnded={reload} />
      )}
    </div>
  )
}

export default Audio
