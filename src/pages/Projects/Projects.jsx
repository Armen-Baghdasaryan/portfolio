import React from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { projects } from "/src/projects-data";
import { Tooltip } from "antd";
import "./projects.scss";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects__wrapper">
      <p className="projects__type">{t("projects.projects")}</p>
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`project__card ${
            index % 2 === 1 ? "project__card--right" : ""
          }`}
        >
          <Tooltip title={t("projects.moreDetails")} color="blue">
            <div
              onClick={() => navigate(`${project.title}`, { state: project })}
              className={`card__item ${
                index % 2 === 1 ? "card__item--right" : ""
              }`}
            >
              <img src={project.logo} alt="logo" />
              {project.name}
            </div>
          </Tooltip>
        </div>
      ))}
      {/* <p className="projects__type">{t("projects.myProjects")}</p> */}
    </div>
  );
};

export default Projects;
