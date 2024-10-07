import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { t } from "i18next";
import "./project-detail.scss";

const ProjectDetail = () => {
  const location = useLocation();
  const project = location.state;

  return (
    <div className="detail__wrapper">
      <header className="detail__header">
        <Link to={"/projects"}>
          <ArrowLeftOutlined />
        </Link>

        <h3>{project.title}</h3>
        <p></p>
      </header>

      <main className="detail__body">
        <div className="detail__path">
          <img src={project.logo} alt={project.name} />
          <Link target="blank" to={project.path}>
            <p className="detail__path-text">{project.path}</p>
          </Link>
        </div>

        {/* {project.crmLink && (
          <p className="detail__path-text">
            <span>Link to CRM -</span>
            <Link target="blank" to={project.crmLink}>
              {project.crmLink}
            </Link>
          </p>
        )} */}

        <h4 className="detail__stack-header">
          Main Stack -
          {project.stack?.map((stack, index) => (
            <span key={index} className="project__stacks">
              {stack}
            </span>
          ))}
        </h4>
        <h4 className="detail__task-header">{t("projects.majorTasks")}</h4>

        <ul className="detail__tasks">
          {project.tasks?.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>

        {project.markupExmples && (
          <h4 className="detail__task-header">
            {t("projects.markupExamples")}
          </h4>
        )}

        <ul className="detail__tasks">
          {project.markupExmples?.map((example, index) => (
            <Link key={index} to={example} target="blank">
              <li>{example}</li>
            </Link>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProjectDetail;
