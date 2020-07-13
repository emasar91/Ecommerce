import React from 'react'
import { connect } from 'react-redux'
import { subCant } from '../actions/carritoAction'

function BotonMenos({id, subCant,usuario}){

    
    function restar(){
        subCant(usuario.idUser,id)
    }


    return(
        <div>
           <button onClick={restar} >-</button>
        </div>
    )
    
} 

function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {subCant})(BotonMenos)