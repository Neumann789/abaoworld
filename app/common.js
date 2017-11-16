//var SERVER_PRO_URL = "http://116.62.187.97:58080";
var SERVER_PRO_URL = "http://127.0.0.1:58080";
var SERVER_MEM_IP = "127.0.0.1";
var proData = new Object();

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

function  doPost(urlPath,jsonData,callback) {
    $.ajax({
        type: 'POST',
        url: SERVER_PRO_URL+urlPath,
        data:jsonData,
        crossDomain: true,
        dataType: "jsonp",
        jsonp: "callback",
        success: function (data) {
            console.log("返回响应结果:"+data.rspCode+"-"+data.rspMsg);
            if(data.rspCode!='0000'){
                alert("失败，原因:"+data.rspCode+"-"+data.rspMsg);
                return;
            }
            callback(data);
        }
    });
}

//alert(chgTimestamp2Date(1510202474971))