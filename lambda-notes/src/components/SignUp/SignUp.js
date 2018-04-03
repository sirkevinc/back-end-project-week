import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { Link } from 'react-router-dom';


class SignUp extends Component {
  state = {
    username: '',
    password: '',
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password, this.state.history);
  }

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    return (
      <div>
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/users'>Register</Link>
        </div>
        <form onSubmit={this.onSubmit}>
          <input name="username" value={this.state.username} onChange={this.onChange} type="text" placeholder="username" />
          <input name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

SignUp = connect(mapStateToProps, { register }), (SignUp);

export default SignUp;
