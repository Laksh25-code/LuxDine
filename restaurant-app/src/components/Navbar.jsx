import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const palette = {
    accent: "#CAA86B",
    surface: "#1F1F1F",
    textPrimary: "#F5F5F5",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: palette.surface,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: palette.accent,
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        LuxDine
      </Link>

      <div>
        <Link to="/" style={{ textDecoration: "none", color: palette.textPrimary, marginRight: "1rem" }}>
        Home        
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: palette.textPrimary, marginRight: "1rem" }}>
        About       
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: palette.textPrimary, marginRight: "1rem" }}>
        Whats New       
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: palette.textPrimary, marginRight: "1rem" }}>
        Gallery        
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: palette.textPrimary, marginRight: "1rem" }}>
        Contact        
        </Link>
        
      </div>
      <div>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: palette.textPrimary,
            marginRight: "1rem",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: palette.textPrimary }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
