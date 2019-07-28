import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Home from "./containers/Home";
import { getCurrentUser } from "./actions/auth";
import { connect } from "react-redux";
import { logout } from "./actions/auth";
class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser();
    }
  }
  onLogout = e => {
    e.preventDefault();
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <>
        <Navbar currentUser={this.props.currentUser} onLogout={this.onLogout} />
        <div className="my-4">
          <div className="container">
            <div className="row justify-content-center">
              <AppRouter />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    currentUser: state.auth.currentUser,
  }),
  { getCurrentUser, logout },
)(App);
