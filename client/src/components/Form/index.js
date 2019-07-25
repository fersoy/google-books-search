import React from "react";
import "./style.css";


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
    <button {...props} style={{ float: "left", marginLeft: 50 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}
