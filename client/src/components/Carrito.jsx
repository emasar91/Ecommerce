import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './css/stylescarrito.js';

function Carrito() {
          
  //no es addCart, sólo para probar, debe ir en el botón de agregar
  return (
    <Container>
       <Cart to="/user/cart/">
        <MdShoppingBasket size={36} color="#000" />
      </Cart>
    </Container>
  );
}

export default Carrito;