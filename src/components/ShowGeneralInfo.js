import React from "react";

const ShowGeneralInfo = ({props}) => {
    return (
        <div className="show-info">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.github}</p>
            <p>{props.linkedIn}</p>
        </div>
    );
};

export default ShowGeneralInfo;