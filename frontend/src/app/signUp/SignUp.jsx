import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import BlackBackgroundPanel from "../components/BlackBackgroundPanel";
import WhitePanel from "../components/WhitePanel";
import Alert from "../components/Alert";
import PropTypes from "prop-types";
import axios from "axios";
import "./signup.css";

/**
 * Sign up form component
 * @param {*} props
 */
export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function validate() {
    if (username === "" || password === "" || email === "") {
      setMessage("You must enter your email, username and password.");
      return false;
    }
    setMessage("");
    return true;
  }

  function signup() {
    axios
      .post("http://localhost:3001/signup/", { email, username, password })
      .then((success) => {
        if (success.data.valid) {
          props.setShowSignUp(false);
        }
        props.setMessage(success.data.message);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  return (
    <BlackBackgroundPanel>
      <WhitePanel
        title='Sign up to show how much you love pizza!'
        class='signup'>
        <Input
          placeholder='Email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Username'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder='Password'
          id='password'
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className='signup-button'
          variant='contained'
          color='primary'
          onClick={() => {
            if (validate()) {
              signup();
            }
          }}>
          Sign Up
        </Button>
        <Button
          variant='contained'
          color='default'
          onClick={() => props.setShowSignUp(false)}>
          Back
        </Button>
        <Alert
          open={message != ""}
          handleClose={() => setMessage("")}
          message={message}
        />
      </WhitePanel>
    </BlackBackgroundPanel>
  );
}

SignUp.proptypes = {
  setMessage: PropTypes.func,
  setShowSignUp: PropTypes.func,
};
SignUp.defaultProps = {
  setMessage: () => {},
  setShowSignUp: () => {},
};
