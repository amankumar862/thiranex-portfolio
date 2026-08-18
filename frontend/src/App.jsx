import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AK.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>

          <h1>
            Aman <span>Kumar</span>
          </h1>

          <h2>Developer & AI Enthusiast</h2>

          <p className="hero-text">
            I build practical software solutions using web development,
            artificial intelligence and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a
              href="https://github.com/amankumar862"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Aman Kumar",
  skills: [
    "Python",
    "React",
    "Flask",
    "MySQL",
    "AI"
  ],
  passion: "Building"
};`}
            </pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2 className="section-title">Turning Ideas Into Solutions</h2>

        <div className="about-content">
          <p>
            I'm a developer interested in building real-world applications
            using software development and artificial intelligence. I enjoy
            working across the stack, from designing user interfaces to
            developing APIs and working with databases.
          </p>

          <p>
            My goal is to continuously improve my technical skills while
            creating useful and meaningful projects.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-label">MY SKILLS</p>
        <h2 className="section-title">Technologies I Work With</h2>

        <div className="skills-grid">
          <div className="skill">Python</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Flask</div>
          <div className="skill">MySQL</div>
          <div className="skill">MongoDB</div>
          <div className="skill">AI / ML</div>
          <div className="skill">Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-number">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech">
                {project.tech_stack}
              </div>

              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Build Something Together.</h2>

        <p>
          I'm always interested in learning, building and collaborating on
          interesting projects.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amankumar86227@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/amankumar862"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/15amankumar"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        © 2026 Aman Kumar. Built with React, Flask & MySQL.
      </footer>
    </div>
  );
}

export default App;