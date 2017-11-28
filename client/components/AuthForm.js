import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password
    });
  }

  renderSubmissionError() {
    if (this.props.errors.length > 0) {
      return (
        <div className="card red">
        <div className="card-content white-text">
        <span className="card-title">There were errors with your submission:</span>
        <ul>
        {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        </div>
        </div>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-field">
          <label htmlFor="email" className={this.state.email ? 'active': ''}>Email</label>
          <input type="text" name="email" id="email" value={this.state.email} onChange={this.onEmailChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password" className={this.state.password ? 'active': ''}>Password</label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.onPasswordChange} />
        </div>
        <button type="submit" className="btn">Submit</button>

        {this.renderSubmissionError()}
      </form>
    )
  }
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AuthForm;
