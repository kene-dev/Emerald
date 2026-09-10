import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { school } from "../data/content";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#academics", label: "Academics" },
  { href: "#admissions", label: "Admissions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (window.__lenis) {
      if (open) {
        window.__lenis.stop();
      } else {
        window.__lenis.start();
      }
    }
  }, [open]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (window.__lenis) {
      window.__lenis.start();
    }

    const target = document.querySelector(href);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -70, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav ref={navRef} className="nav">
      <div className="nav__inner container">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => handleNav(e, "#top")}
        >
          <span className="nav__crest">
            <svg viewBox="0 0 40 40" width="34" height="34">
              <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M20 8 L26 18 L20 32 L14 18 Z" fill="currentColor" />
            </svg>
          </span>
          <span className="nav__brandtext">{school.shortName}</span>
        </a>

        <div className="nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__cta">
          <a href="#admissions" onClick={(e) => handleNav(e, "#admissions")} className="btn btn--gold">
            Apply for Admission
          </a>
        </div>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Full-screen mobile sidebar via portal */}
      {createPortal(
        <div className={`nav__mobile ${open ? "is-open" : ""}`}>
          <div className="nav__mobile-top">
            <a
              href="#top"
              className="nav__mobile-brand"
              onClick={(e) => handleNav(e, "#top")}
            >
              <span className="nav__crest">
                <svg viewBox="0 0 40 40" width="38" height="38">
                  <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M20 8 L26 18 L20 32 L14 18 Z" fill="currentColor" />
                </svg>
              </span>
              <span>{school.shortName}</span>
            </a>
            <button
              className="nav__mobile-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="nav__mobile-body">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav__mobile-link"
                onClick={(e) => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav__mobile-bottom">
            <a
              href="#admissions"
              onClick={(e) => handleNav(e, "#admissions")}
              className="btn btn--gold nav__mobile-cta"
            >
              Apply for Admission
            </a>
            <div className="nav__mobile-info">
              <p>📍 {school.address}</p>
              <p>📞 {school.phone}</p>
              <p>✉️ {school.email}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}


