import React, { useState, useEffect } from "react";
import { InputBox } from "../InputBox";
import { FormButtons } from "../FormButtons";
import { format } from "date-fns";

const EducationForm = (props) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState(["", "CGPA"]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [type, setType] = useState("education");

  useEffect(() => {
    if (props.isEditing) {
      setSchool(props.educationInfo.school);
      setDegree(props.educationInfo.degree);
      setStartDate(format(new Date(props.educationInfo.startDate), 'yyyy-MM-dd'));
      setEndDate(format(new Date(props.educationInfo.endDate), 'yyyy-MM-dd'));
      setGrade([props.educationInfo.grade[0], props.educationInfo.grade[1]]);
      setCity(props.educationInfo.city);
      setCountry(props.educationInfo.country);
    }
  }, [props.isEditing, props.educationInfo]);

  const isValidForm = () => {
    return (
      school.length > 0 &&
      degree.length > 0 &&
      startDate.length > 0 &&
      endDate.length > 0 &&
      city.length > 0 &&
      country.length > 0
    );
  };

  const OnSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    const educationInfo = {
      school: school,
      degree: degree,
      startDate: format(
        new Date(startDate.replaceAll("-", "/")),
        "MMM',' yyyy"
      ),
      endDate: format(new Date(endDate.replaceAll("-", "/")), "MMM',' yyyy"),
      type: type,
      grade: grade,
      city: city,
      country: country,
    };
    props.saveForm(educationInfo);
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setGrade(["", "CGPA"]);
    setCity("");
    setCountry("");
  };

  const validateGrade = (value, gradeType) => {
    let validatedValue = parseFloat(value);
    if (gradeType === "CGPA") {
      if (validatedValue > 10) validatedValue = 10;
      if (validatedValue < 0) validatedValue = 0;
      if (value.split(".")[1] && value.split(".")[1].length > 2) {
        validatedValue = validatedValue.toFixed(2);
      }
    } else if (gradeType === "Percentage") {
      if (validatedValue > 100) validatedValue = 100;
      if (validatedValue < 0) validatedValue = 0;
      if (value.split(".")[1] && value.split(".")[1].length > 1) {
        validatedValue = validatedValue.toFixed(1);
      }
    }
    return validatedValue.toString();
  };

  const onGradeChange = (e) => {
    const newGradeValue = validateGrade(e.target.value, grade[1]);
    setGrade([newGradeValue, grade[1]]);
  };

  const onGradeTypeChange = (e) => {
    const newGradeType = e.target.value;
    const newGradeValue = validateGrade(grade[0], newGradeType);
    setGrade([newGradeValue, newGradeType]);
  };

  return (
    <div className="form-group edu-info">
      <div className="form-header">
        <div className="form-title">
          <h2>Education</h2>
        </div>
      </div>

      <form onSubmit={OnSubmit}>
        <InputBox
          labelFor="school"
          label="School"
          type="text"
          id="school"
          name="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />

        <InputBox
          labelFor="degree"
          label="Degree"
          type="text"
          id="degree"
          name="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />

        <InputBox
          labelFor="startDate"
          label="Start Date"
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <InputBox
          labelFor="endDate"
          label="End Date"
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <div className="grade-input">
          <label htmlFor="grade">Grade</label>
          <div className="grade-type-input">
            <input
              type="number"
              id="grade"
              name="grade"
              value={grade[0]}
              onChange={onGradeChange}
              min={grade[1] === "CGPA" ? 0 : 0}
              max={grade[1] === "CGPA" ? 10 : 100}
              step={grade[1] === "CGPA" ? 0.01 : 0.1}
            />
            <select
              name="gradeType"
              id="gradeType"
              value={grade[1]}
              onChange={onGradeTypeChange}
            >
              <option value="CGPA">CGPA</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        <InputBox
          labelFor="city"
          label="City"
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <InputBox
          labelFor="country"
          label="Country"
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        {props.isEditing && (
          <button
            type="button"
            className="delete-button"
            // clear form fields and delete entry
            onClick={() => {
              setSchool("");
              setDegree("");
              setStartDate("");
              setEndDate("");
              setGrade(["", "CGPA"]);
              setCity("");
              setCountry("");
              props.deleteEntry(props.educationInfo);
            }}
          >
            Delete
          </button>
        )}
        <FormButtons isValidForm={isValidForm()} />
      </form>
    </div>
  );
};

export default EducationForm;
