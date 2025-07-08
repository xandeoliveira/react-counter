import React from 'react'

import './style.css'
import Increment from '../../assets/adicionar.png'
import Decrement from '../../assets/subtrair.png'
import { useState } from 'react'


function Counter () {
  const [counter, setCounter] = useState(0)

  function handleClick (value) {
    if (value < 0 && counter === 0)
      return

    setCounter(counter + value)
  }

  return (
    <main>
      <div className="counter">{counter}</div>

      <div className="control">
        <button className="decrement" onClick={() => handleClick(-1)}>
          <img src={Decrement} alt="decrementar" />
        </button>

        <button className="increment" onClick={() => handleClick(1)}>
          <img src={Increment} alt="incrementar" />
        </button>

      </div>
    </main>
  )
}

export default Counter