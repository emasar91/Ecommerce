import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Catalogo from './Catalogo'
import { productByCategory } from '../actions/productoAction'

function ProductosPorCategoria({nombre, categorias,  productByCategory, productos}){

    console.log(nombre)
    // const [productos, setProductos] = useState([])
    const [idC, setIdC] = useState([])

    useEffect(()=>{

        
        
        // fetch('http://localhost:3080/categories')
        // .then(response=>{
        //     return response.json()
        // })
        // .then((response)=>{
        //     response.map((c)=>{
        //         if(c.nombre === nombre.nombre){
        //             setIdC(c.idCat)

        //         }
        //     })
        //     return true
        // })
        

        // fetch( 'http://localhost:3080/categories/products/'+idC)
        // .then(response=>{
        //     return response.json()
        // })
        // .then(response =>{
        //     setProductos(response)
        // })
        // .catch(err=>console.log(err))
        categorias.map(c=>{
            if(c.nombre === nombre){
                console.log(c)
                productByCategory(c.idCat)
                console.log(categorias)
            }
            
        })
        
        
    },[])
    
    
     
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