import React ,{useState}from 'react';


export default function FormularioCategoria(){

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
        fetch('http://localhost:3080/categories/agregar',{
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
              },    
            method:'POST',
            body: JSON.stringify(input)           
        })
        .then((res)=>{
            if(res.status ===200){
                return window.location.replace('http://localhost:3000')
            }else{
                alert("No se pudo ingresar la categoria")
            }
                   
        })
    }


   return (
    <div>
        <h1>Agregar Categoria</h1>
        <form onSubmit={(e)=> e.preventDefault}>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" placeholder= "Categoria" onChange={handleInputChange}/>
            <br/>
            <input type="submit" value="Enviar" onClick={enviarFormulario} />
        </form>

    </div>
   )
}