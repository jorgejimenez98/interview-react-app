import React from "react";

function HairColumnColumn({ text }) {
  const background =
    text === "Black"
      ? "dark"
      : text === "Gray"
      ? "secondary"
      : text === "Green"
      ? "success"
      : text === "Pink"
      ? "info"
      : text === "Red"
      ? "danger"
      : "ligth";

  const textColor = !["info", "ligth"].includes(background)
    ? "text-white"
    : "text-dark";

  return (
    <h5>
      <span className={`badge bg-${background} ${textColor}`}>{text}</span>
    </h5>
  );
}

export default HairColumnColumn;
