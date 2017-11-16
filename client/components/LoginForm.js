import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  onSubmit({ email, password }) {
    this.setState({ errors: [] }, () => {
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
      })
      .then(() => {
        console.log('Login ok');
        this.props.router.push('/landing');
      })
      .catch(error => {
        this.setState({
          errors: error.graphQLErrors.map(graphQLError => graphQLError.message)
        });
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h3>Login</h3>
          <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
        </div>
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
