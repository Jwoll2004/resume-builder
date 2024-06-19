import React from "react";

export const FormButtons = ({ isValidForm, onSubmit }) => {
    return (
        <div className="form-buttons">
            <button type="submit" disabled={!isValidForm} onClick={onSubmit}>
                Save
            </button>
        </div>
    );
}