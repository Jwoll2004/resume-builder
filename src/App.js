import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import ResumeGuide from "./components/ResumeGuide/ResumeGuide.js";
import CustomFormButtons from "./components/Forms/AddSection/CustomFormButtons.js";
import ShowCustomSection from "./components/Forms/AddSection/ShowCustomSection/ShowCustomSection.js";
import CustomSectionForm from "./components/Forms/AddSection/CustomSectionForm/CustomSectionForm.js";
import GeneralInfoForm from "./components/Forms/GeneralInfoForm/GeneralInfoForm.js";
import EducationForm from "./components/Forms/EducationForm/EducationForm.js";
import ExperienceForm from "./components/Forms/ExperienceForm/ExperienceForm.js";
import ShowGeneralInfo from "./components/Forms/GeneralInfoForm/ShowGeneralInfo.js";
import ShowEducationInfo from "./components/Forms/EducationForm/ShowEducationInfo.js";
import ShowExperienceInfo from "./components/Forms/ExperienceForm/ShowExperienceInfo.js";
import GeneralInfoCV from "./components/CvPreview/GeneralCV/GeneralInfoCV.js";
import EducationInfoCV from "./components/CvPreview/EducationCV/EducationInfoCV.js";
import ExperienceInfoCV from "./components/CvPreview/ExperienceCV/ExperienceInfoCV.js";
import ProjectForm from "./components/Forms/ProjectForm/ProjectForm.js";
import ShowProjectInfo from "./components/Forms/ProjectForm/ShowProjectInfo.js";
import ProjectInfoCV from "./components/CvPreview/ProjectCV/ProjectInfoCV.js";
import TechnicalSkillsForm from "./components/Forms/TechnicalSkillsForm/TechnicalSkillsForm.js";
import ShowTechnicalSkills from "./components/Forms/TechnicalSkillsForm/ShowTechnicalSkills.js";
import TechnicalSkillsCV from "./components/CvPreview/TechnicalCV/TechnicalSkillsCV.js";
import Footer from "./components/Footer/Footer.js";
import { useReactToPrint } from "react-to-print";

