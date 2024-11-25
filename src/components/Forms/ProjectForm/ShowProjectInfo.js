import React from "react";
import uniqid from "uniqid";

const ShowInfo = (props) => {
	const projectArray = [...props.projectInfo];
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
			<p><strong>Project Name: </strong>{props.projectName}</p>
			<p><strong>Tech Stack: </strong>{props.techStack}</p>
			<p><strong>Repo Link: </strong><a
				href={props.repoLink}
				target="_blank"
				rel="noreferrer"
			>
				{props.repoLink}
			</a></p>
			<p><strong>Live Link: </strong><a
				href={props.liveLink}
				target="_blank"
				rel="noreferrer"
			>
				{props.liveLink}
			</a></p>
			<p><strong>Description: </strong></p>
			<ul>
				{props.description.map((point) => {
					return (
						<li key={uniqid()}>{point}</li>
					);
				})}
			</ul>
		</div>
		
	);
}

export default ShowInfo;