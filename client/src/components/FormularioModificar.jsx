import React ,{useEffect,useState}from 'react';


export default function FormularioModificar(id){
    
    const[categorias, setCategorias] = useState([])

    const[categoria, setCategoria] = useState({
        nombre:"",
        accion:""
    })
    const [input, setInput] = useState({
        titulo:'',
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

    const handleCategoryChange = function(e){
        console.log(e.target.name)
        console.log(e.target.value)
        setCategoria({
            ...categoria,
            [e.target.name] : e.target.value
            
        })
        console.log(categoria)
    }

    const enviarInicio = function(){
        return window.location.replace('http://localhost:3000')
    }

    var baneraCategoria = false
    var banderaProducto = false


    const enviarFormulario = function(e){
        e.preventDefault();
               
        

        //////MODIFICA EL PRODUCTO
        fetch('http://localhost:3080/products/modificar/'+idP,{
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
              },    
            method:'PUT',
            body: JSON.stringify(input)           
        })
        .then((res)=>{
            if (res.status === 200){
                //////LE AGREGA LA CATEGORIA
                fetch('http://localhost:3080/categories/adddelete/'+idP,{
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json'
                    },    
                    method:'PUT',
                    body: JSON.stringify(categoria)           
                }).then(res=>{
                    if(res.status === 200)
                    enviarInicio()
                    if(res.status !== 200)        
                        alert("No se Añadio/Elimino la Categoria")   
                        
                }) 
            }
            if(res.status !== 200)
                alert("No se pudo modificar el producto")  
        }) 
    }

    if(banderaProducto && baneraCategoria)
        enviarInicio()


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

        fetch('http://localhost:3080/categories')
        .then(response=>{
            return response.json()
        })
        .then((response)=>{
            setCategorias(response)
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


            <label htmlFor="accion"> Añadir / Eliminar</label>
            <br/>
            
            <select required name="accion" onChange={handleCategoryChange}>
                <option value=""> Seleccionar Accion</option>
                <option value="add"> Añadir Categoria</option>
                <option value="remove"> Eliminar Categoria</option>

            </select>
            <br/>


            <label htmlFor="nombre"> Categorias</label>
            <br/>
            <select  required  name="nombre" onChange={handleCategoryChange}>
                <option name = "categoria" key ="-1" value=""> Selecciona la Categoria</option>
                {categorias.map(cat =>
                <option name = "nombre" key= {cat.idCat} value={cat.nombre} >  {cat.nombre} </option>)}
            </select>
            
            <br/>
            <button type="submit" class="btn btn-primary"  value="Enviar" onClick={enviarFormulario} >Enviar</button>
            <button type="submit" class="btn btn-primary"  value="Cancelar" onClick={enviarInicio} >Cancelar</button>
            </form>

    </div>
   )
}