import React from 'react'
import { Link } from 'react-router-dom'

export default function BotonUserOrden(){
    return(
        <Link to={'/ordenes/user'}>
            <button type="button" className="btn btn-primary" >Mis Compras</button>
        </Link>
    )
}