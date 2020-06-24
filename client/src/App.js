import React, { useState, useEffect } from 'react';
import './App.css';
import BarraNavegacion from './components/BarraNavegacion.jsx'
import Catalogo from './components/Catalogo.jsx';
import { Route } from 'react-router-dom';
import Producto from './components/Producto';


function App() {
    const [productos, setProductos] = useState([])

    // fetch('endpoint')
    //     .then(response => {
    //         response.json()
    //     })
    //     .then(response => {
    //         setProductos(response)
    //     })
     var catalogo = [{
        titulo: "manzana1",
        descripcion: "es una manzana",
        precio: 20,
        cantidad: 1,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    }, {
        titulo: "pera",
        descripcion: "es una manzana",
        precio: 20,
        cantidad: 1,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    }, {
        titulo: "naranja",
        descripcion: "es una manzana",
        precio: 20,
        cantidad: 1,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    }, {
        titulo: "banana",
        descripcion: "es una manzana",
        precio: 20,
        cantidad: 1,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    }]

    function setearProductos(catalogoPrpoductos){
      setProductos(catalogoPrpoductos);
    }
    setProductos(catalogo);
    // useEffect(()=>setearProductos(catalogo))

    function buscar(producto) {
      var productosFiltrados = catalogo.filter(p => {
        return p.titulo.includes(producto)
      })
      setProductos(productosFiltrados)
      console.log(productosFiltrados)
      
    }


    return ( 
      <div className = "App" >
        <Route path = '/'
        render = {
            () => < BarraNavegacion buscar = { buscar }
            />} / >

            <Catalogo productos = { productos } >

            </Catalogo>

            </div>
        );
    }

    export default App;