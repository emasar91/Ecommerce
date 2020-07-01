import React from 'react'
import { Link } from 'react-router-dom'


export default function Modificar({id}){
    return(
        <Link to={'/products/modificar/'+id}>
           <button type="button" className="btn btn-primary" value="Modificar" >Modificar</button>
            
        </Link>
    )
} 