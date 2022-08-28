import postRequest from "../../utils/networkCall";

function sellerLogout(callback){
    postRequest({}, callback, 'GET','professional/logout');
}

function serviceRegister(data, callback){
    postRequest(data, callback, 'POST', 'services/register')
}

export {
    sellerLogout,
    serviceRegister
}