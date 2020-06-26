import React from 'react';
import Logo from '../img/logo2.png';
import './css/BarraNavegacion.css';
import Busqueda from './Busqueda.jsx';
import { Link } from 'react-router-dom';

export default function BarraNavegacion({buscar}){
    return(
        <div className="barra-navegacion">
                <Link to ='/'>
                    <img className='logo' src={Logo} alt="Logo"/>
                </Link>

               
             {/*  <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <button class="navbar-toggler" type="button"
                 data-toggle="collapse" data-target="#navbarToggleExternalContent">
         <span class="navbar-toggler-icon"></span>
     </button>
     <a class="navbar-brand" href="index.html">Mirror Fashion</a>

     <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
         <ul class="navbar-nav">
             <li class="nav-item active">
                 <a class="nav-link" href="sobre.html">Sobre</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Ajuda</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Perguntas frequentes</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Entre em contato</a>
             </li>
         </ul>
     </div>
 </nav>  */}


 
                
                <Busqueda className='busqueda' buscar = {buscar}/>
            
        </div>
           



    )
}

