import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import Banner from "./Banner";
import { loadArticles } from "../../reducer/articles";

class Home extends Component {
  componentWillMount() {
    this.props.onLoad();
  }
  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchtoProps = dispatch => ({
  onLoad: () => dispatch(loadArticles()),
});
const mapStateToProps = state => ({ appName: state.app.appName });
export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Home);
