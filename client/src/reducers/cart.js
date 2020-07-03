import { ADD_TO_CART } from '../actions/cartAction'
/* import produce from 'immer'; */


const initialState = {
    cart: []
}

/* export default function cart(state = initialState, action) {
      switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.product];
      default:
        return state;
    }
  } */

/*  export default function cart(state = [], action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, { ...action.product, amount: 1 }];
      default:
        return state;
    }
  }
 */
  /* export default function cart(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, { ...action.product, amount: 1 }];
      default:
        return state;
    }
  } */

  export default function cart(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return { ...state,
        cart: action.payload}
       /*  (state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.product.id);
          if (productIndex >= 0) {
            draft[productIndex].amount += 1;
          } else {
            draft.push({ ...action.product, amount: 1 });
          }
        }); */
        /* case 'REMOVE_FROM_CART':
            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);
              if (productIndex >= 0) {
                draft.splice(productIndex, 1);
              }
           }); */
      default:
        return state;
    }
  }
 