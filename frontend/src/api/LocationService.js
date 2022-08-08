
const axios = require('axios');

export async function getLocations() {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // return response.data

    await new Promise(resolve => setTimeout(resolve, 1000))
    return [
        "Addis",
        "mekele",
        "jalmeda"
    ]
        // .then(function (response) {
        //     // handle success
        //     callback(response.data)
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log("response", error.response);
        //     console.log("request",error.request);
        //     console.log("message",error.message);
        // });
}