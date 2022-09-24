import { BACKEND_HOST } from '../config'
export default async function networkCall(data, callback, METHOD,path){
    if(METHOD == 'POST'){
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
        .then(res => callback(res))
        .catch((err) => {
            callback({success: false, message: err})
        })
    }else{
        await fetch(BACKEND_HOST +'/'+ path, {
            method: METHOD,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                "Access-Control-Allow-Credentials":	true,
            },
        })
        .then(res => res.json())
        .then(res => callback(res))
        .catch((err) => callback({success: false, message: err}))
    }
    

}
