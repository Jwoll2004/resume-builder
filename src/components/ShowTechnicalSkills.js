import React from "react";

const ShowTechnicalSkills = ({ props }) => {
	  return (
	<div className="show-info">
	  <strong>Languages: </strong>
	  <span>{props.languages}</span>
	  <br />

	  <strong>Tools and Technologies: </strong>
	  <span>{props.toolsAndTechnologies}</span>
	  <br />

	  <strong>Core Subjects: </strong>
	  <span>{props.coreSubjects}</span>
	</div>
  );
}

export default ShowTechnicalSkills;