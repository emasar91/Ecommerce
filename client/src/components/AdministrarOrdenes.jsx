import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { allCarritos } from '../actions/carritoAction'

function AdministrarOrdenes({ordenes , allCarritos}){

    useEffect(()=>{
        allCarritos()
    },[allCarritos])

    return(
        <div className="container">
            <table className= "table table-dark">
                <thead>
                    <tr key="0">
                    <th scope="col">Id Orden</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Usuario</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(orden=>
                        <tr key={orden.idOrden}>
                            <td>{orden.idOrden}</td>
                            <td>{orden.estado}</td>
                            <td>{orden.userIdUser}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state){
    return{
        ordenes : state.carrito.todosCarritos    }
}

export default connect (mapStateToProps,{allCarritos})(AdministrarOrdenes)