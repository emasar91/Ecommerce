import React from 'react';
import './css/Producto.css'
import foto from '../img/sinImagen.png'
import Modificar from   './Modificar.jsx'
import { Link } from 'react-router-dom';
import Remover from './Remover.jsx'
import Agregarchanguito from './AgregarChanguito.jsx'
import { connect } from 'react-redux'

// import Rating from '../components/Rating';


function Producto ({item,usuario}){
    
    let {id,titulo,  precio, imagen, review} = item;

    if(imagen===""){
        imagen=foto;
    }

    return (
        <div className="producto">
            <img  className='img-producto' src={imagen} alt="producto"/>
            <div className="container-informacion">
                <span className='precio-producto'>$ {precio}</span>
                <Link to={'/products/producto/'+id}>
                    <h3 className='titulo-producto'>{titulo}</h3>
                </Link>
                <span className='review-producto'>Aquí va el review {review}
               
                 {/*  <Rating
                    value={review.rating}
                    text={id.numReviews + ' reviews'} /> */}
                            
             {usuario.admin===true && <Modificar id={id} />}
             {usuario.admin===true && <Remover  id={id} />}
             
             
             
             <Agregarchanguito id={id} />
             </span>
        </div> 
        </div>
    )
  
}
function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {})(Producto)