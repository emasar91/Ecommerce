import React from 'react';
import './css/Categoria.css'
//import { Link } from 'react-router-dom';

function Categoria() {
    return (
      <div className="Categoria">
        <header className="Categoria-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <button class="navbar-toggler" type="button"
                 data-toggle="collapse" data-target="#navbarToggleExternalContent">
         <span class="navbar-toggler-icon"></span>
     </button>
     <a class="navbar-brand" href="index.html">Categoría A</a>

     <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
         <ul class="navbar-nav">
             <li class="nav-item active">
                 <a class="nav-link" href="sobre.html">Categoría B</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Categoría C</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Categoría D</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Categoría E</a>
             </li>
         </ul>
     </div>
 </nav> 
        </header>
      </div>
    );
  }
  
  export default Categoria;
