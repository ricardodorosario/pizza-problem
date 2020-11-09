import React from "react";
import PropTypes from "prop-types";
import "./blackBackgroundPanel.css";

/**
 * Component to show a black background panel for some modals
 */
export default function BlackBackgroundPanel(props) {
  return (
    <div className={`black-background-panel ${props.hide && "hide"}`}>
      {props.children}
    </div>
  );
}

BlackBackgroundPanel.proptypes = {
  hide: PropTypes.bool,
};
BlackBackgroundPanel.defaultProps = {
  hide: true,
};
