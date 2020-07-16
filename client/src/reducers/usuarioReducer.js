import { ADD_USER, GET_USERS, DELETE_USER, GET_USER_LOGGED, LOGGIN, CONVERTIR_USUARIO, GET_ORDEN_USER } from '../actions/usuarioAction'
const initialState = {
    usuarios: [],
    usuarioConectado: {},
    ordenesUsuario: []
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
        case LOGGIN:
            return {
                ...state,
                usuarioConectado: action.payload
            }
        case GET_USER_LOGGED:
            return {
                ...state,
                usuarioConectado: action.payload
            }
        case CONVERTIR_USUARIO:
            return {
                ...state,
                usuarios: state.usuarios
            }
        case GET_ORDEN_USER:
            return {
                ...state,
                ordenesUsuario: action.payload
            }
        default:
            return state
    }
};