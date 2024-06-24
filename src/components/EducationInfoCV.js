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
                <span key={key} className={key}>
                  {value}
                </span>
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
                <span key={key} className={key}>
                  {value}
                </span>
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
                <span key={key} className={key}>
                  {value[1]} - {value[0]}
                </span>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default EducationInfoCV;
