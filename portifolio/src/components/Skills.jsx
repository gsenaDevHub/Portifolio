import Dev from '../constants/Dev.json';
import { FaHtml5,FaReact,FaCss3Alt,FaNodeJs,FaPython,FaFigma  } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";



export function Skills() {
  return (
    <section className="skills" id="skills">
      
      <div className='card'>
        <div className='card-list'>
          <h2>Linguagens e Ferramentas</h2>
          <br />
          <div className='group-linguagens'>
            <div className='icone-linguagens'>
              <FaPython size={50}/>
              <p>Python</p>
              </div>
            <div className='icone-linguagens'>
              <IoLogoJavascript size={50}/>
              <p>JavaScript</p>
            </div>
            <div className='icone-linguagens'>
              <FaHtml5 size={50}/>
              <p>html</p>
            </div>
          </div>
          <div className='group-linguagens'>
            <div className='icone-linguagens'>
              <FaCss3Alt size={50}/>
              <p>Css</p>
            </div>
            <div className='icone-linguagens'>
              <PiMicrosoftExcelLogoFill size={50}/>
              <p>Microsoft Excel</p>
            </div>
            <div className='icone-linguagens'>
              <FaFigma size={50}/>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}