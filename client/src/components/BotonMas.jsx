import React from 'react'
import { connect } from 'react-redux'
import { addCant } from '../actions/carritoAction'

function BotonMas({id, addCant}){

    function sumar(){
        addCant(1,id)
    }
    


    return(
        <div>
           <button onClick={sumar} >+</button>
        </div>
    )
    
} 
export default connect (null, {addCant})(BotonMas)