import { 
  SiPython, SiPytorch, SiHuggingface, SiFastapi, SiReact, 
  SiMysql, SiPostgresql, SiDocker
} from 'react-icons/si';
import { Blocks, BrainCircuit, Network, LineChart, Cloud, Server, PieChart, BarChart } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Hugging Face", icon: <SiHuggingface /> },
        { name: "LangChain", icon: <Network /> },
        { name: "MLflow", icon: <LineChart /> },
        { name: "Agentic AI (MCP)", icon: <BrainCircuit /> },
      ]
    },
    {
      title: "Engineering & Cloud",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "AWS EC2", icon: <Server /> },
        { name: "Azure", icon: <Cloud /> },
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Tableau", icon: <PieChart /> },
        { name: "Power BI", icon: <BarChart /> },
        { name: "SQL", icon: <Blocks /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <p className="section-subtitle">Core technologies and tools I work with.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category glass-panel hover-lift animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
