import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { heroImage, school } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const crestRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Crest badge draws itself in — manual stroke-dash technique
      // (keeps this dependency-free; no DrawSVG club plugin required)
      const strokes = crestRef.current.querySelectorAll(
        ".hero__crest-ring, .hero__crest-mark"
      );
      strokes.forEach((el) => {
        const length = el.getTotalLength();
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = `${length}`;
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.set(crestRef.current, { opacity: 1 });
      tl.to(strokes, {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: "power2.inOut",
        stagger: 0.15,
      });

      // Eyebrow + headline lines + sub + CTAs stagger in
      tl.from(".hero__eyebrow", { y: 18, opacity: 0, duration: 0.6 }, 0.3)
        .from(
          ".hero__line",
          { yPercent: 130, opacity: 0, duration: 0.9, stagger: 0.09 },
          0.45
        )
        .from(".hero__sub", { y: 16, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(
          ".hero__ctas .btn",
          { y: 14, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.45"
        )
        .from(".hero__scrollcue", { opacity: 0, duration: 0.6 }, "-=0.3");

      // Parallax on the image as user scrolls
      gsap.to(imgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="hero">
      <div className="hero__media">
        <img ref={imgRef} src={heroImage} alt="Students at Emerald College" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__crest" ref={crestRef}>
        <svg viewBox="0 0 120 120" width="90" height="90">
          <circle className="hero__crest-ring" cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            className="hero__crest-mark"
            d="M60 24 L78 60 L60 96 L42 60 Z M60 40 L69 60 L60 80 L51 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow eyebrow">Est. {school.founded} · Lekki, Lagos</span>
        <h1 className="hero__headline">
          <span className="hero__line-wrap"><span className="hero__line">Raising thinkers,</span></span>
          <span className="hero__line-wrap"><span className="hero__line">not just</span></span>
          <span className="hero__line-wrap"><span className="hero__line hero__line--gold">exam sitters.</span></span>
        </h1>
        <p className="hero__sub">
          {school.name} blends the National Curriculum with Cambridge-standard rigour, in
          classrooms small enough that every child is known by name.
        </p>
        <div className="hero__ctas">
          <a href="#admissions" className="btn btn--gold">Apply Now</a>
          <a href="#contact" className="btn btn--outline">Book a Tour</a>
        </div>
      </div>

      <div className="hero__scrollcue">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  );
}
