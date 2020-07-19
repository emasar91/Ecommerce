import React from 'react'
import { Link } from 'react-router-dom'

export default function BotonOrdenes(){
    
    return(
        <Link to={'/administrarOrdenes'}>
            <button type="button" className="btn btn-primary" >Ordenes</button>
        </Link>
    )
}