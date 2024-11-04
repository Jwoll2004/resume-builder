import github from "../assets/images/githubmono.svg";


const Footer = () => {
	  return (
	<div class="footer">
        <div class="footer-content">
            <p>Created by Prajwal Tiwari</p>
        </div>
        <a href="https://github.com/Jwoll2004/resume-builder" target="_blank" rel="nopener noreferrer">
          <img src={github} alt="github" className="icons monoicons"/>
          Github
        </a>
    </div>
  );
};

export default Footer;