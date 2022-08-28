import networkCall from "../utils/networkCall";


function verifyEmail(data, callback){
    networkCall(data, callback, 'POST', 'verification/verify_email')
}

function sendEmail(email, callback){
    networkCall({email: email}, callback, 'POST', 'verification/send_email')
}

function sellerLogin(data, callback){
    networkCall(data, callback, 'POST', 'professional/login')
}
function search(query, callback){
    networkCall({}, callback, 'GET', 'services/search?word=' + query.word+'&page='+query.page+'&limit='+query.limit)
}
function recommend(word, callback){
    networkCall({}, callback, 'GET', 'services/recommend?word=' + word)
}
function professional_services(id, callback){
    networkCall({id: id}, callback, 'POST', 'professional/get_professional_services')
}
function sellerLogin(data, callback){
    networkCall(data, callback, 'POST', 'professional/login')
}

function isLoggedIn(callback){
    networkCall({}, callback, 'GET', 'professional/is_logged_in')
}

function getSeller(callback){
    networkCall({}, callback, 'GET', 'professional/get_seller')
}

function category(query, callback){
    networkCall({}, callback, 'GET', 'services/category?category=' + query.category+'&page='+query.page+'&limit='+query.limit)
}

export {
    sendEmail,
    verifyEmail,
    sellerLogin,
    search,
    recommend,
    professional_services,
    sellerLogin,
    isLoggedIn,
    getSeller,
    getSeller,
    category
}