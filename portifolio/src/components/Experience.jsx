import { FaHtml5,FaReact,FaCss3Alt,FaNodeJs,FaPython,FaFigma  } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import './Experience.css';



export function Experience() {
  return (
    <section className="experience" id="exp">
        <div className="conteiner">
            <div className="cardExperience">
            <h2>Experiência Profissional</h2>
            <br />
                <div className="cardExperience-item" >
                    <h3>Estágio de Suporte TI</h3>
                    <p>Empresa: <em>COMPANHIA DE HABITAÇÃO POPULAR DE CURITIBA - COHAB-CT</em></p>
                    <p>Período: <em>novembro 2025 - Presente</em></p>
                    <p>Responsabilidades: <em>Auxiliar no suporte a usuários, auxiliar a verificação de problemas nas impressoras,
                    auxiliar a montagem de equipamentose configurações para reuniões e demias atividade relacionadas a área.</em></p>
                </div>
                <div className="cardExperience-item">
                    <h3>Jovem Aprendiz Mecânico a Diesel</h3>
                    <p>Empresa: <em>Auto Viação São José </em></p>
                    <p>Período: <em>setembro 2025 - novembro 2025</em></p>
                    <p>Responsabilidades: <em>Apoiar na inspeção e manutenção preventiva e corretiva de motores,
                    auxiliar na troca de peças e na organização de ferramentas, participar de aulas teóricas e práticas para
                    desenvolver competências técnicas, registrar serviços realizados conforme orientação da empresa.</em></p>
                </div>
            </div>
        </div>
    </section>
  );
}