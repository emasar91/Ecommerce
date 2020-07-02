import React from 'react'
import { Link } from 'react-router-dom'

export default function AgregarProducto(){
    return(
        <Link to={'/login'}>
            <button type="button" className="btn btn-primary"  value="Login">Login</button>
              </Link>
    )
    
}