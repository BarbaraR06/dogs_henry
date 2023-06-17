import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Landing.module.css";

const Landing = () => {
  return (
   <div>
    <div className={styles.container}>
      <div className={styles.contenido}>
        <h1>TE DAMOS LA BIENVENIDA A LA API DOGS</h1>
        <p className="">
          {" "}
          En este lugar podrás explorar una amplia variedad de razas de perros
          existentes, ¡incluso podrás inventar razas nuevas! 
          Además, tendrás la posibilidad de aplicar filtros, ordenarlas, clasificarlas y guardar
          tus favoritas.
        </p>
      <div>
        <Link className={styles.homeBtn} to="/home">
          <div className={styles.ingreso}>COMENZAR</div>
        </Link>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;