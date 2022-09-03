import {
    GET_DETAILS,
    GET_ALL_SHOES,
    CLEAN_DETAILS,
    GET_ALL_SIZES,
    ADD_ONE_TO_FAV,
    DELETE_ONE_FROM_FAV,
    LOGIN_USER,
    FILTER_BY_NAME,
    FILTER_BY_CATEGORY,
    FILTER_BY_SIZE,
    FILTER_BY_PRICE,
    FILTER_BY_BRAND,
    COMBINATION_FILTERS,
    COMBINATION_FILTERS1,
    COMBINATION_FILTERS2,
    COMBINATION_FILTERS3,
    COMBINATION_FILTERS4,
    COMBINATION_FILTERS5,
    COMBINATION_FILTERS6,
    COMBINATION_FILTERS7,
    COMBINATION_FILTERS8,
    COMBINATION_FILTERS9,
    COMBINATION_FILTERS10,
    COMBINATION_FILTERS11,
    COMBINATION_FILTERS12,
    COMBINATION_FILTERS13,
    COMBINATION_FILTERS14,
    COMBINATION_FILTERS15,
    COMBINATION_FILTERS16,
    COMBINATION_FILTERS17,
    COMBINATION_FILTERS18,
} from './actions'

const initialState = {
    products: [],
    details: [],
    sizes: [],
    favorites: [],
    user: []
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
        case LOGIN_USER: {
            return {
                ...state,
                user: action.payload,
            };
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
                ? {
                    ...state,
                } :
                {
                    ...state,
                    favorites: [...state.favorites, { ...newItemFav }],
                };
        case DELETE_ONE_FROM_FAV:
            const { FavId } = action.payload;
            let itemToDeleteFAv = state.favorites.find((item) => item.id === FavId);
            console.log(FavId, "id del producto en fav");
            if (itemToDeleteFAv) {
                return {
                    ...state,
                    favorites: state.favorites.filter((item) => item.id !== FavId),
                };
            }break
        case FILTER_BY_NAME:
            return {
                ...state,
                products: action.payload,
            };
        case FILTER_BY_BRAND:
            return {
                ...state,
                products: action.payload,
            };
        case FILTER_BY_PRICE:
            return {
                ...state,
                products: action.payload,
            };
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                products: action.payload,
            };
        case FILTER_BY_SIZE:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS1:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS2:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS3:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS4:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS5:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS6:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS7:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS8:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS9:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS10:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS11:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS12:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS13:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS14:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS15:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS16:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS17:
            return {
                ...state,
                products: action.payload,
            };
        case COMBINATION_FILTERS18:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}