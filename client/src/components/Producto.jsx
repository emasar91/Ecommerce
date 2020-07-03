import React from 'react';
import './css/Producto.css'
import foto from '../img/sinImagen.png'
import Modificar from   './Modificar.jsx'
import { Link } from 'react-router-dom';
import Remover from './Remover.jsx'
import Agregarchanguito from './AgregarChanguito.jsx'


export default function Producto ({item}){
    
    let {id,titulo,  precio, imagen, review} = item;

    if(imagen===""){
        imagen=foto;
    }

    return (
        <div className="producto">
            <img  className='img-producto' src={imagen} alt="producto"/>
            <div className="container-informacion">
                <span className='precio-producto'>$ {precio}</span>
                <Link to={'/products/producto/'+id}>
                    <h3 className='titulo-producto'>{titulo}</h3>
                </Link>
                <span className='review-producto'>Aquí va el review {review}</span>
            </div>
                
             <Modificar id={id} />
             <Remover  id={id} />
             <Agregarchanguito id={id} />
        </div>
    )
}