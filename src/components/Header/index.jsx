import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header () {
  return (
    <header>
      <Link to="/" >
        <h1>Contador Simples</h1>
      </Link>
    </header>
  )
}

export default Header