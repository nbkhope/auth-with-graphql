import React, { Component } from 'react';

import AuthForm from './AuthForm';

class LoginForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h3>Login</h3>
          <AuthForm />
        </div>
      </div>
    );
  }
}

export default LoginForm;
