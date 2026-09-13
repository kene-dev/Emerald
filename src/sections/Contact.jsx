import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { school } from "../data/content";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__side", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={rootRef} className="section contact">
      <div className="container">
        <div className="contact__head">
          <span className="eyebrow">Contact & Logistics</span>
          <h2>Have Questions? Contact Us Today</h2>
        </div>

        <div className="contact__side">
          <div className="contact__map">
            <iframe
              title="Emerald College location map"
              src={school.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact__details">
            <div>
              <p className="contact__label">School Address</p>
              <p>{school.address}</p>
            </div>
            <div>
              <p className="contact__label">Phone Numbers</p>
              <p>
                {school.phones.map((phone, idx) => (
                  <span key={phone}>
                    {idx > 0 && <br />}
                    <a href={`tel:${phone}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {phone}
                    </a>
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="contact__label">WhatsApp</p>
              <p>
                <a href={school.whatsappUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                  {school.whatsapp} (Click to message)
                </a>
              </p>
            </div>
            <div>
              <p className="contact__label">Email</p>
              <p>
                <a href={`mailto:${school.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {school.email}
                </a>
              </p>
            </div>
            <div>
              <p className="contact__label">Office Hours</p>
              <p>Mon – Thu: {school.hoursSchedule.monThu}</p>
              <p>Fri: {school.hoursSchedule.fri}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
