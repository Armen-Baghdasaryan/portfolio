import { useEffect } from "react";
import { animationStart } from "./matter-animation.js";
import { t } from "i18next";
import "./matter-animation.scss";

const MatterAnimation = () => {
  useEffect(() => {
    animationStart();
  }, []);

  const skills = [
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "HTML",
    "CSS",
    "Vue",
    "Angular",
    "Next",
    "SASS",
    "TypeScript",
    "Tailwind",
    "Mongo DB",
    "Bootstrap",
    "ANTD",
    "MUI",
    "SCSS",
    "Node JS",
    "Express",
    "JavaScript",
    "Swagger",
    "Postman",
    "Rest",
    "React",
    "WebSocket",
    "Figma",
    "Jira",
    "YouTrack",
  ];

  return (
    <div className="matter-animation-wrapper">
      {skills.map((item, index) => {
        return (
          <div
            key={index}
            className={`animation-item ${
              item === "React" || item === "JavaScript" || item === "TypeScript"
                ? "item-selected"
                : item === "Express" ||
                  item === "Mongo DB" ||
                  item === "WebSocket"
                ? "item-selected-dark"
                : item === "Angular" || item === "Node JS" || item === "Vue"
                ? "item-selected-light"
                : ""
            }`}
          >
            <span>{item}</span>
          </div>
        );
      })}
      <p className="animaton-info"> {t("skills.move.items")} </p>
    </div>
  );
};

export default MatterAnimation;
