import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
class LoginContainer extends Component {
  state = {
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
    this.props.login(this.state, this.props.history);
  };
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
                  value={this.state.email}
                  name="email"
                  required
                  autoFocus
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
                  value={this.state.password}
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-0">
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Login
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
    login: auth.login,
    loading: auth.loading,
    error: auth.error,
  }),
  { login },
)(LoginContainer);
