import Dev from '../constants/Dev.json';
import './Contatc.css';

export function Contatc() {
  return (
    <section className="contact" id="contact">
      <div className="conteiner">
        <div className="cardContact">
          <img src="/ft_sobre.webp" alt="Profile"/>
          <div className="card-identity">
            <h2>Sobre Mim</h2>
            <h3>Gabriel Henrique de Matos Sena </h3>
            <p>
              Sou estudante de Engenharia de Software com experiência em <strong>Python</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>HTML</strong> e <strong>CSS</strong>, além de conhecimentos em Excel e <strong>Figma</strong>. Participei 
              de projetos acadêmicos e pessoais voltados para desenvolvimento web. 
              Proativo e comunicativo, acredito que tecnologia é uma ferramenta para 
              transformar ideias em soluções reais. Tenho interesse em aprofundar meus 
              conhecimentos em front-end e metodologias ágeis, e busco oportunidades 
              que me permitam crescer profissionalmente enquanto contribuo para projetos 
              inovadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}    
