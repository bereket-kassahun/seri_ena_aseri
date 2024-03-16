import networkCall from "../../utils/networkCall";


function get_pending_services(data, callback){
    networkCall(data, callback, 'POST', 'services/get_pending_services')
}

function approve_service(data, callback){
    networkCall(data, callback, 'POST', 'services/approve_service')
}

function get_service_count(callback){
    networkCall({}, callback, 'POST', 'services/get_service_count')
}

function get_professional_count( callback){
    networkCall({}, callback, 'POST', 'professional/get_professional_count')
}


function get_user_count( callback){
    networkCall({}, callback, 'POST', 'client/get_user_count')
}

function get_info( callback){
    networkCall({}, callback, 'POST', 'info/get_info')
}

function get_professionals(data, callback){
    networkCall(data, callback, 'POST', 'professional/get_professionals')
}
function get_services(data, callback){
    networkCall(data, callback, 'POST', 'services/get_services')
}
function toggle_status(data, callback){
    networkCall(data, callback, 'POST', 'services/toggle_status')
}

function register_service(data, callback){
    networkCall(data, callback, 'POST', 'services/register')
}

function search_professional(data, callback){
    networkCall(data, callback, 'POST', 'admin/search_professional')
}

function login(data, callback){
    networkCall(data, callback, 'POST', 'admin/sub_admin_login')
}

function is_logged_in(data, callback){
    networkCall(data, callback, 'POST', 'admin/sub_admin_is_logged_in')
}

function register(data, callback){
    networkCall(data, callback, 'POST', 'admin/register')
}

function logout(callback){
    networkCall({}, callback, 'GET', 'admin/logout')
}

function get_admin(data, callback){
    networkCall(data, callback, 'POST', 'admin/get_admin')
}

function register_sub_admin(data, callback){
    networkCall(data, callback, 'POST', 'admin/register_sub_admin')
}

export {
    get_pending_services,
    approve_service,
    get_professional_count,
    get_service_count,
    get_user_count,
    get_info,
    get_professionals,
    get_services,
    toggle_status,
    register_service,
    search_professional,
    login,
    is_logged_in,
    register,
    logout,
    get_admin,
}