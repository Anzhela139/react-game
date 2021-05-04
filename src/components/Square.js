import React from 'react'
import { useState } from 'react'

function Square(props) {
  const [active, setActive] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setActive(!active)
    props.onClick()
  }
  return (
    <button
      className={active ? 'tile active' : 'tile'}
      style={{ width: `${100 / props.size}%` }}
      onClick={(event) => handleClick(event)}
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
