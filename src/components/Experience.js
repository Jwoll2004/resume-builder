import React from 'react';
import { useState } from 'react';

const Experience = () => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(company, position, responsibilities, startDate, endDate);
    }

    const isValidForm = () => {
        return company.length > 0 && position.length > 0 && responsibilities.length > 0 && startDate.length > 0 && endDate.length > 0;
    }
    return (
        <div className="form-group experience">
            <div className="form-header">
                <div className="form-title">
                    <h2>Experience</h2>
                </div>
            </div>

            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" name="position" value={position} onChange={(e) => setPosition(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea id="responsibilities" name="responsibilities" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id="start-date" name="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id="end-date" name="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                </div>

                <div className="form-buttons">
                    <button type="submit" disabled={!isValidForm()}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Experience;