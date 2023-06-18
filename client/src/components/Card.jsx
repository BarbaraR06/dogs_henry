import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Card.module.css";
import descarga from "../img/descarga.jfif";

const Card = ({ image, name, id, temperament, weightMin, weightMax }) => {
  const handleClickFront = (e) => {
    e.stopPropagation();

  };

  const handleClickBack = (e) => {
    e.stopPropagation();

  };

  return (
    <div className={`${styles.flipContainer} ${styles.flip}`}>
      <div className={`${styles.card}`}>
        <div className={styles.front}>
          <Link to={`/home/${id}`} onClick={handleClickFront}>
            <p className={styles.nombre}>{name}</p>
            <Link to={`/home/${id}`} onClick={handleClickFront}>
              <img src={image || descarga } alt={name} className={styles.cardImage} />
            </Link>
          </Link>
        </div>
        <div className={styles.back}>
          <p>Temperament:</p>
          <p>{temperament}</p>
          <p>Weight:</p>
          <p>Min: {weightMin}</p>
          <p>Max: {weightMax}</p>
          <Link className={styles.link} to={`/home/${id}`} onClick={handleClickBack}>
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;