import React from 'react';
import Logo from '../img/logo.png';
import './css/BarraNavegacion.css'
import Busqueda from './Busqueda.jsx'
import { Link } from 'react-router-dom';

export default function BarraNavegacion(){
    return(
        <div className="barra-navegacion">
            <Link>
                <img className='logo' src={Logo} alt="Logo"/>
            </Link>

            <Busqueda/>




        </div>



    )
}