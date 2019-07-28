import React from "react";

const Tags = ({ tags, onClickTag }) => {
  if (!tags) return <div className="col-md-3 ">Loading Tags...</div>;
  return (
    <div className="col-md-3 d-none d-sm-block">
      <ul className="list-group">
        {tags.map(tag => (
          <button
            type="button"
            className="list-group-item list-group-item-action"
            key={tag}
            onClick={() => onClickTag(tag)}
          >
            #{tag}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
