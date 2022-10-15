function getWeek(){
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
         
    var weekNumber = Math.ceil(days / 7);
    return weekNumber;
}

function getMonth(){
    return (new Date).getMonth()
}


function getDay(){
    return (new Date).getDay()
}
function getDayOfMonth(){
    return (new Date).getDate()
}
console.log(getWeek())
module.exports = {
    getDay,
    getWeek,
    getMonth,
    getDayOfMonth
}