import React from 'react'
import { reviewProduct } from '../actions/productoAction'
import { BsTrash } from 'react-icons/bs';
import { connect } from 'react-redux'
import { DetalleProducto} from './components/DetalleProducto.jsx'



function Review({id,DetalleProducto}){
    function reviewProduct(){
        DetalleProducto(id)
    window.location.reload()
    }
       return(
         <div>
         <h1>Review:{detalleProducto.review}</h1>
       </div>
       
    )
} 



export default connect (null, {Review})(Remover)