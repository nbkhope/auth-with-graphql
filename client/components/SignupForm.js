import React, { Component } from 'react';

import AuthForm from './AuthForm';

class SignupForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h3>Sign Up</h3>
          <AuthForm />
        </div>
      </div>
    );
  }
}

export default SignupForm;
