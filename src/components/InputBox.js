import React from "react";

export const InputBox = ({
  labelFor,
  label,
  type,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={labelFor}>
        {label}
        {label === "Description" && (
          <p className="project-description-instruction"> (Separate points using full stops)</p>
        )}
      </label>

      {label === "Description" && (
          <textarea
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
      )}

      {label === "Grade" && (
        <input
          type={type}
          id={id}
          name={name}
          value={value[0]}
          onChange={(e) => onChange([e.target.value, value[1]])}
        />
      )}

      {label === "Responsibilities" && (
        <textarea
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      )}

      {label !== "Grade" &&
        label !== "Responsibilities" &&
        label !== "Description" && (
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
