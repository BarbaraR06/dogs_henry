import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contenido}>
          <h1> WELCOME TO THE DOGS API </h1>
          <p className="">
            {" "}
            In this place, you can explore a wide variety of existing dog
            breeds. You can even invent new breeds! Additionally, you will have
            the possibility to apply filters, order them, classify them, and
            save your favorites.
          </p>
          <div>
            <Link className={styles.homeBtn} to="/home">
              <div className={styles.ingreso}> START </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
