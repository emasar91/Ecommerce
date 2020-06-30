import { GET_PRODUCTS, GET_PRODUCT_DETAIL, ADD_PRODUCT, SEARCH_PRODUCT } from '../actions/productoAction'
const initialState = {
    productos: [],
    productoDetallado: {}
}

export default function producto(state = initialState, action) {


    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productos: action.payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productoDetallado: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                productos: state.productos
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                productos: action.payload
            }

        default:
            return state
    }

};