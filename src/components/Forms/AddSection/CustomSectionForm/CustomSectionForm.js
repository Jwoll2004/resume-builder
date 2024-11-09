// CustomSectionForm.js
import React, { useState, useEffect } from "react";
import { InputBox } from "../../InputBox";
import { FormButtons } from "../../FormButtons";

const CustomSectionForm = (props) => {
  // Initial state with whatever is passed in section data of props, if empty use some default values as or operator...
  const [sectionData, setSectionData] = useState({
    type: props.sectionData?.type || `customSection-${props.index || 0}`,
    title: props.sectionData?.title || "",
    subsectionsWithHeading: props.sectionData?.subsectionsWithHeading || [
      { heading: "", items: [""] },
    ],
  });

  useEffect(() => {
    if (props.isEditing && props.sectionData) {
      setSectionData({
        type: props.sectionData.type,

        title: props.sectionData?.title || "",
        subsectionsWithHeading: props.sectionData?.subsectionsWithHeading || [
          { heading: "", items: [""] },
        ],
      });
    }
  }, [props.isEditing, props.sectionData]);

  const isValidForm = () => {
    return (
      sectionData.title &&
      sectionData.subsectionsWithHeading.every(
        (sub) => sub.heading && sub.items.every((item) => item)
      )
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const customSection = {
      type: sectionData.type,
      title: sectionData.title,
      subsectionsWithHeading: sectionData.subsectionsWithHeading,
    };
    props.saveForm(customSection);

    setSectionData({
      type: props.sectionData?.type || `customSection-${props.index || 0}`,
      title: customSection.title || "My Custom Section",
      subsectionsWithHeading: [ { heading: "", items: [""] } ],
    });
  };

  // Update title
  const handleTitleChange = (e) => {
    setSectionData({
      ...sectionData,
      title: e.target.value,
    });
  };

  // Update subsection headings and item entries
  const handleSubsectionHeadingChange = (index, e) => {
    const updatedSubsections = sectionData.subsectionsWithHeading.map(
      (sub, i) => (i === index ? { ...sub, heading: e.target.value } : sub)
    );
    setSectionData({
      ...sectionData,
      subsectionsWithHeading: updatedSubsections,

    });
  };

  const handleItemChange = (subIndex, itemIndex, e) => {
    const updatedSubsections = sectionData.subsectionsWithHeading.map(
      (sub, i) => {
        if (i === subIndex) {
          const updatedItems = sub.items.map((item, j) =>
            j === itemIndex ? e.target.value : item
          );
          return { ...sub, items: updatedItems };
        }
        return sub;
      }
    );
    setSectionData({
      ...sectionData,
      subsectionsWithHeading: updatedSubsections, 
    });
  };

  const handleAddSubsection = () => {
    setSectionData((prev) => ({
      ...prev,
      subsectionsWithHeading: [...prev.subsectionsWithHeading, { heading: "", items: [""] }],
    }));
  };

  const handleAddItem = (subIndex) => {
    const updatedSubsections = sectionData.subsectionsWithHeading.map(
      (sub, i) => {
        if (i === subIndex) {
          return { ...sub, items: [...sub.items, ""] };
        }
        return sub;
      }
    );
    setSectionData({
      ...sectionData,
      subsectionsWithHeading: updatedSubsections,
    });
  };

  const handleRemoveItem = (subIndex) => {
    const updatedSubsections = sectionData.subsectionsWithHeading.map(
      (sub, i) => {
        if (i === subIndex) {
          return { ...sub, items: sub.items.slice(0, -1) };
        }
        return sub;
      }
    );
    setSectionData({
      ...sectionData,
      subsectionsWithHeading: updatedSubsections,
    });
  };

  const handleRemoveSubsection = () => {
    setSectionData((prev) => ({
      ...prev,
      subsectionsWithHeading: prev.subsectionsWithHeading.slice(0, -1),
    }));
  };

  return (
    <div className="custom-section-form form-group">
      <div className="form-header">
        <div className="form-title">
          <h2>{sectionData.title || "New Custom Section"}</h2>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <InputBox
          labelFor="section-title"
          label="Section Title"
          type="text"
          id="section-title"
          name="section-title"
          value={sectionData.title}
          onChange={handleTitleChange}
          required
        />

        {sectionData.subsectionsWithHeading.map((sub, index) => (
          <div key={index} className="subsection-entry">
            <InputBox
              labelFor={`subheading-${index}`}
              label="Subsection Heading"
              type="text"
              id={`subheading-${index}`}
              name={`subheading-${index}`}
              value={sub.heading}
              onChange={(e) => handleSubsectionHeadingChange(index, e)}
              required
            />

            {sub.items.map((item, itemIndex) => (
              <InputBox
                key={itemIndex}
                labelFor={`item-${index}-${itemIndex}`}
                label="Item"
                type="text"
                id={`item-${index}-${itemIndex}`}
                name={`item-${index}-${itemIndex}`}
                value={item}
                onChange={(e) => handleItemChange(index, itemIndex, e)}
                required
              />
            ))}

            <button type="button" onClick={() => handleAddItem(index)}>
              + Add Item
            </button>

            {/* display only if at least 1 items exist */}

            {sub.items.length > 1 && (
              <button type="button" onClick={() => handleRemoveItem(index)}>
                - Remove Item
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddSubsection} className="subsection-button">
          + Add Subsection
        </button>

        {/* if subsections exist, only then display this button */}

        {sectionData.subsectionsWithHeading.length > 1 && (
          <button type="button" onClick={handleRemoveSubsection} className="subsection-button">
            - Remove Subsection
          </button>
        )}
        <FormButtons isValidForm={isValidForm()} />
      </form>
    </div>
  );
};

export default CustomSectionForm;
