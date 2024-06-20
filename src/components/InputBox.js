import React from "react";

export const InputBox = ({labelFor, label, type, id, name, value, onChange}) => {
  return (
    <div className="input-container">
      <label htmlFor={labelFor}>{label}</label>

      {/* if it is for responsiblities make it textarea */}

      {label === "Responsibilities" ? (
        <textarea
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
      
    </div>
  );
};
