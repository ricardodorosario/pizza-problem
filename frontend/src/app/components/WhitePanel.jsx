import React from "react";
import "./whitePanel.css";

export default function WhitePanel(props) {
  return (
    <div className={`white-panel ${props.class}`}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
