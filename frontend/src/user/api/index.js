import networkCall from "../../utils/networkCall";


function verifyEmail(data, callback){
    networkCall(data, callback, 'POST', 'verification/verify_email')
}

function sendEmail(email, callback){
    networkCall({email: email}, callback, 'POST', 'verification/send_email')
}

// function sellerLogin(data, callback){
//     networkCall(data, callback, 'POST', 'professional/login')
// }
function search(query, callback){
    networkCall({}, callback, 'GET', 'services/search?word=' + query.word+'&page='+query.page+'&limit='+query.limit+'&price='+query.price+'&rating='+query.rating+'&type='+query.type)
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

function logoutClient(callback){
    networkCall({}, callback, 'GET', 'client/logout')
}

function registerClient(data, callback){
    networkCall(data, callback, 'POST', 'client/register')
}

function isClientLoggedIn(callback){
    networkCall({}, callback, 'GET', 'client/is_logged_in')
}

function loginClient(data, callback){
    networkCall(data, callback, 'POST', 'client/login')
}


function getCurrentClient(callback){
    networkCall({}, callback, 'GET', 'client/get_client')
}

function saveRating(data, callback){
    networkCall(data, callback, 'POST', 'client/rate')
}

function get_featured_services(callback){
    networkCall({}, callback, 'POST', 'services/get_featured_services')
}

function updateCallNumber(data, callback){
    networkCall(data, callback, 'POST', 'professional/update_call_count')
}
export {
    sendEmail,
    verifyEmail,
    sellerLogin,
    search,
    recommend,
    professional_services,
    isLoggedIn,
    getSeller,
    category,
    isClientLoggedIn,
    logoutClient,
    registerClient,
    loginClient,
    getCurrentClient,
    saveRating,
    updateCallNumber,
    get_featured_services
}