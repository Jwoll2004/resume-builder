import React from "react";

export const InputBox = ({labelFor, label, type, id, name, value, onChange}) => {
  return (
    <div className="input-container">
      <label htmlFor={labelFor}>{label}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} required />
    </div>
  );
};
