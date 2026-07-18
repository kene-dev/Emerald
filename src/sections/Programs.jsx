import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { programs } from "../data/content";
import "./Programs.css";

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".programs__head > *", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".program-card", {
        y: 46,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".programs__grid", start: "top 82%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="academics" ref={rootRef} className="section programs">
      <div className="container">
        <div className="programs__head">
          <span className="eyebrow">Academics</span>
          <h2>Four stages, one continuous track</h2>
        </div>

        <div className="programs__grid">
          {programs.map((p, i) => (
            <div className="program-card" key={p.id}>
              <span className="program-card__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.name}</h3>
              <p className="program-card__ages">{p.ages}</p>
              <p className="program-card__desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
