import React from "react";

const TechnicalSkillsCV = ({ props }) => {
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.type) {

		  let displayKey = key;
		  if(key === "toolsAndTechnologies") {
			displayKey = "Tools and Technologies";
		  } 
		  else if(key === "coreSubjects") {
			displayKey = "Core Subjects";
		  }
          return (
            <p key={key} className={`${key} entry`}>
              <p className="tech-info">
                <strong>{displayKey.charAt(0).toUpperCase() + displayKey.slice(1)}: </strong>
                {value}
              </p>
            </p>
          );
        }
        return null;
      })}
    </>
  );
};

export default TechnicalSkillsCV;
