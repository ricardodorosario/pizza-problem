import React from "react";
import PropTypes from "prop-types";
import "./whitePanel.css";

/**
 * Component to show a white panel, used in some modals or to bound some areas
 */
export default function WhitePanel(props) {
  return (
    <div className={`white-panel ${props.class}`}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

WhitePanel.proptypes = {
  class: PropTypes.string,
  title: PropTypes.string,
};
WhitePanel.defaultProps = {
  class: "",
  title: "",
};
