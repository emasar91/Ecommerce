import React from 'react'
import { Link } from 'react-router-dom'

export default function BotonCuentas(){
    return(
        <Link to={'/administrarCuentas'}>
            <button type="button" className="btn btn-primary"  value="Login">Cuentas</button>
              </Link>
    )
}