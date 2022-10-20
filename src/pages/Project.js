import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectCompiler from "../components/ProjectCompiler";
import "../styles/Project.css";

function Menu() {
  return (
    <div className="project">
      <h1 className="projectTitle">My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, key) => {
          return (
            <ProjectCompiler
              name={project.name}
              language={project.language}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
