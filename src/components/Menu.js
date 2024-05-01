import React from 'react'
import { useState } from 'react'
import Rules from './modals/Rules'
import Login from './modals/Login'
import Keys from './modals/Keys'
import Base from './modals/base'
import StartScreen from './modals/startScreen'
import Gameplay from './modals/Gameplay'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { get, set } from '../utils'
import { mdiImageOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';


import { mdiWeatherNight } from '@mdi/js';

const Menu = (props) => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    console.log(menu)
    const [showStartScreen, setStartScreen] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showRules, setShowRules] = useState(false)
    const [showKeys, setShowKeys] = useState(false)

    const handleRules = (event) => {
        event.preventDefault()
        setShowRules(!showRules)
    }

    const handleKeys = (event) => {
        event.preventDefault()
        setShowKeys(!showKeys)
    }

    const handleSave = () => {
        const { font, size, username1, username2 } = props
        let moves = []
        let allTiles = document.querySelectorAll('.tile')
        for (let i = 0; i < allTiles.length; i++) {
            moves.push(allTiles[i].innerHTML)
        }
        let game = [font, size, username1, username2, moves]
        set('game_230455', game)
    }

    const handleResume = () => {
        const { handleToggle, handleSize, handleName } = props
        let game = get('game_230455')
        console.log(game[4][0][0])
        handleToggle(game[0])
        handleSize(game[1])
        handleName(game[2])
        handleName(game[3])
        let allTiles = document.querySelectorAll('.tile')
        for (let i = 0; i < allTiles.length; i++) {
            allTiles[i].innerHTML = game[4][0][i]
            if (allTiles[i].innerHTML === '') allTiles[i].classList.add('not-played')
        }
    }

    const handleLogin = (event) => {
        event.preventDefault()
        setShowLogin(!showLogin)
    }

    const handleClose = (event) => {
        event.preventDefault()
        if (menu.value === 'StartScreen') {

        } else {

        }
    }

    if (props.showItself) {
        return (
            <Base handleClose={handleClose} content={
                <>
                    {menu.value === 'StartScreen' ? <StartScreen /> : null}
                    {menu.value === 'Gameplay' ? <Gameplay /> : null}
                    {menu.value === 'Login' ? <Login names={props.handleName} handleLogin={handleLogin} /> : null}
                    {menu.value === 'Rules' ? <Rules handleRules={handleRules} /> : null}
                    {menu.value === 'Keys' ? <Keys handleKeys={handleKeys} /> : null}
                </>
            }>
            </Base>
        )
    } else {
        return null
    }
}

export default Menu