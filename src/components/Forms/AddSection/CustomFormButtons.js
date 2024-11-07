import React from 'react';
import './CustomFormButtons.css';
import { Button } from 'react-bootstrap';
const CustomFormButtons = (props) => {
	return (
		<div className="custom-form-buttons">
			<h3>Want to add a custom section?</h3>
			<Button
				variant="primary"
				onClick={props.addSection} // on clicking, call the addSection function passed in as a prop
			>
				Add Section
			</Button>
		</div>
	);
}

export default CustomFormButtons;