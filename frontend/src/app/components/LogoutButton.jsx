import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * Logout button component.
 */
export default function LogoutButton(props) {
  const dispatch = useDispatch();

  function logout() {
    axios
      .post("http://localhost:3001/logout/")
      .then((success) => {
        if (success.data.valid) {
          dispatch({ type: "LOGGED_IN", payload: false });
          dispatch({ type: "USER_LOGGED", payload: "" });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  return (
    <Button variant='contained' color='primary' onClick={logout}>
      {props.title}
    </Button>
  );
}

LogoutButton.proptypes = {
  title: PropTypes.string,
};
LogoutButton.defaultProps = {
  title: "Logout",
};
