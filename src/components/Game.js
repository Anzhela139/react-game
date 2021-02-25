import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            player1: true,
            player2: false,
            check: true,
        }
    }

    handleTurn = ( firstPlayer, firstBoolean, secondPlayer, secondBoolean ) => {
        this.setState({
            [firstPlayer]: firstBoolean,
            [secondPlayer]: secondBoolean,
        })
    };

    render() { 
        const { player1, player2 } = this.state;
        const { username1, username2, endgame, theme, size, font } = this.props;
        return ( 
            <div className='game'>
                <p>It's { player1 ? username1 : username2 }'s turn</p>
                <Board 
                    turn={this.handleTurn}
                    player1={player1}
                    player2={player2}
                    handleScore={this.props.handleScore}
                    endgame={endgame}
                    theme={theme}
                    size={size}
                    font={font}
                /> 
            </div>
         );
    }
}
 
export default Game;