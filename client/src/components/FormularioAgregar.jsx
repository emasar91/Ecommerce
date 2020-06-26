import React, {useState} from 'react';


export default function FormularioAgregar(){

    const [input, setInput] = useState({
        titulo:'',
        precio:'',
        cantidad:'',
        descripcion:'',
        imagen:''
    })

    const handleInputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const enviarFormulario = function(e){
        e.preventDefault();
        fetch('http://localhost:3080/products/agregar',{
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
              },    
            method:'POST',
            body: JSON.stringify(input)
            
        })
        .then((res)=>{
            console.log(res.status)
            if(res.status ===200){
                return window.location.replace('http://localhost:3000')
            }
            else{
                alert("No se pudo ingresar el producto")
            }
            
        })
    }
      
   return (
    <div>
        <h1>Agregar nuevo producto: </h1>
        <form  onSubmit={(e)=> e.preventDefault} >

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="titulo"  onChange={handleInputChange}/>
            <br/>
            <label htmlFor="precio">Precio</label>
            <input type='number' name="precio" onChange={handleInputChange} />
            <br/>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" name="cantidad" onChange={handleInputChange} />
            <br/>
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" name="descripcion" onChange={handleInputChange} />
            <br/>
            <label htmlFor="imagen">imagen</label>
            <input type="file" name="imagen" onChange={handleInputChange}/>
            <br/>
            <input type="submit" value="Enviar" onClick={enviarFormulario} />
        </form>

    </div>
   )
}