export const ADD_USER = 'ADD_USER'

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