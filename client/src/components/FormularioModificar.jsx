import React ,{useEffect,useState}from 'react';

export default function FormularioModificar(id){

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
    },[])

   return (
    <div>
        <h1>Modificar el Producto: {producto.titulo}</h1>
        <form action="endpoint" method="post">

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder={producto.titulo }/>
            <br/>
            <label htmlFor="precio">Precio</label>
            <input type="text" name="precio" id="precio" placeholder={producto.precio }/>
            <br/>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="text" name="cantidad" id="cantidad" placeholder={producto.cantidad }/>
            <br/>
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" name="descripcion" id="descripcion" placeholder={producto.descripcion }/>
            <br/>
            <label htmlFor="imagen">imagen</label>
            <input type="file" name="imagen" id="imagen"/>
            <br/>
            <input type="submit" value="Enviar"/>
        </form>

    </div>
   )


}