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

/*
<a href="https://www.flaticon.com/br/icones-gratis/menos" title="menos ícones">Menos ícones criados por Alfredo Hernandez - Flaticon</a>
<a href="https://www.flaticon.com/br/icones-gratis/google-plus" title="google plus ícones">Google plus ícones criados por Smashicons - Flaticon</a>
*/

export default Counter