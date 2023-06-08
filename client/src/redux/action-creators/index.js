import { 
    GET_DOGS_FROM_API,
    GET_DOGS_FROM_DB,
    GET_DOGS_BY_QUERY,
    GET_ALL_DOGS,
    GET_DOG_DETAILS,
    GET_TEMPERAMENTS,
    FILTER_BY_TEMPERAMENT,
    SORT_BY_WEIGHT,
    SORT_ALPHABETICALLY,
    RESET_ARRAYS,
    } from '../actions/index';

export const getAllDogs = () => {
    return function (dispatch) {
        fetch ("http://localhost:3001/dogs")
        .then ((res) => res.json())
        .then ((data) => dispatch({
            type: GET_ALL_DOGS,
            payload: data
        }))
        .catch ((err) => console.log(err));
    };
};

export const getDogsFromApi = () => {
    return {
        type: GET_DOGS_FROM_API,
    };
};

export const getDogsFromDb = () => {
    return {
        type: GET_DOGS_FROM_DB,
    };
}


