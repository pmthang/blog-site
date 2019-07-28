import React from "react";
import { connect } from "react-redux";
import { setArticle } from "../../actions/articles";
class Article extends React.Component {
  componentDidMount() {
    this.props.setArticle(this.props.match.params.id);
  }
  render() {
    const article = this.props.article;
    console.log(this.props.article);
    if (!article) return <div>Loading Article...</div>;
    return (
      <div className="card mb-8">
        <div className="card-header">
          <img
            src={article.author.image}
            className="mr-3 rounded-circle"
            width="40px"
            height="40px"
            alt=""
          />
          <span className="text-sm text-muted">
            {article.author.username},{" "}
            <b>{new Date(article.createdAt).toDateString()}</b>
          </span>
        </div>
        <div className="card-body">
          <h3 className="text-center">{article.title}</h3>
          <p className="text-center">{article.body}</p>
        </div>
        <div className="card-footer text-muted">
          <button type="button" className="btn">
            <i className="fas fa-heart" />
            sdfsdf
          </button>
          {article.tagList.map(tag => (
            <a href="#" className="btn float-right btn-xs" key={tag}>
              #{tag}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ article: state.articles.article }),
  { setArticle },
)(Article);
