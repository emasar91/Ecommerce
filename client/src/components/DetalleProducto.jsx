import React, {useEffect} from 'react';
import imagenDefault from '../img/sinImagen.png'
import { getProductDetail} from '../actions/productoAction'
import { connect } from 'react-redux'


function DetalleProducto({id, detalleProducto, getProductDetail}){
    
    useEffect(()=>{getProductDetail(id)},[id,getProductDetail])

    var imagen=''
    if(detalleProducto.imagen===""){
        imagen=imagenDefault
    }else{
        imagen = detalleProducto.imagen
    }
    
    
    return(
        <div>
            <img src={imagen} alt="Imagen Producto"/> 
            <h1>Nombre: {detalleProducto.titulo}</h1>
            <h1>Precio: {detalleProducto.precio}</h1>
            <h1>Stock: {detalleProducto.cantidad}</h1>
            <h1>descripcion:{detalleProducto.descripcion}</h1>
        </div>
    );
}

function mapStateToProps(state){
    return {
        detalleProducto : state.producto.productoDetallado
    }
}

export default connect (mapStateToProps,{getProductDetail})(DetalleProducto)