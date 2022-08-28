import { BACKEND_HOST } from '../config'
const isLoggedIn = async (callback) => {
    await fetch(BACKEND_HOST + '/professional/is_logged_in', {
        credentials: 'include',
    })
        .then((response) => response.json())
        .then((data) => {
            callback(data)
        }
        );
}

export {
    isLoggedIn
}