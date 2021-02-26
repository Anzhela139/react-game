import React from 'react';
import { useState, useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import soundOff from '@iconify/icons-akar-icons/sound-off';
import soundDown from '@iconify/icons-akar-icons/sound-down';
import soundOn from '@iconify/icons-akar-icons/sound-on';
import soundUp from '@iconify/icons-akar-icons/sound-up';
import { randomArr } from '../utils';

class Audio extends React.Component {
    constructor(props) {
        super(props);
    }

    randMusic = () => {
        const audios = ['BlindMemories-Cheel.mp3', 'BlindMemories-Cheel.mp3', 'Cattle-DelicateSteve.mp3', 'CircleDance-SefChol.mp3', 'DangerousToys-SefChol.mp3', 'Dolphin-esque-Godmode.mp3', 'EternalGarden-DanHenig.mp3', 'FastandRun-NicoStaf.mp3', 'FutureRennaisance-Godmode.mp3', 'Headphones-RKVC.mp3', 'KotoSan-Ofshane.mp3', 'Kurt-Cheel.mp3', 'LateNightTrain-VansInJapan.mp3', 'Lights-PatrickPatrikios.mp3', 'LikeThat-AnnoDominiBeats.mp3', 'Orient-SefChol.mp3', 'OuttaTime-RKVC.mp3', 'SunsetDream-Cheel.mp3', 'ThatOneBarScene-RKVC.mp3', 'WalkingIInTheSky-NicoStaf.mp3'];
        let ranAudio = audios[Math.floor(Math.random() * audios.length)];
        return `./assets/music/${ranAudio}`;
    }

    playMusic = (event) => {
        const audio = document.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
    }

    stopMusic = (event) => {
        const audio = document.querySelector('audio');
        audio.pause();
        audio.currentTime = 0;
    }

    volumeUp = (event) => {
        const audio = document.querySelector('audio');
        if (audio.volume < 1) audio.volume += 0.1;
    }

    volumeDown = (event) => {
        const audio = document.querySelector('audio');
        if (audio.volume > 0) audio.volume -= 0.1;
    }

    render() { 
        return ( 
            <div className="wrapper">
                <Icon icon={soundOff} style={{fontSize: '42px'}} onClick={this.stopMusic} />
                <Icon icon={soundOn} style={{fontSize: '42px'}} onClick={this.playMusic} />
                <Icon icon={soundUp} style={{fontSize: '42px'}} onClick={this.volumeUp} />
                <Icon icon={soundDown} style={{fontSize: '42px'}} onClick={this.volumeDown} />
                <audio src={this.randMusic()}></audio>
            </div>

         );
    }
}
 
export default Audio;