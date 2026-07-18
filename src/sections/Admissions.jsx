import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { admissionSteps, admissionsInfo } from "../data/content";
import "./Admissions.css";

gsap.registerPlugin(ScrollTrigger);

export default function Admissions() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);

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

      // Progress line draws itself as steps enter
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".admissions__timeline",
            start: "top 60%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );

      gsap.from(".admissions__step", {
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: ".admissions__timeline", start: "top 75%" },
      });

      gsap.from(".admissions__panel", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".admissions__panels", start: "top 80%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="admissions" ref={rootRef} className="section section--tint admissions">
      <div className="container">
        <div className="admissions__head">
          <span className="eyebrow">Admissions</span>
          <h2>How a place at Emerald College gets secured</h2>
        </div>

        <div className="admissions__timeline">
          <div className="admissions__rail">
            <span className="admissions__railbg" />
            <span className="admissions__railfg" ref={lineRef} />
          </div>
          <div className="admissions__steps">
            {admissionSteps.map((step) => (
              <div className="admissions__step" key={step.title}>
                <span className="admissions__dot" />
                <p className="admissions__stepterm">{step.term}</p>
                <h3>{step.title}</h3>
                <p className="admissions__stepwindow">{step.window}</p>
                <p className="admissions__stepdesc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="admissions__panels">
          <div className="admissions__panel">
            <h4>What you'll need</h4>
            <ul>
              {admissionsInfo.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="admissions__panel">
            <h4>Term deadlines</h4>
            <ul className="admissions__deadlines">
              {admissionsInfo.deadlines.map((d) => (
                <li key={d.term}>
                  <span>{d.term}</span>
                  <span className="admissions__deadlinewindow">{d.window}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="admissions__panel">
            <h4>Fees per term</h4>
            <ul className="admissions__deadlines">
              {admissionsInfo.fees.map((f) => (
                <li key={f.level}>
                  <span>{f.level}</span>
                  <span className="admissions__deadlinewindow">{f.tuition}</span>
                </li>
              ))}
            </ul>
            <p className="admissions__note">{admissionsInfo.note}</p>
          </div>
        </div>

        <div className="admissions__cta">
          <a href="#contact" className="btn btn--ink">Download Prospectus</a>
          <a href="#contact" className="btn btn--outline admissions__ctaline">Start Application</a>
        </div>
      </div>
    </section>
  );
}
