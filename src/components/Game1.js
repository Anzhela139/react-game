import React from 'react'
import Square from './Square'
import { isEndgame } from './../utils'
import { useState, useEffect } from 'react'


const Game = (props) => {
    const [stepNumber, setStepNumber] = useState(1)
    const [squares, setSquares] = useState(Array(props.size * props.size).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const handleNewGame = () => {
        setStepNumber(1)
        setSquares(Array(props.size * props.size).fill(null))
        setXIsNext(true)
    }

    const handleSolution = () => {
        handleNewGame()
        const squaresC = squares.slice()
        for (let i = 0; i < props.size; i++) {
            squaresC[i] = 'X'
        }
        setSquares(squaresC)
    }

    const renderSquare = (i, size, index, indexI) => {
        return (
            <Square
                value={props.board[index][indexI]}
                size={size}
                onClick={() => props.handleWinner(index, indexI)}
                font={props.font}
                key={i}
            />
        )
    }

    const renderBoard = (size) => {
        const array = Array.from(Array(size), () => new Array(size).fill(''))
        console.log(array)
        let counter = -1
        return props.board.map((el, index) => {
            return (
                <div className="board-row" style={{ height: `${100 / props.size}%` }} key={index}>
                    {el.map((item, indexI) => {
                        counter++
                        return renderSquare(counter, size, index, indexI)
                    })}
                </div>
            )
        })
    }

    const getStatus = (arr, play) => {
        if (isEndgame(arr, play, props.size)) {
            props.handleWinner(xIsNext ? 'X' : 'O')
        } else if (stepNumber >= props.size * props.size) {
            props.handleWinner('Ties')
        }
    }
    useEffect(() => {
        handleNewGame()
        //eslint-disable-next-line
    }, [props.isNew])

    useEffect(() => {
        if (props.solution) handleSolution()
        //eslint-disable-next-line
    }, [props.solution])

    return (
        <div className="game">
            <div className="game-board">
                <div className="board">{renderBoard(props.size)}</div>
            </div>
        </div>
    )
}

export default Game