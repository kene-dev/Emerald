import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { school } from "../data/content";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const rootRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__form, .contact__side", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={rootRef} className="section contact">
      <div className="container">
        <div className="contact__head">
          <span className="eyebrow">Get in touch</span>
          <h2>Come see the classrooms for yourself</h2>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <p>Thank you — we'll be in touch within one working day.</p>
              </div>
            ) : (
              <>
                <div className="contact__row">
                  <label>
                    <span>Full name</span>
                    <input type="text" name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input type="tel" name="phone" required placeholder="080X XXX XXXX" />
                  </label>
                </div>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" required placeholder="you@email.com" />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows="4" required placeholder="Tell us about your child and what you're looking for..." />
                </label>
                <button type="submit" className="btn btn--ink">Send Message</button>
              </>
            )}
          </form>

          <div className="contact__side">
            <div className="contact__map">
              <iframe
                title="School location map"
                src={school.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact__details">
              <div>
                <p className="contact__label">Address</p>
                <p>{school.address}</p>
              </div>
              <div>
                <p className="contact__label">Phone</p>
                <p>{school.phone}</p>
              </div>
              <div>
                <p className="contact__label">Email</p>
                <p>{school.email}</p>
              </div>
              <div>
                <p className="contact__label">Office hours</p>
                <p>{school.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
