import React from 'react';
import Logo from '../img/logo2.png';
import './css/BarraNavegacion.css'
import Busqueda from './Busqueda.jsx'
import { Link } from 'react-router-dom';

export default function BarraNavegacion({buscar}){
    return(
        <div className="barra-navegacion">
                <Link to ='/'>
                    <img className='logo' src={Logo} alt="Logo" onClick=" javascript = Location.Reload()"/>
                </Link>
                <Busqueda className='busqueda' buscar = {buscar}/>
            
        </div>



    )
}