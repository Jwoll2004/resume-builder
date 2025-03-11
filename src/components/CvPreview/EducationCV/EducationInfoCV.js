import React from "react";
import uniqid from "uniqid";

const EducationInfoCV = (props) => {
  const propsArray = [...props.educationInfo];
  const entry = propsArray.map((item) => {
    return (
      <ShowItem
        key={uniqid()}
        school={item.school}
        degree={item.degree}
        startDate={item.startDate}
        endDate={item.endDate}
        grade={item.grade}
        city={item.city}
        country={item.country}
        type={item.type}
      />
    );
  });
  return <>{entry}</>;
};

const ShowItem = (props) => {
  return (
    <div className="entry">
      <div className="cv-school-dates">
        {Object.entries(props).map(([key, value]) => {
          if (key !== "type") {
            if (key === "school" || key === "startDate" || key === "endDate") {
              return (
                <p key={key} className={key}>
                  {value}
                </p>
              );
            }
          }
        })}
      </div>

      <div className="cv-degree-location">
        {Object.entries(props).map(([key, value]) => {
          if (key !== "type") {
            if (key === "degree" || key === "city" || key === "country") {
              return (
                <p key={key} className={key}>
                  {value}
                </p>
              );
            }
          }
        })}
      </div>

      <div className="cv-grade">
        {Object.entries(props).map(([key, value]) => {
          if (key !== "type") {
            if (key === "grade") {
              return (
                <p key={key} className={key}>
                  {value[1]} - {value[0] + (value[1] === "Percentage" ? "%" : "")}
                </p>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default EducationInfoCV;
