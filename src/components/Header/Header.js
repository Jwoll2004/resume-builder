import React from "react";
import "./Header.css";

function Header() {
  const scrollToResumeSection = () => {
    const resumeSection = document.getElementById("resume-section");
	const yOffset = -50;
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" })
    }
  };

  return (
    <header className="header">
      <h1>Resume Builder</h1>
      <div className="scroll-links">
        <button onClick={scrollToResumeSection} className="scroll-link">
          Build Your Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
