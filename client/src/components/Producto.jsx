import React from 'react';
import './css/Producto.css'
import { Link } from 'react-router-dom';

export default function Producto ({item}){
    
    let {titulo, descripcion, precio, cantidad,imagen} = item;

    return (
        <div className="producto">
            <img  className='img-producto' src={imagen} alt="producto"/>
            <div className="descripcion-producto">
                <Link>
                    <h3>{titulo}</h3>
                </Link>
                <h4>${precio}</h4>
                <h4>cantidad:{cantidad}</h4>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}