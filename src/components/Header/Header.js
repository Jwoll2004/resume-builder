import React from "react";
import "./Header.css";
import { ArrowDown } from "lucide-react";

function Header() {
  const scrollToResumeSection = () => {
    const resumeSection = document.getElementById("resume-section");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Resume Builder</h1>
        <button onClick={scrollToResumeSection} className="scroll-link">
          Build Your Resume
          <ArrowDown size={16} />
        </button>
      </div>
    </header>
  );
}

export default Header;