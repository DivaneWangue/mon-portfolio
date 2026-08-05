// src/components/Portfolio.jsx
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import './index.scss';
import Mon_profil from '../assets/mon-profil.jpg';

// Hero Component
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-panel">
          <span className="status-badge">
            <span className="status-dot"></span>
            Disponible dès septembre 2026
          </span>
          <h1 className="hero-title">Divane WANGUE</h1>
          <p className="hero-subtitle">Ingénieur RelOps / DevOps / Full Stack, Release Management, CI/CD, Automatisation & Agents IA</p>
          <p className="hero-description">
            Futur Expert en Architecture et Développement Logiciel, je me spécialise en
            ingénierie DevOps et automatisation des processus de release management. Maîtrisant
            Python, Jenkins, Ansible, Docker et les pipelines CI/CD, j'ai une appétence marquée pour
            l'automatisation des patterns répétitifs et la mise en place d'agents IA. Rigoureux et
            curieux, capable d'appliquer des procédures tout en cherchant en permanence à les
            améliorer.
          </p>

          <div className="hero-actions">
            <a href="CV_Divane.pdf" download="CV_Divane.pdf" className="hero-button">
              Télécharger CV
            </a>
            <a href="mailto:divanewangue2@gmail.com" className="contact-item">
              <Mail size={20} />
              <span>divanewangue2@gmail.com</span>
            </a>
            <a href="tel:+33743617761" className="contact-item">
              <Phone size={20} />
              <span>+33 7 43 61 77 61</span>
            </a>
          </div>
        </div>
        <div className="photo-card">
          <img
            src={Mon_profil}
            alt="Photo de Profil"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

