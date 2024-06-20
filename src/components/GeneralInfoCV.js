import React from "react";

const GeneralInfoCV = ({props}) => {
    return (
        <div className="general-cv">
            {Object.entries(props).map(([key, value]) => {
                if(value !== props.type){
                    return (
                        <p key={key} className={key}>
                            {value}
                        </p>
                    )
                }
            })}
        </div>
    )
}

export default GeneralInfoCV;