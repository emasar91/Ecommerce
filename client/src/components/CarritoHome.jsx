import React, {useEffect} from 'react'
import './css/Catalogo.css';
import { connect } from 'react-redux'
import { getCarrito } from '../actions/carritoAction'
import BotonMas from './BotonMas'
import BotonMenos from './BotonMenos'

function CarritoHome({productosCarrito,getCarrito,usuario}){

    useEffect(()=>{
        getCarrito(usuario.idUser)
    },[getCarrito,usuario])        
    console.log(usuario.idUser)
    return (

        <div className="container">
            <table className= "table table-dark">
                <thead>
                    <tr key="0">
                    <th scope="col">Id Producto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Sumar</th>
                    </tr>
                </thead>
                <tbody>
                    {productosCarrito.map(prod=>
                        <tr key={prod.productoxorden.productId}>
                            <td>{prod.productoxorden.productId}</td>
                            <td>{prod.titulo}</td>
                            <td>${prod.precio}</td>
                            <td>{prod.productoxorden.cantidad}</td>
                            <td><BotonMas id ={prod.productoxorden.productId} />
                                <BotonMenos id ={prod.productoxorden.productId} />
                    ​
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}


function mapStateToProps(state){
    return{
        productosCarrito : state.carrito.carrito,
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {getCarrito})(CarritoHome)