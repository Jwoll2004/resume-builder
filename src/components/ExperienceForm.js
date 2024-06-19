import React from 'react';
import { useState } from 'react';
import { InputBox } from './InputBox';
import { FormButtons } from './FormButtons';

const ExperienceForm = (props) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [type, setType] = useState('experience');

    const isValidForm = () => {
        return company.length > 0 && position.length > 0 && responsibilities.length > 0 && startDate.length > 0 && endDate.length > 0;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        const ExperienceInfo = {
            company: company,
            position: position,
            responsibilities: responsibilities,
            startDate: startDate,
            endDate: endDate,
            type: type
        };
        props.saveForm(ExperienceInfo);
        setCompany('');
        setPosition('');
        setResponsibilities('');
        setStartDate('');
        setEndDate('');
    }

    return (
        <div className="form-group experience">
            <div className="form-header">
                <div className="form-title">
                    <h2>Experience</h2>
                </div>
            </div>

            <form onSubmit={onSubmit}>
                <InputBox labelFor="company" label="Company" type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />

                <InputBox labelFor="position" label="Position" type="text" id="position" name="position" value={position} onChange={(e) => setPosition(e.target.value)} />

                <InputBox labelFor="responsibilities" label="Responsibilities" type="text" id="responsibilities" name="responsibilities" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />

                <InputBox labelFor="start-date" label="Start Date" type="date" id="start-date" name="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

                <InputBox labelFor="end-date" label="End Date" type="date" id="end-date" name="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

                <FormButtons isValidForm={isValidForm} />
            </form>
        </div>
    )
}

export default ExperienceForm;