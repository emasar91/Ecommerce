import React from 'react'
import { Link } from 'react-router-dom'


export default function Modificar({id}){
    return(
        <Link to={'/products/modificar/'+id}>
            <input type="button" value="Modificar"/>
        </Link>
    )
} 