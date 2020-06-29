import React ,{useEffect,useState}from 'react';


export default function FormularioModificar(id){

    const[categoria, setCategoria] = useState([])
    const [input, setInput] = useState({
        titulo:'',
        categoria:'',
        precio:'',
        cantidad:'',
        descripcion:'',
        imagen:'',
        categoryIdCat:''
    })

    const handleInputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const enviarFormulario = function(e){
        e.preventDefault();
        fetch('http://localhost:3080/products/modificar/'+idP,{
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
              },    
            method:'PUT',
            body: JSON.stringify(input)           
        })
        .then((res)=>{
            console.log(res.status)
            if(res.status ===200){
                return window.location.replace('http://localhost:3000')
            }
            if(res.status !== 200)
                alert("No se pudo ingresar el producto")           
        })
    }


//Trae la informacion del producto que fue clickeado
    var idP = id.id
    const [producto, setProducto] = useState({});
    useEffect(()=>{
        fetch('http://localhost:3080/products/'+idP)
       .then(response=> {
           return response.json()
       })
       .then(response =>{ 
           setProducto(response)
        })
    },[idP])

   return (
    <div>
        <h1>Modificar el Producto: {producto.titulo}</h1>
        <form onSubmit={(e)=> e.preventDefault}>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="titulo" placeholder={producto.titulo } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="precio">Precio</label>
            <input type="number" name="precio" placeholder={producto.precio } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" name="cantidad" placeholder={producto.cantidad } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" name="descripcion" placeholder={producto.descripcion } onChange={handleInputChange}/>
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
            <input type="submit" value="Enviar" onClick={enviarFormulario}/>
        </form>

    </div>
   )
}