
import { BACKEND_HOST } from '../config'
const sellerLogin = async (data, callback) => {
    await fetch(BACKEND_HOST + '/professional/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Credentials":	true,
        },
        
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => callback(res))
    .catch((err) => callback({success: false, message: "incorrect username or password"}));
}

export {
    sellerLogin
}