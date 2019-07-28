import React from "react";
import { Link } from "react-router-dom";
const ArticlesPreview = ({ article }) => (
  <div className="card mb-3">
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
      <Link
        to={`article/${article.slug}`}
        className="btn btn-info btn-xs float-right"
      >
        Read More
      </Link>
    </div>
    <div className="card-body">
      <h3 className="text-center">{article.title}</h3>
      <p className="text-center">{`${article.body.substring(0, 20)}...`}</p>
    </div>
    <div className="card-footer text-muted">
      <button className="btn btn-outline-primary">
        Vote {article.favoritesCount}
      </button>
      {article.tagList.map(tag => (
        <Link to="#" className="btn float-right btn-xs" key={tag}>
          #{tag}
        </Link>
      ))}
    </div>
  </div>
);

export default ArticlesPreview;
