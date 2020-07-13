import React, {useEffect} from 'react';
import { getReview} from '../actions/productoAction'
import { connect } from 'react-redux'
import './css/Producto.css'

function Review ({Review, getReview, id}){

  useEffect(()=>{getReview(id)},[getReview,id])
 

  return (
      <div className="review">
              <div className="container-informacion">
                {Review.map(R =>{
                  return <div>
                    <span>{R.descripcion} </span>
              <span> {R.puntaje}</span></div>})}
            {/*   <span className='reviewdes'>$ {Review.descripcion}</span>
              <span className='reviewpun'>$ {Review.puntaje}</span> */}
              
      </div> 
      </div> 
  )

}
function mapStateToProps(state){
  return {
      Review : state.producto.review
      //   state.reducer.campoquequierotraer
  }
}
export default connect (mapStateToProps,{getReview})(Review)