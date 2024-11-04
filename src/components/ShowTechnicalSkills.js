import React from "react";

const ShowTechnicalSkills = ({ props }) => {
	  return (
	<div>
	  <strong>Languages: </strong>
	  <span>{props.languages}</span>

	  <strong>Tools and Technologies: </strong>
	  <span>{props.toolsAndTechnologies}</span>

	  <strong>Core Subjects: </strong>
	  <span>{props.coreSubjects}</span>
	</div>
  );
}

export default ShowTechnicalSkills;