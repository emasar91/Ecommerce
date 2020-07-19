import React, { useState } from 'react';
import { addReview } from '../actions/productoAction'
import { connect } from 'react-redux'


function FormularioAgregarReview({addReview, id, usuarioConectado}){
    
      const [input, setInput] = useState({
        descripcion : null,
        puntaje : null,
    })

    const handleInputChange = function(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const enviarFormularioReview = function(e){
    
        e.preventDefault();
         
      addReview(input, id, usuarioConectado.idUser) ;
     //necesito mandar id del producto y sacar de la ruta de backend user
    }

    const cancelar = function(e){
        window.location.replace('http://localhost:3000')  
    }
         
   return (

<div className="container">
    <form className="form-signin needs-validation" data-toggle="validator" noValidate> 
            <h3>Agregar Review:</h3>

            <div className="container">
            <label /* className = "sr-only" htmlfor="Nombre" */ htmlFor="validationTooltip01">Descripcion</label>
            <input className="form-control" required type="text" name="descripcion"  id="validationTooltip01" placeholder="Descripcion" onChange={handleInputChange} />
            <div className="valid-tooltip">
            !Todo ok!
            </div>




            <label htmlFor="validationTooltip02">Puntaje</label>
            <input className="form-control" required type="number" name="puntaje"  id="validationTooltip02" placeholder="Puntaje" onChange={handleInputChange} />
            <div className="valid-tooltip">
            ¡Todo ok!
            </div>

            </div>



            <br/>


            <button type="submit" className=" btn btn-lg btn-primary btn-block"  value="Enviar" onClick={enviarFormularioReview} >Enviar</button>
            <button type="submit" className=" btn btn-lg btn-danger btn-block"  value="Enviar" onClick={cancelar} >Cancelar</button>
      
    </form>
</div>


   
   )
}
function mapStateToProps(state){
  return {
      usuarioConectado : state.usuario.usuarioConectado
  }
}

export default connect(mapStateToProps,{addReview})(FormularioAgregarReview)