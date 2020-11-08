import React from "react";
import "./blackBackgroundPanel.css";

export default function BlackBackgroundPanel(props) {
  return (
    <div className={`black-background-panel ${props.hide && "hide"}`}>
      {props.children}
    </div>
  );
}
