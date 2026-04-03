
import './Header.css';
import { useState, useEffect, useRef } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNearSection, setIsNearSection] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearSection(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isNearSection) {
        setIsVisible(true);
      } else {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNearSection]);

  // Fecha o menu quando clica em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`header ${isVisible ? 'visible' : 'hidden'}`}
      >
        <div className="header-content">
          {/* Botão hambúrguer para mobile */}
          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navegação */}
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><u className="text_sublinhado"><a href="#contact" onClick={handleLinkClick}>Sobre</a></u></li>
              <li><u className='text_sublinhado'><a href="#education" onClick={handleLinkClick}>Competência</a></u></li>
              <li><u className="text_sublinhado"><a href="#skills" onClick={handleLinkClick}>Habilidades</a></u></li>
              <li><u className="text_sublinhado"><a href="#projects" onClick={handleLinkClick}>Projetos</a></u></li>
              <li><u className="text_sublinhado"><a href="#exp" onClick={handleLinkClick}>Experiência</a></u></li>
              <li><u className="text_sublinhado"><a href="#footer" onClick={handleLinkClick}>Contato</a></u></li>
            </ul>
          </nav>
        </div>
      </header>
  </>
  );
}