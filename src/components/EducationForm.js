import React from 'react';
import { useState } from 'react';
import { InputBox } from './InputBox';
import { FormButtons } from './FormButtons';



const EducationForm = (props) => {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [type, setType] = useState('education');


    const isValidForm = () => {
        return school.length > 0 && degree.length > 0 && startDate.length > 0 && endDate.length > 0;
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        
        const EducationInfo = {
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            type: type
        };
        props.saveForm(EducationInfo);
        setSchool('');
        setDegree('');
        setstartDate('');
        setEndDate('');

    }


    return (
        <div className="form-group edu-info">
            <div className="form-header">
                <div className="form-title">
                    <h2>Education</h2>
                </div>
            </div>

            <form onSubmit={OnSubmit}>
                <InputBox labelFor="school" label="School" type="text" id="school" name="school" value={school} onChange={(e) => setSchool(e.target.value)} />

                <InputBox labelFor="degree" label="Degree" type="text" id="degree" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />

                <InputBox labelFor="startDate" label="Start Date" type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setstartDate(e.target.value)} />

                <InputBox labelFor="endDate" label="End Date" type="date" id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

                <FormButtons isValidForm={isValidForm} onSubmit={OnSubmit}/>
            </form>
        </div>
    );
}

export default EducationForm;
