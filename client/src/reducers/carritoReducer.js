import { ADD_PRODUCT, GET_PRODUCTS } from '../actions/carritoAction'
const initialState = {
    productos: []
}

export default function carrito(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productos: state.productos
            }
        case GET_PRODUCTS:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}