import Dev from '../constants/Dev.json';
import { FaHtml5,FaReact,FaCss3Alt,FaNodeJs,FaPython,FaFigma  } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";



export function Project() {
  return (
    <section className="project" id="project"> 
        {Dev.map((text, index) => (
        <div className="card" key={index}>
          <div className='card-list'>
            <h2>Projetos</h2>
            <br />
            <p>{text.Projeto2} <br /> <a href="https://alferi-reserva-hoteis.vercel.app" target='_black'>Clique para Acessar o Site</a></p>
            <br />
            <p>{text.Projeto3} <br /> <a href="https://projeto-baga-o-malte.vercel.app" target='_black'>Clique para Acessar o Site</a></p>
            <br />
          </div>
        </div>
        ))}
    </section>
  );
}