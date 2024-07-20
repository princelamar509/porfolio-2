

import React, { useState } from 'react';

import './Projects.css';


const Projects = () => {
  const allProjects = [
    {
      title: 'Project One',
      description: 'This is a description for project one. It showcases my skills in React and CSS.',
      link: 'https://github.com/yourusername/project-one',
      category: 'React'
    },
    {
      title: 'Project Two',
      description: 'This is a description for project two. It focuses on front-end development using JavaScript and HTML.',
      link: 'https://github.com/yourusername/project-two',
      category: 'JavaScript'
    },
    {
      title: 'Project Three',
      description: 'This is a description for project three. It showcases my skills in Angular and TypeScript.',
      link: 'https://github.com/yourusername/project-three',
      category: 'HTML/CSS'
    },
    {
      title: 'Project Four',
      description: 'This is a description for project three. It showcases my skills in Angular and TypeScript.',
      link: 'https://github.com/yourusername/project-three',
      category: 'HTML/CSS'
    },
    // Add more projects as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const categories = ['All', 'React', 'JavaScript', 'HTML/CSS' ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects">
        <h2>My Projects</h2>
        <div className="filter-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
