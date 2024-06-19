import React from "react";
import uniqid from "uniqid";

const ShowInfo = (props) => {
    const eduArray = [...props.EducationInfo];
    const entry = eduArray.map((item) => {
        return (
            <div key={uniqid()} className="show-info">
                <ShowItem key={uniqid()} school={item.school} degree={item.degree} graduationDate={item.graduationDate} />
                <button 
                    key={uniqid()}
                    onClick={() => props.editForm(eduArray.indexOf(item))}
                    id={eduArray.indexOf(item)}
                    className="edit-form">
                        Edit
                </button>
            </div>
        );
    });
    return <div>{entry}</div>;
};

const ShowItem = (props) => {
    return (
        <div>
            <h3>School: {props.school}</h3>
            <p>Degree: {props.degree}</p>
            <p>Graduation Date: {props.graduationDate}</p>
        </div>
    );
}

export default ShowInfo;


