export const ADD_PRODUCT = 'ADD_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'

export function addProduct(producto, usuario) {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/' + producto + '/' + usuario, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_PRODUCT }),
                        alert("producto agregado")
                    )
                } else {
                    alert("No se pudo agregar el producto")
                }
            })
    }
}

export function getProducts(idOrden) {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/products/' + idOrden)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_PRODUCTS, payload: json })
            })
    }
}