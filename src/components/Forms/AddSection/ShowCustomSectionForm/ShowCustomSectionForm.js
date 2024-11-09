import React from "react";

// structure props.section as follows:
// {
//     type: `customSection-${customSections.length}`,
//     title: "",
//     subsectionsWithHeading: [{ heading: "", items: [] }],
//   }
const ShowCustomSection = ({ section }) => {
  return (
    <div>
      <strong>Section Title: </strong>
      <span>{section.title}</span>

      <strong>Section Description: </strong>
      {section.subsectionsWithHeading.map((subsection, index) => (
        <div key={index}>
          <strong>{subsection.heading}: </strong>
          <span>{subsection.items.join(", ")}</span>
        </div>
      ))}
    </div>
  );
};

export default ShowCustomSection;
