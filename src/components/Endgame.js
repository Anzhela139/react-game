import React from 'react';

class Endgame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tied: 'You guys tied',
            playerWin: `You win, ${this.props.winner}!!!`
        }
    }

    handleClick = () => {
         this.props.endgame(false);
    }
    
    handleFade = () => {
        const wrapper = document.querySelector('.wrapper-endgame');
        wrapper.classList.add('hidden');
    }

    render() { 
        const winner  = this.props.winner;
        const { tied, playerWin } = this.state;
        return (  
            <div className="wrapper-endgame">
                <div className="screen">
                    <p>{ winner === 'Tied' ? tied : playerWin }</p>
                    <button onClick={this.handleClick} className="btn btn-primary" >
                        Wanna try again?
                    </button>
                </div>
                <div className="fade" onClick={this.handleFade}></div>
            </div>
        );
    }
}
 
export default Endgame;