
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML', level: '85%', color: 'bar-html', icon: '🔧' },
    { name: 'CSS', level: '60%', color: 'bar-css', icon: '🎨' },
    { name: 'JavaScript', level: '70%', color: 'bar-js', icon: '💻' },
    { name: 'React', level: '65%', color: 'bar-react', icon: '⚛️' },
    { name: 'bootstrap', level: '50%', color: 'bar-bootstrap', icon: '🎨' },
    { name: 'SASS', level: '50%', color: 'bar-SASS', icon: '🎨' },
    { name: 'NodeJS', level: '70%', color: 'bar-node', icon: ' 📦' },
    { name: 'Express', level: '50%', color: 'bar-express', icon: '⚛️' },
  ];

  return (
    <section id="skills" className="skills-section">
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Skills</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div
              className={`skill-item ${hoveredSkill === index ? 'hovered' : ''}`}
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-content">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div className={`bar ${skill.color}`}>
                    <div className="bar-fill" style={{ width: skill.level }}>
                      {skill.level}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;


