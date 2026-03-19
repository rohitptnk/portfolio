import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="nav-logo text-gradient">RP.</span>
          <p className="footer-tagline">Building intelligent systems and exploring the universe of data.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/rohitptnk" target="_blank" rel="noreferrer" className="hover-lift">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rohit-patnaik-a705141b3" target="_blank" rel="noreferrer" className="hover-lift">
            <Linkedin size={24} />
          </a>
          <a href="mailto:rohitptnk03@gmail.com" className="hover-lift">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rohit Patnaik. All rights reserved.</p>
        <p className="footer-credit">Built with React & Vanilla CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
