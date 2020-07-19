import React from 'react';
import Logo from '../img/logo.png';
import './css/BarraNavegacion.css';
import { Link } from 'react-router-dom';
import BotonLogin from './BotonLogin';
import BotonCuentas from './BotonCuentas';
import BotonOrdenes from './BotonOrdenes';
import BotonOrdenUser from './BotonOrdenUser';
import { connect } from 'react-redux'



function BarraNavegacion({usuario}){

    function recargar(){
        window.location.replace('http://localhost:3000')
    }

    return(
        <div className="barra-navegacion">
                <Link to ='/'>
                    <img className='logo' src={Logo} alt="Logo" onClick={recargar}/>
                </Link>  
                <h1 style={{color:"black"}}>Hola!: {usuario.nombreUser}</h1>         
                <div className="búsqueda-login">
                    
                    {usuario.admin && <BotonOrdenes/>}
                    {usuario.admin &&<BotonCuentas/>}
                    <BotonLogin/>
                    <BotonOrdenUser/>
                </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado,
   }
}

export default connect (mapStateToProps, {})(BarraNavegacion)