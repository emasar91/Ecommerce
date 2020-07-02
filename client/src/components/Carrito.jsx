import React, {useEffect} from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './stylescarrito';
import { connect } from 'react-redux';
import { addCart } from '../actions/cartAction'

function Carrito({ cartSize }) {
  useEffect(()=>{addCart()
  },[addCart])        
  //no es addCart, sólo para probar, debe ir en el botón de agregar
  return (
    <Container>
       <Cart to="/products/Orden/">
        <div >
          <strong>Mi changuito</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Carrito);