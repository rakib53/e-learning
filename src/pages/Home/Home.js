import React from "react";
import Courses from "../Courses/Courses";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1 className="title">Explore Programmign Language today!</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et
          neque quia rerum, ab ea aspernatur laudantium saepe dolorum
          recusandae!
        </p>
      </div>

      <div className="home-course">
        <h2 className="explore">Explore Programming Language</h2>
        <Courses></Courses>
      </div>
    </div>
  );
};

export default Home;
