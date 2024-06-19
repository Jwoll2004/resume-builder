import React from 'react';
import { useState } from 'react';
import './App.css';
import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import ShowGeneralInfo from './components/ShowGeneralInfo';
import ShowEducationInfo from './components/ShowEducationInfo';
import ShowExperienceInfo from './components/ShowExperienceInfo';

const App = () => {
  // define states:
  const [GeneralInfo, setGeneralInfo] = useState('');
  const [GeneralEdit, setGeneralEdit] = useState(false);

  const [EducationInfo, setEducationInfo] = useState([]);
  const [EducationEdit, setEducationEdit] = useState(false);
  const [EducationId, setEducationId] = useState(0);

  const [ExperienceInfo, setExperienceInfo] = useState([]);
  const [experienceEdit, setExperienceEdit] = useState(false);
  const [experienceId, setExperienceId] = useState(0);

  const saveForm = (obj) => {
    if(obj.type === 'general'){
      setGeneralInfo(obj);
      setGeneralEdit(false);
    }

    else if(obj.type === 'education'){
      if(EducationEdit){
        const newEducation = EducationInfo.map((item) => {
          if(item.id === obj.id){
            return obj;
          }
          return item;
        });
        setEducationInfo(newEducation);
        setEducationEdit(false);
      }
      else{
        setEducationInfo([...EducationInfo, obj]);
      }
    }

    else if(obj.type === 'experience'){
      if(experienceEdit){
        const newExperience = ExperienceInfo.map((item) => {
          if(item.id === obj.id){
            return obj;
          }
          return item;
        });
        setExperienceInfo(newExperience);
        setExperienceEdit(false);
      }
      else{
        setExperienceInfo([...ExperienceInfo, obj]);
      }
    }

    else{
      console.log('Invalid type');
    }
  }

  const editGeneralForm = () => {
    setGeneralEdit(!GeneralEdit);
  }

  const editEducationForm = (id) => {
    setEducationEdit(!EducationEdit);
    setEducationId(id);
  }

  const editExperienceForm = (id) => {
    setExperienceEdit(!experienceEdit);
    setExperienceId(id);
  }



  return (
    <div className="container">
      <div className="form">

        <div className="general-form">
          <GeneralInfoForm GeneralInfo={GeneralInfo} isEditing={GeneralEdit} saveForm={saveForm} />

          {GeneralInfo != '' && (
            <div className="general-form-show">
              <div className="general-info">
                <ShowGeneralInfo props={GeneralInfo} />
              </div>

              <button onClick={() => setGeneralEdit(!GeneralEdit)}>
                Edit
              </button>
            </div>
          )}

        </div>

        <div className="education-form">
          <EducationForm EducationInfo={EducationInfo[EducationId]} isEditing={EducationEdit} saveForm={saveForm} />

          {EducationInfo.length > 0 && (
            <div className="education-form-show">
              <div className="education-info">
                <ShowEducationInfo EducationInfo={EducationInfo} editForm={editEducationForm} />
              </div>
            </div>
          )}
        </div>

        <div className="experience-form">
          <ExperienceForm ExperienceInfo={ExperienceInfo[experienceId]} isEditing={experienceEdit} saveForm={saveForm} />

          {ExperienceInfo.length > 0 && (
            <div className="experience-form-show">
              <div className="experience-info">
                <ShowExperienceInfo ExperienceInfo={ExperienceInfo} editForm={editExperienceForm} />
              </div>
            </div>
          )}
        </div>

      <div className="resume">
      </div>
    </div>
  </div>
  );
}

export default App;