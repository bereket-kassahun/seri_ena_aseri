import networkCall from "../../utils/networkCall";

function sellerLogout(callback){
    networkCall({}, callback, 'GET','professional/logout');
}

function serviceRegister(data, callback){
    networkCall(data, callback, 'POST', 'services/register')
}

function professional_services(id, callback){
    networkCall({id: id}, callback, 'POST', 'professional/get_professional_services')
}

function update_professional(data, callback){
    networkCall(data, callback, 'POST', 'professional/update')
}

function update_services(data, callback){
    networkCall(data, callback, 'POST', 'services/update_service')
}

function transaction_register(data, callback){
    networkCall(data, callback, 'POST', 'transaction/register')
}

function get_professional_average_rating(data, callback){
    networkCall(data, callback, 'POST', 'professional/get_professional_average_rating')
}

export {
    sellerLogout,
    serviceRegister,
    professional_services,
    update_services,
    update_professional,
    transaction_register,
    get_professional_average_rating
}