import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyCz9Kt4bMYCZ0_TzBl1vd6AgEMS6YH7NvVV_l7Z3UZM6GWbqhvMxZTgRLuaVxAx3tt/exec";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    category: "Solo Speed",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const hardBlock = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        category: "Solo Speed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    height: "64px",
    padding: "0 22px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 20px",
      }}
    >
      <form
        autoComplete="off"
        onSubmitCapture={hardBlock}
        onSubmit={hardBlock}
        onKeyDown={(e) => e.key === "Enter" && hardBlock(e)}
        style={{ width: "100%", maxWidth: "520px", textAlign: "center" }}
      >
        <h1 style={{ fontSize: "3.2rem", fontWeight: 800, color: "#fff" }}>
          Join the Elite.
        </h1>

        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "50px" }}>
          Secure your spot in history.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <input
            style={inputStyle}
            name="name"
            placeholder="Full Name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            name="phone"
            placeholder="Phone Number"
            autoComplete="off"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            name="college"
            placeholder="College / Organization"
            autoComplete="off"
            value={formData.college}
            onChange={handleChange}
          />

          <div style={{ ...inputStyle, display: "flex", alignItems: "center" }}>
            Event Category: {formData.category}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              marginTop: "28px",
              height: "72px",
              borderRadius: "18px",
              border: "none",
              background: "#fff",
              color: "#000",
              fontSize: "1.2rem",
              fontWeight: 700,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Submitting..." : "Confirm Registration"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
