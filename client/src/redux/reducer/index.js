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

const initialState = {
    allDogs: [],
    dogsFromApi: [],
    dogsFromDb: [],
    dogDetails: {},
    temperaments: [],
    filteredDogs: [],
    searchedDogs: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload
            };

        case GET_DOGS_FROM_DB:
            return {
                ...state,
                dogsFromDb: [...state.allDogs].filter((dog) => !Number(dog.id)),
            };

        case GET_DOGS_FROM_API:
            return {
                ...state,
                dogsFromApi: [...state.allDogs].filter((dog) => typeof dog.id === 'number')
            };

        case GET_DOGS_BY_QUERY:
            return {
                ...state,
                searchedDogs: action.payload,
            };

        case GET_DOG_DETAILS:
            return {
                ...state,
                dogDetails: action.payload,
            };

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            };

        case FILTER_BY_TEMPERAMENT:
            const dogsFromApiFiltered = [...state.allDogs].filter((dog) => dog.temperament.includes(action.payload));
            const dogsFromDbFiltered = [...state.dogsFromDb].filter((dog) => Array.isArray(dog.temperament));
            let dogsFromDbFilteredByTemperament = [];
            for (const dog of dogsFromDbFiltered) {
                for (const temperament of dog.temperament) {
                    if (temperament.name === action.payload) {
                        dogsFromDbFilteredByTemperament.push(dog);
                    }
                }
            }
            return {
                ...state,
                filteredDogs: [...dogsFromApiFiltered, ...dogsFromDbFilteredByTemperament],
            };

        case SORT_BY_WEIGHT:
            const selectWeight = (dog) => Number(dog.weight.split('')[dog.weight.split('').length - 2]);

            if (action.payload === 'ascending') {
                return {
                    ...state,
                    allDogs: [...state.allDogs].sort((a, b) => selectWeight(a) - selectWeight(b)),
                };
            }
            return {
                ...state,
                allDogs: [...state.allDogs].sort((a, b) => selectWeight(b) - selectWeight(a)),
            };

        case SORT_ALPHABETICALLY:
            if (action.payload === 'ascending') {
                return {
                    ...state,
                    allDogs: [...state.allDogs].sort((a, b) => a.name.localeCompare(b.name)),
                };
            }
            return {
                ...state,
                allDogs: [...state.allDogs].sort((a, b) => b.name.localeCompare(a.name)),
            };

        case RESET_ARRAYS:
            return {
                ...state,
                dogsFromApi: [],
                dogsFromDb: [],
                filteredDogs: [],
                searchedDogs: [],
            };

        default:
            return state;
    }
};





export default rootReducer;