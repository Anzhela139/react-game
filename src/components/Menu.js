import React from 'react'
import { useState } from 'react'
import Rules from './Rules'
import Login from './Login'
import Keys from './Keys'
import { get, set } from '../utils'
import { Icon } from '@iconify/react'
import imageIcon from '@iconify/icons-akar-icons/image'
import bxUserCircle from '@iconify/icons-bx/bx-user-circle'
import bxMoon from '@iconify/icons-bx/bx-moon'
import bookExclamationMark24Regular from '@iconify/icons-fluent/book-exclamation-mark-24-regular'

const modalStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
}

const Menu = (props) => {
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

  if (props.showItself) {
    return (
      <div className="wrapper-menu" style={modalStyles}>
        <div className="screen">
          <div className="row_top">
            <select name="board-size" id="board-size" onChange={props.handleSize}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <div className="switch_toggle">
              <input
                id="switch_toggle"
                type="checkbox"
                name="toggle"
                className="switch_toggle-input"
                onChange={props.handleToggle}
              />
              <label
                id="switch_toggle-label"
                htmlFor="switch_toggle"
                style={
                  props.font === 'cross' ? { paddingRight: '1rem' } : { paddingRight: '3.5rem' }
                }
              >
                {props.font === 'cross' ? (
                  'X'
                ) : (
                  <Icon icon={imageIcon} style={{ color: '#f6f6f6', fontSize: '42px' }} />
                )}
              </label>
            </div>
            <Icon
              icon={bxMoon}
              style={{ color: '##161616', fontSize: '42px' }}
              onClick={props.handleTheme}
            />
            <Icon icon={bxUserCircle} style={{ fontSize: '56px' }} onClick={handleLogin} />
            <Icon
              icon={bookExclamationMark24Regular}
              style={{ fontSize: '42px' }}
              onClick={props.handleSolution}
            />
          </div>
          <div className="row_left">
          </div>
          <div className="row_right">
            <button className="btn btn-secondary" onClick={handleRules}>
              Rules
            </button>
            <button className="btn btn-secondary" onClick={handleKeys}>
              Keys
            </button>
          </div>
          <div className="row_bottom">
            <button className="btn btn-secondary" onClick={handleSave}>
              Save game
            </button>
            <button className="btn btn-secondary" onClick={props.handleNewGame}>
              New game
            </button>
            <button className="btn btn-secondary" onClick={handleResume}>
              Resume game
            </button>
          </div>
        </div>
        {showLogin ? <Login names={props.handleName} handleLogin={handleLogin} /> : null}
        {showRules ? <Rules handleRules={handleRules} /> : null}
        {showKeys ? <Keys handleKeys={handleKeys} /> : null}
        {showLogin || showRules || showKeys ? null : <div className="fade" onClick={props.handleMenu} />}
      </div>
    )
  } else {
    return null
  }
}

export default Menu
