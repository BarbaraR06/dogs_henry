import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import {
  getAllDogs,
  getAllTemperaments,
  setCurrentPage,
  filterByOrigin,
  filterByTemper,
  orderByName,
  orderByWeight,
} from "../redux/actions";
import styles from "../css/Home.module.css";
import CardsContainer from "../components/CardsContainer";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";

const Home = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("");

  const [temperament, setTemperament] = useState("all");

  const [filter, setFilter] = useState({
    name: "name",
    origin: "All",
    temperament: "all",
    weight: "weight",
    aver: "aver",
  });

  const temperaments = useSelector((state) =>
    [...state.temperaments].sort((a, b) => {
      if (a < b) return -1;
      else return 1;
    })
  );

  const handleOrderName = (event) => {
    dispatch(orderByName(event.target.value));
    dispatch(setCurrentPage(1));
    setOrder(`Ordered ${event.target.value}`);
    setFilter({
      ...filter,
      name: event.target.value,
    });
  };

  const handleOrderWeight = (event) => {
    dispatch(orderByWeight(event.target.value));
    dispatch(setCurrentPage(1));
    setOrder(`Ordered ${event.target.value}`);
    setFilter({
      ...filter,
      weight: event.target.value,
    });
  };

  const handleOrderWeight2 = (event) => {
    dispatch(orderByWeight(event.target.value));
    dispatch(setCurrentPage(1));
    setOrder(`Ordered ${event.target.value}`);
    setFilter({
      ...filter,
      aver: event.target.value,
    });
  };

  const handleFilterByOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value));
    dispatch(setCurrentPage(1));
    setOrder(`Ordered ${event.target.value}`);
    setFilter({
      ...filter,
      origin: event.target.value,
    });
  };

  const handleFilterByTemper = (event) => {
    setTemperament(event.target.value);
    dispatch(filterByTemper(event.target.value));
    dispatch(setCurrentPage(1));
    setOrder(`Ordered ${event.target.value}`);
    setFilter({
      ...filter,
      temperament: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getAllDogs());
    dispatch(setCurrentPage(1));
    setFilter({
      name: "name",
      origin: "All",
      temperament: "all",
      weight: "weight",
      aver: "aver",
    });
  };

  const Pagination = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <button className={styles.buttonAllDogs} onClick={(event) => handleClick(event)}>
          All Dogs
        </button>
        <SearchBar />
      </div>

      <br />

      <div>
        <section className={styles.filterSection}>
          <select value={filter.name} onChange={(event) => handleOrderName(event)}>
            <option value="" disabled defaultValue>
              Ordenar alfabéticamente
            </option>
            <option value="a-z"> A - Z</option>
            <option value="z-a"> Z - A</option>
          </select>

          <select value={filter.weight} onChange={(event) => handleOrderWeight(event)}>
            <option value="" disabled defaultValue>
              Ordenar por peso
            </option>
            <option value="min">Más livianos</option>
            <option value="max">Más pesados</option>
          </select>

          <select value={filter.aver} onChange={(event) => handleOrderWeight2(event)}>
            <option value="" disabled defaultValue>
              Ordenar por peso promedio
            </option>
            <option value="ave">Promedio más liviano</option>
            <option value="ave-max">Promedio más pesado</option>
          </select>

          <select value={filter.origin} onChange={(event) => handleFilterByOrigin(event)}>
            <option value="All">Todos los perros</option>
            <option value="api">Perros de la API</option>
            <option value="created">Perros creados por el usuario</option>
          </select>

          <select value={filter.temperament} onChange={(event) => handleFilterByTemper(event)}>
            <option value="all">Todos los temperamentos</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </section>
      </div>

      <div>
        <CardsContainer />
      </div>
    </>
  );
};

export default Home;