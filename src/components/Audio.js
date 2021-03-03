import React from 'react';
import { Icon } from '@iconify/react';
import soundOff from '@iconify/icons-akar-icons/sound-off';
import soundDown from '@iconify/icons-akar-icons/sound-down';
import soundOn from '@iconify/icons-akar-icons/sound-on';
import soundUp from '@iconify/icons-akar-icons/sound-up';
import randomIcon from '@iconify/icons-fe/random';
import { randomArr } from '../utils';
const audios = ['BlindMemories-Cheel.mp3', 'BlindMemories-Cheel.mp3', 'Cattle-DelicateSteve.mp3', 'CircleDance-SefChol.mp3', 'DangerousToys-SefChol.mp3', 'Dolphin-esque-Godmode.mp3', 'EternalGarden-DanHenig.mp3', 'FastandRun-NicoStaf.mp3', 'FutureRennaisance-Godmode.mp3', 'Headphones-RKVC.mp3', 'KotoSan-Ofshane.mp3', 'Kurt-Cheel.mp3', 'LateNightTrain-VansInJapan.mp3', 'Lights-PatrickPatrikios.mp3', 'LikeThat-AnnoDominiBeats.mp3', 'Orient-SefChol.mp3', 'OuttaTime-RKVC.mp3', 'SunsetDream-Cheel.mp3', 'ThatOneBarScene-RKVC.mp3', 'WalkingIInTheSky-NicoStaf.mp3'];

class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            currI: 0,
            audios: ['BlindMemories-Cheel.mp3', 'BlindMemories-Cheel.mp3', 'Cattle-DelicateSteve.mp3', 'CircleDance-SefChol.mp3', 'DangerousToys-SefChol.mp3', 'Dolphin-esque-Godmode.mp3', 'EternalGarden-DanHenig.mp3', 'FastandRun-NicoStaf.mp3', 'FutureRennaisance-Godmode.mp3', 'Headphones-RKVC.mp3', 'KotoSan-Ofshane.mp3', 'Kurt-Cheel.mp3', 'LateNightTrain-VansInJapan.mp3', 'Lights-PatrickPatrikios.mp3', 'LikeThat-AnnoDominiBeats.mp3', 'Orient-SefChol.mp3', 'OuttaTime-RKVC.mp3', 'SunsetDream-Cheel.mp3', 'ThatOneBarScene-RKVC.mp3', 'WalkingIInTheSky-NicoStaf.mp3'],
            ranAudios: randomArr(audios),
        }
    }

    getMusic = () => {
        let ranAudio = this.state.ranAudios[this.state.currI];
        return `./assets/music/${ranAudio}`;
    }

    randMusic = () => {
        let ranAudio = this.state.ranAudios[this.state.currI];
        this.setState({
            currI: this.state.currI + 1,
        })
        setTimeout(() => {
            this.playMusic()
        }, 1200);
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
                <Icon icon={randomIcon} style={{fontSize: '42px'}} onClick={this.randMusic} />
                <audio src={this.getMusic()}></audio>
            </div>

         );
    }
}
 
export default Audio;