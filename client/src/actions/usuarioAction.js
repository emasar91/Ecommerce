export const ADD_USER = 'ADD_USER'
export const GET_USERS = 'GET_USERS'
export const DELETE_USER = 'DELETE_USER'

export function addUser(usuario) {
    return function(dispatch) {
        return fetch('http://localhost:3080/users', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(usuario)

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
        return fetch('http://localhost:3080/users')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_USERS, payload: json })
            })
    }
}