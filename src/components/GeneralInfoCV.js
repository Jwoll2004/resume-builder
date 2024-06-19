import React from 'react';

const GeneralInfoCV = () => {


    return (
        <div className="general-info">
            <h2>General Information</h2>
            <div className="info">
                <div className="info-item">
                    <label>Name:</label>
                    <span>{name}</span>
                </div>
                <div className="info-item">
                    <label>Email:</label>
                    <span>{email}</span>
                </div>
                <div className="info-item">
                    <label>Phone:</label>
                    <span>{phone}</span>
                </div>
            </div>
        </div>
    );
};

export default GeneralInfoCV;