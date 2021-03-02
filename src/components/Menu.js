import React from 'react';
import Rules from './Rules';
import Audio from './Audio';
import Keys from './Keys';
import { get, set } from '../utils'
import { Icon } from '@iconify/react';
import imageIcon from '@iconify/icons-akar-icons/image';
import bxUserCircle from '@iconify/icons-bx/bx-user-circle';

const modalStyles = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': '100vh',
    'width': '100%',
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showItself: this.props.showItself,
            showLogin: false,
            showRules: false,
            showKeys: false,
         }
    }

    handleRules = (event) => {
        event.preventDefault();
        this.setState({
            showRules: !this.state.showRules,
        })
    }

    handleKeys = (event) => {
        event.preventDefault();
        this.setState({
            showKeys: !this.state.showKeys,
        })
    }

    handleSave = () => {
        const { font, size, username1, username2 } = this.props;
        let moves = [];
        let allTiles = document.querySelectorAll('.tile');
        for (let i = 0; i < allTiles.length; i++) {
            moves.push(allTiles[i].innerHTML);
        }
        let game = [font, size, username1, username2, moves];
        set('game_230455', game);
    }

    handleNew = (event) => {
        event.preventDefault();
        let allTiles = document.querySelectorAll('.tile');
        for (let i = 0; i < allTiles.length; i++) {
            allTiles[i].innerHTML = '';
            allTiles[i].classList.add('not-played');
        }
    }

    handleResume = () => {
        const { handleToggle, handleSize, handleName } = this.props;
        let game = get('game_230455');
        console.log(game[4][0][0])
        handleToggle(game[0]);
        handleSize(game[1]);
        handleName(game[2]);
        handleName(game[3]);
        let allTiles = document.querySelectorAll('.tile');
        for (let i = 0; i < allTiles.length; i++) {
            allTiles[i].innerHTML = game[4][0][i];
            if (allTiles[i].innerHTML === '') allTiles[i].classList.add('not-played');
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.setState({
            showLogin: !this.state.showLogin,
        })
    }

    handleChange = (event) => {
        this.setState({size: Number(event.target.value)});
    }

    render() { 
        const { handleMenu, handleToggle, handleLogin, handleSize, font, sound } = this.props;
        if (this.state.showItself) {
            return ( 
                <div className="wrapper-menu" style={modalStyles}>
                    <div className="screen">
                        <div className="row_top">
                            <select name="board-size" id="board-size" onChange={handleSize}>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <div className="switch_toggle">
                                <input id='switch_toggle' type="checkbox" name="toggle" className="switch_toggle-input" onChange={handleToggle} />
                                <label id='switch_toggle-label' htmlFor="switch_toggle" style={(font === 'cross') ? {paddingRight: '1rem'} : {paddingRight: '3.5rem'}}>{(font === 'cross') ? 'X' : <Icon icon={imageIcon} style={{color: '#f6f6f6', fontSize: '42px'}} />}</label>
                            </div>
                            <Icon icon={bxUserCircle} style={{fontSize: '56px'}} onClick={handleLogin} />
                        </div>
                        <div className="row_left">
                            <Audio sound={sound} />
                        </div>
                        <div className="row_right">
                            <button className='btn btn-secondary' onClick={this.handleRules}>Rules</button>
                            <button className='btn btn-secondary' onClick={this.handleKeys}>Keys</button>
                        </div>
                        <div className="row_bottom">
                            <button className='btn btn-secondary' onClick={this.handleSave}>Save game</button>
                            <button className='btn btn-secondary' onClick={this.handleNew}>New game</button>
                            <button className='btn btn-secondary' onClick={this.handleResume}>Resume game</button>
                        </div>
                    </div>
                    {this.state.showRules ? <Rules handleRules={this.handleRules} /> : null}
                    {this.state.showKeys ? <Keys handleKeys={this.handleKeys} /> : null}
                    <div className="fade" onClick={handleMenu}></div>
                </div>
             );
        } else {
            return null;
        }
        }
}
 
export default Menu;