import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/usuarioAction'

function BotonLogout({logout,usuario}){

    
    function deslogear(){
        console.log(logout(usuario))
        
    }


    return(
        <div>
           <button onClick={deslogear} >Desloguear</button>
        </div>
    )
    
} 

function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {logout})(BotonLogout)