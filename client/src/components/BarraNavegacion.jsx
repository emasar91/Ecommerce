import React from 'react';
import Logo from '../img/logo.png';
import './css/BarraNavegacion.css';
import Busqueda from './Busqueda.jsx';
import { Link } from 'react-router-dom';
import BotonLogin from './BotonLogin';
import BotonCuentas from './BotonCuentas';
import BotonOrdenes from './BotonOrdenes';


export default function BarraNavegacion({buscar}){

    function recargar(){
        window.location.replace('http://localhost:3000')
    }


    return(
        <div className="barra-navegacion">
                
                <Link to ='/'>
                    <img className='logo' src={Logo} alt="Logo" onClick={recargar}/>
                </Link>           
                <div className="búsqueda-login">
                    <Busqueda className='busqueda' buscar = {buscar}/>
                    <BotonOrdenes/>
                    <BotonCuentas/>
                    <BotonLogin/>
                
                </div>
            
        </div>
           



    )
}

