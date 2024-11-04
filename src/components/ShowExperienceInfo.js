import React from "react";
import uniqid from "uniqid";

const ShowInfo = (props) => {
    const expArray = [...props.experienceInfo];
    const entry = expArray.map((item) => {
        return (
            <div key={uniqid()} className="show-info">
                <ShowItem key={uniqid()} company={item.company} position={item.position} startDate={item.startDate} endDate={item.endDate} />
                <button 
                    key={uniqid()}
                    onClick={() => props.editForm(expArray.indexOf(item))}
                    id={expArray.indexOf(item)}
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
            <p> <strong>Position:</strong> {props.position}</p>
            <p> <strong>Company:</strong> {props.company}</p>
            <p> <strong>Start Date:</strong> {props.startDate}</p>
            <p> <strong>End Date:</strong> {props.endDate}</p>
        </div>
    );
}

export default ShowInfo;