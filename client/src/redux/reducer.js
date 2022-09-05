import {
    GET_DETAILS,
    GET_ALL_SHOES,
    CLEAN_DETAILS,
    GET_ALL_SIZES,
    ADD_ONE_TO_FAV,
    ADD_ONE_TO_CART,
    DELETE_ONE_FROM_CART,
    REMOVER_TODO,
    ID_PAYMENT
} from './actions'

const initialState = {
    products: [],
    details: [],
    sizes: [],
    favorites: [],
    cart: [],
    idPayment: ''
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
                ? {
                    ...state,
                } :
                {
                    ...state,
                    favorites: [...state.favorites, { ...newItemFav }],
                };

        case ADD_ONE_TO_CART:
            const newItem =
                state.products &&
                state.products.find((product) => product.id === action.payload.id);
            const newItemSize = action.payload.size;
            const newQuantity = action.payload.quantity;

            let itemInCart = state.cart && state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart:
                        state.cart &&
                        state.cart.map((item) =>
                            item.id === newItem.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                }
                : {
                    ...state,
                    cart: state.cart && [
                        ...state.cart,
                        { ...newItem, quantity: newQuantity, sizeNumber: newItemSize },
                    ],
                };

        case DELETE_ONE_FROM_CART:
            const { productId, all } = action.payload;
            let itemToDelete = state.cart.find((item) => item.id === productId);

            if (all || itemToDelete.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== productId),
                };
            }
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        case REMOVER_TODO:
            return {
                ...state,
                cart: initialState.cart,
            };
        case ID_PAYMENT:
            return {
                ...state,
                idPayment: action.payload
            }

        default:
            return state;
    }
}