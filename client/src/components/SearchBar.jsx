
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName, setCurrentPage } from "../redux/actions";
import styles from "../css/SearchBar.module.css";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    dispatch(getName(searchQuery));
    dispatch(setCurrentPage(1));

    // Cambiar la URL a la página de detalle con el ID del perro buscado
    history.push(`/detail/${searchQuery}`);
  };

  const handleClick = (event) => {
    setDog("");
  };

  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${styles["input-text-color"]}`}
        type="text"
        value={dog}
        onChange={(event) => {
          setDog(event.target.value);
          handleChange(event);
        }}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBar;