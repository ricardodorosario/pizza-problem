import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";

import * as loginActions from "./LoginActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='login'>
        <Input placeholder='Username' />
        <Input placeholder='Password' />
        <Button variant='contained' color='primary'>
          Log In
        </Button>
        <Button variant='contained' color='default'>
          Sign Up
        </Button>
      </div>
    );
  }
}

export default Login;
