/*******************************
[rewrite_local]
^https:\/\/appss\.baomingding\.com\/ url script-response-body https://raw.githubusercontent.com/liulongxuan/liu/refs/heads/main/biansheng.js

[mitm] 
hostname = appss.baomingding.com


*******************************/

// 获取响应体
var aFengYe = $response.body;

// 初始化一个用于错误捕获的函数
try {
    // 尝试解析 JSON 数据
    var obj = JSON.parse(aFengYe);
    
    // 检查请求 URL 是否包含特定路径
    if ($request.url.indexOf("/app/account/getAccountInfo") !== -1) {
        console.log("匹配到 getAccountInfo URL");

        // 更新对象中的特定字段
        obj.result.type = "VIP";
        obj.result.freeFlag = "YES";
        obj.result.vipExpireDays = 99999999999;
        obj.result.vipExpireTime = "2999-01-01 00:00:00";
        obj.result.vipGroupInfos = [
            {
                "groupType": "TYPE_ONE",
                "vipType": "VIP",
                "autoPay": "YES"
            }
        ];

        console.log("对象修改成功: ", JSON.stringify(obj));
    } else {
        console.log("未匹配到目标URL");
    }

    // 将修改后的对象转换回字符串
    aFengYe = JSON.stringify(obj);
} catch (e) {
    // 捕获并记录任何错误
    console.error("解析或处理过程中出现错误: " + e.message);
}

// 输出处理完成
$done(aFengYe);
