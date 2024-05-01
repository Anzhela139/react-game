import React, { useState } from 'react'
import { get, set } from '../../utils'

function Login(props) {
  const [player1, setPlayer1] = useState(get('player1_23096') || 'Player1')
  const [player2, setPlayer2] = useState(get('player2_28096') || 'Player2')

  const handleChange = (event) => {
    let player = event.target.id
    if (player === 'player1') {
      setPlayer1(event.target.value)
      set('player1_23096', event.target.value)
    } else {
      setPlayer2(event.target.value)
      set('player2_28096', event.target.value)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    props.names(player1, player2)
    props.handleLogin()
  }

  return (
    <form>
      <div className="form-group">
        <label>
          Name player1
          <input type="name" id="player1" className="form-control" onChange={handleChange} />
        </label>
        <label>
          Name player1
          <input type="name" id="player2" className="form-control" onChange={handleChange} />
        </label>
        <button onClick={handleClick} className="btn btn-primary">
          submit
        </button>
      </div>
    </form>
  )
}

export default Login