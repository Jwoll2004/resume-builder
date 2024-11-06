import React, { useState } from "react";
import "./ResumeGuide.css";

const ResumeGuide = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const powerTipsContent = {
    "Optimize for ATS": [
      "Use industry-standard job titles",
      "Include relevant keywords from job description",
      "Keep formatting simple and consistent",
      "Use standard section headings",
    ],
    "Quantify Achievements": [
      "Use metrics to demonstrate impact",
      "Start bullet points with strong action verbs",
      'Format: "Achieved [X] by implementing [Y] which led to [Z]"',
      'Example: "Increased sales 45% by implementing new CRM system"',
    ],
    "Tailor Your Content": [
      "Customize for each role",
      "Mirror the company's language",
      "Highlight relevant experience",
      "Remove unrelated information",
    ],
    "Format for Readability": [
      "Use consistent fonts (Arial, Calibri, or Times New Roman)",
      "Maintain 10-12pt font size",
      "Include white space",
      "Keep to 1-2 pages",
      "Use bullet points for easy scanning",
    ],
  };

  const industryAdviceContent = {
    "Tech Roles": [
      "Highlight specific technologies and tools",
      "Include GitHub profile or portfolio",
      "Feature successful projects",
      "List certifications",
    ],
    "Business Roles": [
      "Emphasize leadership experience",
      "Include business metrics",
      "Show cross-functional collaboration",
      "Highlight industry knowledge",
    ],
    "Creative Roles": [
      "Link to portfolio",
      "Showcase notable clients",
      "Describe creative process",
      "Include relevant software skills",
    ],
  };

  const languageTipsContent = {
    Leadership: ["Directed", "Established", "Supervised", "Led", "Managed"],
    Achievement: ["Achieved", "Improved", "Increased", "Exceeded", "Optimized"],
    Technical: [
      "Developed",
      "Implemented",
      "Programmed",
      "Engineered",
      "Architected",
    ],
    Creative: ["Designed", "Created", "Innovated", "Conceptualized", "Crafted"],
    Analysis: [
      "Analyzed",
      "Evaluated",
      "Researched",
      "Assessed",
      "Investigated",
    ],
  };

  const sections = [
    {
      id: "essential",
      title: "Essential Components",
      items: [
        {
          topic: "Contact Information",
          description:
            "Place your name, phone, email, and location prominently at the top",
        },
        {
          topic: "Work Experience",
          description:
            "List relevant positions in reverse chronological order (most recent first)",
        },
        {
          topic: "Education",
          description:
            "Include degrees, grades, certifications, and expected graduation date",
        },
        {
          topic: "Skills",
          description:
            "Feature both technical and soft skills relevant to your target role",
        },
      ],
    },
    {
      id: "powerTips",
      title: "Power Tips for Impact",
      isSpecial: true,
    },
    {
      id: "mistakes",
      title: "Common Mistakes to Avoid",
      items: [
        {
          topic: "Generic Content",
          description:
            "Using objectives or summaries that could apply to any candidate",
        },
        {
          topic: "Personal Information",
          description:
            "Including age, marital status, or other non-professional details",
        },
        {
          topic: "Poor Formatting",
          description: "Using elaborate designs for traditional roles",
        },
        {
          topic: "Outdated Information",
          description: "Including irrelevant or outdated experience",
        },
        {
          topic: "Dense Text",
          description: "Writing long paragraphs instead of clear bullet points",
        },
      ],
    },
    {
      id: "proTips",
      title: "Pro Tips",
      items: [
        {
          topic: "Regular Updates",
          description: "Review and refresh your resume quarterly",
        },
        {
          topic: "Proofreading",
          description: "Have others review for errors and clarity",
        },
        {
          topic: "File Naming",
          description:
            'Include your name in the file name (e.g., "John_Smith_Resume.pdf")',
        },
        {
          topic: "Versioning",
          description: "Keep different versions for different roles",
        },
        {
          topic: "File Format",
          description: "Save as PDF unless specified otherwise",
        },
      ],
    },
    {
      id: "industryAdvice",
      title: "Industry-Specific Advice",
      isIndustrySection: true,
    },
    {
      id: "languageTips",
      title: "Language Tips",
      isLanguageSection: true,
    },
  ];

  const renderPowerTipsContent = () => (
    <div className="power-tips-grid">
      {Object.entries(powerTipsContent).map(([title, items]) => (
        <div key={title} className="power-tip-column">
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderIndustryAdviceContent = () => (
    <div className="industry-advice-grid">
      {Object.entries(industryAdviceContent).map(([title, items]) => (
        <div key={title} className="industry-column">
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderLanguageTipsContent = () => (
    <div className="language-tips-grid">
      {Object.entries(languageTipsContent).map(([category, verbs]) => (
        <div key={category} className="language-column">
          <h3>{category} Verbs</h3>
          <ul className="verb-list">
            {verbs.map((verb, index) => (
              <li key={index}>{verb}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="resume-tips-container">
      <div className="resume-tips-header">
        <h1>Craft Your Perfect Resume</h1>
        <p className="subtitle">Expert tips to make your resume stand out</p>
      </div>

      <div className="resume-tips-content">
        {sections.map((section) => (
          <div key={section.id} className="tip-section">
            <button
              className="section-header"
              onClick={() => toggleSection(section.id)}
            >
              <h2>{section.title}</h2>
              <span
                className={`arrow-icon ${
                  expandedSections[section.id] ? "expanded" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`section-content ${
                expandedSections[section.id] ? "expanded" : ""
              }`}
            >
              {section.isSpecial ? (
                renderPowerTipsContent()
              ) : section.isIndustrySection ? (
                renderIndustryAdviceContent()
              ) : section.isLanguageSection ? (
                renderLanguageTipsContent()
              ) : (
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <span className="topic-name">{item.topic}</span> -{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="resume-tips-footer">
        <div className="highlight-box">
          <h3>Remember</h3>
          <p>Your resume is often your first impression – make it count!</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeGuide;
