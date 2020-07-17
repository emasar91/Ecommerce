import { ADD_CARRITO, GET_CARRITO, ADD_CANT, SUB_CANT, ALL_CARRITOS, ORDEN_ESPECIFICA } from '../actions/carritoAction'
const initialState = {
    carrito: [],
    todosCarritos: []
}

export default function carrito(state = initialState, action) {
    console.log('accion', action)
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
        case ALL_CARRITOS:
            return {
                ...state,
                todosCarritos: action.payload
            }
        case ORDEN_ESPECIFICA:
            return {
                ...state,
                carrito: action.payload
            }
        default:
            return state;
    }
}