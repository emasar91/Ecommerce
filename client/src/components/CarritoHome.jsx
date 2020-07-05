import React, {useEffect} from 'react'
import './css/Catalogo.css';
import { connect } from 'react-redux'
import { getProducts } from '../actions/carritoAction'

function CarritoHome({productosCarrito, getProducts}){

    useEffect(()=>{
        getProducts(1)
    },[getProducts])        
    
    return (

        <div className="container">
            <table className= "table table-dark">
                <thead>
                    <tr key="0">
                    <th scope="col">Id Producto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productosCarrito.map(prod=>
                        <tr key={prod.id + prod.titulo}>
                            <td>{prod.id}</td>
                            <td>{prod.titulo}</td>
                            <td>${prod.precio}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}


function mapStateToProps(state){
    return{
       productosCarrito : state.carrito.productos
    }
}

export default connect (mapStateToProps, {getProducts})(CarritoHome)