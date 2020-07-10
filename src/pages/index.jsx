import React from "react";
import { Link } from "react-router-dom";
//Functional Component
const MainPage = () => {
  return (
    <div>
      <h3>Welcome to our page</h3>
      <small>Main Page</small>
      <Link to="/members">Show List of members</Link>
    </div>
  );
};

export default MainPage;
