import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { get, set } from '../../utils'
import { mdiImageOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';


import { mdiWeatherNight } from '@mdi/js';

function StartScreen(props) {
    const isCurrentlyPlaying = useSelector(state => state.isCurrentlyPlaying)
    const isSavedGame = useSelector(state => state.isSavedGame)
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
        const modalsIsOpen = [showLogin, showRules, showKeys]
        if (showStartScreen) {
            setStartScreen(false)
        } else {

        }
        setShowLogin(!showLogin)
    }

    return (
        <div className="wrapper start-screen">
            <button className="btn btn-secondary" onClick={handleSave}>
                Gameplay
            </button>
            <button className="btn btn-secondary" onClick={props.handleNewGame}>
                Settings
            </button>
            {
                isCurrentlyPlaying.value &&
                <button className="btn btn-secondary" onClick={handleSave}>
                    Save current game
                </button>
            }

            <button className="btn btn-primary" onClick={props.handleNewGame}>
                Start new game
            </button>
            {
                isSavedGame.value &&
                <button className="btn btn-secondary" onClick={handleResume}>
                    Resume saved game
                </button>
            }
        </div>
    )
}

export default StartScreen