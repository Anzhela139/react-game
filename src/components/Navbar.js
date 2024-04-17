import React from 'react'
import Timer from './Timer'
import Audio from './Audio'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Tic tac toe</h1>
        <button className="btn btn-secondary" onClick={props.handleMenu}>
          Menu
        </button>
        <Audio sound={props.sound} />
      </div>
      <div className="statistics">
        <h2>
          {props.username1}:{props.player1}
        </h2>
        <h2>
          {props.username2}:{props.player2}
        </h2>
        <h2>Ties: {props.ties}</h2>
        <h2>
          <Timer />
        </h2>
      </div>
    </div>
  )
}

export default Navbar