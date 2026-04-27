import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const skills = [
  "React.js", "JavaScript ES6+", "Node.js", "Express.js",
  "MongoDB", "Tailwind CSS", "WordPress", "HTML & CSS",
  "REST APIs", "Git & GitHub",
];

const typedTexts = [
  "MERN Stack Developer",
  "React Developer",
  "WordPress Expert",
  "Full Stack Developer",
];

function useTypingEffect() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typedTexts[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % typedTexts.length);
        }
      }
    }, deleting ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return displayed;
}

function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Home() {
  const typed = useTypingEffect();
  const skillsRef = useFadeUp();
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* Hero */}
      <div
        ref={heroRef}
        className="fade-up"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "3.5rem 2rem 2.5rem",
        }}
      >
        <div style={{
          fontSize: "11px",
          color: "#a78bfa",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "1rem",
          border: "0.5px solid rgba(167,139,250,0.3)",
          padding: "4px 14px",
          borderRadius: "20px",
          display: "inline-block",
        }}>
          Open to work
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(36px, 6vw, 54px)",
          fontWeight: "700",
          color: "#f1f5f9",
          lineHeight: "1.1",
          marginBottom: "0.6rem",
        }}>
          Hi, I am <span style={{ color: "#a78bfa" }}>Umer</span>
        </h1>

        <div style={{
          fontSize: "18px",
          color: "#94a3b8",
          marginBottom: "1rem",
          minHeight: "28px",
          fontWeight: "300",
        }}>
          {typed}<span className="cursor" />
        </div>

        <p style={{
          fontSize: "14px",
          color: "#475569",
          maxWidth: "400px",
          lineHeight: "1.8",
          marginBottom: "1.75rem",
        }}>
          Building modern web apps with React and Node.js.
          WordPress background with real client experience.
        </p>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Link to="/projects" style={{
            background: "#7c3aed",
            color: "#fff",
            border: "none",
            padding: "10px 24px",
            borderRadius: "8px",
            fontSize: "13px",
            cursor: "pointer",
            textDecoration: "none",
            fontWeight: "500",
            letterSpacing: "0.3px",
          }}>
            View Projects
          </Link>
          <Link to="/contact" style={{
            background: "transparent",
            color: "#a78bfa",
            border: "0.5px solid rgba(167,139,250,0.4)",
            padding: "10px 24px",
            borderRadius: "8px",
            fontSize: "13px",
            cursor: "pointer",
            textDecoration: "none",
            fontWeight: "500",
          }}>
            Contact Me
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)", margin: "0 2rem" }} />

      {/* Skills */}
      <div
        ref={skillsRef}
        className="fade-up"
        style={{ padding: "2rem 2.5rem" }}
      >
        <div style={{
          fontSize: "10px",
          color: "#a78bfa",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          Tech Stack
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "22px",
          fontWeight: "600",
          color: "#f1f5f9",
          marginBottom: "1.1rem",
        }}>
          My Skills
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: "12px",
                color: "#a78bfa",
                border: "0.5px solid rgba(167,139,250,0.25)",
                padding: "4px 13px",
                borderRadius: "20px",
                background: "rgba(124,58,237,0.08)",
                letterSpacing: "0.2px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;