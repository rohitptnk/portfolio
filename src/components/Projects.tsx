import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Transformer Power Spectrum Denoising",
      description: "Developed a 12M-parameter Transformer 1D autoencoder in PyTorch to denoise CMB power spectra on 50k simulated samples.",
      tags: ["PyTorch", "Transformers", "MLflow"],
      links: { github: "https://github.com/rohitptnk/cosmoformer" }, 
    },
    {
      title: "Study Assistant",
      description: "Designed an agentic AI exam prep platform with dynamic scheduling, RAG-based Q&A, and performance analytics.",
      tags: ["LangGraph", "FastAPI", "React", "Azure"],
      links: { github: "https://github.com/rohitptnk/study-assistant" },
    },
    {
      title: "BERT Fine-Tuning for Emotion Classification",
      description: "Fine-tuned BERT-base on the dair-ai/emotion dataset and applied QLoRA to enhance computational efficiency.",
      tags: ["PyTorch", "Hugging Face"],
      links: { github: "https://github.com/rohitptnk/llm-finetuning-and-quantization" },
    },
    {
      title: "Kyojin AI",
      description: "Chatbot research assistant for document-based Q&A with RAG and source citations.",
      tags: ["LangChain", "FastAPI", "VectorDB"],
      links: { github: "https://github.com/rohitptnk/kyojin-ai", website: "https://www.kyojinai.co.in" },
    },
    {
      title: "Voice-to-Voice Translation Pipeline",
      description: "End-to-end speech translation pipeline using Whisper, Argos translate, and Bark TTS.",
      tags: ["Whisper", "TTS", "Hugging Face"],
      links: { github: "https://github.com/rohitptnk/v2v-translate" },
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
        <p className="section-subtitle">A showcase of my recent academic and personal work.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass-panel hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                )}
                {project.links.website && (
                  <a href={project.links.website} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
