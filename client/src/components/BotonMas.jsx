import React from 'react'
import { connect } from 'react-redux'
import { addCant } from '../actions/carritoAction'

function BotonMas({id, addCant,usuario}){

    function sumar(){
        addCant(usuario.idUser,id)
    }
    


    return(
        <div>
           <button onClick={sumar} >+</button>
        </div>
    )
    
} 

function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {addCant})(BotonMas)