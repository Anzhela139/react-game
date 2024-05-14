import React from 'react'
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWeatherNight } from '@mdi/js';
import { mdiWeatherSunny } from '@mdi/js';
import { mdiVolumeMedium } from '@mdi/js';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeSize } from '../../store/sizeSlice.js'
import { changeSymbol } from '../../store/symbolSlice.js'
import { changeMode } from '../../store/modeSlice.js'
import { changeMenu } from '../../store/menuSlice.js'

function Settings() {
    const symbol = useSelector(state => state.symbol)
    const mode = useSelector(state => state.mode)
    const dispatch = useDispatch()
    const handleLogin = (event) => {
        event.preventDefault()

        dispatch(changeMenu('Login'));
    }

    const handleSize = (event) => {
        event.preventDefault()
        const size = parseInt(event.target?.value)
        console.log(size)
        dispatch(changeSize(size));
    }

    const handleSymbol = (event) => {
        event.preventDefault()
        const isCross = event.target?.checked

        dispatch(changeSymbol(isCross ? 'cross' : 'img'));
        console.log(isCross, symbol.value)
    }

    const handleMode = (event) => {
        event.preventDefault()

        dispatch(changeMode());
    }

    const handleAudio = (event) => {
        event.preventDefault()

        dispatch(changeMenu('Audio'));
    }

    return (
        <div className="wrapper wrapper-settings">
            <div className='settings-card card-size'>
                <md-outlined-select onInput={handleSize} label='Select board size'>
                    <md-select-option selected value="3">
                        <div slot="headline">3</div>
                    </md-select-option>
                    <md-select-option value="4">
                        <div slot="headline">4</div>
                    </md-select-option>
                    <md-select-option value="5">
                        <div slot="headline">5</div>
                    </md-select-option>
                    <md-select-option value="6">
                        <div slot="headline">6</div>
                    </md-select-option>
                </md-outlined-select>
            </div>
            <div className='settings-card card-symbol'>
                <label>
                    <div className='settings-label'>Toggle crosses or icons</div>
                    <md-switch onInput={handleSymbol} icons></md-switch>
                </label>
            </div>
            <div className='settings-card card-mode'>
                <div className='settings-label'>Toggle mode</div>
                {mode.value === 'light' && <Icon path={mdiWeatherNight} size={2} onClick={handleMode} />}
                {mode.value === 'dark' && <Icon path={mdiWeatherSunny} size={2} onClick={handleMode} />}
            </div>
            <div onClick={handleAudio} className='settings-card card-audio'>
                <label>
                    <div className='settings-label'>Toggle audio</div>
                    <Icon path={mdiVolumeMedium} size={2} />
                </label>
            </div>
            <div onClick={handleLogin} className='settings-card card-login'>
                <div className='settings-label'>Login</div>
                <Icon path={mdiAccountCircleOutline} size={2} />
            </div>
        </div>
    )
}

export default Settings