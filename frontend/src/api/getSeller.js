
import { BACKEND_HOST } from '../config'
const getSeller = async (callback) => {
    await fetch(BACKEND_HOST + '/professional/get_seller', {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Credentials":	true,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            callback(data)
        }
        );
}

export {
    getSeller
}