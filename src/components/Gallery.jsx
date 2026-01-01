import React, { useState } from "react";

const Gallery = ({ elem }) => {
  // House color themes
  const houseThemes = {
    Gryffindor: {
      primary: "#740001",
      secondary: "#D3A625",
      gradient: "linear-gradient(135deg, #740001 0%, #ae0001 100%)",
      border: "#D3A625",
    },
    Slytherin: {
      primary: "#1a472a",
      secondary: "#5d5d5d",
      gradient: "linear-gradient(135deg, #1a472a 0%, #2a623d 100%)",
      border: "#aaaaaa",
    },
    Ravenclaw: {
      primary: "#0e1a40",
      secondary: "#946b2d",
      gradient: "linear-gradient(135deg, #0e1a40 0%, #222f5b 100%)",
      border: "#946b2d",
    },
    Hufflepuff: {
      primary: "#f0c75e",
      secondary: "#FFFFFF",
      gradient: "linear-gradient(135deg, #f0c75e 0%, #ffdb81 100%)",
      border: "#000000",
    },
  };

  const defaultTheme = {
    primary: "#2c2c2c",
    secondary: "#888888",
    gradient: "linear-gradient(135deg, #2c2c2c 0%, #3f3f3f 100%)",
    border: "#888888",
  };

  const [showDetails, setShowDetails] = useState(false);
  const house = elem.hogwartsHouse || "Unknown";
  const theme = houseThemes[house] || defaultTheme;

  return (
    <div
      style={{
        background: theme.gradient,
        border: `2px solid ${theme.border}`,
        borderRadius: "16px",
        padding: "20px",
        width: "320px",
        margin: "10px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          height: "320px",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "16px",
          border: `3px solid ${theme.border}`,
          backgroundColor: "#1a1a1a",
        }}
      >
        <img
          src={elem.image}
          alt={elem.fullName}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Name */}
      <h2
        style={{
          color: "#ffffff",
          fontSize: "22px",
          margin: "0 0 8px 0",
          textAlign: "center",
        }}
      >
        {elem.fullName}
      </h2>

      {/* House Badge */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <span
          style={{
            backgroundColor: theme.secondary,
            color: house === "Hufflepuff" ? "#000" : "#fff",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "13px",
          }}
        >
          {house}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: theme.border,
          color: house === "Hufflepuff" ? "#FFFFFF" : "#000",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        View Profile
      </button>

      {showDetails && elem.actor && (
        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            color: "#e0e0e0",
          }}
        >
          <p>
            <strong>Actor:</strong> {elem.actor}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
