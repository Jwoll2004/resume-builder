import React from "react";
import uniqid from "uniqid";

const ProjectInfoCV = (props) => {
  const propsArray = [...props.projectInfo];
  const entry = propsArray.map((item) => {
    return (
      <ShowItem
        key={uniqid()}
        projectName={item.projectName}
        techStack={item.techStack}
        repoLink={item.repoLink}
        liveLink={item.liveLink}
        description={item.description}
      />
    );
  });
  return <>{entry}</>;
};

const ShowItem = (props) => {
  return (
    <div className="entry">
      <div className="cv-project">
        {Object.entries(props).map(([key, value]) => {
          if (
            key !== "description" &&
            key !== "liveLink" &&
            key !== "repoLink"
          ) {
            return (
              <p key={key} className={key}>
                {value}
              </p>
            );
          }
        })}
        <div className="project-links">
          <a href={props.repoLink} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
          |
          <a href={props.liveLink} target="_blank" rel="noreferrer">
            Live Preview
          </a>
        </div>
        <ul className="project-description cv-section-list">
          {props.description.map((point) => {
            return (
              <li key={uniqid()} className="description">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfoCV;
