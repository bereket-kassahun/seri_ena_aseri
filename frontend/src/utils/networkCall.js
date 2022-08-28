import { BACKEND_HOST } from '../config'
export default function networkCall(data, callback, METHOD,path){
    await fetch(BACKEND_HOST +'/'+ path, {
        method: METHOD,
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
