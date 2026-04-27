import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    name: "Joke Generator",
    status: "Completed",
    statusColor: "#4ade80",
    desc: "Fetches random jokes from a real API. Built with React hooks — useState and useEffect.",
    tech: ["React", "API", "Tailwind"],
  },
  {
    id: 2,
    name: "Interactive Counter",
    status: "Completed",
    statusColor: "#4ade80",
    desc: "Counter with increment, decrement and reset. Color changes based on positive or negative value.",
    tech: ["React", "useState", "Tailwind"],
  },
  {
    id: 3,
    name: "Developer Portfolio",
    status: "In Progress",
    statusColor: "#facc15",
    desc: "This portfolio — multi-page React app with routing, Tailwind styling and smooth animations.",
    tech: ["React", "React Router", "Tailwind"],
  },
  {
    id: 4,
    name: "Full Stack MERN App",
    status: "Coming Soon",
    statusColor: "#a78bfa",
    desc: "Complete app with React frontend and Node.js + MongoDB backend. Coming in Month 3.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

function Projects() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    [headerRef, gridRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      setTimeout(() => el.classList.add("visible"), i * 150);
    });
  }, []);

  return (
    <div style={{ padding: "2.5rem 2.5rem", position: "relative", zIndex: 1 }}>

      <div ref={headerRef} className="fade-up">
        <div style={{
          fontSize: "10px",
          color: "#a78bfa",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          What I have built
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "32px",
          fontWeight: "700",
          color: "#f1f5f9",
          marginBottom: "1.75rem",
        }}>
          Projects
        </h1>
      </div>

      <div
        ref={gridRef}
        className="fade-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px",
          maxWidth: "860px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "1.25rem",
              transition: "border-color 0.25s, background 0.25s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.35)";
              e.currentTarget.style.background = "rgba(167,139,250,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "0.5rem",
            }}>
              <div style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: project.statusColor,
              }} />
              <span style={{
                fontSize: "10px",
                color: project.statusColor,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}>
                {project.status}
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              color: "#e2e8f0",
              marginBottom: "0.5rem",
            }}>
              {project.name}
            </h2>

            <p style={{
              fontSize: "12px",
              color: "#64748b",
              lineHeight: "1.7",
              marginBottom: "1rem",
            }}>
              {project.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    color: "#7c3aed",
                    background: "rgba(124,58,237,0.12)",
                    padding: "2px 9px",
                    borderRadius: "10px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;