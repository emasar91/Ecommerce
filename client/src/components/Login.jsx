import React, { useState,useEffect } from 'react'
import  './css/Login.css'
import { connect } from 'react-redux'
import AgregarUsuario from './AgregarUsuario'
import { setUserLoggedIn } from '../actions/usuarioAction'
import { Link } from 'react-router-dom'

function Login({usuarioConectado, setUserLoggedIn}){

    useEffect(()=>{
        console.log(usuarioConectado)
    },[usuarioConectado])

    const [input, setInput] = useState({
        nombreUser : null,
        contraUser : null,
        emailUser : null
    })

    const handleInputChange = function(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(usuarioConectado)
    }
    
    
    const enviarFormulario = function(e){
        e.preventDefault()
        setUserLoggedIn(input.nombreUser,input.contraUser)
    }

    const cancelar = function(e){
        return 
    }

    return(
        <div className="container">
            <form  className="form-signin" onSubmit={(e)=>e.preventDefault()}>

                <h1>Ingresar </h1>
                <label htmlFor="nombreUser" className ="sr-only" >Nombre de Usuario*</label>
                <input className="form-control" required type="text" placeholder="Nombre de Usuario" name="nombreUser"  onChange={handleInputChange}/>
                      
                <label  htmlFor="contraUser" className="sr-only">Constraseña*</label>
                <input  className="form-control" required type="password" placeholder="Contraseña" name="contraUser"  onChange={handleInputChange}/>
                      
                            
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={enviarFormulario} >Ingresar</button>
                
                <Link to ='/'>
                    <button type="button" className=" btn-lg btn-danger btn-block"  value="Cancelar" onClick={cancelar} >Cancelar</button>
                </Link>

            </form>
            <br/>

            <AgregarUsuario/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        usuarioConectado : state.usuario.usuarioConectado
    }
}

export default connect (mapStateToProps,{setUserLoggedIn})( Login )