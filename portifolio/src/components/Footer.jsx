import { FaGithub,FaLinkedin,FaWhatsapp  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="card-footer">
        <a href="mailto:gabrielhmsena20@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <MdAlternateEmail size={40} className="iconStyle"/>
            <p style={{ fontSize: '2cap' }}>Gmail</p>
          </div>
        </a>
        <a href="https://github.com/gsenaDevHub" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <FaGithub size={40} className="iconStyle"/>
            <p style={{ fontSize: '2cap' }}>GitHub</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-henrique-985311294/" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <FaLinkedin size={40} className="iconStyle"/>
            <p style={{ fontSize: '2cap' }}>LinkedIn</p>
          </div>
        </a>
        <a href="https://wa.me/+554184666011?text=Olá,%20gostaria%20de%20mais%20informações" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <FaWhatsapp size={40} className="iconStyle"/>
            <p style={{ fontSize: '2cap' }}>WhatsApp</p>
          </div>
        </a>
      </div>
      <br />
      <p>&copy; 2026 My Portfolio. All rights reserved.</p>
    </footer>
  );
}