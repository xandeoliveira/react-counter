import React from 'react'

import './style.css'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'


function Footer () {
  return (
    <footer>
      <div className="social">
        <div className="github">
          <img src={Github} alt="GitHub" />
          <a href="https://github.com/xandeoliveira" target='_blank'>GitHub</a>
        </div>
        
        <div className="linkedin">
          <img src={Linkedin} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/alexandre-computacao/" target='_blank'>LinkedIn</a>
        </div>

        <div className="credits">
          Créditos
        </div>

      </div>
      
      <div className="date">
        Contador Simples: 2025 - {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer