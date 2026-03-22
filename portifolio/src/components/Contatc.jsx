import Dev from '../constants/Dev.json';

export function Contatc() {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="image">
              <img src="/ft_sobre.webp" alt="Profile" size={20}/>
        </div>
        <div className="cardContact">
        {Dev.map((text, index) => (
          <div key={index}>
            
            <div className="card-identity">
              <h2>Sobre Mim</h2>
              <h3>Gabriel Henrique de Matos Sena </h3><br />
              <p>
                Estudante de Engenharia de Software com experiência em Python, 
                JavaScript, Node.js, React, HTML e CSS, e conhecimentos em Excel. 
                Proativo e comunicativo, busco aprendizado constante e aplico minhas.
                Procuro oportunidades para crescer profissionalmente, contribuindo com soluções 
                criativas e eficientes em tecnologia.
              </p>
            </div>
            <div className='card-education'>
              <ul style={{ color:"white", padding: 0 }}>
                <li><p>{text.CursoGraduação}</p></li>
                <li><p>{text.CursoTec}</p></li>
                <li><p>{text.CursoExtra}</p></li>
                <li><p>{text.CursoExtra2}</p></li>
                <li><p>{text.CursoExtra3}</p></li>
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}    
