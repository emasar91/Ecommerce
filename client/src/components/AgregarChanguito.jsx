import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux'
import { addCarrito } from '../actions/carritoAction'

function AgregarChanguito({id, addCarrito}){

    function agregar(){
        addCarrito(1,id)
    }
    


    return(
        <div>
           
            <MdAddShoppingCart onClick={agregar} cursor="pointer" type="button" value="Agregar Changuito"  size={20} color="#007bff" />
        </div>
    )
    
} 
export default connect (null, {addCarrito})(AgregarChanguito)