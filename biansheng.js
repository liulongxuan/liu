*******************************
[rewrite_local]
^https:\/\/appss\.baomingding\.com\/ url script-response-body https://raw.githubusercontent.com/liulongxuan/liu/refs/heads/main/biansheng.js

[mitm] 
hostname = appss.baomingding.com


*******************************/

var liu = $response.body;
var obj =  JSON.parse(liu);

if($request.url.indexOf("/app/account/getAccountInfo") != -1) {
    obj.result.type = "VIP";
    obj.result.freeFlag = "YES";
    obj.result.vipExpireDays = 99999999999;
    obj.result.vipExpireTime = "2999-01-01 00:00:00";
    obj.result.vipGroupInfos = [
       {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ];
}

liu = JSON.stringify(obj);
$done(liu);