// Competences Techniques Component
const TechnicalSkills = () => {
  const skills = [
    {
      category: 'RelOps & Release Management',
      items: ['Validation & intégration de code', 'Orchestration de release process', 'Gestion des branches & versionning', 'Management transversal d\'équipes R&D', 'Amélioration continue des processus', 'Documentation des procédures'],
      icon: 'REL'
    },
    {
      category: 'DevOps & Automatisation',
      items: [ 'Terraform', 'Ansible', 'Docker', 'Kubernetes (notions)', 'GitLab CI', 'GitHub Actions','Jenkins', 'Linux (Ubuntu, Debian)', 'Bash'],
      icon: 'OPS'
    },
    {
      category: 'Développement & IA',
      items: ['React','Svelte', 'Symfony', 'Python', 'Java', 'Supabase / API REST', 'Prisma', 'Netlify', 'SQL', 'Agents IA (LLM)', 'Modélisation UML', 'Figma', 'Draw.io'],
      icon: 'DEV'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Compétences techniques</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <h4 className="skill-category">{skill.category}</h4>
            </div>
            <div className="skill-tags">
              {skill.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Soft Skills Component
const SoftSkills = () => {
  const skills = [
    'Rigueur et curiosité technique',
    'Amélioration continue',
    'Écoute et adaptation'
  ];

  return (
    <section className="section">
      <h2 className="section-title">Soft skills</h2>
      <div className="analytical-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="analytical-item">
            <div className="bullet"></div>
            <p className="analytical-text">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Ingénieur DevOps / RelOps - Full Stack',
      company: 'SCP FANANAS - HORTOLARY - LUPETTE',
      period: 'Juin - Sept. 2026',
      tasks: [
        "Développement full stack (React + Symfony) de la plateforme immobilière LOBO.IMMO avec synchronisation ERP en temps réel (flux XML IMMOFACILE)",
        "Conception et exploitation du pipeline CI/CD complet (GitLab CI) de la plateforme immobilière LOBO.IMMO : build, tests automatisés, analyse SAST, packaging Docker et déploiement continu en production",
        "Pilotage de l'orchestration des releases : gestion des branches Git, revue et validation des livrables avant merge",
        "Automatisation des déploiements et de la synchronisation avec l'ERP immobilier (flux XML) via des scripts Python et Bash, éliminant les interventions manuelles répétitives",
        "Déploiement et sécurisation de l'infrastructure de production (VPS, Nginx, PostgreSQL, HTTPS/Let's Encrypt) et rédaction de la documentation des procédures de release et d'exploitation"
      ]
    },
    {
      id: 2,
      title: 'Développeur Web - Intégration & livraison',
      company: 'CETEC SARL',
      period: 'Août - Oct. 2022',
      tasks: [
        'Contribution aux processus de validation et de livraison de modifications de code ; participation aux déploiements en production et à la recette technique',
        'Application rigoureuse des procédures de mise en production et contribution à l\'amélioration continue des processus de livraison'
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Expériences professionnelles</h2>
      <div className="experiences-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <span className="timeline-node"></span>
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-date">{exp.period}</span>
              </div>
              <ul className="experience-list">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="experience-item">
                    <span className="list-bullet">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
    id: 1,
    title: "LOBO.IMMO - Plateforme immobilière",
    description: "Site immobilier fullstack (React + Symfony) avec synchronisation ERP en temps réel (flux XML IMMOFACILE), pipeline CI/CD GitLab (build, tests, déploiement automatisé) et infrastructure de production sécurisée : VPS Hetzner, Nginx, PostgreSQL, HTTPS (Let's Encrypt).",
    tags: ["React", "Symfony", "PostgreSQL", "GitLab CI/CD", "Nginx"],
    link: "https://lobo.immo"
    },
    {
      id: 1,
      title: "Infrastructure HA - Automatisation & Release pipeline",
      description: "Pipeline GitLab CI/CD automatisant build, tests, packaging Docker et déploiement multi-serveurs. Automatisation Ansible (IaC) et scripts Python/Bash, monitoring, logging, alerting, HTTPS (Let's Encrypt). Architecture HA : 2 serveurs applicatifs + Load Balancer Nginx, zéro intervention manuelle en production.",
      tags: ["GitLab CI/CD", "Ansible", "Docker", "Nginx", "Python", "Bash"],
    },
    {
      id: 2,
      title: "Plateforme GetJob",
      description: "Développement full stack (React + Supabase) avec déploiement automatisé sur infrastructure cloud (Netlify) et pipeline de livraison continue. Scripting Python pour l'automatisation des traitements backend et modélisation UML.",
      tags: ["React", "Supabase", "Python", "Netlify", "CI/CD"],
      link: "https://my-getjop-app.netlify.app/"
    },
    {
      id: 3,
      title: "Comparateur de prix",
      description: "Site web permettant de comparer les prix des produits dans différents supermarchés. Développé avec Svelte et Prisma.",
      tags: ["Svelte", "Scss", "Prisma"],
      link: "https://wangue-price-comparator-bts.vercel.app/"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Projets </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          project.link ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-icon">🔗</span>
              </div>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </a>
          ) : (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  const education = [
    {
      title: 'Expert en Architecture & Développement Logiciel (E.A.D.L )',
      school: '3iL École d\'ingénieurs - Limoges',
      period: '2026 - 2028'
    },
    {
      title: 'Bachelor Concepteur & Développeur Web Full Stack (C.D.W.F.S )',
      school: '3iL École d\'ingénieurs - Limoges',
      period: '2025 - 2026'
    },
    {
      title: 'Licence Technologique en Genie Logiciel (G.L)',
      school: 'Institut Universitaire de Technologies, Douala - Cameroun',
      period: '2024 - 2025'
    },
    {
      title: 'BTS en Gestion des Systemes d\'Informations (G.S.I)',
      school: 'Institut Universitaires du Golfe de Guinnée, Douala - Cameroun',
      period: '2022 - 2024'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Formations</h2>
      <div className="education-container">
        {education.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <span className="timeline-node"></span>
            <div className="education-card">
              <div className="education-content">
                <div>
                  <h3 className="education-title">{edu.title}</h3>
                  <p className="education-school">{edu.school}</p>
                </div>
                <span className="education-date">{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Languages Component
const Languages = () => {
  return (
    <section className="section">
      <h2 className="section-title">Langues parlées</h2>
      <div className="languages-container">
        <span className="language-tag">🇫🇷 Français - Natif</span>
        <span className="language-tag">🇬🇧 Anglais - C1</span>
        <span className="language-tag">🇪🇸 Espagnol - B1</span>
      </div>
    </section>
  );
};

// Certifications Component
const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      period: '2026'
    },
    {
      title: 'Solutions Architect Associate (en cours)',
      issuer: 'Amazon Web Services',
      period: '2026'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="certification-card">
            <span className="certification-badge">{cert.period}</span>
            <h3 className="certification-title">{cert.title}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Hobbies Component
const Hobbies = () => {
  const hobbies = [
    { name: 'Basketball', icon: '🏀' },
    { name: 'Football', icon: '⚽' },
    { name: 'Musique', icon: '🎵' },
    { name: 'Lecture', icon: '📚' },
    { name: 'Voyages', icon: '✈️' }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Loisirs & Centres d'Intérêt</h2>
      <div className="hobbies-grid">
        {hobbies.map((hobby, idx) => (
          <div key={idx} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <p className="hobby-name">{hobby.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2026 Divane WANGUE. Tous droits réservés.</p>
        <div className="footer-social">
          <a href="https://github.com/DivaneWangue" target="_blank" rel="noopener noreferrer" className="social-link">
            <span><Github size={24} /></span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/divane-wangue-49a567350/" target="_blank" rel="noopener noreferrer" className="social-link">
            <span><Linkedin size={24} /></span> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="portfolio">
      <main className="main-content">
        <Hero />
        <TechnicalSkills />
        <SoftSkills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Languages />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}