import React from 'react';
import { useState } from 'react';
import { InputBox } from './InputBox';
import { FormButtons } from './FormButtons';


const GeneralInfoForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('general');
    
    const isValidForm = () => {
        return name.length > 0 && email.length > 0 && phone.length > 0;
    }
    
    const OnSubmit = (e) => {
        e.preventDefault();

        const generalInfo = {
            name: name,
            email: email,
            phone: phone,
            type: type
        };
        props.saveForm(generalInfo);
        setName('');
        setEmail('');
        setPhone('');
;    }

    return (
        <div className="form-group gen-info">
            <div className="form-header">
                <div className="form-title">
                    <h2>General Information</h2>
                </div>
            </div>

            <form onSubmit={OnSubmit}>
                <InputBox labelFor="name" label="Name" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>

                <InputBox labelFor="email" label="Email" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <InputBox labelFor="phone" label="Phone" type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                <FormButtons isValidForm={isValidForm()} onSubmit={OnSubmit}/>
            </form>
        </div>
    );
};

export default GeneralInfoForm;