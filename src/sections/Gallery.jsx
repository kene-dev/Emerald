import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gallery } from "../data/content";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const rootRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery__head > *", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });

      gsap.utils.toArray(".gallery__item").forEach((el, i) => {
        gsap.from(el, {
          scale: 0.9,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          delay: (i % 3) * 0.06,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={rootRef} className="section gallery">
      <div className="container">
        <div className="gallery__head">
          <span className="eyebrow">Around campus</span>
          <h2>A term, in pictures</h2>
        </div>

        <div className="gallery__grid">
          {gallery.map((img) => (
            <button
              key={img.src}
              className="gallery__item"
              onClick={() => setLightbox(img)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery__zoom">＋</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <button className="gallery__close" aria-label="Close">×</button>
        </div>
      )}
    </section>
  );
}
