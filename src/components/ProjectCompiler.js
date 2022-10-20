import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectList({ name, language, link }) {
  return (
    <div className="projectCompiler">
      <h1>{name}</h1>
      <p>{language.join(", ")}</p>
      <a target="_blank" href={link}>
        <GitHubIcon className="icon" />
      </a>
    </div>
  );
}

export default ProjectList;
