import React from 'react'
import Board from './Board'
import { get, set } from './../utils'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      solution: false,
    }
  }

  solution() {}

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            size={this.props.size}
            handleWinner={this.props.handleWinner}
            font={this.props.font}
            isNew={this.props.isNew}
          />
        </div>
      </div>
    )
  }
}

export default Game
