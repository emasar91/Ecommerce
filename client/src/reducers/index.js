import { combineReducers } from 'redux'
import categoria from './categoriaReducer'
import producto from './productoReducer'
import usuario from './usuarioReducer'

export default combineReducers({
    categoria,
    producto,
    usuario
})