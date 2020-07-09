import React from 'react'
import { connect } from 'react-redux'
import { subCant } from '../actions/carritoAction'

function BotonMenos({id, subCant}){

    
    function restar(){
        subCant(1,id)
    }


    return(
        <div>
           <button onClick={restar} >-</button>
        </div>
    )
    
} 
export default connect (null, {subCant})(BotonMenos)