import React from 'react';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>Проектов не найдено</p>;
  }

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.img} alt={`Project ${index + 1}`} />
          <div className="project-category">{project.category}</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;