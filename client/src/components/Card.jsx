import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Card.module.css";

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
            <p className={styles.nombre}>{name}</p>
          <img src={image} alt={name} className={styles.cardImage} />
        </div>
        <div className={styles.back}>
          <div>
          <p>Temperament:</p>
          <p>{temperament}</p>
          </div>
          <div>
          <p>Weight:</p>
          <p>Min: {weightMin}</p>
          <p>Max: {weightMax}</p>
          </div>
          <Link className={styles.link} to={`/home/${id}`} onClick={handleClickBack}>
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;