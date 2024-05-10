import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeMenu } from '../../store/menuSlice.js'

function Gameplay(props) {
    const dispatch = useDispatch()

    const handleSolution = (event) => {
        event.preventDefault()

        dispatch(changeMenu('Solution'));
    }

    const handleRules = (event) => {
        event.preventDefault()

        dispatch(changeMenu('Rules'));
    }

    const handleKeys = (event) => {
        event.preventDefault()

        dispatch(changeMenu('Keys'));
    }

    return (
        <div className="wrapper">
            <button className="btn btn-secondary" type='button' onClick={handleSolution}>
                Show solution
            </button>
            <button className="btn btn-secondary" type='button' onClick={handleRules}>
                Show rules
            </button>
            <button className="btn btn-secondary" type='button' onClick={handleKeys}>
                Show hotkeys
            </button>
        </div>
    )
}

export default Gameplay