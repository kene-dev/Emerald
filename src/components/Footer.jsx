import { school } from "../data/content";
import "./Footer.css";

const ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85C2.38 3.96 3.9 2.42 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.73.07-2.27.1-3.32 1.18-3.43 3.43-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.11 2.24 1.16 3.32 3.43 3.43 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c2.26-.1 3.32-1.18 3.43-3.43.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.11-2.25-1.17-3.32-3.43-3.43A63.6 63.6 0 0 0 12 4Zm0 3.5A4.5 4.5 0 1 1 12 16.5a4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-1.99a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M23 12s0-3.4-.43-5a2.9 2.9 0 0 0-2.05-2.06C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.52.44A2.9 2.9 0 0 0 1.43 7C1 8.6 1 12 1 12s0 3.4.43 5a2.9 2.9 0 0 0 2.05 2.06C5.1 19.5 12 19.5 12 19.5s6.9 0 8.52-.44A2.9 2.9 0 0 0 22.57 17C23 15.4 23 12 23 12ZM9.7 15.3V8.7l5.8 3.3-5.8 3.3Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__crest">
            <svg viewBox="0 0 40 40" width="30" height="30">
              <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M20 8 L26 18 L20 32 L14 18 Z" fill="currentColor" />
            </svg>
          </span>
          <div>
            <p className="footer__name">{school.name}</p>
            <p className="footer__tagline">{school.tagline}</p>
          </div>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__social">
          {Object.entries(school.social).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noreferrer" aria-label={key} className="footer__icon">
              {ICONS[key]}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        <p>Registered with the Lagos State Ministry of Education</p>
      </div>
    </footer>
  );
}
