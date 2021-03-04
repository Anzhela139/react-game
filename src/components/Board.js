import React from 'react';

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

    play = (tile) => {
        const { player1, player2, turn, handleScore, endgame, font, size } = this.props;
        tile.classList.remove('not-played');

        if (player1) {
            tile.innerHTML = (font === 'cross') ? 'X' : '<span class="iconify" data-inline="false" data-icon="mdi:bee-flower" style="font-size: 56px;"></span>';
            let tileValue = (font === 'cross') ? 'X' : 'bee';
            turn('player1', false, 'player2', true);
            if (this.diagonal(tileValue, size) || this.dimension(tileValue, 'row', size) || this.dimension(tileValue, 'column', size)) {
                handleScore('player1');
                endgame(true);
                this.reset();
            }
        }
        
        if (player2) {
            tile.innerHTML = (font === 'cross') ? 'O' : '<span class="iconify" data-inline="false" data-icon="mdi:snail" style="font-size: 56px;"></span>';
            let tileValue = (font === 'cross') ? 'O' : 'snail';
            turn('player2', false, 'player1', true);
            if (this.diagonal(tileValue, size) || this.dimension(tileValue, 'row', size) || this.dimension(tileValue, 'column', size)) {
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
        //eslint-disable-next-line
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

    solution = (size) => {
        this.reset();
        for(let i = 0; i < size; i++) {
            setTimeout(() => {
                let tile = document.querySelector(`#tile${i}`);
                tile.innerHTML = '<span class="fadeIn">X</span>';
            }, 1000 * i);
        }
        let line = '<div class="line setIn"></div>';
        setTimeout(() => {
            document.querySelector('.board').insertAdjacentHTML('beforeend', line);
        }, 1000 * size);
    }

    render() { 
        const { size, solution } = this.props;
        if (solution) {
            setTimeout(() => {
                this.solution(size);
            }, 1200);
        }
        return ( 
            <div className='board' style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, fr)`}}>
                {this.generateTiles(size).map((el, i) => {
                    return (
                        <div 
                        id={`tile${i}`}
                        key={i}
                        className={el}
                        style={{height: `calc(50vh / ${size})`}}
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