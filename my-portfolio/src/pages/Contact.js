import { useEffect, useRef } from "react";

const contacts = [
  { icon: "@", label: "Email", value: "omaraamir89@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "http://www.linkedin.com/in/muhammad-umer-amir" },
  { icon: "W", label: "WhatsApp", value: "+92 305 1116544" },
  { icon: "PK", label: "Location", value: "Lahore, Pakistan" },
];

function Contact() {
  const refs = [useRef(null), useRef(null)];

  useEffect(() => {
    refs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      setTimeout(() => el.classList.add("visible"), i * 150);
    });
  }, []);

  return (
    <div style={{ padding: "2.5rem 2.5rem", position: "relative", zIndex: 1 }}>

      <div ref={refs[0]} className="fade-up">
        <div style={{
          fontSize: "10px",
          color: "#a78bfa",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          Get in touch
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "32px",
          fontWeight: "700",
          color: "#f1f5f9",
          marginBottom: "0.5rem",
        }}>
          Contact <span style={{ color: "#a78bfa" }}>Me</span>
        </h1>
        <p style={{
          fontSize: "13px",
          color: "#475569",
          marginBottom: "1.75rem",
        }}>
          Open to opportunities in Lahore — let's talk.
        </p>
      </div>

      <div
        ref={refs[1]}
        className="fade-up"
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "380px" }}
      >
        {contacts.map((c) => (
          <div
            key={c.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0.9rem 1rem",
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              transition: "border-color 0.2s, background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
              e.currentTarget.style.background = "rgba(124,58,237,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            <div style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "rgba(124,58,237,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#a78bfa",
              fontWeight: "600",
              fontFamily: "'Syne', sans-serif",
              flexShrink: 0,
            }}>
              {c.icon}
            </div>
            <div>
              <div style={{
                fontSize: "10px",
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "2px",
              }}>
                {c.label}
              </div>
              <div style={{
                fontSize: "13px",
                color: "#e2e8f0",
                fontWeight: "500",
              }}>
                {c.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;