import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password,
      },
      refetchQueries: [
        {
          query // CurrentUser
        }
      ],
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h3>Login</h3>
          <AuthForm onSubmit={this.onSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
