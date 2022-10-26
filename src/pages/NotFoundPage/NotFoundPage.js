import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="opps">Opps!</h1>
      <p className="t-text">404 - Page Not Found</p>
      <p>
        This page you looking for might have been removed had it's Change or
        it's Temporary Unavailable!
      </p>
      <Link className="btn" to={"/"}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
