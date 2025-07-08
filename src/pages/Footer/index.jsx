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

      </div>
      
      <div className="date">
        Contador Simples: 2025 - {new Date().getFullYear()}
      </div>
    </footer>
  )
}
// creditos
/* <a href="https://www.flaticon.com/br/icones-gratis/numeros" title="números ícones">Números ícones criados por Freepik - Flaticon</a> */
/* <a href="https://www.flaticon.com/br/icones-gratis/linkedin" title="linkedin ícones">Linkedin ícones criados por riajulislam - Flaticon</a> */
/* <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por riajulislam - Flaticon</a> */
export default Footer