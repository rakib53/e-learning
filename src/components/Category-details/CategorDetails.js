import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CategoryDetails.css";

const CategorDetails = () => {
  let { id } = useParams();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const url = `https://e-learning-server-rakib53.vercel.app/category/${id}`;
    axios
      .get(url)
      .then(function (response) {
        console.log();
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="detailsContainer">
      <div className="category-details">
        <img className="detailsImage" src={category.photoURL} alt="" />
        <h3 className="name">{category.name}</h3>
        <div className="content">
          <p>Designed By: {category.designBy}</p>
          <p>Develop By: {category.developer}</p>
        </div>
        <p className="description">{category.description}</p>
        <p>Avabiale Job {category.avaliableJob}</p>
        <p>Anual Salaey {category.anualSalary}</p>
        <Link to={"/checkout"} className="premiumBtn">
          get premium know more
        </Link>
      </div>
    </div>
  );
};

export default CategorDetails;
