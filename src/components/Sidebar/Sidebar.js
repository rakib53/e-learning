import axios from "axios";
import React, { useEffect, useState } from "react";
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
          <p className="categories-name" key={category.id}>
            {category.name}
          </p>
        );
      })}
    </div>
  );
};

export default Sidebar;
