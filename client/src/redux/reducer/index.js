import {
  CREATE_DOG,
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
} from "../actionTypes";

const initialState = {
  currentPage: 1,
  dogs: [],
  dogDetail: {},
  temperaments: [],
  allDogs: [],
};

const reducer = (state = initialState, action) => {
  let arr = [];

  switch (action.type) {
    case CREATE_DOG:
      return {
        ...state,
      };

    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_ALL_TEMPS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_NAME:
      let name =
        action.payload === ""
          ? state.allDogs
          : state.dogs.filter((inst) =>
              inst.name.toLowerCase().includes(action.payload.toLowerCase())
            );
      return {
        ...state,
        dogs: name,
      };

    case ORDER_BY_NAME:
      let order =
        action.payload === "a-z"
          ? state.dogs.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: order,
      };

      case ORDER_BY_WEIGHT:
        if (action.payload === "min") {
            arr = state.dogs.sort ((dogA, dogB) => {
                if (dogA.weightMin < dogB.weightMin) return -1;
                if (dogA.weightMin > dogB.weightMin) return 1;
                return 0;
            });    
        } else if (action.payload === "max") {
            arr = state.dogs.sort ((dogA, dogB) => {
                if (dogA.weightMax > dogB.weightMax) return -1;
                if (dogA.weightMax < dogB.weightMax) return 1;
                return 0;
            });
        } else if (action.payload === "ave"){
            arr = state.dogs.sort ((dogA, dogB) => {
                if (dogA.averageWeight < dogB.averageWeight) return -1;
                if (dogA.averageWeight > dogB.averageWeight) return 1;
                return 0;
            });
        }else if (action.payload === "ave-max") {
            arr = state.dogs.sort ((dogA, dogB) => {
                if (dogA.averageWeight > dogB.averageWeight) return -1;
                if (dogA.averageWeight < dogB.averageWeight) return 1;
                return 0;
            });
        } else {
            console.log("error");
        }

        return {
            ...state,
            dogs: arr,
        };

    case FILTER_BY_ORIGIN:
      const filterByOrigin =
        action.payload === "created"
          ? state.allDogs.filter((inst) => inst.created)
          : state.allDogs.filter((inst) => !inst.created);
      return {
        ...state,
        dogs: action.payload === "All" ? state.allDogs : filterByOrigin,
      };

    case FILTER_BY_TEMPER:
      let dogsTemps =
        action.payload === "all"
          ? state.allDogs
          : state.allDogs?.filter((dog) => {
              if (!dog.temperament) return undefined;
              return dog.temperament.split(", ").includes(action.payload);
            });
      return {
        ...state,
        dogs: dogsTemps,
      };

    case RESET_DETAIL:
      return {
        ...state,
        dogDetail: {},
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
