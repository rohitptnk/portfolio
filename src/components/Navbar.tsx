import { Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel animate-fade-in-up" style={{ animationDelay: '0s' }}>
      <div className="nav-content">
        <a href="#home" className="nav-logo text-gradient">RP.</a>
        
        <ul className="nav-links">
          <li><a href="#skills" className="hover-lift">Skills</a></li>
          <li><a href="#experience" className="hover-lift">Experience</a></li>
          <li><a href="#projects" className="hover-lift">Projects</a></li>
        </ul>
        
        <div className="nav-socials">
          <a href="https://github.com/rohitptnk" target="_blank" rel="noreferrer" className="hover-lift">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rohit-patnaik-a705141b3" target="_blank" rel="noreferrer" className="hover-lift">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rohitptnk03@gmail.com" className="hover-lift">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
