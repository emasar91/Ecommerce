import React, { useState } from 'react'
import  './css/Login.css'
import { connect } from 'react-redux'
import AgregarUsuario from './AgregarUsuario'

function Login(){

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
    }


    const enviarFormulario = function(e){
        window.location.replace('http://localhost:3000')
        //llamada a api
       
    }

    const cancelar = function(e){
        window.location.replace('http://localhost:3000')       
    }

    return(
        <div className="container">
            <form  className="form-signin">

                <h1>Ingresar </h1>
                <label htmlFor="nombreUser" className ="sr-only" >Nombre de Usuario*</label>
                <input className="form-control" required type="text" placeholder="Nombre de Usuario" name="nombreUser"  onChange={handleInputChange}/>
                      
                <label  htmlFor="contraUser" className="sr-only">Constraseña*</label>
                <input  className="form-control" required type="password" placeholder="Contraseña" name="contraUser"  onChange={handleInputChange}/>
                      
                            
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={enviarFormulario} >Ingresar</button>
                <button type="button" className=" btn-lg btn-danger btn-block"  value="Cancelar" onClick={cancelar} >Cancelar</button>

            </form>
            <br/>

            <AgregarUsuario/>
        </div>
    )
}

export default connect ()( Login )