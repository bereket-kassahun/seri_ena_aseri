import { BACKEND_HOST } from './config'
const professional_services = async (id, callback) => {
    await fetch(BACKEND_HOST + '/professional/get_professional_services', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
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