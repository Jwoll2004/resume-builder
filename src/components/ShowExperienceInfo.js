import React from "react";
import uniqid from "uniqid";

const ShowInfo = (props) => {
    const expArray = [...props.ExperienceInfo];
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
            <h3>Company: {props.company}</h3>
            <p>Position: {props.position}</p>
            <p>Start Date: {props.startDate}</p>
            <p>End Date: {props.endDate}</p>
        </div>
    );
}

export default ShowInfo;