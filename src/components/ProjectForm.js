import React, { useState, useEffect } from "react";
import { InputBox } from "./InputBox";
import { FormButtons } from "./FormButtons";

const ProjectForm = (props) => {
  const [projectName, setProjectName] = useState("");
  const [techStack, setTechStack] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [description, setDescription] = useState([""]);

  const [type, setType] = useState("project");

  useEffect(() => {
    if (props.isEditing) {
      setProjectName(props.projectInfo.projectName);
      setTechStack(props.projectInfo.techStack);
      setRepoLink(props.projectInfo.repoLink);
      setLiveLink(props.projectInfo.liveLink);
      setDescription(props.projectInfo.description.join(". "));
    }
  }, [props.isEditing, props.projectInfo]);

  const isValidForm = () => {
    return (
      projectName.length > 0 &&
      techStack.length > 0 &&
      repoLink.length > 0 &&
      liveLink.length > 0 &&
      description.length > 0
    );
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    const projectInfo = {
      projectName: projectName,
      techStack: techStack,
      repoLink: repoLink,
      liveLink: liveLink,
      type: type,
      description: description.split(". ").filter((point) => point.length > 0),
    };
    props.saveForm(projectInfo);
    setProjectName("");
    setTechStack("");
    setRepoLink("");
    setLiveLink("");
    setDescription([""]);
  };

  return (
    <div className="form-group project-info">
      <div className="form-header">
        <div className="form-title">
          <h2>Project Info</h2>
        </div>
      </div>

      <form onSubmit={OnSubmit}>
        <InputBox
          labelFor="projectName"
          label="Project Name"
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <InputBox
          labelFor="techStack"
          label="Tech Stack"
          type="text"
          id="techStack"
          name="techStack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />

        <InputBox
          labelFor="repoLink"
          label="Repository Link"
          type="text"
          id="repoLink"
          name="repoLink"
          value={repoLink}
          onChange={(e) => setRepoLink(e.target.value)}
        />

        <InputBox
          labelFor="liveLink"
          label="Live Link"
          type="text"
          id="liveLink"
          name="liveLink"
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
        />

        <InputBox
          labelFor="description"
          label="Description"
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {props.isEditing && (
          <button
            type="button"
            onClick={() => {
              setProjectName("");
              setTechStack("");
              setRepoLink("");
              setLiveLink("");
              setDescription([""]);
              props.deleteEntry(props.projectInfo);
            }}
            className="delete-form"
          >
            Delete
          </button>
        )}
        <FormButtons isValidForm={isValidForm()} />
      </form>
    </div>
  );
};

export default ProjectForm;
