import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="pulse-dot"></span>
          Open to Opportunities
        </div>
        
        <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="text-gradient">Rohit Patnaik</span>
          <br />
          Physicist & AI Engineer
        </h1>
        
        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Master's in Physics with a Minor in Data Science from IISER Bhopal. 
          I build intelligent systems, leveraging state-of-the-art transformers and agentic workflows to solve complex problems.
        </p>
        
        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="mailto:rohitptnk03@gmail.com" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="glowing-orb"></div>
        <div className="glowing-orb orb-2"></div>
        <div className="profile-image-container hover-lift">
          <img 
            src="https://avatars.githubusercontent.com/u/123158686?v=4" 
            alt="Rohit Patnaik" 
            className="profile-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
