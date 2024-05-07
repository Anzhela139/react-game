import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Game from './components/Game1'
import Menu from './components/Menu'
import Footer from './components/Footer'
import SvgBG from './components/SvgBG'
import { get } from './utils'

const players = {
  CPU: {
      SYM: "O",
      NAME: "CPU",
  },
  HUMAN: {
      SYM: "X",
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
const SizeContext = React.createContext({})

function App() {
  // const [board, setBoard] = useState(Array(9).fill(""));
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
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
  const [size, setSize] = useState(3)
  const [font, setFont] = useState('cross')
  const [solution, setSolution] = useState(false)

  const handleName = (player1, player2) => {
    setUsername1(player1)
    setUsername2(player2)
  }

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleToggle = () => {
    setFont(font === 'cross' ? 'img' : 'cross')
  }

  const handleSolution = () => {
    setSolution(!solution)
  }

  const handleSize = (event) => {
    setSize((event.target ? Number(event.target.value) : event))
  }

  const handleTheme = () => {
    setIsLight(!isLight)
  }

  const handleNewGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
    setIsCPUNext(false);
  }

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

  const handleWinner = (value) => {
    if (value === 'X') {
      setPlayer1(player1 + 1)
    } else if (value === 'O') {
      setPlayer2(player2 + 1)
    } else {
      setTies(ties + 1)
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

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsLight(false)
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setIsLight(!event.matches)
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyM') {
        event.stopImmediatePropagation()
        handleMenu()
      } else if (event.code === 'Digit3') {
        handleSize(3)
      } else if (event.code === 'Digit4') {
        handleSize(4)
      } else if (event.code === 'Digit5') {
        handleSize(5)
      } else if (event.code === 'Digit6') {
        handleSize(6)
      } else if (event.code === 'KeyC') {
        event.stopImmediatePropagation()
        handleToggle()
      } else if (event.code === 'KeyT') {
        event.stopImmediatePropagation()
        handleTheme()
      }
    })
    return document.addEventListener('keydown', (event) => {
      console.log(event)
    })
    //eslint-disable-next-line
  }, [])

  return (
    <SizeContext.Provider value={size}>
      <div className={isLight ? 'App light-theme' : 'App dark-theme'}>
        <div className="svg_background">
          <SvgBG />
        </div>
        {showMenu ? (
          <Menu
            showItself={showMenu}
            handleMenu={handleMenu}
            handleName={handleName}
            handleToggle={handleToggle}
            handleSize={handleSize}
            handleTheme={handleTheme}
            handleNewGame={handleNewGame}
            handleSolution={handleSolution}
          />
        ) : null}
        <Navbar
          handleMenu={handleMenu}
        />
        <Game
          size={size}
          font={font}
          solution={solution}
          handleWinner={playFn}
          board={board}
          isNew={isNew}
        />
        <Footer theme={isLight} />
      </div>
      <div>
      <div>{!winner && displayTurn()}</div>
      <div >
        <div >
          <span onClick={() => playFn(0, 0)} >
            {board[0][0]}
          </span>
          <span onClick={() => playFn(0, 1)} >
            {board[0][1]}
          </span>
          <span onClick={() => playFn(0, 2)} >
            {board[0][2]}
          </span>
        </div>
        <div >
          <span onClick={() => playFn(1, 0)} >
            {board[1][0]}
          </span>
          <span onClick={() => playFn(1, 1)} >
            {board[1][1]}
          </span>
          <span onClick={() => playFn(1, 2)}>
            {board[1][2]}
          </span>
        </div>
        <div >
          <span onClick={() => playFn(2, 0)} >
            {board[2][0]}
          </span>
          <span onClick={() => playFn(2, 1)} >
            {board[2][1]}
          </span>
          <span onClick={() => playFn(2, 2)} >
            {board[2][2]}
          </span>
        </div>
      </div>
      {winner && <h2>{displayWinner()}</h2>}
      {winner && (
        <button  onClick={playAgainFn}>
          Play Again
        </button>
      )}
    </div>
    </SizeContext.Provider>
  )
}

export default App