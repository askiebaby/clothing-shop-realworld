import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            id='signInEmail'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor='signInEmail'>Email</label>
          <input
            type='password'
            name='password'
            id='signInPassword'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor='signInPassword'>Password</label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
