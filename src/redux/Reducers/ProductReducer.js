import { 
    ADD_PRODUCT, 
    DELETE_PRODUCT, 
    ERROR_PRODUCT, 
    GET_PRODUCT_BY_ID, 
    GET_PRODUCTS, 
    LOAD_PRODUCT, 
    UPDATE_PRODUCT,
    ADD_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_CART  // Ajout du type d'action pour ajouter au panier
} from "../ActionsTypes/ProductActionsTypes";

// initial State
const initialState = {
    load: false,
    products: [],
    currentProduct: null,
    error: null,
    cart: []  // Ajout d'une propriété "cart" pour stocker les produits du panier
};

// pure function
const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT:
            return { ...state, load: true };
        case ERROR_PRODUCT:
            return { ...state, error: payload, load: false };
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, payload.product] };
        case UPDATE_PRODUCT:
            return { ...state, load: false, products: payload.products };
        case DELETE_PRODUCT:
            return { ...state, load: false, products: payload.products };
        case GET_PRODUCT_BY_ID:
            return { ...state, currentProduct: payload.product, load: false };
        case GET_PRODUCTS:
            return { ...state, products: payload.products, load: false };
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== payload), // Filtrer le produit en fonction de l'ID
            };
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, payload], load: false };
        case UPDATE_CART:
            return {...state, cart: state.cart.map(product =>
                product._id === payload.productId ? { ...product, quantity: payload.quantity }: product
        ),
    };

        default:
            return state;
    }
};

export default ProductReducer;