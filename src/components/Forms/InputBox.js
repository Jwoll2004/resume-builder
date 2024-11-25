import React from "react";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns 0-based index (0 = January)
const maxDate = `${year}-${month}`;
const tenYearsLater = year + 10;
const maxEndDate = `${tenYearsLater}-12`;

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

      {type==="month" && label === "Start Date" && (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          min="1900-01"
          max={maxDate}
        />
      )}

      {type==="month" && label === "End Date" && labelFor === "experience"&& (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          min="1900-01"
          max={maxDate}
        />
      )}

      {type==="month" && label === "End Date" && labelFor === "education"&& (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          min="1900-01"
          max={maxEndDate}
        />
      )}

      {label !== "Grade" &&
        label !== "Responsibilities" &&
        label !== "Description" && type !== "month" && (
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
