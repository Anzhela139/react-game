import React from 'react';
import { Icon } from '@iconify/react';
import bxMoon from '@iconify/icons-bx/bx-moon'; 
import bookExclamationMark24Regular from '@iconify/icons-fluent/book-exclamation-mark-24-regular';

class Navbar extends React.Component {
    render() { 
        const { player1, player2, ties, username1, username2, handleTheme, handleMenu, handleSolution } = this.props;
        return (
            <div className={this.props.theme ? 'navbar light-theme' : 'navbar dark-theme'}>
                <div className="title">
                    <h1>Tic tac toe</h1>
                    <button className='btn btn-secondary' onClick={handleMenu}>Menu</button>
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
                    <Icon icon={bookExclamationMark24Regular} style={{fontSize: '42px'}} onClick={handleSolution} />
                </div>
            </div>
        );
    }
}
 
export default Navbar;