import React, {useState, useEffect} from 'react'
import Catalogo from './Catalogo'

export default function ProductosPorCategoria(nombre){

    const [productos, setProductos] = useState([])
    const [idC, setIdC] = useState([])

    useEffect(()=>{
        
        fetch('http://localhost:3080/categories')
        .then(response=>{
            return response.json()
        })
        .then((response)=>{
            response.map((c)=>{
                if(c.nombre === nombre.nombre){
                    setIdC(c.idCat)

                }
            })
            return true
        })
        

        fetch( 'http://localhost:3080/categories/products/'+idC)
        .then(response=>{
            return response.json()
        })
        .then(response =>{
            setProductos(response)
        })
        .catch(err=>console.log(err))
        
        
    },[idC])
    

     
    return(
        <div>
            <Catalogo productos={productos}/>
        </div>
    )
}