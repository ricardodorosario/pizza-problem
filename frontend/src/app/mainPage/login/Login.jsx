import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import SignUp from "../../signUp/SignUp";
import { useDispatch } from "react-redux";
import WhitePanel from "../../components/WhitePanel";
import Alert from "../../components/Alert";
import axios from "axios";
/**
 * Login component
 */
export default function Login() {
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false); //Shows Signiup Modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function validate() {
    if (username === "" || password === "") {
      setMessage("You must enter your username and password.");
      return false;
    }
    setMessage("");
    return true;
  }

  function login() {
    axios
      .post("http://localhost:3001/login/", { username, password })
      .then((success) => {
        if (success.data.valid) {
          dispatch({ type: "LOGGED_IN", payload: true });
          dispatch({
            type: "USER_LOGGED",
            payload: { username, votes: success.data.votes },
          });
        } else {
          setMessage(success.data.message);
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  return (
    <WhitePanel title='Log in to vote' class='login'>
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
        type='password'
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
      {showSignUp && (
        <SignUp setShowSignUp={setShowSignUp} setMessage={setMessage} />
      )}
      <Alert
        open={message !== ""}
        handleClose={() => setMessage("")}
        message={message}
      />
    </WhitePanel>
  );
}
