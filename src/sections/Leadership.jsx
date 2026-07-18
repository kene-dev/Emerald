import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { leadership } from "../data/content";
import "./Leadership.css";

gsap.registerPlugin(ScrollTrigger);

export default function Leadership() {
  const rootRef = useRef(null);
  const featured = leadership.find((l) => l.featured);
  const rest = leadership.filter((l) => !l.featured);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".leadership__head > *", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.from(".leadership__featured", {
        x: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".leadership__grid", start: "top 80%" },
      });

      gsap.from(".leadership__card", {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".leadership__grid", start: "top 78%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leadership" ref={rootRef} className="section section--tint leadership">
      <div className="container">
        <div className="leadership__head">
          <span className="eyebrow">Leadership</span>
          <h2>The people who set the tone</h2>
        </div>

        <div className="leadership__grid">
          {featured && (
            <div className="leadership__featured">
              <img src={featured.image} alt={featured.name} />
              <div className="leadership__featuredinfo">
                <h3>{featured.name}</h3>
                <p className="leadership__title">{featured.title}</p>
                <p className="leadership__bio">{featured.bio}</p>
              </div>
            </div>
          )}

          <div className="leadership__rest">
            {rest.map((person) => (
              <div className="leadership__card" key={person.name}>
                <img src={person.image} alt={person.name} />
                <h4>{person.name}</h4>
                <p className="leadership__title">{person.title}</p>
                <p className="leadership__bio">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
