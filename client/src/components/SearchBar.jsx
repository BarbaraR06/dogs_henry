import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName, setCurrentPage } from "../redux/actions";
import styles from "../css/SearchBar.module.css";

const SearchBar = () => {
    
    const dispatch = useDispatch();
    const [ dog, setDog ] = useState("");
    const handleChange = (event) => {
        dispatch (getName(event))
        dispatch (setCurrentPage(1))
    }

   const handleClick = (event) => {
       setDog ("")
   }
   
    return (
        <div className={styles.container}>
           <input type="text" value={dog} onChange={(event) => {setDog (event.target.value); handleChange(event.target.value)}} placeholder="Buscar perro"/> 
           <button type="submit" onClick={(event) => handleClick (event)} >Search</button>
        </div>
    )
}

export default SearchBar;
