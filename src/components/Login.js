import React from 'react';
import { get, set } from '../utils'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            player1: get('player1_23096') || '',
            player2: get('player2_28096') || '',
        }
    }

    handleChange = (event) => {
        let player = event.target.id;
        this.setState({[ player ]: event.target.value});
        if (player === 'player1') {
            set('player1_23096', event.target.value);
        } else {
            set('player2_28096', event.target.value);
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        const { player1, player2 } = this.state;
        this.props.names(player1, player2);
    }

    handleSubmit = (event) => {
        const { player1, player2 } = this.state;
        this.props.names(player1, player2); 
        let player = event.target.id;
        this.setState({[ player ]: event.target.value});
        if (player = 'player1') {
            set('player1_23096', event.target.value);
        } else {
            set('player2_23096', event.target.value);
        }
        event.preventDefault();
    }

    handleFade = () => {
        const wrapper = document.querySelector('.wrapper-login');
        wrapper.classList.add('hidden');
    }

    render() { 
        return (
            <div className="wrapper-login">
                <div className='screen'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                Name player1
                                <input type="text" name="player1" id="player1" className="form-control" onChange={this.handleChange} />    
                            </label>
                            
                            <label>
                                Name player1
                                <input type="text" name="player2" id="player2" className="form-control" onChange={this.handleChange} />
                            </label>
                            <button onClick={this.handleClick} className="btn btn-primary" >submit</button>
                        </div>
                    </form>
                </div>
                <div className="fade" onClick={this.handleFade}></div>
            </div>
        );
    }
}
 
export default Login;