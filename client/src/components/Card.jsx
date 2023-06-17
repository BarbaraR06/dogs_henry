import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Card.module.css";

const Card = ({ image, name, id, temperament,  weightMin, weightMax, averageWeight, }) => {
  return (
    <div className={style.card}>
      <Link to={`/home/${id}`}>
        <p className={style.nombre}>{name}</p>
        <img src={image} alt={` ${name}`} />
      </Link>
      <div>
        <p> Temperament: </p>
        <p>{temperament}</p>
      </div>
      <div>
      <p> Weight:</p>
                <p>Min: {weightMin}</p>
                <p>Max: {weightMax}</p>
      </div>
    </div>
  );
};

export default Card;