const App = () => {
  const initialGeneralInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    github: "https://github.com/johndoe",
    linkedIn: "https://linkedin.com/in/johndoe",
    type: "general",
  };

  const initialEducationInfo = [
    {
      school: "University of Example",
      degree: "Bachelor of Science",
      startDate: "Sep 2015",
      endDate: "May 2019",
      type: "education",
      grade: ["3.8", "CGPA"],
      city: "Example City",
      country: "Example Country",
    },

    {
      school: "Example School",
      degree: "High School Diploma",
      startDate: "Sep 2011",
      endDate: "May 2015",
      type: "education",
      grade: ["4.0", "GPA"],
      city: "Example City",
      country: "Example Country",
    },

    {
      school: "Example Institute",
      degree: "Certification",
      startDate: "Sep 2020",
      endDate: "Dec 2020",
      type: "education",
      grade: ["A+", "Grade"],
      city: "Example City",
      country: "Example Country",
    },
  ];

  const initialProjectInfo = [
    {
      projectName: "Project ABC",
      techStack: "React, Node.js, MongoDB",
      repoLink: "https://github.com/example/project-abc",
      liveLink: "https://example.com/project-abc",
      description: ["Developed a web application for XYZ purpose."],
      type: "project",
    },

    {
      projectName: "Project XYZ",
      techStack: "Python, Django",
      repoLink: "https://github.com/example/project-abc",
      liveLink: "https://example.com/project-abc",
      description: ["Developed a web application for ABC purpose."],
      type: "project",
    },

    {
      projectName: "Project 123",
      techStack: "JavaScript, Express",
      repoLink: "https://github.com/example/project-abc",
      liveLink: "https://example.com/project-abc",
      description: ["Developed a web application for DEF purpose."],
      type: "project",
    },
  ];

  const initialExperienceInfo = [
    {
      company: "Example Corp",
      position: "Software Engineer",
      startDate: "Jan 2020",
      endDate: "Present",
      responsibilities: "Developed and maintained applications.",
      type: "experience",
    },

    {
      company: "Example Inc",
      position: "Intern",
      startDate: "May 2019",
      endDate: "Aug 2019",
      responsibilities: "Assisted with development tasks.",
      type: "experience",
    },

    {
      company: "Example LLC",
      position: "Volunteer",
      startDate: "Sep 2019",
      endDate: "Dec 2019",
      responsibilities: "Helped with organizing events.",
      type: "experience",
    },
  ];

  const initialTechnicalSkills = {
    languages: "JavaScript, Python, Java, C++, HTML, CSS, SQL",
    toolsAndTechnologies:
      "React, Node.js, Git, Docker, MongoDB, Express, Django, Bootstrap, jQuery, RESTful APIs",
    coreSubjects:
      "Algorithms, Data Structures, Databases, Web Development, Software Engineering, Operating Systems, Computer Networks, Cybersecurity, Machine Learning",
    type: "technicalSkills",
  };

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [generalEdit, setGeneralEdit] = useState(false);

  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);
  const [educationEdit, setEducationEdit] = useState(false);
  const [educationId, setEducationId] = useState(0);

  const [projectInfo, setProjectInfo] = useState(initialProjectInfo);
  const [projectEdit, setProjectEdit] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const [experienceInfo, setExperienceInfo] = useState(initialExperienceInfo);
  const [experienceEdit, setExperienceEdit] = useState(false);
  const [experienceId, setExperienceId] = useState(0);

  const [technicalSkills, setTechnicalSkills] = useState(
    initialTechnicalSkills
  );
  const [technicalSkillsEdit, setTechnicalSkillsEdit] = useState(false);

  const middleSectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Custom sections are taken from dialog as objects and not arrays
  const [customSections, setCustomSections] = useState([]);
  const [customSectionEdit, setCustomSectionEdit] = useState({
    id: null,
    editing: false,
  });

  const handleAddSectionClick = () => {
    console.log(customSections.length);
    setCustomSections([
      ...customSections,
      {
        type: `customSection-${customSections.length}`,
        title: "",
        subsectionsWithHeading: [{ heading: "", items: [] }],
      },
    ]);
  };

  const editCustomSection = (id) => {
    setCustomSectionEdit({ id, editing: true });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (middleSectionRef.current) {
      observer.observe(middleSectionRef.current);
    }

    return () => {
      if (middleSectionRef.current) {
        observer.unobserve(middleSectionRef.current);
      }
    };
  }, []);

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
            return null;
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
            return null;
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
            return null;
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
    } else if (obj.type.startsWith("customSection")) {
      console.log("Saving custom section", obj);
      console.log("intial custom section", customSections);
      console.log("Custom section index", obj.type.split("-")[1]);

      const customSectionsCopy = [...customSections];
      customSectionsCopy[obj.type.split("-")[1]] = obj;

      setCustomSections(customSectionsCopy);
      setCustomSectionEdit({ id: null, editing: false });
    }
  };

  const [printMode, setPrintMode] = useState(false);
  const resumeContainerRef = useRef(null);


  const handlePrint = useReactToPrint({
    content: () => resumeContainerRef.current,
    documentTitle: `${generalInfo.name}'s Resume`,
    onBeforeGetContent: () => {
      setPrintMode(true);
      if (resumeContainerRef.current) {
        resumeContainerRef.current.style.width = "210mm";
        resumeContainerRef.current.style.height = "297mm";
        resumeContainerRef.current.style.padding = "5mm 5mm";
        resumeContainerRef.current.style.border = "none";
        resumeContainerRef.current.style.borderRadius = "0";
        resumeContainerRef.current.style.boxShadow = "none";

        // Update font sizes for print mode
        resumeContainerRef.current.style.setProperty(
          "--font-size-name",
          "48px"
        );
        resumeContainerRef.current.style.setProperty(
          "--font-size-heading",
          "20px"
        );
        resumeContainerRef.current.style.setProperty(
          "--font-size-content",
          "16px"
        );
      }
    },
    onAfterPrint: () => {
      setPrintMode(false);
      if (resumeContainerRef.current) {
        resumeContainerRef.current.style.width = "";
        resumeContainerRef.current.style.height = "";
        resumeContainerRef.current.style.padding = "";
        resumeContainerRef.current.style.border = "";
        resumeContainerRef.current.style.borderRadius = "";
        resumeContainerRef.current.style.boxShadow = "";

        // Reset font sizes after print mode
        resumeContainerRef.current.style.setProperty("--font-size-name", "");
        resumeContainerRef.current.style.setProperty("--font-size-heading", "");
        resumeContainerRef.current.style.setProperty("--font-size-content", "");
      }
    },
  });

  // const resumePreviewRef = useRef(null);
  const handleRecenterCV = () => {
    if (resumeContainerRef.current) {
      const yOffset = -10;
      const element = resumeContainerRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="App">
      <Header />

      <ResumeGuide />

      <div
        className={`middle-section ${animate ? "scroll-animation" : ""}`}
        ref={middleSectionRef}
      >
        <h1>Ready to Build Your Resume?</h1>
        <p>Let's get started and create a resume that stands out!</p>
      </div>

      <div className="container" id="resume-section">
        <div className="buttons">
          <button onClick={handlePrint} className="curve-button">
            Print
          </button>

          <button onClick={handleRecenterCV} className="curve-button">
            Recenter CV
          </button>
        </div>

        <div className="form-container">
          <CustomFormButtons addSection={handleAddSectionClick} />

          <div className="form">
            <div className="general-form">
              <GeneralInfoForm
                generalInfo={generalInfo}
                isEditing={generalEdit}
                saveForm={saveForm}
              />

              {generalInfo !== "" && (
                <div className="general-form-show form-show show-info">
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
              {/* renders technical skills form */}
              <TechnicalSkillsForm
                technicalSkills={technicalSkills}
                isEditing={technicalSkillsEdit}
                saveForm={saveForm}
              />

              {/* if technical skills has some data saved then it displays the data with an edit option below the form */}
              {technicalSkills !== "" && (
                <div className="technical-skills-form-show form-show show-info">
                  <ShowTechnicalSkills props={technicalSkills} />

                  <button
                    onClick={editTechnicalSkillsForm}
                    className="edit-form"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            {customSections.map((section, index) => (
              <div className="custom-form" key={index}>
                <CustomSectionForm
                  sectionData={section}
                  isEditing={
                    customSectionEdit.id === index && customSectionEdit.editing
                  }
                  saveForm={saveForm}
                />
                {section.subsectionsWithHeading &&
                  section.subsectionsWithHeading.length > 0 &&
                  section.subsectionsWithHeading.every(
                    (subsection) => subsection.items.length > 0
                  ) && (
                    <div className="custom-form-show form-show show-info">
                      <ShowCustomSection section={section} />

                      <button
                        onClick={() => editCustomSection(index)}
                        className="edit-form"
                      >
                        Edit
                      </button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        <div className="cv-preview">
          <div className="resume-wrapper">
            <div
              className={`resume-container ${printMode ? "print-mode" : ""}`}
              ref={resumeContainerRef}
            >
              <div className="general-cv cv-section">
                {generalInfo !== "" && <GeneralInfoCV props={generalInfo} />}
              </div>

              <div className="education-cv cv-section">
                {educationInfo.length > 0 && (
                  <p className="cv-title">Education</p>
                )}
                <EducationInfoCV educationInfo={educationInfo} />
              </div>

              <div className="project-cv cv-section">
                {projectInfo.length > 0 && <p className="cv-title">Projects</p>}
                <ProjectInfoCV projectInfo={projectInfo} />
              </div>

              <div className="experience-cv cv-section">
                {experienceInfo.length > 0 && (
                  <p className="cv-title">Experience</p>
                )}
                <ExperienceInfoCV experienceInfo={experienceInfo} />
              </div>

              <div className="technical-skills-cv cv-section">
                {technicalSkills !== "" && (
                  <p className="cv-title">Technical Skills</p>
                )}
                <TechnicalSkillsCV props={technicalSkills} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
