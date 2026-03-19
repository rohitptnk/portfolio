import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "ThinkDataX",
      period: "Feb 2026 – Mar 2026",
      description: "Built multi-image conditioned generation systems & fine-tuned SDXL. Developed an agentic analytics system for financial datasets interacting with natural language."
    },
    {
      title: "AI/ML Intern",
      company: "Vaanee AI",
      period: "Apr 2025 – Oct 2025",
      description: "Built Voice-to-Voice Translation pipelines using ASR, Translation, and TTS models. Developed LangChain pipelines for multilingual translation."
    },
    {
      title: "Financial Analyst Intern",
      company: "Simplex Corporate Advisory",
      period: "Dec 2024",
      description: "Analyzed financial data applying data-driven methods for stock analysis, risk assessment, and tax compliance."
    }
  ];

  const education = [
    {
      degree: "Integrated M.S. in Physics, Minor in Data Science",
      institution: "IISER Bhopal, MP",
      period: "Aug 2021 – Apr 2026",
      details: "CPI: 8.03. Relevant Coursework: ML, DL, Advanced NLP, Calculus, Linear Algebra."
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-column glass-panel">
          <h3 className="timeline-header"><Briefcase className="icon-gradient" size={24} /> Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item hover-lift">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{exp.period}</span>
                  <h4 className="timeline-title">{exp.title}</h4>
                  <span className="timeline-company">{exp.company}</span>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-column glass-panel">
          <h3 className="timeline-header"><GraduationCap className="icon-gradient" size={24} /> Education</h3>
          <div className="timeline">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item hover-lift">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{edu.period}</span>
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <span className="timeline-company">{edu.institution}</span>
                  <p className="timeline-desc">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
