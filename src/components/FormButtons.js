import React from "react";

export const FormButtons = ({ isValidForm}) => {
    return (
        <div className="form-buttons">
            <button type="submit" disabled={!isValidForm}>
                Save
            </button>
        </div>
    );
}