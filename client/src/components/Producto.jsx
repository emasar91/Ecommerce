import React from 'react';
import './css/Producto.css'
import foto from '../img/sinImagen.png'
import { Link } from 'react-router-dom';

export default function Producto ({item}){
    
    let {id,titulo,  precio, imagen} = item;

    if(imagen===""){
        imagen=foto;
    }

    return (
        <div className="producto">
            <img  className='img-producto' src={imagen} alt="producto"/>
            <div className="container-informacion">
                <span className='precio-producto'>$ {precio}</span>
                <Link to={'/:'+id}>
                    <h3 className='titulo-producto'>{titulo}</h3>
                </Link>
                {/* <h4 className='cantidad-producto'>cantidad:{cantidad}</h4>
                <p className='descripcion-producto'>{descripcion}</p> */}
            </div>
        </div>
    )
}