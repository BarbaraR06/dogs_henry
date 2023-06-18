import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import styles from "../css/CardsContainer.module.css";

const CardsContainer = () => {

    const dogs = useSelector((state) => state.dogs);

    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexFirstDog, indexLastDog);
    const pagination = (pageNumbers) => {
        setCurrentPage(pageNumbers);
    }
    return (
        <div>
            <div>
                <Pagination 
                dogsPerPage={dogsPerPage} 
                dogs={dogs.length}
                pagination={pagination} />
            </div>

            <div className={styles.container}>
                {currentDogs.map((dog) => {
                    return <Card 
                    id={dog.id}
                    key={dog.id}
                    name={dog.name}
                    temperament={dog.temperament}
                    image={dog.image}
                    weightMin= {dog.weightMin}
                    weightMax= {dog.weightMax}
                    />
                })}
                 </div>   
        </div>
    )
}

export default CardsContainer;