import { BACKEND_HOST } from './config'
const verifyEmail = async (email, code, callback) => {
    await fetch(BACKEND_HOST + '/verification/verify_email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            code: code
        })
    })
    .then(res => res.json())
    .then(res => callback(res));
}

export {
    verifyEmail
}