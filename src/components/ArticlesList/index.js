import React from "react";
import ArticlesPreview from "../ArticlesPreview";
const ArticlesList = ({ articles }) => {
  if (!articles) return <div className="col-md-9">Loading Articles...</div>;
  return (
    <div className="col-md-9">
      {articles.map(article => (
        <ArticlesPreview article={article} key={article.slug} />
      ))}
    </div>
  );
};
export default ArticlesList;
