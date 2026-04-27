import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.85rem 2.5rem",
      borderBottom: "0.5px solid rgba(167,139,250,0.15)",
      background: "rgba(8,8,15,0.95)",
      backdropFilter: "blur(12px)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "18px",
        fontWeight: "700",
        color: "#a78bfa",
        textDecoration: "none",
        letterSpacing: "1px",
      }}>
        U.
      </Link>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              fontSize: "13px",
              color: location.pathname === link.to ? "#a78bfa" : "#64748b",
              textDecoration: "none",
              letterSpacing: "0.3px",
              transition: "color 0.2s",
              fontWeight: location.pathname === link.to ? "500" : "400",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;