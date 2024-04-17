import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Game from './components/Game1'
import Menu from './components/Menu'
import Footer from './components/Footer'
import SvgBG from './components/SvgBG'
import { get } from './utils'
import './App.css'

const SizeContext = React.createContext({})

const App = () => {
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
    if (event.target) {
      setSize(Number(event.target.value))
    } else {
      setSize(event)
    }
  }

  const handleTheme = () => {
    setIsLight(!isLight)
  }

  const handleNewGame = () => {
    setIsNew(!isNew)
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
            username1={username1}
            username2={username2}
            size={size}
            font={font}
          />
        ) : null}
        <Navbar
          ties={ties}
          username1={username1}
          username2={username2}
          player1={player1}
          player2={player2}
          handleMenu={handleMenu}
        />
        <Game
          size={size}
          font={font}
          solution={solution}
          handleWinner={handleWinner}
          isNew={isNew}
        />
        <Footer theme={isLight} />
      </div>
    </SizeContext.Provider>
  )
}

export default App