import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='signup'>
        <Input placeholder='Email' />
        <Input placeholder='Username' />
        <Input placeholder='Password' />
        <Button variant='contained' color='primary'>
          Sign Up
        </Button>
        <Button
          variant='contained'
          color='default'
          onClick={() => this.props.setShowSignUp(false)}>
          Back
        </Button>
      </div>
    );
  }
}

export default SignUp;
