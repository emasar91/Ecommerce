import React from 'react'
import { Link } from 'react-router-dom'

export default function filtrocat(){
    return(
        <Link to={'/categories/agregar/'}>
           <button type="submit" class="btn btn-primary" value="Agregar Categoría" >Agregar Categoría</button>
            
        </Link>
    )
} 