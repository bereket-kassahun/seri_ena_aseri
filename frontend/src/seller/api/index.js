import networkCall from "../../utils/networkCall";

function sellerLogout(callback){
    networkCall({}, callback, 'GET','professional/logout');
}

function serviceRegister(data, callback){
    networkCall(data, callback, 'POST', 'services/register')
}

function professional_services(data, callback){
    networkCall(data, callback, 'POST', 'professional/get_professional_services')
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

function get_payment_link(data, callback){
    networkCall(data, callback, 'POST', 'professional/get_payment_link')
}

function verify_payment(data, callback){
    networkCall(data, callback, 'POST', 'professional/verify_payment')
}

function update_avialability(data, callback){
    networkCall(data, callback, 'POST', 'services/update_avialability')
}

function check_publishing_ability(data, callback){
    networkCall(data, callback, 'POST', 'professional/check_publishing_ability')
}

export {
    sellerLogout,
    serviceRegister,
    professional_services,
    update_services,
    update_professional,
    transaction_register,
    get_professional_average_rating,
    get_payment_link,
    verify_payment,
    update_avialability,
    check_publishing_ability
}