import React from "react";

const ShowInfo = ({props}) => {
    return (
        <>
            {Object.entries(props).map(([key, value]) => {
                if(value !== props.type){
                    return (
                        <div key={key} className="show-info">
                            <strong>{key}:</strong> {value}
                        </div>
                    );
                }
            })}
        </>
    );
};

export default ShowInfo;