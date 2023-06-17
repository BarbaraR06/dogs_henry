import React from "react";
import styles from "../css/Pagination.module.css";
import { useSelector } from "react-redux";

const Pagination = ({ dogsPerPage, dogs, pagination }) => {
    const pageNumbers = [];
  
    const currentPage = useSelector((state) => state.currentPage);
  
    for (let i = 1; i <= Math.floor(dogs / dogsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={styles.numButtonPagination}
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
          {pageNumbers.length === 0 && (
            <li>
              <button
                className={styles.numButtonPagination}
                onClick={() => pagination(1)}
              >
                1
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  };

export default Pagination;