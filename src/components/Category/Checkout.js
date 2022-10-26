import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
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
        <div className="name-container">
          <h3 className="name">{category.name}</h3>
        </div>
        <div className="content">
          <p>Designed By: {category.designBy}</p>
          <p>Develop By: {category.developer}</p>
        </div>
        <p className="description">{category.description}</p>
        <p>Avabiale Job : {category.avaliableJob}</p>
        <p>Anual Salaey : {category.anualSalary}</p>
        <p>First Release : {category.firstRelease}</p>
        <p>
          {category.name} Extension: {category.extension}
        </p>

        <p>
          Post author :{" "}
          {category?.postDetails?.author ? category.postDetails.author : ""}
        </p>
        <p>
          Post careted :{" "}
          {category?.postDetails?.date ? category.postDetails.date : ""}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
