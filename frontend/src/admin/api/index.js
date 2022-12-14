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
export {
    get_pending_services,
    approve_service,
    get_professional_count,
    get_service_count,
    get_user_count,
    get_info
}