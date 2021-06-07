import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Blog = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogPost(data));
  }, []);
  const handleLoadMore = () => {
    // I'm getting an error her
    if (limit <= 100) {
      setLimit(limit + 10);
    }
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {blogPost.slice(0, limit).map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
          <button
            disabled={limit >= 100}
            onClick={handleLoadMore}
            variant="contained"
            type="button"
            className="btn btn-dark form-control"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
