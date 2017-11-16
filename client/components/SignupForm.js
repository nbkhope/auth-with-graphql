import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.setState({ errors: [] }, () => {
      this.props.mutate({
        variables: {
          email,
          password,
        },
        refetchQueries: [
          { query },
        ]
      })
      .then(() => {
        this.props.router.push('/landing');
      })
      .catch(error => {
        this.setState({
          errors: error.graphQLErrors.map(graphQLError => graphQLError.message),
        });
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h3>Sign Up</h3>
          <AuthForm onSubmit={this.onSubmit} errors={this.state.errors}/>
        </div>
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
