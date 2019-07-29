import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
  };
  render() {
    const { username, email, password } = this.state;
    return (
      <div className="card">
        <div className="card-header">Sign Up</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group row">
              <label
                htmlFor="name"
                className="col-sm-4 col-form-label text-md-right"
              >
                Username
              </label>
              <div className="col-md-6">
                <input
                  onChange={this.onChange}
                  type="text"
                  className="form-control is-invalid"
                  name="username"
                  value={username}
                  required
                  autoFocus
                />
                <span className="invalid-feedback">
                  <strong>The name is required.</strong>
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="email"
                className="col-sm-4 col-form-label text-md-right"
              >
                E-Mail Address
              </label>
              <div className="col-md-6">
                <input
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="password"
                className="col-sm-4 col-form-label text-md-right"
              >
                Password
              </label>
              <div className="col-md-6">
                <input
                  onChange={this.onChange}
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  required
                />
              </div>
            </div>

            <div className="form-group row mb-0">
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
  }),
  { signup },
)(Signup);
