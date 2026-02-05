import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const go = (id) => {
    // If already on home, scroll
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // If on /join, redirect to home with anchor
    window.location.href = `/#${id}`;
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,

        height: "48px",
        padding: "0 26px",
        borderRadius: "999px",

        background:
          "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.10))",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",

        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.35)",

        display: "flex",
        alignItems: "center",
        gap: "22px",
        whiteSpace: "nowrap",
      }}
    >
      {/* QS */}
      <div
        onClick={() => go("hero")}
        style={{
          fontWeight: 700,
          fontSize: "0.9rem",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        QS.
      </div>

      {/* HOME */}
      <button
        onClick={() => go("hero")}
        style={btnStyle}
      >
        HOME
      </button>

      {/* BRIEF */}
      <button
        onClick={() => go("details")}
        style={btnStyle}
      >
        BRIEF
      </button>

      {/* ARCHIVE */}
      <button
        onClick={() => go("flashback")}
        style={btnStyle}
      >
        ARCHIVE
      </button>

      {/* JOIN */}
      <button
        onClick={() =>
          window.open("/join", "_blank", "noopener,noreferrer")
        }
        style={{ ...btnStyle, fontWeight: 600, color: "#fff" }}
      >
        JOIN
      </button>
    </nav>
  );
};

const btnStyle = {
  background: "transparent",
  border: "none",
  color: "rgba(255,255,255,0.75)",
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "1.5px",
  cursor: "pointer",
  padding: "0 6px",
};

export default Navbar;
