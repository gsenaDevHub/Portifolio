import { FaHtml5,FaReact,FaCss3Alt,FaGitAlt ,FaPython,FaFigma  } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import './Skills.css';

const number = 50;

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className='conteiner'>
        <h2>Linguagens e Ferramentas</h2>
          <div className='skils-linguagens'>
            <article>
              <FaPython size={number} color="white" className="icons-linguagens"/>
              <p>Python</p>
            </article>
        </div>
          <div className='skils-linguagens'>
            <article>
              <IoLogoJavascript size={number} color="white" className="icons-linguagens"/>
              <p>JavaScript</p>
            </article>
          </div>
          <div className='skils-linguagens'>
            <article>
              <FaHtml5 size={number} color="white" className="icons-linguagens"/>
              <p>html</p>
            </article>
          </div>
          <div className='skils-linguagens'>
            <article>
              <FaGitAlt size={number} color="white" className="icons-linguagens"/>
              <p>Git</p>
            </article>
          </div>
          <div className='skils-linguagens'>
            <article>
              <FaCss3Alt size={number} color="white" className="icons-linguagens"/>
              <p>Css</p>
            </article>
          </div>
          <div className='skils-linguagens'>
            <article>
              <PiMicrosoftExcelLogoFill size={number} color="white" className="icons-linguagens"/>
              <p>Microsoft Excel</p>
            </article>
          </div>
          <div className='skils-linguagens'>
            <article>
              <FaFigma size={number} color="white" className="icons-linguagens"/>
              <p>Figma</p>
            </article>
          </div>
          <div className='skils-linguagens'>
            <article>
              <FaReact size={number} color="white" className="icons-linguagens"/>
              <p>React</p>
            </article>
          </div>
        </div>
    </section>
  );
}