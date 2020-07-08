import React, {useEffect} from 'react'
import './css/Catalogo.css';
import { connect } from 'react-redux'
import { getCarrito } from '../actions/carritoAction'
import BotonMas from './BotonMas'
import BotonMenos from './BotonMenos'

function CarritoHome({productosCarrito,getCarrito}){

    useEffect(()=>{
        getCarrito(1)
    },[getCarrito])        
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
                        <tr key={prod.productId}>
                            <td>{prod.productId}</td>
                            <td>{prod.titulo}</td>
                            <td>${prod.precio}</td>
                            <td>{prod.cantidad}</td>
                            <td><BotonMas id ={prod.productId} />
                                <BotonMenos id ={prod.productId} />
                            
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
       productosCarrito : state.carrito.carrito    }
}

export default connect (mapStateToProps, {getCarrito})(CarritoHome)