import React from 'react'

class Rules extends React.Component {
  state = {}
  render() {
    const { handleRules } = this.props
    return (
      <div className="wrapper-rules">
        <div className="screen">
          <blockquote>
            Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and
            Os/“X’y O’sies” (Ireland), is a paper-and-pencil game for two players, X and O, who take
            turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of
            their marks in a diagonal, horizontal, or vertical row is the winner.
          </blockquote>
          <cite>
            <strong>Wikipedia</strong>
          </cite>
        </div>
        <div className="fade" onClick={handleRules}></div>
      </div>
    )
  }
}

export default Rules
