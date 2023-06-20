import React from "react";
import { getDogDetail, resetDetail } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDogDetail(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  const dogDetail = useSelector((state) => state.dogDetail);

  if (Object.keys(dogDetail).length === 0) {
    return <div> Cargando... </div>;
  }

  const dog = Array.isArray(dogDetail) ? dogDetail[0] : dogDetail;
  

  let temperaments = dog.temperament;
  if (dogDetail.Temperaments && dogDetail.Temperaments.length > 0) {
    temperaments = dogDetail.Temperaments[0].name;
  } 

  return (
    <div className={styles.mainContainer + " " + styles.Detail}>
      <NavBar className={styles.navBar} />
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={dog?.image} alt="img" />
        </div>
        <div className={styles.textContainer}>
          <p>
            <Link to="/home">
              <button className={styles.buttonHome}>Return</button>
            </Link>
          </p>
          <h3>Id: {dog?.id}</h3>
          <h1>Breed: {dog?.name}</h1>
          <h3>Weight:</h3>
          <span>Min: {dog?.weightMin}</span> -{" "}
          <span>Max: {dog?.weightMax}</span>
          <h3>Average weight: {dog?.averageWeight}</h3>
          <h3>Height (min - max): {dog?.height.metric}</h3>
          <h3>Life expectancy: {dog?.life_span}</h3>
          <h3>Temperament: {temperaments}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;