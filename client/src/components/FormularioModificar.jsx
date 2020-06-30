import React ,{useEffect,useState}from 'react';
import { connect } from 'react-redux'
import {modifyProduct, getProductDetail} from '../actions/productoAction'
 

function FormularioModificar({id, categorias, getProductDetail, modifyProduct, producto}){
    
    console.log(id)
   
    const[categoria, setCategoria] = useState({
        nombre:"",
        accion:""
    })
    const [input, setInput] = useState({
        titulo:'',
        precio:'',
        cantidad:'',
        descripcion:'',
        imagen:'',
        categoryIdCat:''
    })
    //input que modifica el producto
    const handleInputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    //input para agregar o quitar la categoria
    const handleCategoryChange = function(e){
        console.log(e.target.name)
        console.log(e.target.value)
        setCategoria({
            ...categoria,
            [e.target.name] : e.target.value
            
        })
    }

    const enviarInicio = function(){
        return window.location.replace('http://localhost:3000')
    }

   


    const enviarFormulario = function(e){
        e.preventDefault();
         modifyProduct( input,categoria, id)      
       
    }



//Trae la informacion del producto que fue clickeado
    
    useEffect(()=>{getProductDetail(id)},[])

   return (
    <div>
        <h1>Modificar el Producto: {producto.titulo}</h1>
        <form onSubmit={(e)=> e.preventDefault}>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="titulo" placeholder={producto.titulo } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="precio">Precio</label>
            <input type="number" name="precio" placeholder={producto.precio } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" name="cantidad" placeholder={producto.cantidad } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" name="descripcion" placeholder={producto.descripcion } onChange={handleInputChange}/>
            <br/>
            <label htmlFor="imagen">imagen</label>
            <input type="file" name="imagen" onChange={handleInputChange}/>
            <br/>


            <label htmlFor="accion"> Añadir / Eliminar</label>
            <br/>
            
            <select required name="accion" onChange={handleCategoryChange}>
                <option value=""> Seleccionar Accion</option>
                <option value="add"> Añadir Categoria</option>
                <option value="remove"> Eliminar Categoria</option>

            </select>
            <br/>


            <label htmlFor="nombre"> Categorias</label>
            <br/>
            <select  required  name="nombre" onChange={handleCategoryChange}>
                <option name = "categoria" key ="-1" value=""> Selecciona la Categoria</option>
                {categorias.map(cat =>
                <option name = "nombre" key= {cat.idCat} value={cat.nombre} >  {cat.nombre} </option>)}
            </select>
            
            <br/>
            <button type="submit" class="btn btn-primary"  value="Enviar" onClick={enviarFormulario} >Enviar</button>
            <button type="submit" class="btn btn-primary"  value="Cancelar" onClick={enviarInicio} >Cancelar</button>
            </form>

    </div>
   )
}
function mapStateToProps(state){
    return {
        categorias :state.categoria.categorias,
        producto : state.producto.productoDetallado
    }
}

export default connect(mapStateToProps,{getProductDetail, modifyProduct})(FormularioModificar)
