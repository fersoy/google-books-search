import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 250, clear: "both", paddingTop: 60, margin: 20, textAlign: "center", color: "purple"

      }}
      className="jumbotron"
    >
      {children}
    </div >
  );
}

export default Jumbotron;
