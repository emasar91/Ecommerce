import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { removeProduct } from '../actions/productoAction'


export default function Remover({id}){
    
       return(
        <Link to={'/products/'+id}>
           <button type="button" className="btn btn-primary" value="Remover" onClick={removeProduct} >Remover</button>
           
        </Link>
    )
} 


