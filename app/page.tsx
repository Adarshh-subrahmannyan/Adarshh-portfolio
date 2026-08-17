'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const projects = [
  { title: 'Carbon Gurukulam', type: 'Android App', status: 'Live', desc: 'An institutional platform built by our team to manage student activity including attendance, exams, finance and communication.', stack: ['Flutter', 'Supabase', 'Dart'], link: 'https://play.google.com/store/search?q=carbon%20gurukulam&c=apps' },
  { title: 'Nila', type: 'Linux Desktop', desc: 'A retro-inspired Linux music player built because I wanted a better music experience on my own system.', stack: ['Electron', 'React', 'mpv', 'yt-dlp'], link: 'https://github.com/Adarshh-subrahmannyan/Nila-linux-music-player' },
  { title: 'MechNear', type: 'Web Project', desc: 'A location-based workshop finder connecting stranded bike riders with nearby mechanic shops.', stack: ['HTML5', 'JavaScript', 'PHP', 'SQLite'] },
  { title: 'Aksharamithra', type: 'Telegram Bot', desc: 'A multilingual learning assistant for Marathi, Hindi and Malayalam, with a future RAG-powered web platform planned.', stack: ['Python', 'Telegram API'], link: 'https://github.com/Adarshh-subrahmannyan/Aksharamithra' },
  { title: 'StudyLock', type: 'Browser Extension', desc: 'A whitelist-first focus extension with Pomodoro sessions, goals, streaks, YouTube filtering and tamper protection.', stack: ['JavaScript', 'Firefox APIs'], link: 'https://github.com/Adarshh-subrahmannyan/StudyLock' },
  { title: 'Hushh', type: 'Anonymous Chat', desc: 'My first complete anonymous chat platform, built while learning how far AI-assisted development could take an idea.', stack: ['Web', 'AI-assisted'], link: 'https://github.com/Adarshh-subrahmannyan/hushh' },
  { title: 'RupeeLens', type: 'Finance App', status: 'Paused', desc: 'A personal finance tracker focused on making everyday spending and budgeting easier to understand.', stack: ['Finance', 'App'], link: 'https://github.com/Adarshh-subrahmannyan/RupeeLens' },
];

