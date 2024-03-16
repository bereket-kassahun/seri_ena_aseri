import { BACKEND_HOST } from '../../config'
const verifyEmail = async (data, callback) => {
    await fetch(BACKEND_HOST + '/verification/verify_email', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Credentials":	true,
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => callback(res));
}

const verifyClientEmail = async (data, callback) => {
    await fetch(BACKEND_HOST + '/verification/verify_client_email', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Credentials":	true,
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => callback(res));
}

export {
    verifyEmail,
    verifyClientEmail
}