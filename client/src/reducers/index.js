import { combineReducers } from 'redux'
import categoria from './categoriaReducer'
import producto from './productoReducer'
import cart from './cart'

export default combineReducers({
    categoria,
    producto,
    cart
})