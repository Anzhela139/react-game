import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import beeFlower from '@iconify/icons-mdi/bee-flower';
import snailIcon from '@iconify/icons-mdi/snail';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImg: (this.props.font === 'cross') ? false: true,
        }
    }

    generateTiles = (size) => {
        let allTiles = [];
        for (let i = 0; i < size*size; i++) {
            allTiles.push('tile not-played');
        }
        return allTiles;
    } 

    handleClick = (event) => {
        const { handleScore, endgame } = this.props;
        let tile = event.target;
        if (tile.classList.length === 2) {
            this.play(tile);
        }

        let allTiles = document.querySelectorAll('.not-played');
        if (allTiles.length < 1) {
            handleScore('tiles');
            endgame(true);
            this.reset();
        }
    }

    tileInner = (font, tile, bee, snail, player) => {
        if (player === 'player1') {
            return bee;
        } else {
            return snail;
        }
    }

    play = (tile) => {
        const { player1, player2, turn, handleScore, endgame, font, size } = this.props;
        tile.classList.remove('not-played');
        console.log(font);
        const bee = <Icon icon={beeFlower} style={{color: '#161616', fontSize: '42px'}} />;
        const snail = <Icon icon={snailIcon} style={{color: '#161616', fontSize: '42px'}} />;

        if (player1) {
            tile.innerHTML = (font === 'cross') ? 'X' : '';
            tile.insertAdjacentHTML('beforeEnd', bee);
            turn('player1', false, 'player2', true);
            if (this.diagonal('X', size) || this.dimension('X', 'row', size) || this.dimension('X', 'column', size)) {
                handleScore('player1');
                endgame(true);
                this.reset();
            }
        }
        
        if (player2) {
            tile.innerHTML = 'O';
            turn('player2', false, 'player1', true);
            if (this.diagonal('O', size) || this.dimension('O', 'row', size) || this.dimension('O', 'column', size)) {
                handleScore('player2');
                endgame(true);
                this.reset();
            }
        }
    }

    diagonal = (play, size) => {
        let left = [];
        for(let i = 0; i < size; i++) {
            left.push(document.querySelector(`#tile${i*size+i}`).innerHTML)
        }
        let right = [];
        for(let i = 0; i < size; i++) {
            right.push(document.querySelector(`#tile${i*size-i+2}`).innerHTML)
        }
        left.forEach((el) => {
            if (el !== play) {
                return false
            }
            return true;
        })
        right.forEach((el) => {
            if (el !== play) {
                return false
            }
            return true;
        })
    }

    dimension = (play, dimension, size) => {
        let dimensionArr = [];
        let arr = [];
        for(let i = 0; i < (size*size) - 1; i++) {
            arr.push(document.querySelector(`#tile${i}`).innerHTML)
        }
        dimensionArr = arr.reduce((rows, key, index) => (index % size == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
        dimensionArr.forEach((el) => {
            el.forEach((item) => {
                if (item !== play) {
                    return false;
                }
                return true;
            })
        })
    }

    reset = () => {
        let allTiles = document.querySelectorAll('.tile');
        for (let i = 0; i < allTiles.length; i++) {
            allTiles[i].innerHTML = '';
            allTiles[i].classList.add('not-played');
        }
    }

    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    render() { 
        const size = this.props.size;
        return ( 
            <div className='board' style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, fr)`}}>
                {this.generateTiles(size).map((el, i) => {
                    return (
                        <div 
                        id={`tile${i}`}
                        key={i}
                        className={el}
                        onClick={this.handleClick}
                        > 
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Board;