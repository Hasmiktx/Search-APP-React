import React from "react";
export default function Description({ description }) {
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {description}
    </div>
  );
}
