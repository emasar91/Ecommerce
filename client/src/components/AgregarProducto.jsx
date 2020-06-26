import React from 'react'
import { Link } from 'react-router-dom'

export default function AgregarProducto(){
    return(
        <Link to={'/products/agregar/'}>
            <input type="button" value="agregar"/>
        </Link>
    )
} 