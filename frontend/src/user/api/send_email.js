import { BACKEND_HOST } from '../../config'
const sendEmail = async (email, callback) => {
    await fetch(BACKEND_HOST + '/verification/send_email', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Credentials":	true,
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(res => res.json())
    .then(res => callback(res));
}

export {
    sendEmail
}