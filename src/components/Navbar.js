import React from 'react';
import Menu from './Menu';
import { Icon, InlineIcon } from '@iconify/react';
import bxMoon from '@iconify/icons-bx/bx-moon';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canShow: false
        }
    }

    handleMenu = (event) => {
        event.preventDefault();
        this.setState({
            canShow: !this.state.canShow
        })
        console.log(this.state)
    }

    render() { 
        const { player1, player2, ties, username1, username2, handleTheme, handleToggle, handleSize, font } = this.props;
        return (
            <div className={this.props.theme ? 'navbar light-theme' : 'navbar dark-theme'}>
                <div className="title">
                    <h1>Tic tac toe</h1>
                    <button className='btn btn-secondary' onClick={this.handleMenu}>Menu</button>
                    <Icon icon={bxMoon} style={{color: '##161616', fontSize: '42px'}} onClick={handleTheme} />
                </div>
                <div className="statistics">
                    <h2>
                        {username1}:{player1}
                    </h2>
                    <h2>
                        {username2}:{player2}
                    </h2>
                    <h2>Ties: {ties}</h2>
                </div>
                <Menu canShow={this.state} handleMenu={this.handleMenu} handleToggle={handleToggle} handleSize={handleSize} font={font} />
            </div>
        );
    }
}
 
export default Navbar;