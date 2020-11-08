import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import BlackBackgroundPanel from "../components/BlackBackgroundPanel";
import WhitePanel from "../components/WhitePanel";
import { useDispatch } from "react-redux";
import Alert from "../components/Alert";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupValid, setSignupValid] = useState(undefined);

  function validate() {
    if (username === "" || password === "" || email === "") {
      setSignupValid(false);
      return false;
    }
    setSignupValid(true);
    return true;
  }

  function signup() {
    //try to login into backend
    props.setShowSignUp(false);
  }

  return (
    <BlackBackgroundPanel>
      <WhitePanel title='Sign up to show how much you love pizza!'>
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
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
          open={signupValid === false}
          handleClose={() => setSignupValid(undefined)}
          message='You must enter your email, username and password.'
        />
      </WhitePanel>
    </BlackBackgroundPanel>
  );
}
