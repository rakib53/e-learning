import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category: { id, name, photoURL, description } }) => {
  return (
    <div className="category">
      <img className="category-img" src={photoURL} alt="" />
      <div className="category-body">
        <h2 className="category-name">{name}</h2>
        <p className="catyegory-desc">
          {description.length > 150 ? (
            <p>
              {description.slice(0, 100)}{" "}
              <Link to={"/category/:id"}>read more...</Link>
            </p>
          ) : (
            description
          )}
        </p>

        <div className="btn-wrapper">
          <Link to={`/category/${id}`} className="view-more">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
