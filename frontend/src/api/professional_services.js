import { BACKEND_HOST } from '../config'
const professional_services = async (id, callback) => {
    await fetch(BACKEND_HOST + '/professional/get_professional_services', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Credentials":	true,
        },
        body: JSON.stringify({
            id: id
        })
    })
    .then(res => res.json())
    .then(res => callback(res));
}

export {
    professional_services
}