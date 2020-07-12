export const ADD_USER = 'ADD_USER'
export const GET_USERS = 'GET_USERS'
export const DELETE_USER = 'DELETE_USER'
export const LOGGIN = 'LOGGIN'
export const GET_USER_LOGGED = 'GET_USER_LOGGED'

export function addUser(usuario) {
    return function(dispatch) {
        return fetch('http://localhost:3080/users', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(usuario),
                credentials: 'include'

            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_USER }),
                        window.location.replace('http://localhost:3000')
                    )
                } else {
                    alert("Error en campos")
                }
            })
    }
}

export function deleteUser(id) {
    return function(dispatch) {
        return fetch('http://localhost:3080/users/' + id, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'DELETE',
                credentials: 'include'

            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: DELETE_USER })
                    )
                } else {
                    alert("Error en campos")
                }
            })
    }
}

export function getUsers() {
    return function(dispatch) {
        return fetch('http://localhost:3080/users', {
                credentials: 'include'
            })
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_USERS, payload: json })
            })
    }
}

// export function setUserLoggedIn(nombreUsuario, contraUser) {
//     return function(dispatch) {
//         return fetch('http://localhost:3080/users/login/' + nombreUsuario + "/" + contraUser)
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: SET_USER_LOGGED, payload: json })
//             })
//             .catch(() => {
//                 console.log("error")
//             })
//     }
// }

export function getUserLoggedIn() {
    return function(dispatch) {
        return dispatch({ type: GET_USER_LOGGED })
    }
}

export function loggin(user) {
    return function(dispatch) {
        return fetch('http://localhost:3080/users/login', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include'

            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: LOGGIN, payload: res.json() })
                    )
                } else {
                    alert("Error en datos ingresados")
                }
            })
    }
}