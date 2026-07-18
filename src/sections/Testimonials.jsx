import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../data/content";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials__head > *", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".t-card", {
        y: 34,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".testimonials__track", start: "top 82%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section testimonials">
      <div className="container">
        <div className="testimonials__head">
          <span className="eyebrow">In their words</span>
          <h2>Parents, students and alumni tell it straight</h2>
        </div>

        <div className="testimonials__track">
          {testimonials.map((t) => (
            <figure className="t-card" key={t.name}>
              <p className="t-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <figcaption>
                <img src={t.image} alt={t.name} />
                <div>
                  <p className="t-card__name">{t.name}</p>
                  <p className="t-card__role">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
