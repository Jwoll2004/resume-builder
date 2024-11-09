// we have to render subheadings as bold and items as plain text in form of bullet points list elements
import React from "react";
import uniqid from "uniqid";

const CustomSectionCV = ({ section }) => {
  return (
    <>
      <p className="cv-title">
        <strong>{section.title}</strong>
      </p>
      <div className="entry">
        {section.subsectionsWithHeading.map((subsection, index) => (
          <div key={uniqid()}>
            <p className="cv-subtitle">
              <strong>{subsection.heading}</strong>
            </p>
            <ul className="cv-section-list">
              {subsection.items.map((item, index) => (
                <li key={index} className="description">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomSectionCV;
