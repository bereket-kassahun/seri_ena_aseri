
import { BACKEND_HOST } from '../../config'
const uploadImage = async (formData, callback) => {
    await fetch(BACKEND_HOST + '/image_upload', {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    .then(res => res.json())
    .then(res => callback(res));
}

export {
    uploadImage
}