import React ,{useState}from 'react';
import { addCategory } from '../actions/categoriaAction'
import { connect } from 'react-redux'


function FormularioCategoria({addCategory}){
    
    const [input, setInput] = useState({
        nombre: null,
        
    })

    const handleInputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const enviarFormulario = function(e){
        e.preventDefault();
        addCategory(input)
    }


   return (
    <div>
        <h1>Agregar Categoria</h1>
        <form onSubmit={(e)=> e.preventDefault}>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" placeholder= "Categoría" onChange={handleInputChange}/>
            <br/>
            <button type="submit" class="btn btn-primary"  value="Enviar" onClick={enviarFormulario} >Enviar</button>
            </form>

    </div>
   )
}

export default connect(null,{addCategory})(FormularioCategoria)