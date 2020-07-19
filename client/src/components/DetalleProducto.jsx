import React, {useEffect} from 'react';
import imagenDefault from '../img/sinImagen.png'
import { getProductDetail} from '../actions/productoAction' 
import AgregarReview from './AgregarReview.jsx' 
import Review from './Review'

import { connect } from 'react-redux'
import './css/Producto.css'
import Modificar from './Modificar'


function DetalleProducto({id, detalleProducto, getProductDetail}){
    
    useEffect(()=>{getProductDetail(id)},[id,getProductDetail])

    var imagen=''
    if(detalleProducto.imagen===""){
        imagen=imagenDefault
    }else{
        imagen = detalleProducto.imagen
    }
    
    function stock(){
        if (detalleProducto.cantidad ===0){
            return <h1>Stock: Sin Stock</h1>
        }
        return <h1>Stock: {detalleProducto.cantidad}</h1>
    }
    
    return(
        <div className="productodetalle">
            <img src={imagen} alt="Imagen Producto"/> 
            <Modificar id={detalleProducto.id}/>
            <h1>Nombre: {detalleProducto.titulo}</h1>
            <h1>Precio: {detalleProducto.precio}</h1>
            {stock()}
            <h1>Descripción:{detalleProducto.descripcion}</h1>
            Review:<Review id={detalleProducto.id} />
            <AgregarReview id={detalleProducto.id} />
        </div>
    );
}

function mapStateToProps(state){
    return {
        detalleProducto : state.producto.productoDetallado
    }
}

export default connect (mapStateToProps,{getProductDetail})(DetalleProducto)