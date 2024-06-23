import React from "react";
import uniqid from "uniqid";

const ShowInfo = (props) => {
	const projectArray = [...props.ProjectInfo];
	const entry = projectArray.map((item) => {
		return (
			<div key={uniqid()} className="show-info">
				<ShowItem key={uniqid()} projectName={item.projectName} techStack={item.techStack} repoLink={item.repoLink} liveLink={item.liveLink} description={item.description} />    
				<button 
					key={uniqid()}
					onClick={() => props.editForm(projectArray.indexOf(item))}
					id={projectArray.indexOf(item)}
					className="edit-form">
						Edit
				</button>
			</div>
		);
	});
	return <div>{entry}</div>;
};

const ShowItem = (props) => {
	return (
		<div>
			<h3>{props.projectName}</h3>
			<p>{props.techStack}</p>
			<p>{props.repoLink}</p>
			<p>{props.liveLink}</p>
			<p>{props.description}</p>
		</div>
	);
}

export default ShowInfo;