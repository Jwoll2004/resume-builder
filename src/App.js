import React, { useRef, useState } from "react";
import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ShowGeneralInfo from "./components/ShowGeneralInfo";
import ShowEducationInfo from "./components/ShowEducationInfo";
import ShowExperienceInfo from "./components/ShowExperienceInfo";
import GeneralInfoCV from "./components/GeneralInfoCV";
import EducationInfoCV from "./components/EducationInfoCV";
import ExperienceInfoCV from "./components/ExperienceInfoCV";
import ProjectForm from "./components/ProjectForm";
import ShowProjectInfo from "./components/ShowProjectInfo";
import ProjectInfoCV from "./components/ProjectInfoCV";
import TechnicalSkillsForm from "./components/TechnicalSkillsForm";
import ShowTechnicalSkills from "./components/ShowTechnicalSkills";
import TechnicalSkillsCV from "./components/TechnicalSkillsCV";
import DownloadCV from "./components/DownloadCV";

const App = () => {
  // define states:
  const [generalInfo, setGeneralInfo] = useState("");
  const [generalEdit, setGeneralEdit] = useState(false);

  const [educationInfo, setEducationInfo] = useState([]);
  const [educationEdit, setEducationEdit] = useState(false);
  const [educationId, setEducationId] = useState(0);

  const [projectInfo, setProjectInfo] = useState([]);
  const [projectEdit, setProjectEdit] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const [experienceInfo, setExperienceInfo] = useState([]);
  const [experienceEdit, setExperienceEdit] = useState(false);
  const [experienceId, setExperienceId] = useState(0);

  const [technicalSkills, setTechnicalSkills] = useState("");
  const [technicalSkillsEdit, setTechnicalSkillsEdit] = useState(false);

  const editGeneralForm = () => {
    setGeneralEdit(!generalEdit);
  };

  const editEducationForm = (id) => {
    setEducationEdit(!educationEdit);
    setEducationId(id);
  };

  const editProjectForm = (id) => {
    setProjectEdit(!projectEdit);
    setProjectId(id);
  };

  const editExperienceForm = (id) => {
    setExperienceEdit(!experienceEdit);
    setExperienceId(id);
  };

  const editTechnicalSkillsForm = () => {
    setTechnicalSkillsEdit(!technicalSkillsEdit);
  };

  const deleteEntry = (obj) => {
    if (obj.type === "education") {
      if (educationEdit) {
        setEducationInfo(
          educationInfo.filter((element, index) => {
            if (index !== educationId) {
              return element;
            }
          })
        );
        setEducationEdit(false);
        setEducationId(null);
      }
    }

    if (obj.type === "project") {
      if (projectEdit) {
        setProjectInfo(
          projectInfo.filter((element, index) => {
            if (index !== projectId) {
              return element;
            }
          })
        );
        setProjectEdit(false);
        setProjectId(null);
      }
    }

    if (obj.type === "experience") {
      if (experienceEdit) {
        setExperienceInfo(
          experienceInfo.filter((element, index) => {
            if (index !== experienceId) {
              return element;
            }
          })
        );
        setExperienceEdit(false);
        setExperienceId(null);
      }
    }
  };

  const saveForm = (obj) => {
    if (obj.type === "general") {
      setGeneralInfo(obj);
      setGeneralEdit(false);
    } else if (obj.type === "education") {
      if (educationEdit) {
        const newEducation = educationInfo.map((element, index) => {
          if (index === educationId) {
            return obj;
          }
          return element;
        });
        setEducationInfo(newEducation);
        setEducationEdit(false);
        setEducationId(null);
      } else {
        setEducationInfo([...educationInfo, obj]);
        setEducationEdit(false);
        setEducationId(null);
      }
    } else if (obj.type === "project") {
      if (projectEdit) {
        const newProject = projectInfo.map((element, index) => {
          if (index === projectId) {
            return obj;
          }
          return element;
        });
        setProjectInfo(newProject);
        setProjectEdit(false);
        setProjectId(null);
      } else {
        setProjectInfo([...projectInfo, obj]);
        setProjectEdit(false);
        setProjectId(null);
      }
    } else if (obj.type === "experience") {
      if (experienceEdit) {
        const newExperience = experienceInfo.map((element, index) => {
          if (index === experienceId) {
            return obj;
          }
          return element;
        });
        setExperienceInfo(newExperience);
        setExperienceEdit(false);
        setExperienceId(null);
      } else {
        setExperienceInfo([...experienceInfo, obj]);
        setExperienceEdit(false);
        setExperienceId(null);
      }
    } else if (obj.type === "technicalSkills") {
      setTechnicalSkills(obj);
      setTechnicalSkillsEdit(false);
    } else {
      console.log("Invalid type");
    }
  };

  const resumeRef = useRef();

  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          <div className="general-form">
            <GeneralInfoForm
              generalInfo={generalInfo}
              isEditing={generalEdit}
              saveForm={saveForm}
            />

            {generalInfo != "" && (
              <div className="general-form-show form-show">
                <ShowGeneralInfo props={generalInfo} />

                <button onClick={editGeneralForm} className="edit-form">
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="education-form">
            <EducationForm
              educationInfo={educationInfo[educationId]}
              isEditing={educationEdit}
              saveForm={saveForm}
              deleteEntry={deleteEntry}
            />

            {educationInfo.length > 0 && (
              <div className="education-form-show form-show">
                <ShowEducationInfo
                  educationInfo={educationInfo}
                  editForm={editEducationForm}
                />
              </div>
            )}
          </div>

          <div className="project-form">
            <ProjectForm
              projectInfo={projectInfo[projectId]}
              isEditing={projectEdit}
              saveForm={saveForm}
              deleteEntry={deleteEntry}
            />

            {projectInfo.length > 0 && (
              <div className="project-form-show form-show">
                <div className="project-info">
                  <ShowProjectInfo
                    projectInfo={projectInfo}
                    editForm={editProjectForm}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="experience-form">
            <ExperienceForm
              experienceInfo={experienceInfo[experienceId]}
              isEditing={experienceEdit}
              saveForm={saveForm}
              deleteEntry={deleteEntry}
            />

            {experienceInfo.length > 0 && (
              <div className="experience-form-show form-show">
                <div className="experience-info">
                  <ShowExperienceInfo
                    experienceInfo={experienceInfo}
                    editForm={editExperienceForm}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="technical-skills-form">
            <TechnicalSkillsForm
              technicalSkills={technicalSkills}
              isEditing={technicalSkillsEdit}
              saveForm={saveForm}
            />

            {technicalSkills != "" && (
              <div className="technical-skills-form-show form-show">
                <ShowTechnicalSkills props={technicalSkills} />

                <button onClick={editTechnicalSkillsForm} className="edit-form">
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="resume-container" ref={resumeRef}>
        <div className="general-cv">
          {generalInfo != "" && <GeneralInfoCV props={generalInfo} />}
        </div>

        <div className="education-cv">
          {educationInfo.length > 0 && <p className="cv-title">Education</p>}
          <EducationInfoCV educationInfo={educationInfo} />
        </div>

        <div className="project-cv">
          {projectInfo.length > 0 && <p className="cv-title">Projects</p>}
          <ProjectInfoCV projectInfo={projectInfo} />
        </div>

        <div className="experience-cv">
          {experienceInfo.length > 0 && <p className="cv-title">Experience</p>}
          <ExperienceInfoCV experienceInfo={experienceInfo} />
        </div>

        <div className="technical-skills-cv">
          {technicalSkills != "" && (
            <p className="cv-title">Technical Skills</p>
          )}
          <TechnicalSkillsCV props={technicalSkills} />
        </div>
      </div>

      <DownloadCV contentRef={resumeRef} />
    </div>
  );
};

export default App;
