import React from 'react';
import uniqid from 'uniqid';

const ExperienceInfoCV = (props) => {
    const propsArray = [...props.experienceInfo];
    const entry = propsArray.map((item) => {
        return (
            <ShowItem key={uniqid()} company={item.company} position={item.position} startDate={item.startDate} endDate={item.endDate} responsibilities={item.responsibilities}/>
        );
    });
    return (
        <>
            {entry}
        </>
    )
}

const ShowItem = (props) => {
    return (
        <div className="entry">
            <div className="cv-position-company">
                {Object.entries(props).map(([key, value]) => {
                    if(key !== 'type'){
                        if(key === 'position' || key === 'company'){
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
            <div className="cv-responsibilities">
                {Object.entries(props).map(([key, value]) => {
                    if(key !== 'type'){
                        if(key === 'responsibilities'){
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

export default ExperienceInfoCV;