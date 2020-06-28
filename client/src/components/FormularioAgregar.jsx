import React, {useState , useEffect} from 'react';



export default function FormularioAgregar(){

    const[categoria, setCategoria] = useState([])
    const [input, setInput] = useState({
        titulo : null,
        precio : null,
        cantidad : null,
        descripcion : '',
        imagen : '',
        categoryIdCat:''
    })


    useEffect(()=>{
        fetch('http://localhost:3080/categories')
        .then(response=>{
            return response.json()
        })
        .then((response)=>{
            setCategoria(response)
        })
    },[])

    const handleInputChange = function(e){
        e.preventDefault()
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
                console.log(input)
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
            <label htmlFor="categoryIdCat">Categorias*</label>
            
            <select  required  name="categoryIdCat" onChange={handleInputChange}>
                <option name = "categoryIdCat" key ="-1" value=""> Selecciona la Categoria</option>
                {categoria.map(cat =>
                <option name = "categoryIdCat"key= {cat.idCat} value={cat.idCat} >  {cat.nombre} </option>)}
            </select>
            
            <br/>
            <input type="submit" value="Enviar" onClick={enviarFormulario} />

        </form>

    </div>
   )
}