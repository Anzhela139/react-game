import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import soundOff from '@iconify/icons-akar-icons/sound-off'
import soundDown from '@iconify/icons-akar-icons/sound-down'
import soundOn from '@iconify/icons-akar-icons/sound-on'
import soundUp from '@iconify/icons-akar-icons/sound-up'
import randomIcon from '@iconify/icons-fe/random'
import { randomArr } from '../utils'
const audios = [
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
]

const Audio = () => {
  const [ currI, setCurrI ] = useState(0)
  const [audios, setAudios ] = useState([
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

  const getMusic = () => {
    let ranAudio = ranAudios[currI]
    return `./assets/music/${ranAudio}`
  }

  const randMusic = () => {
    let ranAudio = ranAudios[currI]
    setCurrI(currI + 1)
    setTimeout(() => {
      playMusic()
    }, 1200)
    return `./assets/music/${ranAudio}`
  }

  const playMusic = (event) => {
    const audio = document.querySelector('audio')
    audio.currentTime = 0
    audio.play()
  }

  const stopMusic = (event) => {
    const audio = document.querySelector('audio')
    audio.pause()
    audio.currentTime = 0
  }

  const volumeUp = (event) => {
    const audio = document.querySelector('audio')
    if (audio.volume < 1) audio.volume += 0.1
  }

  const volumeDown = (event) => {
    const audio = document.querySelector('audio')
    if (audio.volume > 0) audio.volume -= 0.1
  }

    return (
      <div className="wrapper">
        <Icon icon={soundOff} style={{ fontSize: '42px' }} onClick={stopMusic} />
        <Icon icon={soundOn} style={{ fontSize: '42px' }} onClick={playMusic} />
        <Icon icon={soundUp} style={{ fontSize: '42px' }} onClick={volumeUp} />
        <Icon icon={soundDown} style={{ fontSize: '42px' }} onClick={volumeDown} />
        <Icon icon={randomIcon} style={{ fontSize: '42px' }} onClick={randMusic} />
        <audio src={getMusic()}></audio>
      </div>
    )
}

export default Audio
