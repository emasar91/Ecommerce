import { ADD_USER, GET_USERS, DELETE_USER } from '../actions/usuarioAction'
const initialState = {
    usuarios: []
}

export default function usuario(state = initialState, action) {


    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                usuarios: state.usuarios
            }
        case GET_USERS:
            return {
                ...state,
                usuarios: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                usuarios: state.usuarios
            }

        default:
            return state
    }
};