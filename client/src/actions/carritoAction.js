export const ADD_CARRITO = 'ADD_CARRITO'
export const GET_CARRITO = 'GET_CARRITO'
export const ADD_CANT = 'ADD_CANT'
export const SUB_CANT = 'SUB_CANT'
export const ALL_CARRITOS = 'ALL_CARRITOS'


export function addCarrito(producto, usuario) {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/agregaritem/' + producto + '/' + usuario, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include'
            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_CARRITO }),
                        alert("producto agregado")
                    )
                } else {
                    alert("No se pudo agregar el producto")
                }
            })
    }
}

export function getCarrito(idUser) {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/products/' + idUser)
            .then(response => response.json())
            .then(json => {
                return dispatch({ type: GET_CARRITO, payload: json })
            })
    }
}

export function allCarritos() {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/', {
                credentials: 'include'
            })
            .then(response => response.json())
            .then(json => {
                return dispatch({ type: ALL_CARRITOS, payload: json })
            })
    }
}

export function addCant(idUser, idProducto) {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/modificarcantidad/' + idUser + '/' + idProducto, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({ accion: "sumar" })
            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_CANT }),
                        window.location.reload()
                    )
                } else {
                    alert("No se pudo sumar")
                }
            })
    }
}

export function subCant(idUser, idProducto) {
    return function(dispatch) {
        return fetch('http://localhost:3080/ordenes/modificarcantidad/' + idUser + '/' + idProducto, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({ accion: "restar" })
            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: SUB_CANT }),
                        window.location.reload()
                    )
                } else {
                    alert("No se pudo restar")
                }
            })
    }
}