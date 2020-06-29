import React from 'react'
import { Link } from 'react-router-dom'

export default function AgregarProducto(){
    return(
        <Link to={'/products/agregar/'}>
            <button type="button" class="btn btn-primary"  value="Agregar Producto">Agregar Producto</button>
              </Link>
    )
    
} 