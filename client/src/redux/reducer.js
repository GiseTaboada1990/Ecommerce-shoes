import {
    GET_DETAILS,
    GET_ALL_SHOES,
    CLEAN_DETAILS,
    GET_ALL_SIZES,
    ADD_ONE_TO_FAV
} from './actions'

const initialState = {
    products: [],
    details: [],
    sizes: [],
    favorites:[],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SHOES:
            return {
                ...state,
                products: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case CLEAN_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case GET_ALL_SIZES:
            return {
                ...state,
                sizes: action.payload,
            };
        case ADD_ONE_TO_FAV:
            const newItemFav = state.products.find(
                (product) => product.id === action.payload
            );
            let itemInFav = state.favorites.find((item) => item.id === newItemFav.id);

            return itemInFav
                ? {...state,
                }:
                {...state,
                favorites: [...state.favorites, { ...newItemFav }],
                };
        default:
            return state;
    }
}