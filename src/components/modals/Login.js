import React, { useState } from 'react'
import { get, set } from '../../utils'

function Login(props) {
  // const [player1, setPlayer1] = useState(get('player1_23096') || 'Player1')
  // const [player2, setPlayer2] = useState(get('player2_28096') || 'Player2')

  const handleChange = (event) => {
    let player = event.target.id
    // if (player === 'player1') {
    //   setPlayer1(event.target.value)
    //   set('player1_23096', event.target.value)
    // } else {
    //   setPlayer2(event.target.value)
    //   set('player2_28096', event.target.value)
    // }
  }

  const hanleMultiPlayer = (event) => {
    event.preventDefault()
  }

  const handleClick = (event) => {
    event.preventDefault()
    // props.names(player1, player2)
    // props.handleLogin()
  }

  return (
    <form>
      <div className="form-group">
        <md-outlined-text-field label="Name 1" placeholder="player1" onChange={handleChange}>
        </md-outlined-text-field>
        <label>
          Multi-person game mode
          <md-switch onInput="hanleMultiPlayer"></md-switch>
        </label>
        <md-outlined-text-field label="Name 2" placeholder="player1" onChange={handleChange}>
        </md-outlined-text-field>
        <button onClick={handleClick} className="btn btn-primary" type='button'>
          Start new game
        </button>
      </div>
    </form>
  )
}

export default Login