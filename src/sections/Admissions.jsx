import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { admissionsInfo } from "../data/content";
import "./Admissions.css";

gsap.registerPlugin(ScrollTrigger);

export default function Admissions() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".admissions__head > *", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".admissions__status-banner", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".admissions__status-banner", start: "top 85%" },
      });

      gsap.from(".admissions__card", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".admissions__grid", start: "top 85%" },
      });

      gsap.from(".admissions__cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".admissions__cta", start: "top 90%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="admissions" ref={rootRef} className="section section--tint admissions">
      <div className="container">
        <div className="admissions__head">
          <span className="eyebrow">Admissions</span>
          <h2>Start Your Child’s Journey With Us</h2>
        </div>

        <div className="admissions__status-banner">
          <span className="admissions__status-pill">Status</span>
          <p className="admissions__status-text">
            <strong>{admissionsInfo.status}</strong> {admissionsInfo.notice}
          </p>
        </div>

        <div className="admissions__grid">
          {admissionsInfo.items.map((item, i) => (
            <div className="admissions__card" key={item.label}>
              <span className="admissions__cardindex">{String(i + 1).padStart(2, "0")}</span>
              <p className="admissions__cardlabel">{item.label}</p>
              <h3 className="admissions__cardvalue">{item.value}</h3>
              <p className="admissions__carddesc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="admissions__cta">
          <a href="#contact" className="btn btn--gold">Apply Now</a>
          <a href="tel:08023070368" className="btn btn--outline admissions__ctaline">
            Call Admissions: 08023070368
          </a>
        </div>
      </div>
    </section>
  );
}
