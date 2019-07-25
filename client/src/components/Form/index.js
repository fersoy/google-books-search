import React from "react";
import "./style.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <div className="inputPart">
        <input className="form-control" {...props} />

      </div>

    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginRight: 20 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
