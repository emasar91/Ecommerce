import React from 'react'
import { Link } from 'react-router-dom'
import { MdPeople } from 'react-icons/md';
import './css/Botoncuentas.css';

export default function BotonCuentas(){
    return(
        <Link to={'/administrarCuentas'}>
            {/* <button type="button" className="btn btn-primary"  value="Login">Cuentas</button> */}
             <MdPeople className="btn" type="button" value="Login" size={60} margin= {2} color="#007bff" />
              </Link>
    )
}