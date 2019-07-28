import React, { Component } from "react";
import Tags from "../../components/Tags";
import ArticlesList from "../../components/ArticlesList";
import { connect } from "react-redux";
import { setTags } from "../../actions/tags";
import { setArticles } from "../../actions/articles";
import { filterTag } from "../../actions/tags";
class Home extends React.Component {
  componentDidMount() {
    this.props.setArticles();
    this.props.setTags();
  }
  onClickTag = tag => {
    this.props.filterTag(tag);
  };
  render() {
    return (
      <>
        <Tags tags={this.props.tags} onClickTag={this.onClickTag} />
        <ArticlesList articles={this.props.articles} />
      </>
    );
  }
}

export default connect(
  state => ({
    articles: state.articles.articles,
    tags: state.home.tags,
    tag: state.articles.tag,
  }),
  { setTags, setArticles, filterTag },
)(Home);
