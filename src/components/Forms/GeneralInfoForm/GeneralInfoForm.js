import React, { useEffect, useState } from "react";
import { InputBox } from "../InputBox";
import { FormButtons } from "../FormButtons";

const GeneralInfoForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const [type, setType] = useState("general");
  useEffect(() => {
    if (props.isEditing) {
      setName(props.generalInfo.name);
      setEmail(props.generalInfo.email);
      setPhone(props.generalInfo.phone);
      setGithub(props.generalInfo.github);
      setLinkedIn(props.generalInfo.linkedIn);
    }
  }, [props.isEditing, props.generalInfo]);

  const isValidForm = () => {
    return (
      name.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      github.length > 0 &&
      linkedIn.length > 0
    );
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    const generalInfo = {
      name: name,
      email: email,
      phone: phone,
      github: github,
      linkedIn: linkedIn,
      type: type,
    };
    props.saveForm(generalInfo);
    setName("");
    setEmail("");
    setPhone("");
    setGithub("");
    setLinkedIn("");
  };

  return (
    <div className="form-group gen-info">
      <div className="form-header">
        <div className="form-title">
          <h2>General Information</h2>
        </div>
      </div>

      <form onSubmit={OnSubmit}>
        <InputBox
          labelFor="name"
          label="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputBox
          labelFor="email"
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputBox
          labelFor="phone"
          label="Phone"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputBox
          labelFor="github"
          label="Github"
          type="url"
          id="github"
          name="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <InputBox
          labelFor="linkedIn"
          label="LinkedIn"
          type="url"
          id="linkedIn"
          name="linkedIn"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />

        <FormButtons isValidForm={isValidForm()} />
      </form>
    </div>
  );
};

export default GeneralInfoForm;
