import { BACKEND_HOST } from '../../config'
const serviceRegister = async (data, callback) => {
    await fetch(BACKEND_HOST + '/services/register', {
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
    serviceRegister
}