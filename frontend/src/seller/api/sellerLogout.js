import { BACKEND_HOST } from '../../config'
const sellerLogout = async (callback) => {
    await fetch(BACKEND_HOST + '/professional/logout', {
        credentials: 'include',
    })
        .then((response) => response.json())
        .then((data) => {
            callback(data)
        }
        );
}

export {
    sellerLogout
}