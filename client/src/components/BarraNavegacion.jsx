import React from 'react';
import Logo from '../img/logo2.png';
import './css/BarraNavegacion.css';
import Busqueda from './Busqueda.jsx';
import Categoria from './categoria.jsx'
import { Link } from 'react-router-dom';

export default function BarraNavegacion({buscar}){
    return(
        <div className="barra-navegacion">
                <Link to ='/'>
                    <img className='logo' src={Logo} alt="Logo" onClick=" javascript = Location.Reload()"/>
                </Link>

                <Categoria className='Categoria' Categoria = {Categoria}/> 
           
                
                <Busqueda className='busqueda' buscar = {buscar}/>
            
        </div>
           



    )
}

