import React, { useState } from 'react';
import { addProduct } from '../actions/productoAction'

import { connect } from 'react-redux'



function FormularioAgregar({addProduct}){
    

    const [input, setInput] = useState({
        titulo : null,
        precio : null,
        cantidad : null,
        descripcion : '',
        imagen : '',
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
        addProduct(input)
        
    }
         
   return (
    <div>
        <h1>Agregar nuevo producto: </h1>
        <form  onSubmit={(e)=> e.preventDefault} >

            <label htmlFor="nombre">Nombre*</label>
            <input  required type="text" name="titulo"  onChange={handleInputChange}/>
            <br/>
           <label htmlFor="precio">Precio*</label>
            <input required type='number' name="precio" onChange={handleInputChange} />
            <br/>
            <label htmlFor="cantidad">Cantidad*</label>
            <input required type="number" name="cantidad" onChange={handleInputChange} />
            <br/>
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" name="descripcion" onChange={handleInputChange} />
            <br/>
            <label htmlFor="imagen">imagen</label>
            <input type="file" name="imagen" onChange={handleInputChange}/>
            <br/>
            
            
            <button type="submit" class="btn btn-primary"  value="Enviar" onClick={enviarFormulario} >Enviar</button>

        </form>

    </div>
   )
}

export default connect(null,{addProduct})(FormularioAgregar)