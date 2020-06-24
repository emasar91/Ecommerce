import React, { useState, useEffect } from 'react';
import './App.css';
import BarraNavegacion from './components/BarraNavegacion.jsx'
import Catalogo from './components/Catalogo.jsx';
import { Route } from 'react-router-dom';
// import Producto from './components/Producto';


function App() {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
      fetch('http://localhost:3080/products')
          .then(response => {
              return response.json()
          })
          .then(response => {
              setProductos(response)
          })
          console.log("Productos Cargados")

    },[])


    var catalogoFiltrado = productos


    function buscar(producto) {
        catalogoFiltrado = productos.filter(p => {
            return p.titulo.includes(producto)
        })
        console.log(catalogoFiltrado)
    }

    return ( 
            <div className = "App" >
                    <Route path = '/'
                    render = {
                        () => < BarraNavegacion buscar = { buscar }/>}
                    />
                    <Route exact path = '/'
                    render = {() => < Catalogo productos = { productos }/>}/>

            </div>
                        );
            }

            export default App;