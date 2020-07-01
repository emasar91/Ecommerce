import React from 'react';
import './App.css';
import BarraNavegacion from './components/BarraNavegacion.jsx'
import Catalogo from './components/Catalogo.jsx';
import { Route } from 'react-router-dom';

import DetalleProducto from './components/DetalleProducto.jsx';
import FormularioModificar from './components/FormularioModificar.jsx';
import FormularioAgregar from './components/FormularioAgregar.jsx';
import FormularioCategoria from './components/FormularioCategoria.jsx';
import AgregarProducto from './components/AgregarProducto';
import AgregarCategoria from './components/AgregarCategoria';
import FormularioUsuario from './components/FormularioUsuario';
import Categoria from './components/Categoria.jsx';
import ProductosPorCategoria from './components/ProductosPorCategoria.jsx'




function App() {
    

    return ( <div className = "App" >

            <Route path = '/'
            render = {
                () => < BarraNavegacion 
                />} />

            <Route exact path = '/'
            render = {
                () => < Categoria /> }
            />

            <Route path = '/categories/:productos'
            render = {
                () => < Categoria /> }
            />

            <Route exact path = '/'
            render = {
                () => < AgregarProducto /> }
            />


            <Route exact path = '/'
            render = {
                () => < AgregarCategoria /> }
            />

            <Route exact path = '/'
            render = {() => < Catalogo/>}/>

            <Route exact path = '/products/agregar'
            render = {
                () => < FormularioAgregar /> }
            />

            <Route  exact  path = '/categories/agregar'
            render = {
                () => < FormularioCategoria /> }
            />
            <Route  exact  path = '/user/crearUsuario'
            render = {
                () => < FormularioUsuario /> }
            />



            <Route exact path = '/products/producto/:id'
            render = {
            ({ match }) => < DetalleProducto id = { match.params.id }
            />}/>

            <Route exact path = '/products/modificar/:id'
            render = {
            ({ match }) => < FormularioModificar id = { match.params.id }
            />}/>

            <Route exact path = '/categories/productporcategory/:nombre'
            render = {
                ({ match }) => < ProductosPorCategoria nombre = { match.params.nombre }
            />}/>

        </div>
    );
}

export default App;