import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutImage, stats, school } from "../data/content";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const rootRef = useRef(null);
  const statRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about__imagewrap", {
        xPercent: -8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });

      gsap.from(".about__copy > *", {
        xPercent: 8,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 65%" },
      });

      // Count-up stats
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const endValue = stats[i].value;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: endValue,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toLocaleString();
          },
        });
      });

      gsap.from(".about__stat", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about__stats", start: "top 88%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="section about">
      <div className="container about__grid">
        <div className="about__imagewrap">
          <img src={aboutImage} alt="Emerald College leadership with graduating students" />
          <div className="about__imageframe" />
        </div>

        <div className="about__copy">
          <span className="eyebrow">About Emerald College</span>
          <h2>
            To be a national centre of excellence in learning, discipline, probity and service.
          </h2>
          <p>
            {school.about}
          </p>
          <div className="about__mission-box">
            <p className="about__mission-label">Our Mission</p>
            <p className="about__mission-text">
              &ldquo;{school.mission}&rdquo;
            </p>
          </div>
          <p>
            {school.history}
          </p>
        </div>
      </div>

      <div className="container about__stats">
        {stats.map((s, i) => (
          <div className="about__stat" key={s.label}>
            <p className="about__statvalue">
              <span ref={(el) => (statRefs.current[i] = el)}>0</span>
              {s.suffix}
            </p>
            <p className="about__statlabel">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
