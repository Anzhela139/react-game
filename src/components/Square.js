import React from 'react'
import { useState } from 'react'

function Square(props) {
  const [active, setActive] = useState(false)

  const activeStyles = {
    boxShadow: '0px 0px 6px 3px rgba(97,218,251,.75)',
    backgroundColor: 'rgba(97, 218, 251, .75)',
    width: `${100 / props.size}%`,
    transition: '.3s easy-in-out',
  }

  const handleClick = (event) => {
    event.preventDefault()
    setActive(true)
    props.onClick()
  }

  const styleReturn = () => {
    setActive(false)
  }

  return (
    <button
      className={active ? 'tile active' : 'tile'}
      style={active ? activeStyles : { width: `${100 / props.size}%` }}
      onClick={(event) => handleClick(event)}
      onTransitionEnd={styleReturn}
    >
      {props.font === 'cross' ? (
        props.value
      ) : props.value === 'X' ? (
        <span
          className="iconify"
          data-inline="false"
          data-icon="mdi:bee-flower"
          style={{ fontSize: '56px' }}
        ></span>
      ) : props.value === 'O' ? (
        <span
          className="iconify"
          data-inline="false"
          data-icon="mdi:snail"
          style={{ fontSize: '56px' }}
        ></span>
      ) : null}
    </button>
  )
}

export default Square