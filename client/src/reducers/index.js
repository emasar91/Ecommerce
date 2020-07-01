import { combineReducers } from 'redux'
import categoria from './categoriaReducer'
import producto from './productoReducer'

export default combineReducers({
    categoria,
    producto
})