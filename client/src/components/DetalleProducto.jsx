import React, {useState, useEffect} from 'react';

export default function DetalleProducto(titulo){
    const [productoDetallado, setProductoDetallado] = useState([]);
  
    useEffect(()=>{
        fetch(`http://localhost:3080/products/${titulo}`)
       .then(response=> {
           return response.json()
       })
       .then(response =>{ 
           setProductoDetallado(response)
        })
    },[])

    //en productoDetallado estan todos los datos, falta mostralos en el div y darle estilos

    return(
        <div>
            <h1>Detalle</h1>

        </div>
    );
}