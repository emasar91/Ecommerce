import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Catalogo from './Catalogo'
import { productByCategory } from '../actions/productoAction'

function ProductosPorCategoria({nombre, categorias,  productByCategory, productos}){
    
    useEffect(()=>{
        
        categorias.map(c=>{
            if(c.nombre === nombre && c.nombre!==0){
                productByCategory(c.idCat)
            }      
        })    
    },[nombre])

        
    return(
        <div>
            <Catalogo productos={productos}/>
        </div>
    )
        console.log(productos)

}

function mapStateToProps(state){
    return {
        categorias : state.categoria.categorias,
        productos : state.producto.productos
    }
}


export default connect(mapStateToProps,{productByCategory})(ProductosPorCategoria)