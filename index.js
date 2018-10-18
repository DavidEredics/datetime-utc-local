exports.utc = function(date){

    if (!date) var date = new Date();

    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getUTCDate();
    day = (day < 10 ? "0" : "") + day;
    var hour = date.getUTCHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var minutes = date.getUTCMinutes();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    var seconds = date.getUTCSeconds();
    seconds = (seconds < 10 ? "0" : "") + seconds;

    return year + "/" + month + "/" + day + "-" + hour + ":" + minutes + ":" + seconds;
}

exports.local = function(date){

    if (!date) var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var minutes = date.getMinutes();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    var seconds = date.getSeconds();
    seconds = (seconds < 10 ? "0" : "") + seconds;

    return year + "/" + month + "/" + day + "-" + hour + ":" + minutes + ":" + seconds;
}