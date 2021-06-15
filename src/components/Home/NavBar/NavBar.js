import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../../../App";

const NavBar = () => {
  const { userData, postData } = useContext(BlogContext);
  const [user, setUser] = userData;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/">TN Blog</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto ms-md-auto text-sm-center mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link className="text-decoration-none text-white" to="/addPost">
                Add Post
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="text-decoration-none text-white" to="/allUser">
                All User
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                className="text-decoration-none text-white"
                to={`/profile/2`}
              >
                User - 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
