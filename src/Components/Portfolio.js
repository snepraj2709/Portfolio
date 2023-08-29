import { NavLink } from "react-router-dom";

const Portfolio = ({ data }) => {
  const projects = data.projects.map(function (project) {
    return (
      <div key={project.title} className="card">
        <div className="card-content">
          <h1>{project.title}</h1>
          <div className="image-container">
            <img
              title={project.title}
              alt={project.title}
              src={project.img}
              className="portfolio-image"
            />
          </div>
          <i>{project.description}</i>
          <div className="project-links">
            <NavLink to={project.url} className="link-button">
              <i className="fa fa-link"></i> Link
            </NavLink>
            <NavLink to={project.gitHub} className="code-button">
              <i className="fa fa-code"></i> Code
            </NavLink>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="work">
      <div className="portfolio-container">
        <span>My Projects</span>
        <div className="projects-container">{projects}</div>
      </div>
    </section>
  );
};

export default Portfolio;
