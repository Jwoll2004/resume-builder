import React from 'react';
import uniqid from 'uniqid';

const EducationInfoCV = (props) => {
    const propsArray = [...props.EducationInfo];
    const entry = propsArray.map((item) => {
        return (
            <div key={uniqid()} className="show-info">
                <ShowItem key={uniqid()} school={item.school} degree={item.degree} startDate={item.startDate} endDate={item.endDate}/>
            </div>
        );
    });
    return (
        <div className="education-cv">
            {entry}
        </div>
    )
}

const ShowItem = (props) => {
    return (
        <div className="entry">
            <div className="cv-degree-school">
                {Object.entries(props).map(([key, value]) => {
                    if(key !== 'type'){
                        if(key === 'degree' || key === 'school'){
                            return (
                            <p key={key} className={key}>
                                {value}
                            </p>
                        );
                    }
                    }
                }
            )}
            </div>
            <div className="cv-dates">
                {Object.entries(props).map(([key, value]) => {
                    if(key !== 'type'){
                        if(key === 'startDate' || key === 'endDate'){
                            return (
                            <p key={key} className={key}>
                                {value}
                            </p>
                        );
                    }
                    }
                })}
            </div>
        </div>
    )
}

export default EducationInfoCV;