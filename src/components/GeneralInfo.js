import React from 'react';
import { useState } from 'react';

const GeneralInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const OnSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
    }

    const isValidForm = () => {
        return name.length > 0 && email.length > 0 && phone.length > 0;
    }

    return (
        <div className="form-group gen-info">
            <div className="form-header">
                <div className="form-title">
                    <h2>General Information</h2>
                </div>
            </div>

            <form onSubmit={OnSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-container">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div className="form-buttons">
                    <button type="submit" disabled={!isValidForm()}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInfo;