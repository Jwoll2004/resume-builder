import React from 'react';
import { useState } from 'react';
import { InputBox } from './InputBox';
import { FormButtons } from './FormButtons';



const EducationForm = (props) => {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [graduationDate, setGraduationDate] = useState('');
    const [type, setType] = useState('education');


    const isValidForm = () => {
        return school.length > 0 && degree.length > 0 && graduationDate.length > 0;
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        
        const EducationInfo = {
            school: school,
            degree: degree,
            graduationDate: graduationDate,
            type: type
        };
        props.saveForm(EducationInfo);
        setSchool('');
        setDegree('');
        setGraduationDate('');
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

                <InputBox labelFor="graduationDate" label="Graduation Date" type="date" id="graduationDate" name="graduationDate" value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} />

                <FormButtons isValidForm={isValidForm} onSubmit={OnSubmit}/>
            </form>
        </div>
    );
}

export default EducationForm;
