import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/main.css';
import PortfolioItem from './PortfolioItem';

// Import local images
import renturImg from '../components/Images/port.png';
import aprtmateImg from '../components/Images/port1.png';
import taskflowImg from '../components/Images/traveling.png';
import medicareImg from '../components/Images/techcare.png';

const techTools = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
];

const portfolioData = [
  {
    title: "Rentur",
    description: "An e-commerce platform for renting and selling of clothes and accessories.",
    image: renturImg,
    liveUrl: "https://renturfront-28hj.vercel.app/"
  },
  {
    title: "Apartmate",
    description: "A platform for finding and booking hostels for students in the University, to help them find cheaper and better alternatives.",
    image: aprtmateImg,
    liveUrl: "https://apartmate-black.vercel.app/"
  },
   {
    title: "Taskflow",
    description: "A task management tool to help teams manage their flights, holidays and travel plans.",
    image: taskflowImg,
    liveUrl: "https://travelitinerary-sage.vercel.app/"
  },
   {
    title: "Medicare",
    description: "A platform for finding and booking medical services and consultations.",
    image: medicareImg,
    liveUrl: "https://techflow-d1.vercel.app/"
  }
  // Add more projects as needed
];

const softSkills = [
  "Effective Communication",
  "Team Work and Collaboration",
  "Problem Solving",
  "Attention to Detail and Accuracy",
  "Proper task planning and Execution",
  "Time Management",
  "Creativity and Innovation",
];

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        {darkMode ? ' Day Mode' : ' Night Mode'}
      </button>

      {/* Hero Section */}
      <header className="header-animated">
        <div className="container">
          <h1>Adigun Sheriff</h1>
          <p className="welcome-message">Frontend Developer | Designer</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container">
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer and designer with experience building responsive web applications and user interfaces. I enjoy solving problems and collaborating with teams to deliver high-quality products.
        </p>
      </section>

      {/* Technologies & Tools Section */}
      <section className="container">
        <h2>Technologies & Tools</h2>
        <div className="tech-grid">
          {techTools.map((tool, idx) => (
            <div className="tech-item" key={idx}>
              <img src={tool.img} alt={tool.name} className="tech-img" />
              <span className="tech-label">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {portfolioData.map((item, idx) => (
            <div className="project-row" key={idx}>
              <PortfolioItem {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="container">
        <h2>Soft Skills</h2>
        <ul className="soft-skills-list">
          {softSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div style={{ marginBottom: '8px' }}>
            <strong>Adigun Sheriff</strong> | Frontend Developer & Designer
          </div>
          <div style={{ marginBottom: '8px' }}>
            Email: <a href="mailto:sheriffadigun0@gmail.com" style={{ color: '#ffd700' }}>sheriffadigun0@gmail.com</a>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/deputy-sheriff" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/sheriff-adigun-851479216/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://x.com/deputysheriff01" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="footer-icon" />
            </a>
          </div>
          <div style={{ marginTop: '8px' }}>
            &copy; {new Date().getFullYear()} Adigun Sheriff. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Header;
