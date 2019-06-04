import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";

const mapStateToProps = state => ({
  appName: state.app.name,
});

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />
        {this.props.children}
      </div>
    );
  }
}

App = connect(
  mapStateToProps,
  () => ({}),
)(App);

export default App;
