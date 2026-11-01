
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      
<nav className="navbar">
  <a href="#home" className="logo">
    PJ<span>.</span>
  </a>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#certifications">Certifications</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <a href="#contact" className="nav-button">
    Let's Talk ↗
  </a>
</nav>


      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="status">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Pankaj
              <span> Jadhao.</span>
            </h1>

            <h2>
              Aspiring Cloud &amp; <span>DevOps Engineer</span>
            </h2>

            <p className="hero-description">
              I work with Linux, AWS and cloud technologies to build,
              manage and monitor reliable infrastructure. Passionate
              about automation, problem-solving and learning new technologies.
            </p>

            
<div className="hero-buttons">
  <a href="#projects" className="primary-button">
    Explore My Work ↗
  </a>

  <a href="#contact" className="secondary-button">
    Contact Me
  </a>

  <a
    href="/documents/Pankaj_Jadhao_Resume.pdf"
    className="secondary-button"
    download
  >
    Download Resume ↓
  </a>
</div>


            <div className="social-links">
              <a
                href="https://github.com/pankajjadhao"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-jadhao-6912452a4"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-glow"></div>
           <img src="/profile.png" alt="Pankaj Jadhao" />
            <div className="image-caption">
              <span>01 / PROFILE</span>
              <span>Cloud &amp; Linux</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>Building my journey in the world of <span>Cloud Computing.</span></h2>
          <p>
            I'm focused on developing practical skills in Linux
            administration, AWS cloud services and DevOps tools.
            I enjoy working on hands-on projects and understanding
            how real-world infrastructure works.
          </p>
        </section>

        <section className="skills section" id="skills">
          <p className="section-label">02 — TECHNICAL SKILLS</p>
          <h2>Technologies I <span>work with.</span></h2>

          <div className="skill-grid">
            {[
              ["01", "Linux", "System administration"],
              ["02", "AWS", "Cloud infrastructure"],
              ["03", "Networking", "TCP/IP and networking basics"],
              ["04", "Git & GitHub", "Version control"],
              ["05", "Bash", "Shell scripting"],
              ["06", "DevOps", "Automation and monitoring"],
            ].map(([number, name, description]) => (
              <div className="skill-card" key={number}>
                <span>{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
        
<section className="certifications section" id="certifications">
  <p className="section-label">03 — CERTIFICATIONS & LEARNING</p>

  <h2>My learning <span>journey.</span></h2>

  <div className="skill-grid">

    <div className="skill-card">
      <span>01</span>
      <h3>Linux System Administration</h3>
      <p>Linux commands, permissions, users, services and server management.</p>
      <div className="tags">
        <span>Linux</span>
        <span>System Administration</span>
      </div>
      <p>Training completed / certificate details to be added</p>
    </div>

    <div className="skill-card">
      <span>02</span>
      <h3>AWS Cloud Computing</h3>
      <p>EC2, S3, VPC, IAM, Load Balancing, Auto Scaling and CloudWatch.</p>
      <div className="tags">
        <span>AWS</span>
        <span>Cloud</span>
      </div>
      <p>Training completed / certificate details to be added</p>
    </div>

    <div className="skill-card">
      <span>03</span>
      <h3>Networking Fundamentals</h3>
      <p>TCP/IP, DNS, subnetting, routing and network troubleshooting.</p>
      <div className="tags">
        <span>Networking</span>
        <span>TCP/IP</span>
      </div>
      <p>Learning completed / certificate details to be added</p>
    </div>

  </div>
</section>

<section className="certifications section" id="certifications">
  <p className="section-label">03 — CERTIFICATIONS & LEARNING</p>

  <h2>My learning <span>journey.</span></h2>

  <div className="skill-grid">

    <div className="skill-card">
      <span>01</span>
      <h3>Linux System Administration</h3>
      <p>Linux commands, permissions, users, services and server management.</p>
      <div className="tags">
        <span>Linux</span>
        <span>System Administration</span>
      </div>
      <p>Training completed / certificate details to be added</p>
    </div>

    <div className="skill-card">
      <span>02</span>
      <h3>AWS Cloud Computing</h3>
      <p>EC2, S3, VPC, IAM, Load Balancing, Auto Scaling and CloudWatch.</p>
      <div className="tags">
        <span>AWS</span>
        <span>Cloud</span>
      </div>
      <p>Training completed / certificate details to be added</p>
    </div>

    <div className="skill-card">
      <span>03</span>
      <h3>Networking Fundamentals</h3>
      <p>TCP/IP, DNS, subnetting, routing and network troubleshooting.</p>
      <div className="tags">
        <span>Networking</span>
        <span>TCP/IP</span>
      </div>
      <p>Learning completed / certificate details to be added</p>
    </div>

  </div>
</section>


        <section className="projects section" id="projects">
          <p className="section-label">04 — SELECTED WORK</p>
          <h2>Projects &amp; <span>experiments.</span></h2>

          <div className="project-card">
            <div className="project-number">PROJECT / 01</div>
            <h3>Linux Server Monitoring &amp; Auto-Recovery on AWS</h3>
            <p>
              A Linux server monitoring project using Amazon Linux 2023,
              Bash, Cron, Nginx, systemd and Amazon CloudWatch.
            </p>
            <div className="tags">
              <span>Linux</span>
              <span>AWS EC2</span>
              <span>Bash</span>
              <span>CloudWatch</span>
              <span>Nginx</span>
            </div>
            <a
              href="https://github.com/pankajjadhao/linux-server-monitoring-aws"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View GitHub Repository ↗
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">PROJECT / 02</div>
            <h3>Highly Available AWS Architecture</h3>
            <p>
              A hands-on AWS infrastructure project focused on
              availability, networking, load balancing and scalability.
            </p>
            <div className="tags">
              <span>AWS VPC</span>
              <span>EC2</span>
              <span>Load Balancer</span>
              <span>Auto Scaling</span>
            </div>
            <span className="project-link">Implementation in progress</span>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="section-label">05 — GET IN TOUCH</p>
          <h2>Let's build something <span>great.</span></h2>
          <p>
            I'm interested in entry-level opportunities in Linux,
            Cloud Computing and DevOps.
          </p>
          <a href="mailto:pankaj1209j@gmail.com" className="primary-button">
            Email Me ↗
          </a>
          <div className="contact-links">
            <a href="https://github.com/pankajjadhao" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/pankaj-jadhao-6912452a4" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">PJ<span>.</span></a>
        <p>Designed &amp; built by Pankaj Jadhao © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
