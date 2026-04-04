import Dev from '../constants/Dev.json';
import './Projects.css';
import { FaHtml5,FaReact,FaCss3Alt,FaNodeJs,FaPython,FaFigma  } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";



export function Project() {
  return (
    <section className="project" id="projects"> 
        {Dev.map((text, index) => (
        <div className="conteiner" key={index}>
          <h2>Projetos</h2>
          <div className='project-list'>
            <br />
            <div className='projectDiv'>
              <a href="https://alferi-reserva-hoteis.vercel.app" target='_black'>
                <img src="/img1.jpg" alt="" />
              </a>
              <p>{text.Projeto2}</p>
            </div>
            <br />
            <div className='projectDiv'>
              <a href="https://projeto-baga-o-malte.vercel.app" target='_black'>
                <img src="/img2.jpg" alt="" />
              </a>
              <p>{text.Projeto3}</p>
            </div>
          </div>
        </div>
        ))}
    </section>
  );
}