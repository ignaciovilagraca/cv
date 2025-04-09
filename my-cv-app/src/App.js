import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('summary');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'summary':
        return (
          <section className="summary">
            <h2>Summary</h2>
            <p>
              Senior Software Engineer with 8+ years of experience building
              scalable backend systems using Go and Java, with a strong focus
              on Clean Architecture and TDD. Proven track record in fintech and
              high-traffic platforms (e.g., Mercado Libre), with solid
              experience in microservices, AWS, and team leadership.
            </p>
            <p>
              Open to backend and leadership roles in fast-paced tech
              environments in the U.S., ideally with visa sponsorship.
            </p>
          </section>
        );
      case 'skills':
        return (
          <section className="skills">
            <h2>Technical Skills</h2>
            <ul>
              <li>
                <strong>Languages:</strong> Go (expert), Java (expert),
                JavaScript (basic)
              </li>
              <li>
                <strong>Frameworks:</strong> Spring Boot, gRPC, Hibernate, React
                (basic)
              </li>
              <li>
                <strong>Cloud & Tools:</strong> AWS, Azure, Docker, Jenkins, Git,
                Maven, Gradle
              </li>
              <li>
                <strong>Testing:</strong> JUnit, Mockito, Integration Testing
              </li>
              <li>
                <strong>Architecture:</strong> Microservices, REST APIs, TDD,
                Hexagonal Architecture
              </li>
              <li>
                <strong>Databases:</strong> PostgreSQL, MySQL, DynamoDB, MongoDB,
                Oracle
              </li>
            </ul>
          </section>
        );
      case 'experience':
        return (
          <section className="experience">
            <h2>Professional Experience</h2>
            <div className="job">
              <h3>
                Storicard.com — Senior Software Engineer | Jul 2024 – Present
              </h3>
              <ul>
                <li>Implemented scalable backend services using Go.</li>
                <li>
                  Built infrastructure using AWS Cloud Development Kit. Services
                  utilized include Lambda, ECS, SQS, SNS, DynamoDB, IAM, Secrets
                  Manager, API gateway, CloudWatch.
                </li>
              </ul>
            </div>
            <div className="job">
              <h3>Compass.com — Senior Software Engineer | Oct 2023 – Jun 2024</h3>
              <ul>
                <li>Implemented scalable backend services using Go, Java and
                  Python.</li>
                <li>Led code reviews and improvements to reduce bugs and enhance
                  maintainability.</li>
                <li>Worked with AWS, gRPC, PostgreSQL and REST APIs in a
                  microservices environment.</li>
                <li>Participated in on-call rotations and collaborated closely
                  with cross-functional teams.</li>
              </ul>
            </div>
            <div className="job">
              <h3>The Bridge Social — Technical Lead | Sep 2022 – Sep 2023</h3>
              <ul>
                <li>Led the development and coordination of backend services in
                  a fintech environment.</li>
                <li>Reviewed pull requests, mentored team members and conducted
                  interviews.</li>
                <li>Worked with Java, Spring Boot, PostgreSQL, Kafka and Azure.</li>
                <li>Managed deployment cycles and kept stakeholders updated on
                  progress.</li>
              </ul>
            </div>
            <div className="job">
              <h3>Mercado Libre — Senior Software Engineer | Nov 2018 – Aug 2022</h3>
              <ul>
                <li>Built and maintained core buying flow features, impacting
                  millions of users.</li>
                <li>Focused on system performance metrics and A/B testing for
                  checkout improvements.</li>
                <li>Tech stack included Go, Java, REST APIs, AWS, Docker and
                  Jenkins.</li>
                <li>Practiced TDD, SOLID principles and peer reviews in a
                  high-traffic environment.</li>
              </ul>
            </div>
            <div className="job">
              <h3>Globant — SSr Java Developer | Nov 2017 – Oct 2018</h3>
              <ul>
                <li>Worked on backend systems for banking clients using Java,
                  Spring and Hibernate.</li>
                <li>Contributed to internal platforms for Derivatives and
                  Foreign Exchange products.</li>
              </ul>
            </div>
            <div className="job">
              <h3>Cognizant — Java Developer | Oct 2016 – Oct 2017</h3>
              <ul>
                <li>Developed CRM software for the pharmaceutical sector using
                  Java and Spring.</li>
                <li>Maintained Oracle SQL databases and contributed to SOAP-based
                  integrations.</li>
              </ul>
            </div>
          </section>
        );
      case 'education':
        return (
          <section className="education">
            <h2>Education</h2>
            <ul>
              <li>
                Bachelor’s Degree in Computer Science (incomplete) — University
                of Buenos Aires
              </li>
              <li>Information Systems Engineering (incomplete) — UTN</li>
            </ul>
          </section>
        );
      case 'projects':
        return (
          <section className="projects">
            <h2>Projects</h2>
            <div className="project">
              <h3>Crypto Arbitrage Bot</h3>
              <p>
                Built in Go, connected to Binance API to detect price
                inefficiencies between BTC, ETH and USDT pairs.
              </p>
            </div>
            <div className="project">
              <h3>Personal Finance Tracker</h3>
              <p>
                Backend in Go + PostgreSQL, tracks multiple accounts and
                generates monthly reports.
              </p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cv-container">
      <header>
        <h1>Ignacio Vila Graca</h1>
        <p>
          <a href="mailto:ignacio.vila.graca@gmail.com">
            ignacio.vila.graca@gmail.com
          </a>{' '}
          |{' '}
          <a
            href="https://www.linkedin.com/in/ignaciovilagraca"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <nav>
          <button
            className={activeSection === 'summary' ? 'active' : ''}
            onClick={() => handleSectionClick('summary')}
          >
            Summary
          </button>
          <button
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => handleSectionClick('skills')}
          >
            Skills
          </button>
          <button
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => handleSectionClick('experience')}
          >
            Experience
          </button>
          <button
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => handleSectionClick('education')}
          >
            Education
          </button>
          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleSectionClick('projects')}
          >
            Projects
          </button>
        </nav>
      </header>

      <main>{renderSection()}</main>
    </div>
  );
}

export default App;