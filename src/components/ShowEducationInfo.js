import React from "react";
import uniqid from "uniqid";

const ShowInfo = (props) => {
    const eduArray = [...props.educationInfo];
    const entry = eduArray.map((item) => {
        return (
            <div key={uniqid()} className="show-info">
                <ShowItem key={uniqid()} school={item.school} degree={item.degree} startDate={item.startDate} endDate={item.endDate} city={item.city} country = {item.country} grade={item.grade} />    
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
            <h4>{props.school}</h4>
            <p>{props.degree}</p>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.city}</p>
            <p>{props.country}</p>
            <p>{props.grade[1]} : {props.grade[0]}</p>
        </div>
    );
}

export default ShowInfo;


