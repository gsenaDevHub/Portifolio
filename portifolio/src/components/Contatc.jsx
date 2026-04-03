import Dev from '../constants/Dev.json';

export function Contatc() {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="image">
              <img src="/ft_sobre.webp" alt="Profile" size={20}/>
        </div>
        <div className="cardContact">            
            <div className="card-identity">
              <h2>Sobre Mim</h2>
              <h3>Gabriel Henrique de Matos Sena </h3>
              <p>
                Sou estudante de Engenharia de Software com experiência em Python, 
                JavaScript, React, HTML e CSS, além de conhecimentos em Excel e <strong>Figma</strong>. Participei 
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
    </div>
  );
}    
