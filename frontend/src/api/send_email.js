import { BACKEND_HOST } from './config'
const sendEmail = async (email, callback) => {
    await fetch(BACKEND_HOST + '/verification/send_email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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