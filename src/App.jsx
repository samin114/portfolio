import { useEffect } from 'react';
import avatar from './assets/profile-photo.jpg';

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'C', 'C++', 'JavaScript', 'PHP', 'Shell Scripting'],
  },
  {
    title: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'MobileNetV2', 'Computer Vision', 'Deep Learning', 'Grad-CAM'],
  },
  {
    title: 'Web & Backend',
    items: ['Django', 'React', 'Flask', 'REST APIs', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Tools & Systems',
    items: ['Docker', 'Git', 'GitHub', 'Linux', 'Arduino', 'Firebase'],
  },
];

const stats = [
  { value: '6+', label: 'Months of research experience' },
  { value: '8+', label: 'Applied AI & software projects' },
  { value: '3', label: 'Core research / deployment domains' },
];

const projectHighlights = [
  {
    category: 'AI / Research',
    title: 'OBE Attainment Framework',
    description:
      'Automated CO/PO attainment calculation for open-credit university programs using Django and PostgreSQL, now piloted at IUB.',
    stack: ['Django', 'PostgreSQL', 'Docker', 'Outcome-Based Education'],
  },
  {
    category: 'Full-Stack AI',
    title: 'Clork AI',
    description:
      'Full-stack dialogue-to-series identifier powered by LLMs, deployed with React, Django, Supabase, and Render.',
    stack: ['React', 'Django', 'Supabase', 'OpenRouter API', 'Docker'],
  },
  {
    category: 'Computer Vision',
    title: 'Dental Caries Classification',
    description:
      'Transfer-learning pipeline for panoramic dental X-ray classification using MobileNetV2 and explainable AI evaluation.',
    stack: ['Python', 'TensorFlow', 'MobileNetV2', 'Computer Vision'],
  },
];

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Software Engineering',
  'Full-Stack Development',
  'Computer Vision',
  'IoT',
  'System Design',
];

const education = [
  'B.Sc. in Computer Science and Engineering',
  'Independent University, Bangladesh (IUB)',
  'Graduate with practical AI and software engineering experience',
];

const resumePoints = [
  'Recent CSE graduate with research and engineering experience spanning AI-driven systems, full-stack web apps, and deployment workflows.',
  'Delivered a Django/PostgreSQL OBE system piloted at IUB and shipped production-ready AI applications using modern tooling.',
  'Strong interest in software engineering, AI/ML, research, and building systems that solve real-world problems.',
];

function App() {
  useEffect(() => {
    const layers = Array.from(document.querySelectorAll('[data-parallax]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const updateLayers = () => {
      frame = 0;
      layers.forEach((layer) => {
        if (reducedMotion.matches) {
          layer.style.removeProperty('--parallax-offset');
          return;
        }

        const speed = Number(layer.getAttribute('data-parallax'));
        layer.style.setProperty('--parallax-offset', `${window.scrollY * speed}px`);
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateLayers);
    };

    updateLayers();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      layers.forEach((layer) => layer.style.removeProperty('--parallax-offset'));
    };
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#home">
            SJ<span>AS</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science & Engineering Graduate</p>
            <h1>Sayeed Jahin Abid Samin</h1>
            <p className="role">Software Engineer • AI/ML Enthusiast • Researcher</p>
            <p className="lead">
              I build practical software systems and intelligent applications that connect research rigor with real-world impact.
              My work spans AI/ML, full-stack engineering, data systems, and problem solving across academic and product-focused projects.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="#resume">View Resume</a>
              <a className="btn" href="#contact">Contact Me</a>
            </div>
            <div className="socials">
              <a href="https://github.com/Abid214" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sayeed-jahin-abid-533b90203/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:sayeedjahinabidsamin@gmail.com">Email</a>
            </div>
          </div>

          <div className="avatar-wrap">
            <div className="photo-frame" aria-label="Profile portrait" data-parallax="0.68">
              <img src={avatar} alt="Sayeed Jahin Abid Samin portrait" />
            </div>
            <span className="parallax-orb" data-parallax="0.34" aria-hidden="true" />
          </div>
        </section>

        <section className="stats-bar wrap" aria-label="Experience highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section wrap">
          <div className="section-heading">
            <p className="meta">About</p>
            <h2>Engineering with purpose.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I am a Computer Science graduate from Independent University, Bangladesh, with hands-on experience in AI-driven product development,
                full-stack engineering, and research-based problem solving. My work focuses on building systems that are useful, scalable, and technically grounded.
              </p>
              <p>
                Across academic and applied projects, I have designed deployment-ready solutions, explored explainable AI, created research-backed systems,
                and worked across frontend, backend, databases, and cloud-oriented workflows.
              </p>
            </div>
            <div className="pill-box">
              <div className="tags">
                {interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section wrap">
          <div className="section-heading">
            <p className="meta">Skills</p>
            <h2>Technical toolkit.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="card feature-card">
                <p className="meta">{group.title}</p>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section wrap">
          <div className="section-heading">
            <p className="meta">Projects</p>
            <h2>Selected work.</h2>
          </div>
          <div className="project-grid">
            {projectHighlights.map((project) => (
              <article key={project.title} className="card project-card">
                <p className="meta">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags compact-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section wrap">
          <div className="section-heading">
            <p className="meta">Resume</p>
            <h2>Background at a glance.</h2>
          </div>

          <div className="resume-layout">
            <div className="card resume-card">
              <p className="meta">Professional summary</p>
              <ul className="resume-list">
                {resumePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="card resume-card">
              <p className="meta">Education</p>
              <div className="resume-education">
                <strong>{education[0]}</strong>
                <span>{education[1]}</span>
                <small>{education[2]}</small>
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <a className="btn primary" href="/Sayeed_Jahin_Abid_Samin_CV.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a className="btn" href="/Sayeed_Jahin_Abid_Samin_CV.pdf" target="_blank" rel="noreferrer">
              Open Resume
            </a>
          </div>
        </section>

        <section id="research" className="section wrap">
          <div className="section-heading">
            <p className="meta">Research</p>
            <h2>Academic and applied research focus.</h2>
          </div>
          <div className="card feature-card research-card">
            <p className="meta">Featured topic</p>
            <h3>A Comprehensive Framework for OBE Based Course Management</h3>
            <p>
              Focused on software-supported approaches for course management, outcome-based assessment, and performance tracking in higher education systems.
            </p>
            <p>
              My research work also includes systematic literature review methodology, explainable AI, and machine learning pipelines for real-world problems in healthcare and digital security.
            </p>
          </div>
        </section>

        <section id="contact" className="section wrap">
          <div className="section-heading">
            <p className="meta">Contact</p>
            <h2>Let’s connect.</h2>
          </div>
          <div className="contact-box">
            <p>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/Abid214" target="_blank" rel="noreferrer">
                github.com/Abid214
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/in/sayeed-jahin-abid-533b90203/" target="_blank" rel="noreferrer">
                linkedin.com/in/sayeed-jahin-abid-533b90203/
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:sayeedjahinabidsamin@gmail.com">sayeedjahinabidsamin@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+8801771911141">+880 1771-911141</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
