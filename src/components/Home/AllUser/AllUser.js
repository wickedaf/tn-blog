import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { BlogContext } from "../../../App";

const AllUser = () => {
  const { userData, postData } = useContext(BlogContext);
  const [user, setUser] = userData;
  const [filteredData, setFilteredData] = useState(user);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);

  const handleSearch = (event) => {
    let searchStr = event.target.value.toLowerCase();
    let result = [];
    result = user.filter((data) => {
      return (
        data.name.toLowerCase().includes(searchStr) ||
        data.email.toLowerCase().includes(searchStr) ||
        data.website.toLowerCase().includes(searchStr)
      );
    });
    setFilteredData(result);
  };

  // Get current posts
  const indexOfLastItem = currentPage * userPerPage;
  const indexOfFirstItem = indexOfLastItem - userPerPage;
  const userList = user.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(user.length / userPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div align="center">
            <input
              className="rounded border-secondary form-control-md"
              type="text"
              name="search"
              id=""
              placeholder="Search Here..."
              onChange={(event) => handleSearch(event)}
            />
          </div>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0
                ? userList.map((ud, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to={`/profile/${ud.id}`}>{ud.name}</Link>
                    </td>
                    <td>{ud.email}</td>
                    <td>{ud.website}</td>
                  </tr>
                ))
                : filteredData.map((fd, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <Link to={`/profile/${fd.id}`}>{fd.name}</Link>
                      </td>
                      <td>{fd.email}</td>
                      <td>{fd.website}</td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <li key={number} className="page-item">
                    <button
                      onClick={() => paginate(number)}
                      className="page-link"
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
