import React from "react";

const ShowGeneralInfo = ({props}) => {
    return (
        <>
            {Object.entries(props).map(([key, value]) => {
                if(value !== props.type){
                    return (
                        <p key={key} className={key}>
                            {value}
                        </p>
                    );
                }
            })}
        </>
    );
};

export default ShowGeneralInfo;