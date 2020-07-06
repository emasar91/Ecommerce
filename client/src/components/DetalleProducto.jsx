import React, {useEffect} from 'react';
import imagenDefault from '../img/sinImagen.png'
import { getProductDetail} from '../actions/productoAction'/* 
import AgregarReview from './components/AgregarReview.jsx' */
/* import TodoReview from '.components/Review.jsx' */
import { connect } from 'react-redux'
import './css/Producto.css'


function DetalleProducto({id, detalleProducto, getProductDetail, getReview,TodoReview}){
    
    useEffect(()=>{getProductDetail(id)},[id,getProductDetail, getReview, TodoReview])

    var imagen=''
    if(detalleProducto.imagen===""){
        imagen=imagenDefault
    }else{
        imagen = detalleProducto.imagen
    }
    
    
    return(
        <div className="productodetalle">
            <img src={imagen} alt="Imagen Producto"/> 
            <h1>Nombre: {detalleProducto.titulo}</h1>
            <h1>Precio: {detalleProducto.precio}</h1>
            <h1>Stock: {detalleProducto.cantidad}</h1>
            <h1>Descripción:{detalleProducto.descripcion}</h1>
         {/*    <h1>Review:{TodoReview.descripcion}</h1> */}
           {/*  <AgregarReview id={id} /> */}
        </div>
    );
}

function mapStateToProps(state){
    return {
        detalleProducto : state.producto.productoDetallado
    }
}

export default connect (mapStateToProps,{getProductDetail})(DetalleProducto)