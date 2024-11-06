import React from "react";

const ShowGeneralInfo = ({props}) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.github}</p>
            <p>{props.linkedIn}</p>
        </div>
    );
};

export default ShowGeneralInfo;