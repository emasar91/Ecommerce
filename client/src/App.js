import React, { useState, useEffect } from 'react';
import './App.css';
import BarraNavegacion from './components/BarraNavegacion.jsx'
import Catalogo from './components/Catalogo.jsx';
import { Route } from 'react-router-dom';
import Producto from './components/Producto';


function App() {
    const [productos, setProductos] = useState([])

    fetch('localhoost:3000/products')
        .then(response => {
            response.json()
        })
        .then(response => {
            setProductos(response)
        })

    var catalogo = productos    
    

    function buscar(producto) {
      var catalogoFiltrado = catalogo.filter(p => {
        return p.titulo.includes(producto)
      })
    }

    return ( 
        <div className = "App" >
            <Route path = '/'
              render = {() => < BarraNavegacion buscar = { buscar }/>} 
            />
            <Route exact path = '/'
              render = {() => <Catalogo productos={productos}  />} 
            />

        </div>
        );
    }

    export default App;