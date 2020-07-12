import React, {useEffect} from 'react';
import { connect } from 'react-redux'
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
import Carrito from './components/Carrito.jsx'
import Login from './components/Login';
import AdministrarCuentas from './components/AdministrarCuentas';


import {getUserLoggedIn, getUsers} from './actions/usuarioAction'
import CarritoHome from './components/CarritoHome';
import AdministrarOrdenes from './components/AdministrarOrdenes';



function App() {


        const admin ={
            name:'admin',
            admin: true
        }
        const usuario ={
            name:'usuario',
            admin: false
        }

    
    
    return ( <div className = "App" >

            <Route path = '/'
            render = {
                () => < BarraNavegacion 
                />} />

            <Route exact path = '/'
            render = {
                () => < Categoria /> }
            />

             <Route path = '/'
            render = {
                () => < Carrito /> }
            />
                
            <Route exact path = '/login'
            render = {
                () => < Login /> }
            />

            <Route exact path = '/administrarCuentas'
            render = {
                () => < AdministrarCuentas /> }
            />

            <Route exact path = '/administrarOrdenes'
            render = {
                () => < AdministrarOrdenes /> }
            />

            <Route path = '/categories/:productos'
            render = {
                () => < Categoria /> }
            />

            <Route exact path = '/'
            render = {() => admin.admin === true  && < AgregarProducto /> 
            }
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
            
            <Route  exact  path = '/user/cart'
            render = {
                () => < CarritoHome /> }
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


function mapStateToProps(state){
    return{
        usuario : state.usuario.usuarios
    }
}

export default connect (mapStateToProps,{getUserLoggedIn, getUsers})( App )