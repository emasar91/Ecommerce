import React from 'react'
import { Link } from 'react-router-dom'

export default function AgregarCategoria(){
    return(
        <Link to={'/categories/agregar/'}>
            <button type="button" class="btn btn-primary" value="Agregar Categoría">Agregar Categoría</button>
            </Link>
    )
    
} 