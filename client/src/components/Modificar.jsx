import React from 'react'
import { Link } from 'react-router-dom'
import { MdCreate } from 'react-icons/md';


export default function Modificar({id}){
    return(
        <Link to={'/products/modificar/'+id}>
         {/*   <button type="button" className="btn btn-primary" value="Modificar" >Modificar</button> */}
           <MdCreate size={20} color="#007bff" />
        </Link>
    )
} 