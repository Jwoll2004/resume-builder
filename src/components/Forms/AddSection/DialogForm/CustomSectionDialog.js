import React, { useState } from "react";
import "./CustomSectionDialog.css";

const CustomSectionDialog = ({ onSave, onClose }) => {
  const [sectionData, setSectionData] = useState({
    title: "",
    subsectionsWithHeading: [], // Array to store subsections with headings
  });

  const handleAddSubsectionWithHeading = () => {
    setSectionData((prev) => ({
      ...prev,
      subsectionsWithHeading: [
        ...prev.subsectionsWithHeading,
        { heading: "", items: [] }, // Default structure for each subsection with heading
      ],
    }));
  };

  const handleTitleChange = (e) => {
    setSectionData({ ...sectionData, title: e.target.value });
  };

  const handleSubsectionHeadingChange = (index, e) => {
    const updatedSubsectionsWithHeading =
      sectionData.subsectionsWithHeading.map((sub, i) =>
        i === index ? { ...sub, heading: e.target.value } : sub
      );
    setSectionData({
      ...sectionData,
      subsectionsWithHeading: updatedSubsectionsWithHeading,
    });
  };

  const handleSave = () => {
    onSave(sectionData);
    onClose();
  };

  return (
    <div className="dialog-wrapper">
      <div className="dialog">
        <h2>Add Custom Section</h2>
        <input
          type="text"
          placeholder="Section Title"
          value={sectionData.title}
          onChange={handleTitleChange}
          required
        />

        <div className="add-subsection-buttons">
          <button onClick={handleAddSubsectionWithHeading}>
            + Add Subsection Heading
          </button>
        </div>

        {sectionData.subsectionsWithHeading.map((sub, index) => (
          <div key={index} className="subsection-entry">
            <input
              type="text"
              placeholder="Subsection Heading"
              value={sub.heading}
              onChange={(e) => handleSubsectionHeadingChange(index, e)}
              required
            />
          </div>
        ))}

        <div className="dialog-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CustomSectionDialog;
