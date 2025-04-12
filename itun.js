/*************************************

项目名称：iTunes-系列解锁合集
更新日期：2024-05-17
脚本作者：ddm

使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：如果脚本无效，请先排除是否脚本冲突
特别说明：此脚本可能会导致App Store无法登录ID
解决方法：关[MITM][脚本][代理工具]方法选一即可
已解锁App传送门：https://too.st/iTunes

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/liulongxuan/liu/refs/heads/main/itun.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var liulongxuan = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const bundle_id = liulongxuan.receipt["bundle_id"] || liulongxuan.receipt["Bundle_Id"];

const list = {
    'com.wedobest.xiangqi com': { cm: 'sjblb', hx: 'hxpda', id: "com.wedobest.xiangqi.removeads", latest: "liulongxuan" },  //象棋
   'FlashTransportMaster': { cm: 'sjbla', hx: 'hxpda', id: "com.flashtransport.fightenegery.yearly.base", latest: "liulongxuan" },  //时光罐罐
  'com.ideack.ASR': { cm: 'sjblb', hx: 'hxpda', id: "ASR_Permanent_Plan", latest: "liulongxuan" },  //录音转文字
  'Presets': { cm: 'sjbla', hx: 'hxpda', id: "com.chromatech.chroma.yearlyAutoRenewable", latest: "liulongxuan" },  //Presets:照片处理、图像编辑器
  'GoodTask': { cm: 'sjblb', hx: 'hxpda', id: "com.hahainteractive.goodtask3.pro", latest: "liulongxuan" },  //代办事项清单-GoodTask
  'com.hanchongzan.period': { cm: 'sjblb', hx: 'hxpda', id: "com.hanchongzan.period.boyYear", latest: "liulongxuan" },  //姨妈来咯
    'com.hanchongzan.book': { cm: 'sjblb', hx: 'hxpda', id: "com.hanchongzan.book.vip", latest: "liulongxuan" }, //闪电记账
  'SoundLab': { cm: 'sjblb', hx: 'hxpda', id: "8001", latest: "liulongxuan" },  //合声-音乐制作
  'ECGANALYZER': { cm: 'sjbla', hx: 'hxpda', id: "com.wms.hrv.yearlyfamilysharing", latest: "liulongxuan" }, //ECG+
  'com.RuoG.Pixiu': { cm: 'sjbla', hx: 'hxpda', id: "com.RuoG.Pixiu.VIPYear", latest: "liulongxuan" }, //貔貅记账
  'com.ideack.BusinessCard': { cm: 'sjblb', hx: 'hxpda', id: "BusinessCardVipPerpetual", latest: "liulongxuan" }, //名片夹
  'com.ideack.MagicAudio': { cm: 'sjblb', hx: 'hxpdb', id: "MagicAudioPermanent", latest: "liulongxuan" }, //音乐剪辑
  'DuChuangZhe': { cm: 'sjbla', hx: 'hxpda', id: "org.zrey.du.main", latest: "liulongxuan" }, //独创者
  'PhotoWhite': { cm: 'sjblb', hx: 'hxpda', id: "org.zrey.photowhite.flash_lifetime", latest: "liulongxuan" },  //印白相册
  'FETreeVideoChange': { cm: 'sjblb', hx: 'hxpda', id: "com.dj.videototext.forever", latest: "liulongxuan" },  //视频转文字
  '%E5%B0%8F%E5%B0%8F%E7%9B%B8%E6%9C%BA%E5%A4%A7%E5%B8%88': { cm: 'sjblb', hx: 'hxpda', id: "com.ai.merge.forever.vip", latest: "liulongxuan" },  //乐颜
  'FoodIdentificationTool': { cm: 'sjblb', hx: 'hxpda', id: "20002", latest: "liulongxuan" },  //剂查查
  'com.qingcheng.seal.Seal': { cm: 'sjblb', hx: 'hxpda', id: "com.qingcheng.seal.Seal.premium.forever", latest: "liulongxuan" },  //印章制作
  'com.geekapp.VoiceTranslation': { cm: 'sjblb', hx: 'hxpda', id: "VoiceTranslatorPerpetual", latest: "liulongxuan" },  //出国翻译官
  'com.idealityapp.VideoEditing': { cm: 'sjblb', hx: 'hxpda', id: "MagicVideo_Vip_Permanent", latest: "liulongxuan" },  //魔影-视频剪辑
  'YinzhangMaster': { cm: 'sjblb', hx: 'hxpda', id: "com.xiaoqi.seal.forever", latest: "liulongxuan" },  //印章大师
  'com.cuilingshi.flipclock': { cm: 'sjblb', hx: 'hxpda', id: "FlipClockProVersion", latest: "liulongxuan" },  //翻页时钟
  'com.maine.aifill': { cm: 'sjblb', hx: 'hxpda', id: "com.maine.aifill.unlimited", latest: "liulongxuan" },  //AI FILL-智能填充.换衣/换背景
  'DeviceFinder': { cm: 'sjblb', hx: 'hxpda', id: "com.wonderfind.lifetime", latest: "liulongxuan" },  //Wonderfind-设备查找
  'Graphionica': { cm: 'sjbla', hx: 'hxpda', id: "premium_year", latest: "liulongxuan" },  //Graphionica
  'AIAssistant': { cm: 'sjbla', hx: 'hxpda', id: "AIchat_1w_7.99_trial", latest: "liulongxuan" },  //AIAssistant
  'MonitorPlus': { cm: 'sjblb', hx: 'hxpda', id: "com.unhonin.MonitorPlus.proversion", latest: "liulongxuan" },  //Monitor+
  'MessageHold': { cm: 'sjblb', hx: 'hxpda', id: "com.messagehold.forever", latest: "liulongxuan" },  //拦截盾
  'Guitar%20Gravitas': { cm: 'sjbla', hx: 'hxpda', id: "GuitarGravitasChordsScalesArpeggiosLessons", latest: "liulongxuan" },  //GuitarGravitas
  'com.eleven.chatgpt': { cm: 'sjbla', hx: 'hxpda', id: "com.chatgpt.yearly", latest: "liulongxuan" },  //ChatAI
  'com.casttv.remotetv': { cm: 'sjblb', hx: 'hxpda', id: "liftesjbl2", latest: "liulongxuan" }, //TVRemote电视遥控器
  'WallpaperWidget': { cm: 'sjbla', hx: 'hxpda', id: "com.widget.theme.yearly.3dayfree", latest: "liulongxuan" }, //壁纸主题(需试用)
  'ProREC': { cm: 'sjbla', hx: 'hxpda', id: "ProAudioCamera_Annual", latest: "liulongxuan" }, //ProREC-相机
  'TypeOn%20Keyboard': { cm: 'sjblb', hx: 'hxpda', id: "com.hanchongzan.book.vip", latest: "liulongxuan" }, //TypeOn
  'PhotoCollagePro': { cm: 'sjblb', hx: 'hxpda', id: "PHOTABLE_PREMIUM", latest: "liulongxuan" }, //Photable-腹肌P图神器
  'com.alphamobiletech.bodyApp': { cm: 'sjblb', hx: 'hxpda', id: "Bodyapp_Forever", latest: "liulongxuan" }, //Bodyapp-身材修图软件
  'com.alphamobiletech.facey': { cm: 'sjblb', hx: 'hxpda', id: "Facey_Forever", latest: "liulongxuan" }, //Facey-专业彩妆P图神器
  'Packet': { cm: 'sjblb', hx: 'hxpda', id: "com.aaaalab.nepacket.iap.full", latest: "liulongxuan" }, //HTTPS抓包
  'AllMyBatteries': { cm: 'sjblb', hx: 'hxpda', id: "AllMyBatteries_Ultimate", latest: "liulongxuan" }, //AllMyBatteries-电池管家
  'VDIT': { cm: 'sjblb', hx: 'hxpda', id: "me.imgbase.videoday.profeatureslifetime", latest: "liulongxuan" }, //VDIT-视频转换
  'CodeSnippet': { cm: 'sjbla', hx: 'hxpda', id: "it.beatcode.codesnippetpro.annualSubscription", latest: "liulongxuan" }, //CodeSnippet
  'darkWeb': { cm: 'sjbla', hx: 'hxpda', id: "dforce_unlock_all_functions", latest: "liulongxuan" }, //DForce-Safari扩展
  'BookReader': { cm: 'sjbla', hx: 'hxpda', id: "com.reader.1year", latest: "liulongxuan" }, //阅读器-小说阅读器
  'BeatStation': { cm: 'sjbla', hx: 'hxpda', id: "BS_Pro_Yearly", latest: "liulongxuan" }, //BeatStation-节奏工作站
  'FastPlayer': { cm: 'sjbla', hx: 'hxpda', id: "VideoPlayer_ProVersion", latest: "liulongxuan" }, //万能播放器
  'SimpleNotation': { cm: 'sjblb', hx: 'hxpda', id: "com.xinlin.notation.once", latest: "liulongxuan" }, //简谱大师
  'ChordMaster': { cm: 'sjblb', hx: 'hxpda', id: "com.chordMaster.once", latest: "liulongxuan" }, //MusicTotor-识谱大师
  'Xfuse': { cm: 'sjblb', hx: 'hxpda', id: "com.xfuse.ProVision", latest: "liulongxuan" }, //磁力宅播放器
  'com.BertonYc.ScannerOCR': { cm: 'sjblb', hx: 'hxpda', id: "Scanner_Subscibe_Permanent", latest: "liulongxuan" }, //万能扫描王
  'HRV': { hx: 'hxpdc', id: "com.stress.test.record.yearly", latest: "liulongxuan" },  //解压小橘子(需试用)
  'iVCam': { cm: 'sjblb', hx: 'hxpda', id: "ivcam.full", latest: "liulongxuan" },//iVCam-电脑摄像头
  'RBrowser': { cm: 'sjbla', hx: 'hxpda', id: "com.mm.RBroswer.product11", latest: "liulongxuan" }, //R浏览器(需试用)
  'Filterra': { cm: 'sjblb', hx: 'hxpda', id: "com.filterra.wtonesjblpurchase", latest: "liulongxuan" },//Filterra-照片编辑器
  'MOLDIV': { cm: 'sjblb', hx: 'hxpda', id: "com.jellybus.Moldiv.IAP.PRO7999", latest: "liulongxuan" },//MOLDIV-视频/照片编辑
  'PICSPLAY': { cm: 'sjbla', hx: 'hxpda', id: "com.jellybus.PicsPlay2.IAP.PRO5999", latest: "liulongxuan" },//PICSPLAY-照片编辑
  'Rookie': { cm: 'sjbla', hx: 'hxpda', id: "com.jellybus.Rookie.IAP.PRO5999", latest: "liulongxuan" },//RKCAM-照片编辑
  'MoneyWiz': { cm: 'sjbla', hx: 'hxpda', id: "com.moneywiz.personalfinance.1year", latest: "liulongxuan" }, //MoneyWiz-个人财务
  'qxzs': { cm: 'sjblb', hx: 'hxpda', id: "yongjiu", latest: "liulongxuan" },//心率广播
  'Overdrop': { cm: 'sjblb', hx: 'hxpda', id: "com.weather.overdrop.forever", latest: "liulongxuan" }, //Overdrop-天气预报
  'Boom': { cm: 'sjblb', hx: 'hxpda', id: "com.globaldelight.iBoom.lifetimeDiscountPack", latest: "liulongxuan" }, //Boom-感受音乐
  'PDFReaderPro%20Free': { cm: 'sjblb', hx: 'hxpda', id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001", latest: "liulongxuan" }, //PDFReaderProFree
  'VideoHelper': { cm: 'sjblb', hx: 'hxpda', id: "vip_service", latest: "liulongxuan" }, //媒关系
  'Digital%20Planner': { cm: 'sjbla', hx: 'hxpda', id: "com.softwings.DigitalPlanner.1year", latest: "liulongxuan" }, //电子手帐
  'SuperMandarin': { cm: 'sjbla', hx: 'hxpda', id: "pth_vip_year", latest: "liulongxuan" }, //普通话水平测试
  'SuperQuestion': { cm: 'sjbla', hx: 'hxpda', id: "qtzs_vip_year", latest: "liulongxuan" }, //真题全刷
  'SuperElves': { cm: 'sjblb', hx: 'hxpda', id: "com.SuperElves.Answer.Forever", latest: "liulongxuan" }, //答案精灵
  'SuperDriving': { cm: 'sjblb', hx: 'hxpda', id: "jiakao_vip_forever", latest: "liulongxuan" }, //驾考学典
  'Pollykann': { cm: 'sjblb', hx: 'hxpda', id: "vip.forever.pollykann", latest: "liulongxuan" }, //小鹦看看
  'JCCalendar': { cm: 'sjblb', hx: 'hxpda', id: "com.sjc.calendar.vip.lifelong", latest: "liulongxuan" }, //简约日历
  'com.yanxia.ChsMedical': { cm: 'sjblb', hx: 'hxpda', id: "VIPUser", latest: "liulongxuan" }, //中医精华
  'SuperPointer': { cm: 'sjblb', hx: 'hxpda', id: "com.SuperPointer.Location.Forever", latest: "liulongxuan" }, //海拔指南针
  'SnakeReader': { cm: 'sjblb', hx: 'hxpda', id: "com.lyran.snakescanner.premium18", latest: "liulongxuan" }, //开卷阅读
  'FourthPPT': { cm: 'sjblb', hx: 'hxpda', id: "com.FourthPPT.Mobile.Forever", latest: "liulongxuan" }, //PPT制作软件
  'OneExtractor': { cm: 'sjblb', hx: 'hxpda', id: "com.OneExtractor.Video.Forever", latest: "liulongxuan" }, //视频提取器
  'com.Colin.Colors': { cm: 'sjbla', hx: 'hxpda', id: "com.colin.colors.annualVIP", latest: "liulongxuan" }, //搜图
  'PhotosSorter': { cm: 'sjblb', hx: 'hxpda', id: "sorter.pro.ipa", latest: "liulongxuan" }, //Sorter-相册整理
  'intolive': { cm: 'sjbla', hx: 'hxpda', id: "me.imgbase.intolive.proSubYearly", latest: "liulongxuan" }, //intolive-实况壁纸制作器
  'MyAlbum': { cm: 'sjblb', hx: 'hxpda', id: "com.colin.myalbum.isUpgradeVip", latest: "liulongxuan" }, //Cleaner-照片管理
  'VideoEditor': { cm: 'sjblb', hx: 'hxpda', id: "com.god.videohand.alwaysowner", latest: "liulongxuan" }, //VideoShot
  'PhotoMovie': { cm: 'sjbla', hx: 'hxpda', id: "com.mediaeditor.photomovie.year", latest: "liulongxuan" }, //PhotoMovie-照片视频
  'ShotOn': { cm: 'sjblb', hx: 'hxpda', id: "com.colin.shoton.forevervip", latest: "liulongxuan" }, //ShotOn
  'PhimCiaj': { cm: 'sjblb', hx: 'hxpda', id: "com.jiancent.calligraphymaster.lifetime", latest: "liulongxuan" }, //练字大师
  'sjblCut': { cm: 'sjbla', hx: 'hxpda', id: "com.floatcamellia.hfrslowmotion.forevervip", latest: "liulongxuan" },  //sjblCut
  'com.floatcamellia.motiok': { cm: 'sjbla', hx: 'hxpda', id: "com.floatcamellia.motiok.vipforever", latest: "liulongxuan" },  //Hype_Text-AE特效片制作
  'POPOLockScreenWidgetable': { cm: 'sjbla', hx: 'hxpda', id: "com.widget.fightenegery.yearly", latest: "liulongxuan" },  //多彩壁纸
  'GreetingScanner': { cm: 'sjbla', hx: 'hxpda', id: "com.alphaplus.greetingscaner.w.b", latest: "liulongxuan" },  //扫描识别王
  'FancyCamPlus': { cm: 'sjbla', hx: 'hxpda', id: "com.alphaplus.fancycam.year.198", latest: "liulongxuan" },  //悦颜相机
  'Again': { cm: 'sjblb', hx: 'hxpda', id: "com.owen.again.profession", latest: "liulongxuan" },  //Again-稍后阅读器
  'remotelg': { cm: 'sjblb', hx: 'hxpda', id: "com.gqp.remotelg.lifetime", latest: "liulongxuan" },  //UniversalRemoteTV+ 遥控器
  'Notebook': { cm: 'sjbla', hx: 'hxpda', id: "com.zoho.notebook.ios.personal.yearly", latest: "liulongxuan" },  //Notebook
  'com.damon.dubbing': { cm: 'sjbla', hx: 'hxpda', id: "com.damon.dubbing.vip12", latest: "liulongxuan" },  //有声英语绘本
  'film': { cm: 'sjbla', hx: 'hxpda', id: "pro_auto_subscribe_year_ovs", latest: "liulongxuan" },  //胶卷相机
  'Muza': { cm: 'sjbla', hx: 'hxpda', id: "com.appmuza.premium_year", latest: "liulongxuan" },  //Muza-修图APP
  'StandbyWidget': { cm: 'sjbld', hx: 'hxpda', id: "com.standby.idream.year.68", ids: "standbyus.nonconsume.missingyou", latest: "liulongxuan" },  //StandBy_Us-情侣定位
  'Mango6Minute': { cm: 'sjbla', hx: 'hxpda', id: "576170870", latest: "liulongxuan" },  //6分钟英语
  'Photo%20Cutout': { cm: 'sjbla', hx: 'hxpda', id: "com.icepine.allyear", latest: "liulongxuan" },  //轻松扣图
  'cleanPhone': { cm: 'sjbla', hx: 'hxpda', id: "com.clean.year", latest: "liulongxuan" },  //爱机清理
  'ppt': { cm: 'sjbla', hx: 'hxpda', id: "com.palmmob.pptios.yearly", latest: "liulongxuan" },  //手机PPT制作
  'WasteCat': { cm: 'sjblb', hx: 'hxpda', id: "dev.sanjin.WasteCat.PermanentVip", latest: "liulongxuan" },  //垃圾贪吃猫
  'habitdot': { cm: 'sjblb', hx: 'hxpda', id: "habitdots_pro_forever", latest: "liulongxuan" },  //习惯点点
  'MeowTalk': { cm: 'sjbla', hx: 'hxpda', id: "meowtalk.month.basic.autorenewable.subscription", latest: "liulongxuan" },  //喵说
  'stretchworkout': { cm: 'sjbla', hx: 'hxpda', id: "com.abishkking.premiumYearStretch", latest: "liulongxuan" },  //拉伸运动
  'Planist': { cm: 'sjbld', hx: 'hxpda', id: "org.zrey.planist.main", ids: "org.zrey.planist.lifetime", latest: "liulongxuan" },  //Planist
  'com.uzstudio.avenuecast.ios': { cm: 'sjblb', hx: 'hxpda', id: "1001", latest: "liulongxuan" },  //凡视知音
  'CongZhenBaZi': { cm: 'sjblb', hx: 'hxpda', id: "vip_forever_78", latest: "liulongxuan" },  //八字排盘-从真版
  'CongZhenQiMen': { cm: 'sjbla', hx: 'hxpda', id: "cn.congzhen.CongZhenQiMen.yearlyplan", latest: "liulongxuan" },  //奇门遁甲
  'ProFit': { cm: 'sjbla', hx: 'hxpda', id: "com.maxty.gofitness.yearlyplan", latest: "liulongxuan" },  //ProFit锻炼计划
  'FitnessBodybuildingVGFIT': { cm: 'sjbla', hx: 'hxpda', id: "com.vgfit.fitnessvip.yearly", latest: "liulongxuan" },  //fitnessvip
  'Water%20Reminder': { cm: 'sjbla', hx: 'hxpda', id: "com.vgfit.premiumtracker.year", latest: "liulongxuan" },  //WaterReminder水提醒
  '%E7%91%9C%E4%BC%BD': { cm: 'sjbla', hx: 'hxpda', id: "com.vgfit.yoga.yearly", latest: "liulongxuan" },  //瑜伽
  'GPSMaker': { cm: 'sjbla', hx: 'hxpda', id: "theodolite_vip_year", latest: "liulongxuan" },  //指南针定位
  'wrongbook': { cm: 'sjbla', hx: 'hxpda', id: "com.palmmob.wrongbookios.yearly", latest: "liulongxuan" },  //错题宝
  'excel': { cm: 'sjbla', hx: 'hxpda', id: "com.gamawh.excelerios.yearly", latest: "liulongxuan" },  //办公文档
  'Future%20Baby': { cm: 'sjbla', hx: 'hxpda', id: "com.nilu.faceseer.yearly", latest: "liulongxuan" },  //宝宝长相预测
  'Smoke': { cm: 'sjbla', hx: 'hxpda', id: "smoke19870727", latest: "liulongxuan" },  //今日香烟
  'com.wms.hrv': { cm: 'sjbla', hx: 'hxpda', id: "com.wms.hrv.pro", latest: "liulongxuan" },  //ECG+
  'AppAlarmIOS': { cm: 'sjbla', hx: 'hxpda', id: "alarm.me.vip.year.tier1", latest: "liulongxuan" },  //Me+
  'Tinglee': { cm: 'sjbla', hx: 'hxpdb', id: "vip.forever.tinglee", latest: "liulongxuan" },  //英语听听
  'NoteKeys': { cm: 'sjbla', hx: 'hxpda', id: "notekeys_access_weekly", latest: "liulongxuan" },  //五线谱
  'SheetMusicPro': { cm: 'sjbla', hx: 'hxpda', id: "sheetmusicpro.yearwithtrial", latest: "liulongxuan" },  //乐谱吧
  'ProtractorEdge': { cm: 'sjbla', hx: 'hxpda', id: "ProtracatorEdge.PremiumAccess", latest: "liulongxuan" },  //量角器
  'Piano%20Plus': { cm: 'sjbla', hx: 'hxpda', id: "kn_access_weekly", latest: "liulongxuan" },  //Piano Plus
  'Notation%20Pad': { cm: 'sjbla', hx: 'hxpda', id: "np_access_weekly", latest: "liulongxuan" },  //Notation Pad
  'Guitar%20Notation': { cm: 'sjbla', hx: 'hxpda', id: "gn_access_weekly", latest: "liulongxuan" },  //Guitar Notation
  'Piano%20Fantasy': { cm: 'sjbla', hx: 'hxpda', id: "com.lotuz.PianoFantasy.weekwithtrail", latest: "liulongxuan" },  //钢琴幻想
  'Piano%20Rush': { cm: 'sjbla', hx: 'hxpda', id: "com.lotuz.PianoPro.weekwithtrail", latest: "liulongxuan" },  //钢琴大师
  'com.richads.saucyart': { cm: 'sjbla', hx: 'hxpda', id: "com.richads.saucyart.sub.quarterly_29.99", latest: "liulongxuan" },  //Perky
  'SurveyorPro': { cm: 'sjbla', hx: 'hxpda', id: "com.celiangyuan.SurveyorPro.OneYear", latest: "liulongxuan" },  //测量员Pro
  'com.ydatong.dingdone': { cm: 'sjblb', hx: 'hxpda', id: "com.ydatong.dingdone.vip.forever", latest: "liulongxuan" },  //叮当代办
  'Dial': { cm: 'sjbla', hx: 'hxpda', version: "233", id: "2104", latest: "liulongxuan" },  //T9拨号
  'qxwp%20copy': { cm: 'sjbla', hx: 'hxpda', id: "com.chowjoe.wp2free.year.pro", latest: "liulongxuan" },  //壁纸
  'LingLongShouZ': { cm: 'sjbla', hx: 'hxpda', id: "zhenwushouzhangQuarterlyPlus", latest: "liulongxuan" },  //Cute手帐软件
  'MediaEditor': { cm: 'sjbla', hx: 'hxpda', id: "yearautorenew", latest: "liulongxuan" },  //剪影(需试用)
  'UniversTranslate': { cm: 'sjbla', hx: 'hxpda', id: "com.univers.translator.tool.year", latest: "liulongxuan" },  //翻译官(需试用)
  'com.gostraight.smallAccountBook': { cm: 'sjblb', hx: 'hxpda', id: "ForeverVIPPayment", latest: "liulongxuan" },  //iCost记账(需要购买)
  'ZJTBiaoGe': { cm: 'sjbla', hx: 'hxpda', id: "zhangjt.biaoge.monthvip", latest: "liulongxuan" },  //表格手机版
  'MiniMouse': { cm: 'sjbla', hx: 'hxpda', id: "minimouse_vip_1year", latest: "liulongxuan" },  //MiniMouse
  'Paste%20Keyboard': { cm: 'sjbla', hx: 'hxpda', id: "com.keyboard.1yetr", latest: "liulongxuan" },  //复制和粘贴键盘
  'EWA': { cm: 'sjbla', hx: 'hxpda', id: "com.ewa.renewable.subscription.year8", latest: "liulongxuan" },  //EWA-学习外语
  'BuBuSZ': { cm: 'sjbla', hx: 'hxpda', id: "quaVersion", latest: "liulongxuan" },  //BuBu手帐
  'CapyMood': { cm: 'sjbla', hx: 'hxpda', version: "1.1.0.3", id: "com.paha.CapyMood.year", latest: "liulongxuan" },  //CapyMood
  'xyz.iofree.lifenotes': { cm: 'sjbla', hx: 'hxpda', version: "4", id: "xyz.iofree.lifelog.pro.yearly", latest: "liulongxuan" },  //人生笔记(需试用)
  'com.icandiapps.nightsky': { cm: 'sjbla', hx: 'hxpda', version: "12.0.2.1", id: "com.icandiapps.ns4.annual", latest: "liulongxuan" },  //星空
  'Wallpapers': { cm: 'sjbla', hx: 'hxpda', version: "7.01", id: "wallpaperworld.subscription.yearly.12.notrial", latest: "liulongxuan" },  //Wallpaper Tree壁纸
  'com.yumiteam.Kuki.ID': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.yumiteam.Kuki.ID.2", latest: "liulongxuan" },  //PicsLeap-美飞
  'com.quangtm193.picpro': { cm: 'sjbla', hx: 'hxpda', version: "7.2.6.1", id: "com.quangtm193.picpro1year", latest: "liulongxuan" },  //PicPro-人工智能照片编辑器
  'Storybeat': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "yearly_1", latest: "liulongxuan" },  //Storybeat
  'com.smartgymapp.smartgym': { cm: 'sjbla', hx: 'hxpda', version: "7.2.6.1", id: "com.smartgymapp.smartgym.premiumpersonaltraineryearly", latest: "liulongxuan" },  //SmartGym
  'Psjbl': { cm: 'sjbla', hx: 'hxpda', version: "3", id: "com.subscribe.pro.year", latest: "liulongxuan" },  //Psjbl-拼图(需试用)
  'Prookie': { cm: 'sjbla', hx: 'hxpda', version: "64", id: "prookie.month.withtrial.0615", latest: "liulongxuan" },  //AI灵绘
  'BodyTune': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "Bodypro1", latest: "liulongxuan" },  //BodyTune-瘦身相机
  'com.eleven.chatgpt': { cm: 'sjbla', hx: 'hxpda', version: "4", id: "com.eleven.chatgpt.yearly", latest: "liulongxuan" },  //ChatAI
  'Caculator': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "calc_Unlock_1", latest: "liulongxuan" },  //计算器+
  'killer.sudoku.free.brain.puzzle': { cm: 'sjbla', hx: 'hxpda', version: "23111664", id: "ks.i.iap.premium", latest: "liulongxuan" },  //杀手数独
  'sudoku.puzzle.free.game.brain': { cm: 'sjbla', hx: 'hxpda', version: "23113059", id: "sudoku.i.sub.vvip.p1y", latest: "liulongxuan" },  //数独
  'com.atistudios': { cm: 'sjbla', hx: 'hxpda', version: "7.1.13", id: "us_1_month", latest: "liulongxuan" },  //Mondly
  'One%20Markdown': { cm: 'sjblb', hx: 'hxpda', version: "678", id: "10012", latest: "liulongxuan" },  //One Markdown
  'MWeb%20iOS': { cm: 'sjblb', hx: 'hxpda', version: "968", id: "10001", latest: "liulongxuan" },  //MWeb-编辑器/笔记/发布
  'NYMF': { cm: 'sjbla', hx: 'hxpda', version: "102", id: "com.nymf.app.premium_year", latest: "liulongxuan" },  //Nymf艺术照片
  'com.lockwidt.cn': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.lockwidt.cn.member", latest: "liulongxuan" },  //壁纸16
  'Utsuki': { cm: 'sjbla', hx: 'hxpda', version: "67", id: "KameePro", latest: "liulongxuan" },  //梦见账本
  'Processing': { cm: 'sjbla', hx: 'hxpda', version: "40", id: "com.polarapps.processing.annually", latest: "liulongxuan" },  //Processing
  'one%20sec': { cm: 'sjbla', hx: 'hxpda', version: "275", id: "wtf.riedel.one_sec.pro.annual.individual", latest: "liulongxuan" },  //one sec
  'com.skysoft.pencilsketch': { cm: 'sjbla', hx: 'hxpda', version: "183", id: "com.skysoft.pencilsketch.subscription.yearly", latest: "liulongxuan" },  //铅笔画(需试用)
  'com.instagridpost.rsigp': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.GridPost.oneyearplus", latest: "liulongxuan" },  //九宫格切图
  'com.skysoft.picsqueen': { cm: 'sjbla', hx: 'hxpda', version: "40", id: "com.skysoft.picsqueen.subscription.yearly", latest: "liulongxuan" },  //PicsQueen
  'com.skysoft.removalfree': { cm: 'sjbla', hx: 'hxpda', version: "706", id: "com.skysoft.removalfree.subscription.yearly", latest: "liulongxuan" },  //图片消除
  'com.skysoft.facecartoon': { cm: 'sjbla', hx: 'hxpda', version: "87", id: "com.skysoft.facecartoon.subscription.yearly", latest: "liulongxuan" },  //卡通头像
  'Jennie%20AI': { cm: 'sjbla', hx: 'hxpda', version: "50", id: "com.skysoft.text2img.vip.yearly", latest: "liulongxuan" },  //Jennie AI制作图片
  'Face%20Replace': { cm: 'sjblb', hx: 'hxpda', version: "284", id: "com.skysoft.faceswap.subscription.unlimitedaccess", latest: "liulongxuan" },  //FaceReplace(未完成)
  'MGhostLens': { cm: 'sjbla', hx: 'hxpda', version: "3.3991", id: "com.ghostlens.premium1month", latest: "liulongxuan" },  //魔鬼相机
  'Luminous': { cm: 'sjbla', hx: 'hxpda', version: "2.5.1", id: "com.spacemushrooms.weekly", latest: "liulongxuan" },  //光影修图
  'RitmoVideo': { cm: 'sjbla', hx: 'hxpda', version: "46", id: "com.zhk.hidebox.yearly", latest: "liulongxuan" },  //RitmoVideo
  'PerfectImage': { cm: 'sjbla', hx: 'hxpda', version: "5.1.7", id: "Perfect_Image_VIP_Yearly", latest: "liulongxuan" },  //完美影像(需试用)
  'moment': { cm: 'sjbla', hx: 'hxpda', version: "1.5.7", id: "PYJMoment2", latest: "liulongxuan" },  //片羽集(需试用)
  'Planner%20Plus': { cm: 'sjbla', hx: 'hxpda', version: "116", id: "com.btgs.plannerfree.yearly", latest: "liulongxuan" },  //PlannerPro
  'HiddenBox': { cm: 'sjblc', hx: 'hxpdb', version: "1" },//我的书橱
  'Synthesizer': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.qingxiu.synthesizer.mon", latest: "liulongxuan" },  //语音合成
  'ContractMaster': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.qingxiu.contracts.monthly", latest: "liulongxuan" },  //印象全能王
  'MyDiary': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "diary.yearly.vip.1029", latest: "liulongxuan" },  //我的日记
  'Translator': { cm: 'sjbla', hx: 'hxpda', version: "180", id: "trans_sub_week", latest: "liulongxuan" },  //翻译家
  'ToDoList': { cm: 'sjbla', hx: 'hxpda', version: "3", id: "todolist.subscription.yearly", latest: "liulongxuan" },  //ToDoList(需试用)
  'Idea': { cm: 'sjbla', hx: 'hxpda', version: "3", id: "top.ideaapp.ideaiOS.membership.oneyear", latest: "liulongxuan" },  //灵感(需试用)
  'ZeroTuImg': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "ZeroTuImgPlus", latest: "liulongxuan" },  //Zero壁纸
  'com.traveltao.ExchangeAssistant': { cm: 'sjbla', hx: 'hxpda', version: "1532", id: "lxbyplus", latest: "liulongxuan" },  //极简汇率(需试用)
  'EnhanceFox': { cm: 'sjbla', hx: 'hxpda', version: "6.9.3", id: "com.risingcabbage.enhancefox.yearlysubscribewithtreetrial", latest: "liulongxuan" },  //狸清照
  'ServerKit': { cm: 'sjbla', hx: 'hxpda', version: "5", id: "com.serverkit.subscription.year.a", latest: "liulongxuan" },  //服务器助手
  'RawPlus': { cm: 'sjbla', hx: 'hxpda', version: "27", id: "com.dynamicappdesign.rawplus.yearlysubscription", latest: "liulongxuan" },  //Raw相机
  'OrderGenerator': { cm: 'sjblb', hx: 'hxpda', version: "1", id: "oder_pay_forever", latest: "liulongxuan" },  //订单生成
  'GenerateAllOrdersTool': { cm: 'sjbla', hx: 'hxpda', version: "2030", id: "Order_Vip_010", latest: "liulongxuan" },  //订单生成器(需试用)
  'MoMoShouZhang': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "shunchangshouzhangQuarterlyPlus", latest: "liulongxuan" },  //卡卡手账(需试用)
  'Mindkit': { cm: 'sjblb', hx: 'hxpda', version: "207", id: "mindkit_permanently", latest: "liulongxuan" },  //Mindkit
  'DailySpending': { cm: 'sjbla', hx: 'hxpda', version: "2011", id: "com.xxtstudio.dailyspending.year", latest: "liulongxuan" },  //Daily记账
  'Miary': { cm: 'sjblb', hx: 'hxpda', version: "48", id: "lifetime_sub", latest: "liulongxuan" },  //Miary
  'ChatImage': { cm: 'sjbla', hx: 'hxpda', version: "38", id: "com.hk.zhongwenhuatu.year", latest: "liulongxuan" },  //MJ中文版
  'Noted': { cm: 'sjblb', hx: 'hxpda', version: "742", id: "com.digitalworkroom.noted.plus.lifetime", latest: "liulongxuan" },  //Noted-录音笔记软件
  'BingQiTools': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "bingqi_e2", latest: "liulongxuan" },  //猫狗翻译
  'AnyDown': { cm: 'sjblb', hx: 'hxpda', version: "1", id: "com.xiaoqi.down.forever", latest: "liulongxuan" },  //AnyDown-下载神器
  'Reader': { cm: 'sjblb', hx: 'hxpda', version: "2", id: "com.xiaoqi.reader.forever", latest: "liulongxuan" },  //爱阅读-TXT阅读器
  'com.bestmusicvideo.formmaster': { cm: 'sjbla', hx: 'hxpda', version: "10", id: "com.form.1yearvip", latest: "liulongxuan" },  //表格大师
  'ExcelSpreadSheetsWPS': { cm: 'sjbla', hx: 'hxpda', version: "32", id: "com.turbocms.SimpleSpreadSheet.viponeyear", latest: "liulongxuan" },  //简易表格(需试用)
  'XinQingRiJi': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "zhiwenshouzhangQuarterlyPlus", latest: "liulongxuan" },  //猫咪手帐(需试用)
  'Nutrilio': { cm: 'sjbla', hx: 'hxpda', version: "51", id: "net.nutrilio.one_year_plus", latest: "liulongxuan" },  //Nutrilio
  'Pixiu%E8%AE%B0%E8%B4%A6': { cm: 'sjbla', hx: 'hxpda', version: "20230919", id: "com.RuoG.Pixiu.VIPYear", latest: "liulongxuan" },  //貔貅记账
  'AIHeader': { cm: 'sjbla', hx: 'hxpda', version: "1.0.0.33", id: "com.ai.avatar.maker.month.3dayfree", latest: "liulongxuan" },  //AI头像馆
  'MoodTracker': { cm: 'sjblb', hx: 'hxpda', version: "21", id: "co.vulcanlabs.moodtracker.lifetime2", latest: "liulongxuan" },  //ChatSmith(美区)
  'com.dandelion.Routine': { cm: 'sjblb', hx: 'hxpda', version: "364", id: "membership", latest: "liulongxuan" },  //小日常
  'YSBrowser': { cm: 'sjblb', hx: 'hxpda', version: "5", id: "com.ys.pro", latest: "liulongxuan" },  //亚瑟浏览器
  'org.zrey.metion': { cm: 'sjbld', hx: 'hxpda', version: "1", id: "org.zrey.metion.pro", ids: "org.zrey.metion.main", latest: "liulongxuan" },  //Metion-基础+Pro
  'ZenJournal': { cm: 'sjbla', hx: 'hxpda', version: "218", id: "zen_pro", latest: "liulongxuan" },  //禅记
  '%E5%80%92%E6%94%BE%E6%8C%91%E6%88%98': { cm: 'sjbla', hx: 'hxpda', version: "29", id: "com.abighead.ReverseChallenge.iap.pro.year", latest: "liulongxuan" },  //倒放挑战
  'com.visualmidi.app.perfectpiano.Perfect-Piano': { cm: 'sjbla', hx: 'hxpda', version: "63", id: "auto_renew_monthly_subscription", latest: "liulongxuan" },  //完美钢琴
  'Straw': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.1year.eyedropper", latest: "liulongxuan" },  //吸管Pro-取色
  'vibee': { cm: 'sjbla', hx: 'hxpda', version: "3", id: "com.vibee.year.bigchampagne", latest: "liulongxuan" },  //vibee-氛围歌单小组件
  'Lister': { cm: 'sjbla', hx: 'hxpda', version: "1.0.1.1", id: "com.productlab.lister.yearly", latest: "liulongxuan" },  //Lister-计划清单
  'DrumPads': { cm: 'sjblb', hx: 'hxpda', version: "6392", id: "com.gismart.drumpads.pro_lifetime_30", latest: "liulongxuan" },  //BeatMakerGo-打碟机/打击垫/DJ鼓机
  'com.photoslab.ai.writerassistant': { cm: 'sjbla', hx: 'hxpda', version: "657", id: "com.photoslab.ai.writerassistant.year", latest: "liulongxuan" },  //Smart AI
  'WaterMaskCamera': { cm: 'sjbla', hx: 'hxpda', version: "1.2.0.102", id: "com.camera.watermark.yearly.3dayfree", latest: "liulongxuan" },  //徕卡水印相机
  'ColorPaint': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "coloring.app.singingfish.year", latest: "liulongxuan" },  //涂色
  'SymbolKeyboard': { cm: 'sjblb', hx: 'hxpda', version: "9", id: "fronts.keyboard.singingfish.one", latest: "liulongxuan" },  //Fonts花样字体
  'com.SingingFish.SudokuGame': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.singingfish.sudokugame.year", latest: "liulongxuan" },  //数独
  'com.kuaijiezhilingdashi.appname': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "com.othermaster.yearlyvip", latest: "liulongxuan" },  //快捷指令库
  'Clarity': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "claritymagazine", latest: "liulongxuan" },  //克拉壁纸(未完成)
  'LogInput': { cm: 'sjbla', hx: 'hxpda', version: "4253", id: "com.logcg.loginput", latest: "liulongxuan" },  //落格输入法
  'SoundLab': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "8800", latest: "liulongxuan" },  //合声
  'Kilonotes': { cm: 'sjbla', hx: 'hxpda', version: "15", id: "kipa_kilonotes_quarter_subscription", latest: "liulongxuan" },  //千本笔记
  'YiJianKouTu': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "XiChaoYiJianKouTuPlus", latest: "liulongxuan" },  //一键抠图
  'FileArtifact': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.shengzhou.fileartifact.year", latest: "liulongxuan" },  //文晓生
  'Wext': { cm: 'sjblb', hx: 'hxpda', version: "1", id: "com.lmf.wext.life", latest: "liulongxuan" },  //万源阅读
  'ColorCapture': { cm: 'sjbla', hx: 'hxpda', version: "198", id: "colorcapture.pro2", latest: "liulongxuan" },  //色采
  'xTerminal': { cm: 'sjbla', hx: 'hxpda', version: "186", id: "xterminal.pro2", latest: "liulongxuan" },  //xTerminal
  'Fotoz': { cm: 'sjblb', hx: 'hxpda', version: "245", id: "com.kiddy.fotoz.ipa.pro", latest: "liulongxuan" },  //Fotoz
  'TheLastFilm': { cm: 'sjbla', hx: 'hxpda', version: "150", id: "Filmroll_Pro_1Year", latest: "liulongxuan" },  //最后一卷胶片
  'Motivation': { cm: 'sjbla', hx: 'hxpda', version: "127", id: "com.monkeytaps.motivation.premium.year3", latest: "liulongxuan" },  //Motivation
  'io.sumi.GridDiary2': { cm: 'sjbla', hx: 'hxpda', version: "315", id: "io.sumi.GridDiary.pro.annually", latest: "liulongxuan" },  //格志
  'Subscriptions': { cm: 'sjbla', hx: 'hxpda', version: "434", id: "com.touchbits.subscriptions.iap.pro.yearly", latest: "liulongxuan" },  //订阅通
  'com.leapfitness.fasting': { cm: 'sjbla', hx: 'hxpda', version: "164", id: "com.leapfitness.fasting.oneyear1", latest: "liulongxuan" },  //168轻断食
  'WidgetBox': { cm: 'sjblb', hx: 'hxpda', version: "27", id: "widgetlab001", latest: "liulongxuan" },  //小组件盒子
  'LifeTracker': { cm: 'sjbla', hx: 'hxpda', version: "202208011119", id: "com.dk.lifetracker.yearplan", latest: "liulongxuan" },  //Becord生活记录
  'imgplay': { cm: 'sjbla', hx: 'hxpda', version: "482", id: "me.imgbase.imgplay.subscriptionYearly", latest: "liulongxuan" },  //imgPlay
  'WaterMinder': { cm: 'sjbla', hx: 'hxpda', version: "842", id: "waterminder.premiumYearly", latest: "liulongxuan" },  //WaterMinder喝水APP
  'HashPhotos': { cm: 'sjblb', hx: 'hxpda', version: "23177", id: "com.kobaltlab.HashPhotos.iap.allinone.free", latest: "liulongxuan" },  //HashPhotos
  'FileBrowser': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.qingcheng.filex.pro.yearly", latest: "liulongxuan" },  //松鼠下载
  'SilProject': { cm: 'sjbla', hx: 'hxpda', version: "84", id: "com.sm.Alina.Pro", latest: "liulongxuan" },  //Alina米克锁屏—
  'com.chenxi.shanniankapian': { cm: 'sjbla', hx: 'hxpda', version: "6", id: "com.chenxi.shannian.superNian", latest: "liulongxuan" },  //闪念
  'com.risingcabbage.pro.camera': { cm: 'sjbla', hx: 'hxpda', version: "98", id: "com.risingcabbage.pro.camera.yearlysubscription", latest: "liulongxuan" },  //ReLens相机
  'co.bazaart.patternator': { cm: 'sjbla', hx: 'hxpda', version: "65", id: "Patternator_Lock_Screen_Monthly", latest: "liulongxuan" },  //拍特内头
  '%E5%BD%95%E9%9F%B3%E4%B8%93%E4%B8%9A%E7%89%88': { cm: 'sjbla', hx: 'hxpda', version: "11800", id: "com.winat.recording.pro.yearly", latest: "liulongxuan" },  //录音专业版
  'cn.linfei.SimpleRecorder': { cm: 'sjbla', hx: 'hxpda', version: "5241", id: "cn.linfei.SimpleRecorder.Plus", latest: "liulongxuan" },  //录音机
  'com.maliquankai.appdesign': { cm: 'sjblc', hx: 'hxpdb', version: "1.5.8" },  //PutApp
  'com.moji.MojiWeather': { cm: 'sjbla', hx: 'hxpda', version: "202107301614", id: "moji.renewalmember.one", latest: "liulongxuan" },  //墨迹天气
  'PictureScanner': { cm: 'sjbla', hx: 'hxpda', version: "2023.05.16", id: "om.picturescanner.tool.year", latest: "liulongxuan" },  //扫描王
  'BestColor': { cm: 'sjbla', hx: 'hxpda', version: "1.3.0.1", id: "com.bestColor.tool.month", latest: "liulongxuan" },  //小红图
  'com.decibel.tool': { cm: 'sjbla', hx: 'hxpda', version: "4", id: "decibel98free3", latest: "liulongxuan" },  //分贝测试仪
  'MeasurementTools': { cm: 'sjbla', hx: 'hxpda', version: "1.0.0.1", id: "mesurementyearvip", latest: "liulongxuan" },  //测量工具
  'TinyPNGTool': { cm: 'sjbla', hx: 'hxpda', version: "1.0.0.1", id: "com.tinypngtool.tool.weekvip", latest: "liulongxuan" },  //TinyPNG
  'IconChange': { cm: 'sjbla', hx: 'hxpda', version: "2.2.0.0", id: "iconeryearvip", latest: "liulongxuan" },  //iconser图标更换
  'life.journal.diary': { cm: 'sjbla', hx: 'hxpda', version: "35", id: "life.journal.diary.annually", latest: "liulongxuan" },  //Today日记
  'com.floatcamellia.motionninja': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.floatcamellia.motionninja.yearlyvip", latest: "liulongxuan" },  //MotionNinja
  'com.iuuapp.audiomaker': { cm: 'sjbla', hx: 'hxpda', version: "1.1.34", id: "com.iuuapp.audiomaker.removeads.year", latest: "liulongxuan" },  //音频剪辑
  'com.biggerlens.photoretouch': { cm: 'sjbla', hx: 'hxpda', version: "16", id: "com.photoretouch.1week", latest: "liulongxuan" },  //PhotoRetouch消除笔P图
  'com.macpaw.iosgemini': { cm: 'sjbla', hx: 'hxpda', version: "11353", id: "com.macpaw.iosgemini.month.trial", latest: "liulongxuan" },  //GeminiPhotos
  'com.mematom.ios': { cm: 'sjbla', hx: 'hxpda', version: "373", id: "MMYear", latest: "liulongxuan" },  //年轮3
  'com.LuoWei.aDiary': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "com.LuoWei.aDiary.yearly0", latest: "liulongxuan" },  //aDiary-待办日记本
  'com.zerone.hidesktop': { cm: 'sjblb', hx: 'hxpda', version: "4", id: "com.zerone.hidesktop.forever", latest: "liulongxuan" },  //iScreen-桌面小组件主题美化
  'MagicWidget': { cm: 'sjbla', hx: 'hxpda', version: "224", id: "com.sm.widget.Pro", latest: "liulongxuan" },  //ColorfulWidget—小组件
  'com.tasmanic.capture': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "CTPCAPTUREYEARLY", latest: "liulongxuan" },  //3DScanner-绘制/测量平面图
  'com.readdle.CalendarsLite': { cm: 'sjbla', hx: 'hxpda', version: "5.24.8.1194", id: "com.readdle.CalendarsLite.subscription.year20trial7", latest: "liulongxuan" },  //Calendars-日历/计划
  'com.readdle.ReaddleDocsIPad': { cm: 'sjbla', hx: 'hxpda', version: "8.3.1.902", id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers", latest: "liulongxuan" },  //Documents
  'com.1ps.lovetalk': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.1ps.lovetalk.normal.weekly", latest: "liulongxuan" },  //高级恋爱话术
  'tech.miidii.MDClock': { cm: 'sjblb', hx: 'hxpda', version: "359", id: "tech.miidii.MDClock.pro", latest: "liulongxuan" },  //谜底时钟
  'com.floatcamellia.prettyup': { cm: 'sjblb', hx: 'hxpda', id: "com.floatcamellia.prettyup.onesjblpurchase", latest: "liulongxuan" },  //PrettyUp视频P图
  'com.zijayrate.analogcam': { cm: 'sjbla', hx: 'hxpda', version: "68", id: "com.zijayrate.analogcam.vipforever10", latest: "liulongxuan" },  //oldroll复古相机
  'WeeklyNote': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "org.zrey.weeklynote.yearly", latest: "liulongxuan" },  //WeeklyNote(周周记)
  'DoMemo': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "org.zrey.fastnote.yearly", latest: "liulongxuan" },  //DoMemo
  'CostMemo': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "org.zrey.money.yearly", latest: "liulongxuan" },  //CostMemo
  'isjblly': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "org.zrey.isjblly.yearly", latest: "liulongxuan" },  //isjblly
  'net.daylio.Daylio': { cm: 'sjbla', hx: 'hxpda', version: "125", id: "net.daylio.one_year_pro.offer_initial", latest: "liulongxuan" },  //Daylio-日记
  'com.yengshine.webrecorder': { cm: 'sjbla', hx: 'hxpda', version: "1.8.1.1", id: "com.yengshine.webrecorder.yearly", latest: "liulongxuan" },  //VlogStar-视频编辑器
  'org.skydomain.foodcamera': { cm: 'sjbla', hx: 'hxpda', version: "4.3.7", id: "org.skydomain.foodcamera.yearly", latest: "liulongxuan" },  //Koloro-滤镜君
  'com.yengshine.proccd': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.yengshine.proccd.yearly", latest: "liulongxuan" },  //ProCCD相机
  'com.palmmob.pdfios': { cm: 'sjbla', hx: 'hxpda', version: "124", id: "com.palmmob.pdfios.168", latest: "liulongxuan" },  //图片PDF转换器
  'com.palmmob.scanner2ios': { cm: 'sjbla', hx: 'hxpda', version: "106", id: "com.palmmob.scanner2ios.396", latest: "liulongxuan" },  //文字扫描
  'com.palmmob.officeios': { cm: 'sjbla', hx: 'hxpda', version: "168", id: "com.palmmob.officeios.188", latest: "liulongxuan" },  //文档表格编辑
  'com.palmmob.recorder': { cm: 'sjbla', hx: 'hxpda', version: "145", id: "com.palmmob.recorder.198", latest: "liulongxuan" },  //录音转文字
  'com.7color.newclean': { cm: 'sjbla', hx: 'hxpda', version: "2.2", id: "com.cleaner.salesyear", latest: "liulongxuan" },  //手机清理
  'Habbit': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "HabitUpYearly", latest: "liulongxuan" },  //习惯清单
  'com.dbmeterpro.dB-Meter-Free': { cm: 'sjbla', hx: 'hxpda', version: "301", id: "com.dbmeterpro.premiumModeSubscriptionWithTrial", latest: "liulongxuan" },  //dBMeter-分贝仪(专业版)
  'com.vstudio.newpuzzle': { cm: 'sjbla', hx: 'hxpda', version: "2926", id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99", latest: "liulongxuan" },  //拼图酱
  'com.jianili.Booka': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "com.jianili.Booka.pro.yearly", latest: "liulongxuan" },  //Booka-极简书房
  'com.ziheng.OneBox': { cm: 'sjblb', hx: 'hxpda', version: "8", id: "com.ziheng.OneBox", latest: "liulongxuan" },  //Pandora管理订阅
  'ChickAlarmClock': { cm: 'sjbla', hx: 'hxpda', version: "1473", id: "com.ChickFocus.ChickFocus.yearly_2023_promo", latest: "liulongxuan" },  //小鸡专注
  'MyWorks': { cm: 'sjbla', hx: 'hxpda', version: "3", id: "com.MyWorks.Handwritten.Year", latest: "liulongxuan" },  //仿手写
  'Instant%20Saver': { cm: 'sjbla', hx: 'hxpda', version: "1.0", id: "com.pocket.compress.yearly", latest: "liulongxuan" },  //InstantSocialSaver(ins下载)
  'SaveTik': { cm: 'sjbla', hx: 'hxpda', version: "1.0", id: "com.pocket.compress.yearly", latest: "liulongxuan" },  //SaveTik
  '%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8': { cm: 'sjbla', hx: 'hxpda', version: "1.0", id: "com.mobislet.files.yearly", latest: "liulongxuan" },  //文件管理器
  'ZIP%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "com.mobislet.zipfile.yearly", latest: "liulongxuan" },  //ZIP压缩解压
  'TPTeleprompter': { cm: 'sjbla', hx: 'hxpda', version: "1.0", id: "com.pocket.compress.yearly", latest: "liulongxuan" },  //爱提词
  'com.pocket.photo': { cm: 'sjbla', hx: 'hxpda', version: "2", id: "com.pocket.photo.yearly", latest: "liulongxuan" },  //一寸证件照
  'com.pocket.watermark': { cm: 'sjbla', hx: 'hxpda', version: "8", id: "com.pocket.watermark.yearly", latest: "liulongxuan" },  //一键水印
  'com.pocket.compress': { cm: 'sjbla', hx: 'hxpda', version: "1.0", id: "com.pocket.compress.yearly", latest: "liulongxuan" },  //压缩软件
  'com.pocket.format': { cm: 'sjbla', hx: 'hxpda', version: "2.0.5", id: "com.pocket.format.yearly", latest: "liulongxuan" },  //格式转换
  '%E8%AE%A1%E7%AE%97%E5%99%A8%20Air': { cm: 'sjbla', hx: 'hxpda', version: "3.22.0.1001", id: "co.airapps.calculator.year", latest: "liulongxuan" },  //计算器Air
  'com.CalculatorForiPad.InternetRocks': { cm: 'sjbla', hx: 'hxpda', version: "3.22.0.1001", id: "co.airapps.calculator.year", latest: "liulongxuan" },
  'co.airapps.translatorkeyboard': { cm: 'sjbla', hx: 'hxpda', version: "1.28.1.1001", id: "co.airapps.translatorkeyboard.yearly", latest: "liulongxuan" },  //立即翻译-键盘
  'solutions.wzp.translator': { cm: 'sjbla', hx: 'hxpda', version: "6.5.0.1005", id: "solutions.wzp.translator.yearlysubscription", latest: "liulongxuan" },  //立即翻译
  'solutions.wzp.translator': { cm: 'sjbla', hx: 'hxpda', version: "3.1.6.1", id: "solutions.wzp.translator.yearlysubscription", latest: "liulongxuan" },  //QrScan扫描
  'com.internet-rocks.codescanner': { cm: 'sjbla', hx: 'hxpda', version: "5.14.0.1004", id: "co.airapps.qrscan.year", latest: "liulongxuan" },  //二维码Air
  'solutions.wzp.translatephoto': { cm: 'sjbla', hx: 'hxpda', version: "3.12.0.1004", id: "co.airapps.traducam.yearly", latest: "liulongxuan" },  //翻译照片
  'co.airapps.finderbot': { cm: 'sjbla', hx: 'hxpda', version: "2.15.0.1003", id: "co.airapps.finderbot.year", latest: "liulongxuan" },  //FindAir
  'com.internet-rocks.colorando': { cm: 'sjbla', hx: 'hxpda', version: "3.10.0.1004", id: "com.colorando.yearly", latest: "liulongxuan" },  //填色本Air
  'co.airapps.scannerapp': { cm: 'sjbla', hx: 'hxpda', version: "2.16.0.1003", id: "co.airapps.scannerapp.year", latest: "liulongxuan" },  //ScannerAir
  'co.airapps.notes': { cm: 'sjbla', hx: 'hxpda', version: "1.6.0.1005", id: "co.airapps.notes.year", latest: "liulongxuan" },  //笔记Air
  'co.airapps.steps': { cm: 'sjbla', hx: 'hxpda', version: "1.3.0.1002", id: "co.airapps.steps.year", latest: "liulongxuan" },  //脚步Air
  'co.airapps.collage': { cm: 'sjbla', hx: 'hxpda', version: "1.6.0.1003", id: "co.airapps.collage.year", latest: "liulongxuan" },  //拼贴画(照片拼图Air)
  'co.airapps.fasting': { cm: 'sjbla', hx: 'hxpda', version: "1.3.0.1002", id: "co.airapps.fasting.year", latest: "liulongxuan" },  //饥饿(断食Air)
  'co.airapps.belingual': { cm: 'sjbla', hx: 'hxpda', version: "2.11.0.1002", id: "co.airapps.belingual.year", latest: "liulongxuan" },  //BeLingual
  'co.airapps.widgetbot': { cm: 'sjbla', hx: 'hxpda', version: "2.7.0.1010", id: "co.airapps.widgetbot.yearly", latest: "liulongxuan" },  //Widgetbot
  'co.airapps.weather': { cm: 'sjbla', hx: 'hxpda', version: "1.5.0.1002", id: "co.airapps.weather.year", latest: "liulongxuan" },  //天气Air
  'co.airapps.debtsmanager': { cm: 'sjbla', hx: 'hxpda', version: "2.8.0.1002", id: "co.airapps.oweme.year", latest: "liulongxuan" },  //OweMe
  'co.airapps.coloringbynumbers': { cm: 'sjbla', hx: 'hxpda', version: "2.3.0.1008", id: "co.airapps.pixit.year", latest: "liulongxuan" },  //Pixit
  'co.airapps.waterreminder': { cm: 'sjbla', hx: 'hxpda', version: "2.12.0.1005", id: "co.airapps.waterreminder.yearly", latest: "liulongxuan" },  //H2O喝水
  'co.airapps.fontbot': { cm: 'sjbla', hx: 'hxpda', version: "2.15.0.1001", id: "co.airapps.fontbot.year", latest: "liulongxuan" },  //字体Air
  'co.airapps.speech': { cm: 'sjbla', hx: 'hxpda', version: "2.14.0.1001", id: "co.airapps.speechbot.yearly", latest: "liulongxuan" },  //SpeechAir
  'co.airapps.habits': { cm: 'sjbla', hx: 'hxpda', version: "1.0.0.1069", id: "co.airapps.habits.year", latest: "liulongxuan" },  //习惯Air
  'co.airapps.quotes': { cm: 'sjbla', hx: 'hxpda', version: "1.2.0.1005", id: "co.airapps.quotes.year", latest: "liulongxuan" },  //QuotesAir
  'co.airapps.period': { cm: 'sjbla', hx: 'hxpda', version: "1.1.0.1002", id: "co.airapps.period.year", latest: "liulongxuan" },  //循環(循环Air)
  'co.airapps.tasks': { cm: 'sjbla', hx: 'hxpda', version: "1.2.0.1005", id: "co.airapps.tasks.year", latest: "liulongxuan" },  //任务Air
  'co.airapps.pdf': { cm: 'sjbla', hx: 'hxpda', version: "1.3.0.1007", id: "co.airapps.pdf.yearly", latest: "liulongxuan" },  //PDFAir
  'co.airapps.stories': { cm: 'sjbla', hx: 'hxpda', version: "1.6.0.1003", id: "co.airapps.story.year_1", latest: "liulongxuan" },  //StoryAir
  'co.airapps.journal': { cm: 'sjbla', hx: 'hxpda', version: "1.0.0.1007", id: "co.airapps.journal.year", latest: "liulongxuan" },  //期刊Air
  'co.airapps.expenses': { cm: 'sjbla', hx: 'hxpda', version: "1.0.0.1022", id: "co.airapps.expenses.year", latest: "liulongxuan" },  //用度Air
  'co.airapps.plants': { cm: 'sjbla', hx: 'hxpda', version: "1.4.0.1008", id: "co.airapps.plants.year", latest: "liulongxuan" },  //植物Air
  'co.airapps.passwords': { cm: 'sjbla', hx: 'hxpda', version: "1.3.0.1004", id: "co.airapps.passwords.year", latest: "liulongxuan" },  //密码Air
  'solutions.wzp.translator': { cm: 'sjbla', hx: 'hxpda', version: "3.1.6.1", id: "solutions.wzp.translator.yearlysubscription", latest: "liulongxuan" },  //字典空气Air
  'co.airapps.fax': { cm: 'sjbla', hx: 'hxpda', version: "1.1.1.1003", id: "co.airapps.fax.yearly", latest: "liulongxuan" },  //传真Air
  'co.airapps.graphics': { cm: 'sjbla', hx: 'hxpda', version: "1.1.0.3004", id: "co.airapps.graphics.yearly", latest: "liulongxuan" },  //设计Air
  'co.airapps.calories': { cm: 'sjbla', hx: 'hxpda', version: "1.1.0.1003", id: "co.airapps.calories.yearly", latest: "liulongxuan" },  //卡路里Air
  'SuperWidget': { cm: 'sjbla', hx: 'hxpda', version: "48", id: "com.focoslive", latest: "liulongxuan" },  //PandaWidget小组件
  'Picsew': { cm: 'sjblb', hx: 'hxpdb', version: "3206", id: "com.sugarmo.ScrollClip.pro"},  //Picsew截长图3.9.4版本
  'vpn': { cm: 'sjbla', hx: 'hxpda', version: "443", id: "yearautorenew", latest: "liulongxuan" },  //VPN-unlimited
  'TT': { cm: 'sjbla', hx: 'hxpda', version: "3.3.1", id: "com.55panda.hicalculator.year_sub", latest: "liulongxuan" },  //TT_私密相册管家
  'Focos': { cm: 'sjbla', hx: 'hxpda', version: "6054", id: "com.focos.1w_t4_1w", latest: "liulongxuan" },  //Focos
  'ProKnockOut': { cm: 'sjblb', hx: 'hxpda', version: "7", id: "com.knockout.SVIP.50off", latest: "liulongxuan" },  //ProKnockOut
  'com.teadoku.flashnote': { cm: 'sjbla', hx: 'hxpda', version: "1", id: "pro_ios_ipad_mac", latest: "liulongxuan" },  //AnkiNote
  'com.tapuniverse.texteditor': { cm: 'sjbla', hx: 'hxpda', version: "4", id: "com.tapuniverse.texteditor.w", latest: "liulongxuan" }  //TextEditor
};

//核心内容处理
for (const i in list) {
  if (new RegExp(`^${i}`, `i`).test(ua) || new RegExp(`^${i}`, `i`).test(bundle_id)) {
  //内购数据
  var receiptdata = {  "quantity":"1", "purchase_date_ms":"1694250549000", "transaction_id":"490001314520000", "is_trial_period":"false", "original_transaction_id":"490001314520000", "purchase_date":"2023-09-09 09:09:09 Etc/GMT", "product_id":(list[i].id), "original_purchase_date_pst":"2023-09-09 02:09:10 America/Los_Angeles", "in_app_ownership_type":"PURCHASED", "original_purchase_date_ms":"1694250550000", "purchase_date_pst":"2023-09-09 02:09:09 America/Los_Angeles", "original_purchase_date":"2023-09-09 09:09:10 Etc/GMT"  };
  //识别数据，处理到期时间或永久，多重购买
  if (list[i].cm.indexOf('sjbla') != -1) {  sjbl = [Object.assign({}, receiptdata, {  "expires_date":"2099-09-09 09:09:09 Etc/GMT", "expires_date_pst":"2099-09-09 06:06:06 America/Los_Angeles", "is_in_intro_offer_period":"false", "web_order_line_item_id":"490000123456789", "expires_date_ms":"4092599349000",  })];} else if (list[i].cm.indexOf('sjblb') != -1) {  sjbl = [(receiptdata)];} else if (list[i].cm.indexOf('sjblc') != -1) {  sjbl = [];  } else if (list[i].cm.indexOf('sjbld') != -1) {  sjbl = [Object.assign({}, receiptdata, {  "product_id":(list[i].ids)}), Object.assign({}, receiptdata, {  "expires_date":"2099-09-09 09:09:09 Etc/GMT", "expires_date_pst":"2099-09-09 06:06:06 America/Los_Angeles", "is_in_intro_offer_period":"false", "web_order_line_item_id":"490000123456789", "expires_date_ms":"4092599349000", "product_id":(list[i].id)  })];}
  //常用数据核心(有到期时间)
  if (list[i].hx.indexOf('hxpda') != -1) {  liulongxuan["receipt"]["in_app"] = (sjbl); liulongxuan["latest_receipt_info"] = (sjbl); liulongxuan["pending_renewal_info"] = [{  "product_id" : (list[i].id), "original_transaction_id" : "490001314520000", "auto_renew_product_id" : (list[i].id), "auto_renew_status" : "1"  }]; liulongxuan["latest_receipt"] = (list[i].latest);  }
  //永久数据核心(无到期时间)
  if (list[i].hx.indexOf('hxpdb') != -1) {  liulongxuan["receipt"]["in_app"] = (sjbl);  }
  //新核心-类似解压小橙子
  if (list[i].hx.indexOf('hxpdc') != -1) {  liulongxuan["receipt"]["in_app"] = (sjbl);  }
  //通用数据(可有可无)
  var commondata = {  "request_date": "2023-09-09 16:06:27 Etc/GMT", "request_date_pst": "2023-09-09 06:06:27 America/Los_Angeles", "request_date_ms": "1694273635000", "original_purchase_date": "2023-09-09 16:00:00 Etc/GMT", "original_purchase_date_pst": "2023-09-09 06:00:00 America/Los_Angeles", "original_purchase_date_ms": "1694273430000", "receipt_creation_date": "2023-09-09 16:06:26 Etc/GMT", "receipt_creation_date_pst": "2023-09-09 06:06:26 America/Los_Angeles", "receipt_creation_date_ms": "1694273634000", "original_application_version": list[i].version}; liulongxuan["receipt"] = Object.assign({}, liulongxuan["receipt"], commondata );
  //判断是否需要加入版本号(可有可无)
  if(list[i] && list[i].version && list[i].version.trim() !== '') {  liulongxuan["receipt"]["original_application_version"] = list[i].version;  }
  break;
  }
}

console.log('已操作成功🎉🎉🎉\n');

$done({body: JSON.stringify(liulongxuan)});
