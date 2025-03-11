import React from "react";
import email from "../../../assets/images/email.svg";
import phone from "../../../assets/images/phone.svg";
import github from "../../../assets/images/githubmono.svg";
import linkedin from "../../../assets/images/linkedin.svg";

const GeneralInfoCV = ({ props }) => {
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.type) {
          return (
            <p key={key} className={`${key} info-container`}>
              {key === "email" && (
                <a href={`mailto:${value}`} className="info-container email">
                  <img src={email} alt="email" className="email-icon cv-icon" />
                  {value}
                </a>
              )}

              {key === "phone" && (
                <a href={`tel:${value}`} className="info-container phone">
                  <img src={phone} alt="phone" className="phone-icon cv-icon" />
                  {value}
                </a>
              )}

              {key === "github" && (
                <a 
                  href={value === "" ? "#" : value}
                  target="_blank"
                  rel="noreferrer"
                  className="info-container github"
                >
                  <img src={github} alt="github" className="github-icon cv-icon" />
                  GitHub
                </a>
              )}

              {key === "linkedIn" && (
                <a
                  href={value === "" ? "#" : value}
                  target="_blank"
                  rel="noreferrer"
                  className="info-container linkedin"
                >
                  <img src={linkedin} alt="linkedin" className="linkedin-icon cv-icon" />
                  LinkedIn
                </a>
              )}

              {key !== "github" && key !== "linkedIn" && key !== "email" && key !== "phone" && (
                <p className="cv-info">{value}</p>
              )}
            </p>
          );
        }
      })}
    </>
  );
};

export default GeneralInfoCV;
