import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux'
import { addProduct } from '../actions/carritoAction'

function AgregarChanguito({id, addProduct}){

    function agregar(){
        addProduct(id,1)
    }
    


    return(
        <div>
           
            <MdAddShoppingCart onClick={agregar} cursor="pointer" type="button" value="Agregar Changuito"  size={20} color="#007bff" />
        </div>
    )
    
} 
export default connect (undefined, {addProduct})(AgregarChanguito)