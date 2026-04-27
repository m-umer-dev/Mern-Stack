import { useEffect, useRef } from "react";

const skillRows = [
  { cat: "Frontend", items: "React.js, JavaScript ES6+, HTML, CSS, Tailwind CSS" },
  { cat: "Backend", items: "Node.js, Express.js (learning)" },
  { cat: "Database", items: "MongoDB (learning)" },
  { cat: "CMS", items: "WordPress — real client experience" },
  { cat: "Tools", items: "VS Code, Git, GitHub (learning)" },
];

function About() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    refs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      setTimeout(() => el.classList.add("visible"), i * 120);
    });
  }, []);

  return (
    <div style={{ padding: "2.5rem 2.5rem", maxWidth: "660px", position: "relative", zIndex: 1 }}>

      <div ref={refs[0]} className="fade-up">
        <div style={{
          fontSize: "10px",
          color: "#a78bfa",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          Who I am
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "32px",
          fontWeight: "700",
          color: "#f1f5f9",
          marginBottom: "1.5rem",
        }}>
          About <span style={{ color: "#a78bfa" }}>Me</span>
        </h1>
      </div>

      <div ref={refs[1]} className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
        {[
          "I am Umer, a web developer based in Lahore, Pakistan. I started my journey building WordPress websites for real clients — learning how to deliver professional results under real deadlines.",
          "Now I am leveling up to become a full stack MERN developer — mastering React, Node.js, Express, and MongoDB to build complete web applications from scratch.",
          "My goal is to join a great tech team in Lahore where I can grow, contribute, and ship products that make a real difference.",
        ].map((text, i) => (
          <p key={i} style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.85" }}>
            {text}
          </p>
        ))}
      </div>

      <div ref={refs[2]} className="fade-up">
        <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)", marginBottom: "1.5rem" }} />
        <div style={{
          fontSize: "10px",
          color: "#a78bfa",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          Breakdown
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "20px",
          fontWeight: "600",
          color: "#f1f5f9",
          marginBottom: "1rem",
        }}>
          Skills
        </h2>
      </div>

      <div ref={refs[3]} className="fade-up">
        {skillRows.map((row) => (
          <div
            key={row.cat}
            style={{
              display: "flex",
              gap: "1rem",
              padding: "10px 0",
              borderBottom: "0.5px solid rgba(255,255,255,0.05)",
            }}
          >
            <span style={{
              fontSize: "12px",
              color: "#a78bfa",
              fontWeight: "500",
              minWidth: "85px",
              fontFamily: "'Syne', sans-serif",
            }}>
              {row.cat}
            </span>
            <span style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6" }}>
              {row.items}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;