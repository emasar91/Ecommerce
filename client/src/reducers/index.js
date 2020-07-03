import { combineReducers } from 'redux'
import categoria from './categoriaReducer'
import producto from './productoReducer'
import cart from './cart'
import usuario from './usuarioReducer'
export default combineReducers({
    categoria,
    producto,
    cart,
    usuario
})