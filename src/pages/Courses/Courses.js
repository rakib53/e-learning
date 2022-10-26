import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Category from "../../components/Category/Category";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css";

const Courses = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://e-learning-server-rakib53.vercel.app/allcategory")
      .then(function (response) {
        console.log();
        setCategory(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <div className="categories">
          {" "}
          <div className="category-wrapper">
            {category.map((category) => {
              return (
                <Category key={category.id} category={category}></Category>
              );
            })}
          </div>
          <Sidebar></Sidebar>
        </div>
      )}
    </div>
  );
};

export default Courses;