const wins = [['Stellar 2.0', '2025'], ['Nauka', '2026'], ['HOPE 25', '2025']];
const navItems = ['About', 'Work', 'Experience', 'Contact'];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const p = projects[active];

  const scroll = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Header */}
      <header className="p-header">
        <button className="p-logo" onClick={() => scroll('home')}>
          Adarsh<span>.</span>
        </button>
        <nav className="p-nav">
          {navItems.map(n => (
            <button key={n} onClick={() => scroll(n.toLowerCase())}>{n}</button>
          ))}
        </nav>
        <a href="mailto:adarshh005@gmail.com" className="p-cta">
          Say hello <ArrowUpRight size={14} />
        </a>
        <button className="p-hamburger" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="p-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            {navItems.map(n => (
              <button key={n} onClick={() => scroll(n.toLowerCase())}>{n}</button>
            ))}
            <a href="mailto:adarshh005@gmail.com">Say hello</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section id="home" className="p-hero" style={{ position: 'relative' }}>
        <ParticleBackground />
        <div className="p-hero-inner" style={{ position: 'relative', zIndex: 10 }}>
          <div className="p-hero-content">
            <div className="p-hero-meta">
              <span className="p-pill"><MapPin size={11} /> Kerala, India</span>
              <span className="p-pill p-pill-available">
                <span className="p-pill-dot" />
                Open to opportunities
              </span>
            </div>

            <p className="p-hero-label">CS Student &amp; Developer</p>
            <h1 className="p-hero-name">
              Adarsh<br />
              <span>Subrahmannyan</span>
            </h1>
            <p className="p-hero-desc">
              I turn weird ideas into working software — web, mobile and desktop.
              Building with React, Flutter and a lot of curiosity.
            </p>
            <div className="p-hero-actions">
              <button onClick={() => scroll('work')} className="p-btn-primary">
                View my work <ArrowRight size={15} />
              </button>
              <div className="p-hero-stack">
                {['React', 'Flutter', 'Supabase', 'Linux'].map(x => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-hero-portrait">
            <div className="p-portrait-glow" />
            <Image
              src="/adarsh-cutout.png"
              alt="Adarsh Subrahmannyan"
              fill
              priority
              className="p-portrait-img"
            />
          </div>
        </div>

        <div className="p-scroll-hint">
          <span>Scroll</span>
          <div className="p-scroll-line" />
        </div>
      </section>

      {/* Stats row */}
      <div className="p-stats">
        <div><strong>10+</strong><span>Projects shipped</span></div>
        <div><strong>3</strong><span>Hackathon wins</span></div>
        <div><strong>2+</strong><span>Years building</span></div>
        <div><strong>CUSAT</strong><span>B.Tech IT</span></div>
      </div>

      {/* Work */}
      <section id="work" className="p-section">
        <div className="p-section-head">
          <div>
            <p className="p-section-label">Selected Work</p>
            <h2 className="p-section-title">Things I&apos;ve Built</h2>
          </div>
          <button className="p-next-btn" onClick={() => setActive((active + 1) % projects.length)}>
            Next <ArrowRight size={14} />
          </button>
        </div>

        {/* Featured project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={p.title}
            className="p-featured"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="p-featured-head">
              <div>
                <span className="p-project-type">{p.type}</span>
                {p.status && <span className="p-status-badge">{p.status}</span>}
              </div>
              <span className="p-project-index">{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            </div>
            <h3 className="p-featured-title">{p.title}</h3>
            <p className="p-featured-desc">{p.desc}</p>
            <div className="p-featured-foot">
              <div className="p-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              {p.link
                ? <a href={p.link} target="_blank" rel="noreferrer" className="p-project-link">View project <ArrowUpRight size={14} /></a>
                : <span className="p-project-muted">Academic project</span>
              }
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project list */}
        <div className="p-project-list">
          {projects.map((x, i) => (
            <button
              key={x.title}
              className={`p-project-row${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="p-row-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="p-row-title">{x.title}</span>
              <span className="p-row-type">{x.type}</span>
              <ArrowRight size={14} className="p-row-arrow" />
            </button>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-section">
        <div className="p-section-head">
          <div>
            <p className="p-section-label">About</p>
            <h2 className="p-section-title">Who I am</h2>
          </div>
        </div>
        <div className="p-about-grid">
          <div className="p-about-bio">
            <p>
              I&apos;m <strong>Adarsh Subrahmannyan</strong>, a Computer Science student at CUSAT who
              enjoys building useful software around real problems.
            </p>
            <p>
              I experiment with technologies, work on side projects, participate in hackathons
              and try to turn ideas into products that actually work. I use AI as a development
              tool — not a shortcut, but an accelerator.
            </p>
          </div>
          <div className="p-about-side">
            <div className="p-detail-block">
              <p className="p-detail-label">Education</p>
              <div className="p-detail-rows">
                <div className="p-detail-row">
                  <span>B.Tech Information Technology</span>
                  <span>CUSAT · Ongoing</span>
                </div>
                <div className="p-detail-row">
                  <span>Diploma — Computer Engineering</span>
                  <span>Completed</span>
                </div>
              </div>
            </div>
            <div className="p-detail-block">
              <p className="p-detail-label">Interests</p>
              <div className="p-traits">
                {['AI-assisted dev', 'Linux', 'Open Source', 'Hackathons', 'Cybersecurity', 'RAG'].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="p-section">
        <div className="p-section-head">
          <div>
            <p className="p-section-label">Experience</p>
            <h2 className="p-section-title">What I&apos;ve Done</h2>
          </div>
        </div>
        <div className="p-exp-list">
          <div className="p-exp-row">
            <div className="p-exp-left">
              <span className="p-exp-role">Freelance Developer</span>
              <span className="p-exp-co">Independent</span>
            </div>
            <span className="p-exp-yr">Ongoing</span>
          </div>
          <div className="p-exp-row">
            <div className="p-exp-left">
              <span className="p-exp-role">Web Development Intern</span>
              <span className="p-exp-co">College Website Project</span>
            </div>
            <span className="p-exp-yr">Past</span>
          </div>
          <div className="p-exp-row">
            <div className="p-exp-left">
              <span className="p-exp-role">Innovation &amp; Technical Events</span>
              <span className="p-exp-co">IEDC · 3+ Years</span>
            </div>
            <span className="p-exp-yr">2022–Present</span>
          </div>
        </div>

        {/* Hackathon wins */}
        <div style={{ marginTop: '56px' }}>
          <p className="p-detail-label" style={{ marginBottom: '20px' }}>Hackathon Wins</p>
          <div className="p-exp-list">
            {wins.map(([name, year], i) => (
              <div key={name} className="p-exp-row">
                <div className="p-exp-left">
                  <span className="p-exp-role">{name}</span>
                  <span className="p-exp-co">Developer · Presenter · Documentation Lead</span>
                </div>
                <span className="p-exp-yr">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building */}
      <section id="building" className="p-section">
        <Link href="/build" className="p-building-row">
          <div className="p-building-left">
            <span className="p-building-dot" />
            <span className="p-building-label">Something in progress</span>
          </div>
          <span className="p-building-cta">Explore the journey <ArrowRight size={14} /></span>
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="p-contact">
        <p className="p-section-label">Contact</p>
        <h2 className="p-contact-headline">
          Have a weird<br />
          <a href="mailto:adarshh005@gmail.com">idea?</a>
        </h2>
        <p className="p-contact-sub">Let&apos;s turn it into something that works.</p>
        <div className="p-contact-links">
          <a href="mailto:adarshh005@gmail.com"><Mail size={16} /><span>adarshh005@gmail.com</span><ArrowUpRight size={14} /></a>
          <a href="https://www.linkedin.com/in/adarsh-subrahmannyan-p-a879a7370/" target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LinkedIn</span><ArrowUpRight size={14} /></a>
          <a href="https://github.com/Adarshh-subrahmannyan" target="_blank" rel="noreferrer"><Github size={16} /><span>GitHub</span><ArrowUpRight size={14} /></a>
          <a href="https://instagram.com/__adarshhp_" target="_blank" rel="noreferrer"><Instagram size={16} /><span>Instagram</span><ArrowUpRight size={14} /></a>
        </div>
      </section>

      <footer className="p-footer">
        <span>© 2026 Adarsh Subrahmannyan</span>
        <button onClick={() => scroll('home')}>Back to top ↑</button>
      </footer>
    </main>
  );
}
