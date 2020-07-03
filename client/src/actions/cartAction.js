export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function addCart(idOrden) {
    return function(dispatch) {
        return fetch('http://localhost:3080/modificar/', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(idOrden)

            })
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_TO_CART }),
                        window.location.replace('http://localhost:3000')
                    )
                } else {
                    alert("No se pudo agregar al changuito")
                }
            })
    }
}

  
  export function removeFromCart(id) {
    return {
      type: 'REMOVE_FROM_CART',
      id,
    };
  }