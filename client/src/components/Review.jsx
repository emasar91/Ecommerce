import React, {useEffect} from 'react';
import { getReview} from '../actions/productoAction'
import { connect } from 'react-redux'
import './css/Producto.css'



/* function TodoReview({idReview, getReview}){
    
    useEffect(()=>{getReview(idReview)},[idReview,getReview])
    
    
    return(
        <div className="review">
            <h1>Descripción: {TodoReview.descripcion}</h1>
            <h1>Puntaje: {TodoReview.puntaje}</h1>
            
           
            
        </div>
    );
}

function mapStateToProps(state){
    return {
        TodoReview : state.TodoReviews
    }
}

export default connect (mapStateToProps,{getReview})(TodoReview) */

export function TodoReview ({item}){
    
  let {idReview , descripcion, puntaje, ProductId, userIdUser, getReview} = item;

    return (
      <div className="review">
              <div className="container-informacion">
              <span className='reviewdes'>$ {descripcion}</span>
              <span className='reviewpun'>$ {puntaje}</span>
             
                  </span>
      </div> 
      </div>
  )

}
function mapStateToProps(state){
  return {
      TodoReview : state.TodoReview
  }
}
export default connect (mapStateToProps,{getReview})(TodoReview)