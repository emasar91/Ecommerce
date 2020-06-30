import React, {useEffect} from 'react'
import './css/Catalogo.css';
import Producto from './Producto.jsx'
import { connect } from 'react-redux'
import { getProducts } from '../actions/productoAction'

function Catalogo({productos, getProducts}){

    useEffect(()=>{getProducts()},[productos])        
    
    return (
        <div className='catalogo'>
            {productos.map(producto => <Producto key={producto.id+producto.titulo}
            item={producto} 
        />
        )}
    </div>
    );
}


function mapStateToProps(state){
    return{
        productos: state.producto.productos
    }
}

export default connect (mapStateToProps, {getProducts})(Catalogo)