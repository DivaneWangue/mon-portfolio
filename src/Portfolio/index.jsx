import React from 'react';
import { Mail, Phone, MapPin, Code, Database, Briefcase, Award } from 'lucide-react';
import './index.scss';

// Hero Component
const Hero = () => {
  return (
    <div className="">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="photo-container">
            <div className="photo-wrapper">
              <img
                src="src/assets/mon-profil.jpg"
                alt="Photo de Divane Mael Wangue"
                className="profile-photo"
              />
              
            </div>
            <div className="photo-glow"></div>
          </div>

          <div className="info-card">
            <h1 className="main-title">Divane Mael Wangue</h1>
            <p className="subtitle">Développeur Web Full Stack</p>
            <p className="description">
              Étudiant en 3ᵉ année de Bachelor CDWFS à 3iL Ingénieurs (Limoges), passionné par le développement web. 
              Je recherche un stage professionnel pour mettre en pratique mes compétences en front-end et back-end 
              et contribuer à des projets innovants.
            </p>
            
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
        </div>
      </div>
    </div>
  );
};

// Technical Skills Component
const TechnicalSkills = () => {
  const skills = [
    { category: 'Langages', items: ['HTML', 'CSS', 'JavaScript', 'python', 'php','Java'], icon: '💻' },
    { category: 'Frameworks', items: ['React', 'Laravel', 'Svelte', 'Node.js','Svelte'], icon: '⚛️' },
    { category: 'Librairies', items: ['React', 'Vite', 'Supabase', 'Scss','Lucide-React',], icon: '💻' },
    { category: 'Bases de données', items: ['MySQL', 'MongoDB','Prisma'], icon: '🗄️' },
    { category: 'Méthodologies', items: ['Agile', 'Scrum', 'Merise'], icon: '🔧' },
    { category: 'Outils', items: ['Git', 'GitHub', 'Vercel', 'PostHog', 'Figma', 'Docker'], icon: '🛠️' }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon">💻</span>
        Compétences Techniques
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

// Analytical Skills Component
const AnalyticalSkills = () => {
  const skills = [
    'Conception et modélisation de systèmes d\'information (UML)',
    'Création, modification et rattachement de base de données',
    'Gestion de projet web et logiciel',
    'Analyse de données et résolution de problèmes (Excel, Power BI)'
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon">📊</span>
        Compétences Analytiques et Gestion
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
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon">💼</span>
        Expériences Professionnelles
      </h2>
      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Stagiaire Développement Web</h3>
            <p className="experience-company">CETEC SARL</p>
          </div>
          <span className="experience-date">Août - Octobre 2023</span>
        </div>
        <ul className="experience-list">
          <li className="experience-item">
            <span className="list-bullet">•</span>
            <span>Conception et réalisation d'un site web comparateur de prix des produits dans les supermarchés</span>
          </li>
          <li className="experience-item">
            <span className="list-bullet">•</span>
            <span>Gestion de projet et coordination avec l'équipe technique</span>
          </li>
        </ul>
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
      link: "https://github.com/DivaneWangue/Projet-soutenance-bts"
    },
    {
      id: 2,
      title: "Mini jeu narratif RPG",
      description: "Prototype d’un mini jeu narratif où le joueur découvre l’histoire de la princesse Gronnella qui a été enlevée et doit la sauver.",
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://github.com/votre-username/projet2"
    },
    {
      id: 3,
      title: "Portfolio personnel",
      description: "Portfolio interactif développé avec React et Vite, utilisant SASS pour le styling.",
      tags: ["React", "Vite", "SASS"],
      link: "https://github.com/DivaneWangue/mon-portfolio"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">🚀 Projets Personnels</h2>
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
const OpenSource = () => {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="title-icon">🌟</span>
        Contributions Open Source
      </h2>
      <div className="opensource-container">
        {[1, 2].map(i => (
          <div key={i} className="opensource-card">
            <div className="opensource-content">
              <span className="opensource-icon">📁</span>
              <div className="opensource-info">
                <h3 className="opensource-title">Nom du projet</h3>
                <p className="opensource-description">
                  Description de votre contribution au projet open source.
                </p>
                <div className="opensource-meta">
                  <span className="meta-item">
                    <span>🐙</span>
                    username/repo
                  </span>
                  <span>• 10 commits</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  const education = [
    {
      title: 'Bachelor Concepteur & Développeur Web Full Stack',
      school: '3iL Ingénieurs - Limoges',
      period: '2025 - 2026'
    },
    {
      title: 'BTS Gestion des Systèmes d\'Information',
      school: 'IUG Douala',
      period: '2022 - 2024'
    },
    {
      title: 'Licence Technologique Génie Logiciel',
      school: 'IUT Douala',
      period: '2024 - 2025'
    },
    {
      title: 'Baccalauréat Trilingue',
      school: 'Lycée Bilingue de Njombe',
      period: '2020 - 2021'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">🎓 Formations</h2>
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
      <h2 className="section-title">🌍 Langues Parlées</h2>
      <div className="languages-container">
        <span className="language-tag">🇫🇷 Français B2</span>
        <span className="language-tag">🇬🇧 Anglais C1</span>
        <span className="language-tag">🇪🇸 Espagnol B1</span>
      </div>
    </section>
  );
};

// Strengths Component
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
        <span className="title-icon">🏆</span>
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
    { name: 'Voyage', icon: '✈️' }
  ];

  return (
    <section className="section">
      <h2 className="section-title">🎯 Loisirs & Centres d'Intérêt</h2>
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
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Divane Mael Wangue. Tous droits réservés.</p>
        <div className="footer-social">
          <a href="https://github.com/DivaneWangue" target="_blank" rel="noopener noreferrer" className="social-link">
            <span></span> GitHub
          </a>
          <a href="https://linkedin.com/in/divane-mael-wangue-49a567350" target="_blank" rel="noopener noreferrer" className="social-link">
            <span ></span> LinkedIn
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