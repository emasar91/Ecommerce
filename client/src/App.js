import React, { useState, useEffect } from 'react';
import './App.css';
import BarraNavegacion from './components/BarraNavegacion.jsx'
import Catalogo from './components/Catalogo.jsx';
import { Route } from 'react-router-dom';

// import Producto from './components/Producto';
import DetalleProducto from './components/DetalleProducto.jsx';
import FormularioModificar from './components/FormularioModificar.jsx';
import FormularioAgregar from './components/FormularioAgregar.jsx';
import FormularioCategoria from './components/FormularioCategoria.jsx';
import AgregarProducto from './components/AgregarProducto';
import AgregarCategoria from './components/AgregarCategoria';
import Categoria from './components/Categoria.jsx';



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




    function buscar(producto) {

        fetch('http://localhost:3080/products/search/'+producto)
          .then(response => {
              return response.json()
          })
          .then(response => {
              setProductos(response)
          })
          console.log("Productos Cargados")
    }

    return ( 
            <div className = "App" >

                    <Route path = '/'
                    render = {
                        () => < BarraNavegacion buscar = { buscar }/>}
                    />

                    <Route exact path = '/'
                    render = {() => <Categoria/>}/>
                    
                    <Route exact path = '/'
                    render = {() => <AgregarProducto/>}/>
                    
                    
                    <Route exact path = '/'
                    render = {() => <AgregarCategoria/>}/>

                    <Route exact path = '/'
                    render = {() => < Catalogo productos = { productos }/>}/>

                    <Route exact path = '/products/agregar'
                        render = {() => <FormularioAgregar/>}/>
                    
                    <Route exact path = '/categories/agregar'
                        render = {() => <FormularioCategoria/>}/>
                               
                    <Route exact path = '/products/producto/:id'
                        render = {({match}) => <DetalleProducto id={match.params.id} />}/>

                    <Route exact path = '/products/modificar/:id'
                        render = {({match}) => <FormularioModificar id={match.params.id} />}/>
                        
            </div>
            );
}

export default App;