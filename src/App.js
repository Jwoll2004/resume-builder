import React from "react";
import { useState } from "react";
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


const App = () => {
  // define states:
  const [GeneralInfo, setGeneralInfo] = useState("");
  const [GeneralEdit, setGeneralEdit] = useState(false);

  const [EducationInfo, setEducationInfo] = useState([]);
  const [EducationEdit, setEducationEdit] = useState(false);
  const [EducationId, setEducationId] = useState(0);

  const [ProjectInfo, setProjectInfo] = useState([]);
  const [projectEdit, setProjectEdit] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const [ExperienceInfo, setExperienceInfo] = useState([]);
  const [experienceEdit, setExperienceEdit] = useState(false);
  const [experienceId, setExperienceId] = useState(0);

  const editGeneralForm = () => {
    setGeneralEdit(!GeneralEdit);
  };

  const editEducationForm = (id) => {
    setEducationEdit(!EducationEdit);
    setEducationId(id);
  };

  const editProjectForm = (id) => {
    setProjectEdit(!projectEdit);
    setProjectId(id);
  }

  const editExperienceForm = (id) => {
    setExperienceEdit(!experienceEdit);
    setExperienceId(id);
  };

  const saveForm = (obj) => {
    if (obj.type === "general") {
      setGeneralInfo(obj);
      setGeneralEdit(false);
    } 
    
    else if (obj.type === "education") {
      if (EducationEdit) {
        const newEducation = EducationInfo.map((element, index) => {
          if (index === EducationId) {
            return obj;
          }
          return element;
        });
        setEducationInfo(newEducation);
        setEducationEdit(false);
        setEducationId(null);
      } 
      else {
        setEducationInfo([...EducationInfo, obj]);
        setEducationEdit(false);
        setEducationId(null);
      }
    }
    
    else if (obj.type === "project") {
      if (projectEdit) {
        const newProject = ProjectInfo.map((element, index) => {
          if (index === projectId) {
            return obj;
          }
          return element;
        });
        setProjectInfo(newProject);
        setProjectEdit(false);
        setProjectId(null);
      }
      else {
        setProjectInfo([...ProjectInfo, obj]);
        setProjectEdit(false);
        setProjectId(null);
      }
    }
    
    else if (obj.type === "experience") {
      if (experienceEdit) {
        const newExperience = ExperienceInfo.map((element, index) => {
          if (index === experienceId) {
            return obj;
          }
          return element;
        });
        setExperienceInfo(newExperience);
        setExperienceEdit(false);
        setExperienceId(null);
      } 
      else {
        setExperienceInfo([...ExperienceInfo, obj]);
        setExperienceEdit(false);
        setExperienceId(null);
      }
    } 
    else {
      console.log("Invalid type");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          <div className="general-form">
            <GeneralInfoForm
              GeneralInfo={GeneralInfo}
              isEditing={GeneralEdit}
              saveForm={saveForm}
            />

            {GeneralInfo != "" && (
              <div className="general-form-show form-show">
                <ShowGeneralInfo 
                  props={GeneralInfo}
                />

                <button onClick={editGeneralForm} className="edit-form">
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="education-form">
            <EducationForm
              EducationInfo={EducationInfo[EducationId]}
              isEditing={EducationEdit}
              saveForm={saveForm}
            />

            {EducationInfo.length > 0 && (
              <div className="education-form-show form-show">
                <ShowEducationInfo
                  EducationInfo={EducationInfo}
                  editForm={editEducationForm}
                />
              </div>
            )}
          </div>

          <div className="project-form">
            <ProjectForm
              ProjectInfo={ProjectInfo[projectId]}
              isEditing={projectEdit}
              saveForm={saveForm}
            />

            {ProjectInfo.length > 0 && (
              <div className="project-form-show form-show">
                <div className="project-info">
                  <ShowProjectInfo
                    ProjectInfo={ProjectInfo}
                    editForm={editProjectForm}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="experience-form">
            <ExperienceForm
              ExperienceInfo={ExperienceInfo[experienceId]}
              isEditing={experienceEdit}
              saveForm={saveForm}
            />

            {ExperienceInfo.length > 0 && (
              <div className="experience-form-show form-show">
                <div className="experience-info">
                  <ShowExperienceInfo
                    ExperienceInfo={ExperienceInfo}
                    editForm={editExperienceForm}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="resume-container">
        <div className="resume">
          <div className="general-cv">
            {GeneralInfo != "" && <GeneralInfoCV props={GeneralInfo} />}
          </div>

          <div className="education-cv">
            {EducationInfo.length > 0 && <p className="cv-title">Education</p>}
            <EducationInfoCV EducationInfo={EducationInfo} />
          </div>

          <div className="project-cv">
            {ProjectInfo.length > 0 && (
              <p className="cv-title">Projects</p>
            )}
            <ProjectInfoCV ProjectInfo={ProjectInfo} />
          </div>

          <div className="experience-cv">
            {ExperienceInfo.length > 0 && (
              <p className="cv-title">Experience</p>
            )}
            <ExperienceInfoCV ExperienceInfo={ExperienceInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
