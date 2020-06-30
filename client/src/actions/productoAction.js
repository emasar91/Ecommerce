export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const PRODUCT_BY_CATEGORY = 'PRODUCT_BY_CATEGORY'

export function getProducts() {
    return function(dispatch) {
        return fetch('http://localhost:3080/products')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_PRODUCTS, payload: json })
            })
    }
}

export function getProductDetail(id) {
    return function(dispatch) {
        return fetch('http://localhost:3080/products/' + id)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_PRODUCT_DETAIL, payload: json })
            })
    }
}

export function addProduct(producto) {
    return function(dispatch) {
        return fetch('http://localhost:3080/products/agregar', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(producto)

            })
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_PRODUCT }),
                        window.location.replace('http://localhost:3000')
                    )
                } else {
                    alert("No se pudo agregar el producto")
                }
            })
    }
}

export function searchProduct(producto) {
    return function(dispatch) {
        return fetch('http://localhost:3080/products/search/' + producto)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: SEARCH_PRODUCT, payload: json })
            })
    }
}

export function productByCategory(categoria) {
    return function(dispatch) {
        return fetch('http://localhost:3080/products/search/' + categoria)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PRODUCT_BY_CATEGORY, payload: json })
            })
    }
}