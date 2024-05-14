import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeMenu } from './../store/menuSlice.js'
import Timer from './Timer'
import Sound from './modals/Audio.js'

const Navbar = (props) => {
  const audio = useSelector(state => state.audio)
  const login = useSelector(state => state.login)
  const isCurrentlyPlaying = useSelector(state => state.isCurrentlyPlaying)
  const move = useSelector(state => state.move)
  const victory = useSelector(state => state.victory)
  const defeat = useSelector(state => state.defeat)
  const dispatch = useDispatch()

  const handleMenu = (event) => {
    event.preventDefault()

    dispatch(changeMenu('StartScreen'));
  }

  return (
    <div className="navbar">
      <div className="title">
        <h1 className='app-title'>Tic tac toe</h1>
        <button className="btn btn-secondary" onClick={handleMenu}>
          Menu
        </button>
        
      </div>
      {isCurrentlyPlaying.value && <div className="statistics">
        <h2>
          {login.value}: {move.value}
        </h2>
        <h2>Victories: {victory.value}</h2>
        <h2>Defeats: {defeat.value}</h2>
        <h2>
          <Timer />
        </h2>
      </div>}
    </div>
  )
}

export default Navbar