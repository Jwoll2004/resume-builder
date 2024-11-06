import React, { useState, useEffect } from 'react';
import { InputBox } from "../InputBox";
import { FormButtons } from "../FormButtons";

const TechnicalSkillsForm = (props) => {
	const [languages, setLanguages] = useState('');
	const [toolsAndTechnologies, setToolsAndTechnologies] = useState('');
	const [coreSubjects, setCoreSubjects] = useState('');
	const [type, setType] = useState('technicalSkills');

	useEffect(() => {
		if (props.isEditing) {
			setLanguages(props.technicalSkills.languages);
			setToolsAndTechnologies(props.technicalSkills.toolsAndTechnologies);
			setCoreSubjects(props.technicalSkills.coreSubjects);
		}
	}, [props.isEditing, props.technicalSkills]);

	const isValidForm = () => {
		return languages.length > 0 && toolsAndTechnologies.length > 0 && coreSubjects.length > 0;
	};

	const OnSubmit = (e) => {
		e.preventDefault();

		const technicalSkills = {
			languages: languages,
			toolsAndTechnologies: toolsAndTechnologies,
			coreSubjects: coreSubjects,
			type: type,
		};
		props.saveForm(technicalSkills);
		setLanguages('');
		setToolsAndTechnologies('');
		setCoreSubjects('');
	};

	return (
		<div className="form-group tech-skills">
			<div className="form-header">
				<div className="form-title">
					<h2>Technical Skills</h2>
				</div>
			</div>

			<form onSubmit={OnSubmit}>
				<InputBox
					labelFor="languages"
					label="Languages"
					type="text"
					id="languages"
					name="languages"
					value={languages}
					onChange={(e) => setLanguages(e.target.value)}
				/>
				
				<InputBox
					labelFor="toolsAndTechnologies"
					label="Tools and Technologies"
					type="text"
					id="toolsAndTechnologies"
					name="toolsAndTechnologies"
					value={toolsAndTechnologies}
					onChange={(e) => setToolsAndTechnologies(e.target.value)}
				/>

				<InputBox
					labelFor="coreSubjects"
					label="Core Subjects"
					type="text"
					id="coreSubjects"
					name="coreSubjects"
					value={coreSubjects}
					onChange={(e) => setCoreSubjects(e.target.value)}
				/>

				<FormButtons isValidForm={isValidForm()} />
			</form>
		</div>
	);
}

export default TechnicalSkillsForm;