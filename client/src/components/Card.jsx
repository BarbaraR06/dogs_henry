import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Card.module.css";

const Card = ({ image, name, id, temperament, weight }) => {
  return (
    <div className={style.card}>
      <Link to={`/home/${id}`}>
        <p className={style.nombre}>{name}</p>
        <img src={image} alt={`Fotito of ${name}`} />
      </Link>
      <div>
        <p>Temperamento: </p>
        <p>{temperament}</p>
      </div>
      <div>
        <p> Peso: </p>
        <p>{weight}</p>
      </div>
    </div>
  );
};

export default Card;