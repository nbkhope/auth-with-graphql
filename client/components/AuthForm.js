import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('onSubmit');
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={this.state.email} onChange={this.onEmailChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.onPasswordChange} />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    )
  }
}

export default AuthForm;
