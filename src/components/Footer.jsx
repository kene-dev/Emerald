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
  tiktok: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.11V9.41a6.33 6.33 0 0 0-.85-.05A6.33 6.33 0 0 0 3.15 15.7a6.34 6.34 0 0 0 10.84 4.49c.68-.67 1.15-1.51 1.34-2.43.08-.4.12-.81.12-1.23V8.84a8.21 8.21 0 0 0 4.14 1.3V6.69z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
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
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer__social">
          {Object.entries(school.social).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noreferrer" aria-label={key} className="footer__icon">
              {ICONS[key] || key}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        <p>21/23 Cecilia Odutuga Street, Ilasamaja, Lagos · Jack 'n' Jill Extension · Approved by Lagos State Ministry of Education</p>
      </div>
    </footer>
  );
}
