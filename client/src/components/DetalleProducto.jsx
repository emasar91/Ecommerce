import React, {useState, useEffect} from 'react';
import imagenDefault from '../img/sinImagen.png'

export default function DetalleProducto(id){
  const [productoDetallado, setProductoDetallado] = useState({});
   const [categorias, setCategorias] = useState([]);
  const idProducto= id.id
  let cat;

    useEffect(()=>{
        fetch('http://localhost:3080/products/'+idProducto)
       .then(response=> {
           return response.json()
       })
       .then(response =>{ 
           setProductoDetallado(response)
        })
            fetch('http://localhost:3080/categories')
            .then(response=>{
                return response.json()
            })
            .then(response=>{
                setCategorias(response)
            })
            
        
    },[idProducto])


    var imagen=''
    if(productoDetallado.imagen===""){
        imagen=imagenDefault
    }else{
        imagen = productoDetallado.imagen
    }

    categorias.map(c=>{
       if( c.idCat === productoDetallado.categoryIdCat){
           cat = c.nombre
       }
    })

    return(
        <div>
            <img src={imagen} alt="Imagen Producto"/> 
            <h1>Nombre: {productoDetallado.titulo}</h1>
            <h1>Categoria: {cat}</h1>
            <h1>Precio: {productoDetallado.precio}</h1>
            <h1>Stock: {productoDetallado.cantidad}</h1>
            <h1>descripcion:{productoDetallado.descripcion}</h1>
        </div>
    );
}