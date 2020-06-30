import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Catalogo from './Catalogo'
import { productByCategory } from '../actions/productoAction'

function ProductosPorCategoria({nombre, categorias,  productByCategory, productos}){
    console.log(productos)

    useEffect(()=>{

        categorias.map(c=>{
            if(c.nombre === nombre){
                console.log(c.nombre,c.idCat)
                productByCategory(c.idCat)
            }      
        })    
    },[nombre])
        
    return(
        <div>
            <Catalogo productos={productos}/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        categorias : state.categoria.categorias,
        productos : state.producto.productos
    }
}


export default connect(mapStateToProps,{productByCategory})(ProductosPorCategoria)