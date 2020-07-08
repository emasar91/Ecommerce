import { ADD_CARRITO, GET_CARRITO, ADD_CANT, SUB_CANT } from '../actions/carritoAction'
const initialState = {
    carrito: []
}

export default function carrito(state = initialState, action) {
    switch (action.type) {
        case ADD_CARRITO:
            return {
                ...state,
                carrito: state.carrito
            }
        case GET_CARRITO:
            return {
                ...state,
                carrito: action.payload
            }
        case ADD_CANT:
            return {
                ...state,
                carrito: state.carrito
            }
        case SUB_CANT:
            return {
                ...state,
                carrito: state.carrito
            }
        default:
            return state;
    }
}