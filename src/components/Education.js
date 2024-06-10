import React from 'react';
import { useState } from 'react';


const Education = () => {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [graduationDate, setGraduationDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(school, degree, graduationDate);
    }

    const isValidForm = () => {
        return school.length > 0 && degree.length > 0 && graduationDate.length > 0;
    }

    return (
        <div className="form-group education">
            <div className="form-header">
                <div className="form-title">
                    <h2>Education</h2>
                </div>
            </div>

            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" value={school} onChange={(e) => setSchool(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="graduation-date">Graduation Date</label>
                    <input type="date" id="graduation-date" name="graduation-date" value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} required />
                </div>

                <div className="form-buttons">
                    <button type="submit" disabled={!isValidForm()}>Save</button>
                </div>
            </form>
        </div>
    );
}

export default Education;
