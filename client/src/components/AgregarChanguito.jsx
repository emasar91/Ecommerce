import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux'
import {addCart} from '../actions/cartAction'

function AgregarChanguito(){

    return(
        <div>
                   {/*  //<button type="button" className="btn btn-primary" value="Agregar Changuito">Agregar Changuito</button> */}
            <MdAddShoppingCart  value="Agregar Changuito"  size={20} color="#007bff" />
            </div>
    )
    
} 
export default connect (null, {addCart})(AgregarChanguito)