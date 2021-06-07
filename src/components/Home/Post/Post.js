import React from "react";

const Post = ({post}) => {
  return (
    <div className="card rounded shadow mb-4">
      <div className="card-header w-100">{post.title}</div>
      <div className="card-body text-secondary">
        <p className="card-text">
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default Post;
