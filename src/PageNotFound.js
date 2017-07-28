import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () =>
  <div style={{ margin: "auto", width: "50%", textAlign: "center" }}>
    <h1>Error 404</h1>
    <p>Page Not Found</p>
    <p><Link to="/">Home</Link></p>
  </div>;

export default PageNotFound;
