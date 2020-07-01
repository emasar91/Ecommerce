import React, { useState } from 'react';
import { addUser } from '../actions/usuarioAction'

import { connect } from 'react-redux'

// nombreUser: req.body.nombreUser,
//         contraUser: req.body.contraUser,
//         emailUser: req.body.emailUser,
function FormularioUsuario({addUser}){

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
    e.preventDefault();
    addUser(input)
   
}
    return(
        <div>
            <h1>Crear Usuario: </h1>
            <form  onSubmit={(e)=> e.preventDefault} >

                <label htmlFor="nombreUser">Nombre de Usuario*</label>
                <input  required type="text" name="nombreUser"  onChange={handleInputChange}/>
                <br/>            
                <label htmlFor="contraUser">Constraseña*</label>
                <input  required type="password" name="contraUser"  onChange={handleInputChange}/>
                <br/>            
                <label htmlFor="emailUser">Email*</label>
                <input  required type="email" name="emailUser"  onChange={handleInputChange}/>
                <br/>            
                
                <button type="submit" className="btn btn-primary"  value="Enviar" onClick={enviarFormulario} >Enviar</button>

            </form>
        </div>
    )
}

export default connect(null,{addUser})(FormularioUsuario)