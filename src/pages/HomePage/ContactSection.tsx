"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submit
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "input" },
    { name: "email", label: "Email", type: "input" },
    { name: "phone", label: "Phone Number", type: "input" },
    { name: "message", label: "Message", type: "textarea" },
  ];

  return (
    <>
      <style>{`
        .ct-section {
          width: 100%;
          min-height: 100svh;
          background: var(--color-primary, #3A393F);
          display: flex;
          align-items: center;
          padding: 60px 40px;
          box-sizing: border-box;
          font-family: var(--font-body, 'Work Sans', sans-serif);
        }

        .ct-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .ct-left h2 {
          font-family: var(--font-heading, 'Amoera', serif);
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: var(--color-background, #F4EDDB);
          font-weight: 400;
          margin: 0 0 32px 0;
        }

        .ct-left p {
          font-size: 14px;
          line-height: 1.7;
          color: var(--color-secondary, #8E8576);
          font-weight: 300;
          max-width: 320px;
        }

        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ct-field {
          position: relative;
          border-bottom: 1px solid var(--color-dark-soft, #44434A);
          margin-bottom: 32px;
          transition: border-color 0.3s ease;
        }

        .ct-field:focus-within {
          border-bottom-color: var(--color-accent, #B89B5E);
        }

        .ct-field label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-secondary, #8E8576);
          margin-bottom: 8px;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .ct-field:focus-within label {
          color: var(--color-accent, #B89B5E);
        }

        .ct-field input,
        .ct-field textarea {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font-body, 'Work Sans', sans-serif);
          font-size: 15px;
          font-weight: 300;
          color: var(--color-background, #F4EDDB);
          padding: 0 0 10px 0;
          caret-color: var(--color-accent, #B89B5E);
        }

        .ct-field textarea {
          resize: none;
          height: 80px;
          line-height: 1.6;
        }

        .ct-field input::placeholder,
        .ct-field textarea::placeholder {
          color: transparent;
        }

        .ct-submit {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 8px;
          background: var(--color-background, #F4EDDB);
          color: var(--color-primary, #3A393F);
          border: none;
          padding: 16px 32px;
          font-family: var(--font-body, 'Work Sans', sans-serif);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          align-self: flex-start;
        }

        .ct-submit:hover {
          background: var(--color-accent, #B89B5E);
          color: var(--color-background, #F4EDDB);
        }

        .ct-submit svg {
          transition: transform 0.3s ease;
        }

        .ct-submit:hover svg {
          transform: translateX(4px);
        }

        @media (max-width: 900px) {
          .ct-section { padding: 80px 32px; }
          .ct-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .ct-left h2 { font-size: clamp(2.6rem, 8vw, 3.6rem); }
          .ct-left p { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .ct-section { padding: 64px 20px; }
          .ct-left h2 { font-size: clamp(2.2rem, 9vw, 3rem); }
        }
      `}</style>

      <section className="ct-section">
        <div className="ct-inner">

          {/* ── LEFT ─────────────────────────────────────────────────────── */}
          <div className="ct-left">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              An exquisite space, made together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              If you have any questions, need more information, or want to speak with our design experts.
            </motion.p>
          </div>

          {/* ── RIGHT: FORM ──────────────────────────────────────────────── */}
          <motion.form
            className="ct-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {fields.map(({ name, label, type }) => (
              <div key={name} className="ct-field">
                <label htmlFor={name}>{label}</label>
                {type === "textarea" ? (
                  <textarea
                    id={name}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={label}
                    rows={3}
                  />
                ) : (
                  <input
                    id={name}
                    name={name}
                    type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={label}
                  />
                )}
              </div>
            ))}

            <button type="submit" className="ct-submit">
              Submit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.form>

        </div>
      </section>
    </>
  );
}