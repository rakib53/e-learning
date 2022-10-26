import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-learning-server-rakib53.vercel.app/allcategory")
      .then(function (response) {
        console.log();
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="categories-title">Explore More From Programming</h2>
      {category.map((category) => {
        return (
          <Link
            to={`/category/${category.id}`}
            className="categories-name"
            key={category.id}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
