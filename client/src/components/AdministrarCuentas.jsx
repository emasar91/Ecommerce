import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../actions/usuarioAction'
import BorrarUsuario from './BorrarUsuario';

function AdministrarCuentas({usuarios,getUsers}){
    
    useEffect(()=>{
        getUsers()
    },[getUsers])

    return(
        <div className="container">
            <table className= "table table-dark">
            <thead>
                <tr key="0">
                <th scope="col">ID</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Modificar</th>
                </tr>
            </thead>
            <tbody>


            {usuarios.map(user=>
                <tr key={user.idUser + user.nombreUser}>
                    <td>{user.idUser}</td>
                    <td>{user.nombreUser}</td>
                    <td>{user.emailUser}</td>
                    <td>Modificar</td>
                    <td ><BorrarUsuario id={user.idUser}/></td>
                </tr>
            )}
            </tbody>


            </table>


        </div>
    )
}

function mapStateToProps(state){
    return{
        usuarios : state.usuario.usuarios
    }
  }

export default connect(mapStateToProps, {getUsers})(AdministrarCuentas)