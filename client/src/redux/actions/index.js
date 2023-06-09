import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_ALL_TEMPS,
  GET_DOG_BY_NAME,
  GET_DOG_DETAIL,
  GET_NAME,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEMPER,
  RESET_DETAIL,
  SET_CURRENT_PAGE,
} from "../actionTypes/index";



export const createNewDog = (payload) => {
  return async (dispatch) => {
    let newDog = await axios.post("/dogs", payload);
    return newDog;
  };
};

export const getAllDogs = () => {
  return async (dispatch) => {
    const response = await axios.get("/dogs");
    return dispatch({
      type: GET_ALL_DOGS,
      payload: response.data,
    });
  };
};

export const getAllTemperaments = () => {
  return async (dispatch) => {
    const json = await axios.get("/temperaments");
    let temperamentsAll = json.data.map((el) => el.name);
    return dispatch({
      type: GET_ALL_TEMPS,
      payload: temperamentsAll,
    });
  };
};

export const getDogByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/dogs?name=${name}`
        
      );
      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDogDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`/dogs/${id}`)
      .then((response) => {
        dispatch({
          type: GET_DOG_DETAIL,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getName = (name) => {
  return {
    type: GET_NAME,
    payload: name,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};

export const filterByOrigin = (payload) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const filterByTemper = (payload) => {
  return {
    type: FILTER_BY_TEMPER,
    payload,
  };
};

export const resetDetail = () => {
  return {
    type: RESET_DETAIL, 
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};
