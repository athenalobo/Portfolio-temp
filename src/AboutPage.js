import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        Motivated software engineer passionate about innovation and impactful work. <br />
        Currently enjoying a challenging role, with a proven record of delivering high-quality solutions at CAST Software and collaborating with talented teams.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <h2>Jan 2023 - Present</h2>
          <h3>Junior Software Engineer, CAST Software</h3>
          <p>
            Working on front-end and full-stack development roles, focused on cloud solutions and Agile processes.
          </p>
          <ul>
            <li>Contributed to cloud migration, enhancing scalability</li>
            <li>Appointed Scrum Master for CAST Profiler and Imaging on Cloud teams</li>
          </ul>
        </div>

        <div className="timeline-item">
          <h2>2022 - 2023</h2>
          <h3>Machine Learning Intern, MSR University of Applied Sciences</h3>
          <p>
            Built machine learning models on Carnatic and Hindustani music for genre classification and analysis.
          </p>
          <ul>
            <li>Developed Hidden Markov models and genre classifiers using Python</li>
          </ul>
        </div>

        <div className="timeline-item">
          <h2>2021 - 2022</h2>
          <h3>Full-Stack Web Developer, Boond Project</h3>
          <p>
            Designed dynamic front-end applications and back-end functionality for social impact projects.
          </p>
          <ul>
            <li>Built front-end with HTML, CSS, JavaScript, and Bootstrap</li>
            <li>Back-end with PHP and SQL database</li>
          </ul>
        </div>
        
        <div className="timeline-item">
          <h2>Education</h2>
          <h3>M.S. Ramaiah Institute of Technology</h3>
          <p>Bachelor of Engineering in Information Science (CGPA: 8.88)</p>
          <ul>
            <li>Relevant Courses: Object-Oriented Programming, Data Structures, Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
