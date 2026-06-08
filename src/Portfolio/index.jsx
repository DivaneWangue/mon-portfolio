import React from 'react';
import { Mail, Phone, MapPin, Code, Database, Briefcase, Award, Github, Linkedin } from 'lucide-react';
import './index.scss';
import Mon_profil from '../assets/mon-profil.jpg';

// Hero Component
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-grid">
        <div className="hero-panel">
          <h1 className="hero-title">Divane Mael WANGUE</h1>
          <p className="hero-subtitle">Dev Full Stack, DevOps, DevSecOps, Architecte Logiciel, Cloud Computing et Gestion de Projet IT</p>
          <p className="hero-description">
            Futur étudiant Expert en Architecture et développement logiciel,
je recherche une alternance en développement full-stack, DevOps, DevSecOps, Architecture Logicielle, Cloud Computing et Chef de Prijet IT d'une durée de 2 ans avec un intérêt marqué pour l’automatisation des déploiements, la fiabilisation des systèmes et l’industrialisation des environnements cloud.
          </p>
          <div className="hero-actions">
            <a href="CV_Divane.pdf" download="CV_Divane.pdf" className="hero-button">
              Télécharger mon CV
            </a>
          </div>
          <div className="contact-info">
            <a href="mailto:divanewangue2@gmail.com" className="contact-item">
              <Mail size={16} />
              <span>divanewangue2@gmail.com</span>
            </a>
            <a href="tel:+33743617761" className="contact-item">
              <Phone size={16} />
              <span>+33 7 43 61 77 61</span>
            </a>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Limoges</span>
            </div>
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
    { category: 'Librairies et Frameworks', items: ['React', 'Laravel', 'Svelte','Vite','Scss','Lucide-React','Prisma'], icon: '⚛️' },
    { category: 'Bases de données', items: ['MySQL', 'MongoDB',], icon: '🗄️' },
    { category: 'Méthodologies', items: ['Agile', 'Scrum', 'Merise'], icon: '🔧' },
    { category: 'Outils', items: ['Git', 'GitLab', 'GitHub', 'Vercel', 'PostHog', 'Figma', 'Docker','Node.js','Terraform','Ansible','Jenkins','Kubernetes'], icon: '🛠️' }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon"></span>
        Compétences techniques
      </h2>
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

// Competences Analytiques Component
const AnalyticalSkills = () => {
  const skills = [
    'Conception et modélisation de systèmes d\'information (UML)',
    'Création, modification et rattachement de base de données',
    'Gestion de projet et méthodologies agiles (Scrum, Kanban)',
    'Analyse de données et résolution de problèmes (Excel, Power BI)'
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon"></span>
        Compétences analytiques et gestion
      </h2>
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
      title: 'Stagiaire Développement Web',
      company: 'CETEC SARL',
      period: 'Août - Octobre 2023',
      tasks: [
        'Conception et réalisation d\'un site web comparateur de prix des produits dans les supermarchés',
        'Gestion de projet et coordination avec l\'équipe technique'
      ]
    },
    {
      id: 2,
      title: 'Stagiaire Développeur Full Stack',
      company: 'LOBO.IMMO',
      period: 'En cours',
      tasks: [
        'Concevoir un site web de gestion immobilière pour LOBO.IMMO',
        'Développement de fonctionnalités de gestion des biens, des clients et des transactions',
        'Intégration de systèmes de prise de rendez-vous et de notifications pour améliorer l\'expérience utilisateur'
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon"></span>
        Expériences
      </h2>
      <div className="experiences-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
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
      title: "Comparateur de prix",
      description: "Site web permettant de comparer les prix des produits dans différents supermarchés. Développé avec Svelte et Prisma.",
      tags: ["Svelte", "Scss", "Prisma"],
      link: "https://wangue-price-comparator-bts.vercel.app/"
    },
    {
      id: 2,
      title: "Mini jeu narratif RPG",
      description: "Prototype d’un mini jeu narratif où le joueur découvre l’histoire de la princesse Gronnella qui a été enlevée et doit la sauver.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Plateforme web Jobs Etudiants",
      description: "Plateforme web permettant de mettre en relation les étudiants et les entreprises en recherche de nouveaux talents.",
      tags: ["React", "Vite", "Supabase"],
      link: "https://my-getjop-app.netlify.app/"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title"> Projets personnels</h2>
      <div className="projects-grid">
        {projects.map((project) => (
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
        ))}
      </div>
    </section>
  );
};

// Open Source Component
const contributions = [
  {
    id: 1,
    title: "Fork Commit Merge - Ajout d'une carte",
    description: "Ajout d'un nouveau composant ( Card ) avec React.js et Vite pour améliorer l'interface utilisateur.",
    link: "https://github.com/fork-commit-merge"
  },
];

const OpenSource = () => {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon">Contributions Open Source</span>
      
      </h2>
      <div className="opensource-container">
        {contributions.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opensource-card"
            style={{ textDecoration: 'none' }}
          >
            <div className="opensource-content">
              <span className="opensource-icon"></span>
              <div className="opensource-info">
                <h3 className="opensource-title">{item.title}</h3>
                <p className="opensource-description">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  const education = [
    {
      title: 'Bachelor Concepteur & Développeur Web Full Stack (en cours)',
      school: '3iL Ingénieurs - Limoges',
      period: '2025 - 2026'
    },
      {
      title: 'Licence Technologique Génie Logiciel',
      school: 'IUT Douala',
      period: '2024 - 2025'
    },
    {
      title: 'BTS Gestion des Systèmes d\'Information',
      school: 'IUG Douala',
      period: '2022 - 2024'
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title"> Formations</h2>
      <div className="education-container">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="education-content">
              <div>
                <h3 className="education-title">{edu.title}</h3>
                <p className="education-school">{edu.school}</p>
              </div>
              <span className="education-date">{edu.period}</span>
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
      <h2 className="section-title"> Langues parlées</h2>
      <div className="languages-container">
        <span className="language-tag">🇫🇷 Français </span>
        <span className="language-tag">🇬🇧 Anglais C1</span>
        <span className="language-tag">🇪🇸 Espagnol B1</span>
      </div>
    </section>
  );
};

// Atouts Component
const Strengths = () => {
  const strengths = [
    'Adaptabilité et apprentissage rapide',
    'Esprit d\'équipe et collaboration multiculturelle',
    'Communication et organisation',
    'Motivation et persévérance',
    'Curiosité pour les nouvelles tendances'
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon"></span>
        Atouts
      </h2>
      <div className="strengths-grid">
        {strengths.map((strength, idx) => (
          <div key={idx} className="strength-card">
            <p className="strength-text">
              <span className="strength-check">✓</span>
              {strength}
            </p>
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
      <h2 className="section-title"> Loisirs & Centres d'Intérêt</h2>
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

// Footer Component
const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      period: '2026'
    },
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Divane Mael Wangue. Tous droits réservés.</p>
        <div className="footer-social">
          <a href="https://github.com/DivaneWangue" target="_blank" rel="noopener noreferrer" className="social-link">
            <span><Github size={24} /></span> GitHub
          </a>
          <a href="https://linkedin.com/in/divane-mael-wangue-49a567350" target="_blank" rel="noopener noreferrer" className="social-link">
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
        <AnalyticalSkills />
        <Experience />
        <Projects />
        <Certifications />
        <OpenSource />
        <Education />
        <Languages />
        <Strengths />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}