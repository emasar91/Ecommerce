import React from 'react'
import './css/Catalogo.css';
import Producto from './Producto.jsx'

export default function Catalogo({productos}){

    
    return (
        <div className='catalogo'>
        {productos.map(producto => <Producto key={producto.titulo}
            item={producto} 
        />
        )}

    </div>
    

    );
}