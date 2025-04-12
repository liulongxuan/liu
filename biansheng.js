[rewrite_local] 

^https:\/\/appss\.baomingding\.com\/ url script-response-body https://raw.githubusercontent.com/liulongxuan/liu/refs/heads/main/biansheng.js

[MITM]
hostname = appss.baomingding.com


 */
 
var long = JSON['parse']($response['body']);
long = {
   "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
         "type" = "VIP";
    "freeFlag" = "YES";
  "vipExpireDays" = 99999999999;
   "vipExpireTime" = "2999-01-01 00:00:00";
};
$done({
    'body': JSON['stringify'](long)
});;
