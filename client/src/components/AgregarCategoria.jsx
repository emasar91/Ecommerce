import React from 'react'
import { Link } from 'react-router-dom'

export default function AgregarCategoria(){
    return(
        <Link to={'/categories/agregar/'}>
            <input type="button" value="Agregar Categoria"/>
        </Link>
    )
    
} 