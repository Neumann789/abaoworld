var SERVER_PRO_IP = "127.0.0.1";
var SERVER_MEM_IP = "127.0.0.1";

/**
 * 将时间戳转换为日期
 * @param str
 * @returns {string}
 */
function chgTimestamp2Date(str){
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth()+1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
    return oTime;
};
//补0操作
function getzf(num){
    if(parseInt(num) < 10){
        num = '0'+num;
    }
    return num;
}

//alert(chgTimestamp2Date(1510202474971))