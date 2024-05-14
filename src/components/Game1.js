import React from 'react'
import Square from './Square'
import { isEndgame } from './../utils'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { get } from '../utils'
const players = {
    CPU: {
        SYM: 0, // "O",
        NAME: "CPU",
    },
    HUMAN: {
        SYM: 1 || "X",
        NAME: "You",
    },
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


const Game = (props) => {
    const size = useSelector(state => state.size)
    const setEmptyBoard = (value) => {
        const boardArray = [...Array(size.value)].map(() => Array(size.value).fill(value))
        console.log(boardArray)
        return boardArray
    }
    const [stepNumber, setStepNumber] = useState(1)
    const [squares, setSquares] = useState(setEmptyBoard(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [board, setBoard] = useState(setEmptyBoard());
    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);

    const [ties, setTies] = useState(get('ties_24056') || 0)
    const [username1, setUsername1] = useState(get('player1_23096') || 'Player1')
    const [username2, setUsername2] = useState(get('player2_23096') || 'Player2')
    const [isNew, setIsNew] = useState(false)
    const [player1, setPlayer1] = useState(0)
    const [player2, setPlayer2] = useState(0)
    const [showMenu, setShowMenu] = useState(true)
    const [isLight, setIsLight] = useState(true)
    // const [size, setSize] = useState(3)
    const [font, setFont] = useState('cross')
    const [solution, setSolution] = useState(false)

    console.log('props.size', props.size)
    const handleNewGame = () => {
        setStepNumber(1)
        setSquares(setEmptyBoard(null))
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

    const handleWinner = (index, indexI, value) => {
        playFn(index, indexI)
        if (value === 'X') {
            setPlayer1(player1 + 1)
        } else if (value === 'O') {
            setPlayer2(player2 + 1)
        } else {
            setTies(ties + 1)
        }
    }

    const renderSquare = (i, size, index, indexI) => {
        return (
            <Square
                value={props.board[index][indexI]}
                size={size}
                onClick={() => handleWinner(index, indexI)}
                font={props.font}
                key={i}
            />
        )
    }

    const renderBoard = (size) => {
        const array = setEmptyBoard('')
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

    function playFn(arrayIndex, index) {
        if (isCPUNext) return;
        if (winner) return;
        board[arrayIndex][index] = players?.HUMAN?.SYM;
        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(true);
    }

    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            cPUPlay();
        }
    }, [isCPUNext]);

    function cPUPlay() {
        if (winner) return;
        sleep(1000);

        const cPUMove = getCPUTurn();

        board[cPUMove.arrayIndex][cPUMove.index] = players?.CPU?.SYM;

        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
    }

    function getCPUTurn() {
        const emptyIndexes = [];
        board.forEach((row, arrayIndex) => {
            row.forEach((cell, index) => {
                if (cell === "") {
                    emptyIndexes.push({ arrayIndex, index });
                }
            });
        });
        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        return emptyIndexes[randomIndex];
    }

    function checkWinner() {
        // check same row
        for (let index = 0; index < board.length; index++) {
            const row = board[index];
            if (row.every((cell) => cell === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (row.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            }
        }

        // check same column
        for (let i = 0; i < 3; i++) {
            const column = board.map((row) => row[i]);
            if (column.every((cell) => cell === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (column.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            }
        }

        // check same diagonal
        const diagonal1 = [board[0][0], board[1][1], board[2][2]];
        const diagonal2 = [board[0][2], board[1][1], board[2][0]];
        if (diagonal1.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal1.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (board.flat().every((cell) => cell !== "")) {
            setWinner("draw");
            return;
        } else {
            setWinner(null);
            return;
        }
    }

    function displayWinner() {
        if (winner === "draw") {
            return "It's a draw!";
        } else if (winner) {
            return `${winner} won!`;
        }
    }

    function displayTurn() {
        if (isCPUNext) {
            return "CPU's turn";
        } else {
            return "Your turn";
        }
    }

    function playAgainFn() {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner(null);
        setIsCPUNext(false);
    }

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <div>{!winner && displayTurn()}</div>
                    <div className="board">{renderBoard(props.size)}</div>
                    {winner && <h2>{displayWinner()}</h2>}
                    {winner && (
                        <button onClick={playAgainFn}>
                            Play Again
                        </button>
                    )}
                </div>
            </div>
        </>

    )
}

export default Game