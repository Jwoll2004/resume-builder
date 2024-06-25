import React from "react";

const TechnicalSkillsCV = ({ props }) => {
	  return (
	<>
	  {Object.entries(props).map(([key, value]) => {
		if (value !== props.type) {
		  return (
			<p key={key} className={`${key} info-container`}>
			  <p className="cv-info">
				<strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
				{value}
			  </p>
			</p>
		  );
		}
	  })}
	</>
  );
}

export default TechnicalSkillsCV;