import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import SignUp from "../signUp/SignUp";
import { useDispatch } from "react-redux";
import WhitePanel from "../components/WhitePanel";
import Alert from "../components/Alert";
/**
 * Login jsx function
 */
export default function Login() {
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginValid, setLoginValid] = useState(undefined);

  function validate() {
    if (username === "" || password === "") {
      setLoginValid(false);
      return false;
    }
    setLoginValid(true);
    return true;
  }

  function login() {
    //try to login into backend
    dispatch({ type: "LOGGED_IN", payload: true });
  }

  return (
    <WhitePanel title='Log in to vote'>
      <Input
        id='username'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        id='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          if (validate()) {
            login();
          }
        }}>
        Log In
      </Button>
      <Button
        variant='contained'
        color='default'
        onClick={() => setShowSignUp(true)}>
        Sign Up
      </Button>
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
      <Alert
        open={loginValid === false}
        handleClose={() => setLoginValid(undefined)}
        message='You must enter your username and password.'
      />
    </WhitePanel>
  );
}
