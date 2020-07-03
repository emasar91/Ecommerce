import React from 'react'
import { removeProduct } from '../actions/productoAction'
import { BsTrash } from 'react-icons/bs';
import { connect } from 'react-redux'


function Remover({id,removeProduct}){
    function quitarproducto(){
        removeProduct(id)
    window.location.reload()
    }
       return(
         <div>
         {/* <button type="button" className="btn btn-primary" value="Remover" onClick={quitarproducto}>Remover</button> */}
           <BsTrash className="btn"type="button" value="Remover" onClick={quitarproducto} size={60} color="#007bff" />
       </div>
       
    )
} 



export default connect (null, {removeProduct})(Remover)
