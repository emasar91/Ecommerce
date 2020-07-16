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
import MisCompras from './components/MisCompras';


import { getUserLoggedIn ,getUsers} from './actions/usuarioAction'
import CarritoHome from './components/CarritoHome';
import AdministrarOrdenes from './components/AdministrarOrdenes';
import DetalleOrdenUsuario from './components/DetalleOrdenUsuario';



function App({getUserLoggedIn, usuario }) {

useEffect(()=>{
    getUserLoggedIn()
},[getUserLoggedIn])
console.log("asd",usuario)

    
    
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
                () => usuario.admin === true && < AdministrarCuentas /> }
            />

            <Route exact path = '/administrarOrdenes'
            render = {
                () => usuario.admin === true && < AdministrarOrdenes /> }
            />

            <Route path = '/categories/:productos'
            render = {
                () => usuario.admin === true && < Categoria /> }
            />

            <Route exact path = '/'
            render = {() => usuario.admin === true  && < AgregarProducto /> 
            }
            />


            <Route exact path = '/'
            render = {
                () => usuario.admin === true && < AgregarCategoria /> }
            />

            <Route exact path = '/'
            render = {() => < Catalogo/>}/>

            <Route exact path = '/products/agregar'
            render = {
                () => usuario.admin === true && < FormularioAgregar /> }
            />

            <Route  exact  path = '/categories/agregar'
            render = {
                () => usuario.admin === true && < FormularioCategoria /> }
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
            ({ match }) => usuario.admin === true && < FormularioModificar id = { match.params.id }
            />}/>

            <Route exact path = '/categories/productporcategory/:nombre'
            render = {
                ({ match }) => < ProductosPorCategoria nombre = { match.params.nombre }
            />}/>

            <Route exact path = '/ordenes/user'
            render = {
                () => < MisCompras
            />}/>

            <Route exact path = '/ordenes/detalleproductos/:idOrden'
            render = {
                ({ match }) => < DetalleOrdenUsuario idOrden = { match.params.idOrden }
            />}/>

           

        </div>
    );
}


function mapStateToProps(state){
    return{
        usuario : state.usuario.usuarioConectado
    }
}

export default connect (mapStateToProps,{ getUserLoggedIn,getUsers})( App )