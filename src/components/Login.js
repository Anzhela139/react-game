import React from 'react';
import { get, set } from '../utils';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            player1: get('player1_23096') || '',
            player2: get('player2_28096') || '',
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        let player = event.target.id;
        console.log(event)
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

    render() { 
        const handleLogin = this.props.handleLogin;
        return (
            <div className="wrapper-login">
                <div className='screen'>
                    <form>
                        <div className="form-group">
                            <label>
                                Name player1
                                <input type="name" id="player1" className="form-control" onChange={this.handleChange} />    
                            </label>
                            <label>
                                Name player1
                                <input type="name" id="player2" className="form-control" onChange={this.handleChange} />
                            </label>
                            <button onClick={this.handleClick} className="btn btn-primary">submit</button>
                        </div>
                    </form>
                </div>
                <div className="fade" onClick={handleLogin}></div>
            </div>
        );
    }
}
 
export default Login;