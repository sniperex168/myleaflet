//初始化陣列資料markers
var markers = [ //markid應為獨特，否則會亂掉，建議英文+數字來表示
	//遺物
	{type: "RELIC",markid: "RELIC001",coords: {x: 1408,y: 6651},opa: "1",chk: "0",
	name: "<h1>小豆洗根付</h1>"
	},
	{type: "RELIC",markid: "RELIC002",coords: {x: 1663,y: 6598},opa: "1",chk: "0",
	name: "<h1>手裏劍</h1>"
	},
	{type: "RELIC",markid: "RELIC003",coords: {x: 2473,y: 7170},opa: "1",chk: "0",
	name: "<h1>萬寶槌</h1>"
	},
	{type: "RELIC",markid: "RELIC004",coords: {x: 3565,y: 7075},opa: "1",chk: "0",
	name: "<h1>彈珠</h1>"
	},
	{type: "RELIC",markid: "RELIC005",coords: {x: 3916,y: 6945},opa: "1",chk: "0",
	name: "<h1>手裏劍</h1>"
	},
	{type: "RELIC",markid: "RELIC006",coords: {x: 4371,y: 7031},opa: "1",chk: "0",
	name: "<h1>彌生陶器</h1>"
	},
	{type: "RELIC",markid: "RELIC007",coords: {x: 1901,y: 6029},opa: "1",chk: "0",
	name: "<h1>休旅車模型</h1>",
	},
	{type: "RELIC",markid: "RELIC008",coords: {x: 2065,y: 6052},opa: "1",chk: "0",
	name: "<h1>墨西哥鈍口螈模型</h1>"
	},
	{type: "RELIC",markid: "RELIC009",coords: {x: 2776,y: 5606},opa: "1",chk: "0",
	name: "<h1>直江兼續的兜</h1>"
	},
	{type: "RELIC",markid: "RELIC010",coords: {x: 3125,y: 6263},opa: "1",chk: "0",
	name: "<h1>稻草人偶</h1>",
	},
	{type: "RELIC",markid: "RELIC011",coords: {x: 3607,	y: 6410},opa: "1",chk: "0",
	name: "<h1>銀版攝影用照相機</h1>",
	},
	{type: "RELIC",markid: "RELIC012",coords: {x: 4690,y: 6455},opa: "1",chk: "0",
	name: "<h1>河童根付</h1>",
	},
	{type: "RELIC",markid: "RELIC013",coords: {x: 4957,y: 6442},opa: "1",chk: "0",
	name: "<h1>繩紋陶器</h1>",
	},
	{type: "RELIC",markid: "RELIC014",coords: {x: 1025,y: 5429},opa: "1",chk: "0",
	name: "<h1>手裏劍</h1>",
	},
	{type: "RELIC",markid: "RELIC015",coords: {x: 1594,y: 5294},opa: "1",chk: "0",
	name: "<h1>手裏劍</h1>",
	},
	{type: "RELIC",markid: "RELIC016",coords: {x: 1857,y: 5443},opa: "1",chk: "0",
	name: "<h1>錫製金魚</h1>",
	},
	{type: "RELIC",markid: "RELIC017",coords: {x: 2201,y: 5317},opa: "1",chk: "0",
	name: "<h1>天羽羽斬（複製品）</h1>",
	},
	{type: "RELIC",markid: "RELIC018",coords: {x: 2408,y: 5717},opa: "1",chk: "0",
	name: "<h1>熊木雕</h1>",
	},
	{type: "RELIC",markid: "RELIC019",coords: {x: 2724,y: 5305},opa: "1",chk: "0",
	name: "<h1>免費附贈手提包的雜誌</h1>",
	},
	{type: "RELIC",markid: "RELIC020",coords: {x: 4046,y: 5255},opa: "1",chk: "0",
	name: "<h1>烏鴉撥製標本</h1>",
	},
	{type: "RELIC",markid: "RELIC021",coords: {x: 4019,y: 6100},opa: "1",chk: "0",
	name: "<h1>髮簪</h1>",
	},
	{type: "RELIC",markid: "RELIC022",coords: {x: 4124,y: 6049},opa: "1",chk: "0",
	name: "<h1>休旅車模型</h1>",
	},
	{type: "RELIC",markid: "RELIC023",coords: {x: 4588,y: 5673},opa: "1",chk: "0",
	name: "<h1>座敷童子的根付</h1>",
	},
	{type: "RELIC",markid: "RELIC024",coords: {x: 5108,y: 5780},opa: "1",chk: "0",
	name: "<h1>備前燒陶器</h1>",
	},
	{type: "RELIC",markid: "RELIC025",coords: {x: 4566,y: 5022},opa: "1",chk: "0",
	name: "<h1>木靈根付</h1>",
	},
	{type: "RELIC",markid: "RELIC026",coords: {x: 4856,y: 5272},opa: "1",chk: "0",
	name: "<h1>木魚</h1>",
	},
	{type: "RELIC",markid: "RELIC027",coords: {x: 1425,y: 5127},opa: "1",chk: "0",
	name: "<h1>人形蘿蔔</h1>",
	},
	{type: "RELIC",markid: "RELIC028",coords: {x: 1547,y: 4510},opa: "1",chk: "0",
	name: "<h1>東京鐵塔模型</h1>",
	},
	{type: "RELIC",markid: "RELIC029",coords: {x: 900,y: 4398},opa: "1",chk: "0",
	name: "<h1>人形蘿蔔</h1>",
	},
	{type: "RELIC",markid: "RELIC030",coords: {x: 875,y: 3938},opa: "1",chk: "0",
	name: "<h1>三味線</h1>",
	},
	{ype: "RELIC",markid: "RELIC031",coords: {x: 428,y: 3758},opa: "1",chk: "0",
	name: "<h1>法螺貝</h1>",
	},
	{type: "RELIC",markid: "RELIC032",coords: {x: 615,y: 3679},opa: "1",chk: "0",
	name: "<h1>小木偶</h1>",
	},
	{type: "RELIC",markid: "RELIC033",coords: {x: 1224,y: 4115},opa: "1",chk: "0",
	name: "<h1>風鈴</h1>",
	},
	{type: "RELIC",markid: "RELIC034",coords: {x: 2449,y: 5090},opa: "1",chk: "0",
	name: "<h1>大判</h1>",
	},
	{type: "RELIC",markid: "RELIC035",coords: {x: 3548,y: 5017},opa: "1",chk: "0",
	name: "<h1>稻草人偶</h1>",
	},
	{type: "RELIC",markid: "RELIC036",coords: {x: 2058,y: 4925},opa: "1",chk: "0",
	name: "<h1>手裏劍</h1>",
	},
	{type: "RELIC",markid: "RELIC037",coords: {x: 2636,y: 4618},opa: "1",chk: "0",
	name: "<h1>三猿像</h1>",
	},
	{type: "RELIC",markid: "RELIC038",coords: {x: 2819,y: 4404},opa: "1",chk: "0",
	name: "<h1>鐮鼬根付</h1>",
	},
	{type: "RELIC",markid: "RELIC039",coords: {x: 3133,y: 4518},opa: "1",chk: "0",
	name: "<h1>加拉機</h1>狩獵塗壁後進入建築物取得",
	},
	{type: "RELIC",markid: "RELIC040",coords: {x: 3149,y: 4518},opa: "1",chk: "0",
	name: "<h1>唐傘小僧根付</h1>狩獵塗壁後進入建築物取得",
	},
	{type: "RELIC",markid: "RELIC041",coords: {x: 2234,y: 4118},opa: "1",chk: "0",
	name: "<h1>力士根付</h1>",
	},
	{type: "RELIC",markid: "RELIC042",coords: {x: 1833,y: 3867},opa: "1",chk: "0",
	name: "<h1>鐵瓶</h1>",
	},
	{type: "RELIC",markid: "RELIC043",coords: {x: 2553,y: 3827},opa: "1",chk: "0",
	name: "<h1>垢嘗根付</h1>",
	},
	{type: "RELIC",markid: "RELIC044",coords: {x: 2659,y: 3792},opa: "1",chk: "0",
	name: "<h1>玳瑁梳子</h1>",
	},
	{type: "RELIC",markid: "RELIC045",coords: {x: 2530,y: 3747},opa: "1",chk: "0",
	name: "<h1>「令和」裱字畫</h1>",
	},
	{type: "RELIC",markid: "RELIC046",coords: {x: 1826,y: 3495},opa: "1",chk: "0",
	name: "<h1>獅爺像</h1>",
	},
	{type: "RELIC",markid: "RELIC047",coords: {x: 1846,y: 3495},opa: "1",chk: "0",
	name: "<h1>紙鶴</h1>",
	},
	{type: "RELIC",markid: "RELIC048",coords: {x: 1725,y: 3429},opa: "1",chk: "0",
	name: "<h1>木芥子</h1>",
	},
	{type: "RELIC",markid: "RELIC049",coords: {x: 1666,y: 3370},opa: "1",chk: "0",
	name: "<h1>人形蘿蔔</h1>",
	},
	{type: "RELIC",markid: "RELIC050",coords: {x: 2675,y: 3055},opa: "1",chk: "0",
	name: "<h1>黑框眼鏡</h1>",
	},
	{type: "RELIC",markid: "RELIC051",coords: {x: 2007,y: 2873},opa: "1",chk: "0",
	name: "<h1>泡沫時代的摺扇</h1>",
	},
	{type: "RELIC",markid: "RELIC052",coords: {x: 1489,y: 2913},opa: "1",chk: "0",
	name: "<h1>神樂鈴</h1>秋澤神社內<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RXvIk76rzFup1_uRu29bMw_X69XoNY7GU3SW_zVdVn0qQM_OexNk24Y7ayfEJC1LjL465yhLCfIUwuV9IH5SJD_7Ti4YSpBbEZGHpug8fU_qq3JmZ7fAk_hpVj5zJkGdOHLo3jiWuHvnwH5EwtfrnVHT-z3mKiZtKKzcUC_EW8wzMatVTr-AV166znx7/s0/RELIC052.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RXvIk76rzFup1_uRu29bMw_X69XoNY7GU3SW_zVdVn0qQM_OexNk24Y7ayfEJC1LjL465yhLCfIUwuV9IH5SJD_7Ti4YSpBbEZGHpug8fU_qq3JmZ7fAk_hpVj5zJkGdOHLo3jiWuHvnwH5EwtfrnVHT-z3mKiZtKKzcUC_EW8wzMatVTr-AV166znx7/s640/RELIC052.webp' class='mypopupimg'/></a></p>",
	},
	{type: "RELIC",markid: "RELIC053",coords: {x: 1166,y: 2891},opa: "1",chk: "0",
	name: "<h1>被詛咒的錄影帶</h1>",
	},
	{type: "RELIC",markid: "RELIC054",coords: {x: 1585,y: 2653},opa: "1",chk: "0",
	name: "<h1>歌麿的浮世繪</h1>",
	},
	{type: "RELIC",markid: "RELIC055",coords: {x: 1281,y: 2455},opa: "1",chk: "0",
	name: "<h1>達摩</h1>",
	},
	{type: "RELIC",markid: "RELIC056",coords: {x: 1190,y: 2461},opa: "1",chk: "0",
	name: "<h1>風箏</h1>",
	},
	{type: "RELIC",markid: "RELIC057",coords: {x: 1200,y: 2420},opa: "1",chk: "0",
	name: "<h1>獅子頭</h1>",
	},
	{type: "RELIC",markid: "RELIC058",coords: {x: 918,y: 2172},opa: "1",chk: "0",
	name: "<h1>被詛咒的錄影帶</h1>",
	},
	{ype: "RELIC",markid: "RELIC059",coords: {x: 1799,y: 2167},opa: "1",chk: "0",
	name: "<h1>風箏</h1>",
	},
	{type: "RELIC",markid: "RELIC060",coords: {x: 1439,y: 1912},opa: "1",chk: "0",
	name: "<h1>超跑模型</h1>",
	},
	{type: "RELIC",markid: "RELIC061",coords: {x: 1519,y: 1652},opa: "1",chk: "0",
	name: "<h1>寬永通寶</h1>",
	},
	{type: "RELIC",markid: "RELIC062",coords: {x: 1235,y: 1276},opa: "1",chk: "0",
	name: "<h1>喧嘩煙管</h1>",
	},
	{type: "RELIC",markid: "RELIC063",coords: {x: 1642,y: 1278},opa: "1",chk: "0",
	name: "<h1>泡泡襪</h1>",
	},
	{type: "RELIC",markid: "RELIC064",coords: {x: 1639,y: 1142},opa: "1",chk: "0",
	name: "<h1>鯱鉾像</h1>",
	},
	{type: "RELIC",markid: "RELIC065",coords: {x: 1823,y: 1467},opa: "1",chk: "0",
	name: "<h1>黃金茶碗</h1>",
	},
	{type: "RELIC",markid: "RELIC066",coords: {x: 2087,y: 1640},opa: "1",chk: "0",
	name: "<h1>膠捲相機</h1>",
	},
	{type: "RELIC",markid: "RELIC067",coords: {x: 1789,y: 1739},opa: "1",chk: "0",
	name: "<h1>劍玉</h1>",
	},
	{type: "RELIC",markid: "RELIC068",coords: {x: 2023,y: 2330},opa: "1",chk: "0",
	name: "<h1>雙背帶書包</h1>",
	},
	{type: "RELIC",markid: "RELIC069",coords: {x: 2384,y: 2063},opa: "1",chk: "0",
	name: "<h1>風箏</h1>",
	},
	{type: "RELIC",markid: "RELIC070",coords: {x: 2488,y: 2008},opa: "1",chk: "0",
	name: "<h1>遮光器土偶</h1>",
	},
	{type: "RELIC",markid: "RELIC071",coords: {x: 2062,y: 843},opa: "1",chk: "0",
	name: "<h1>花子同學的刀</h1>",
	},
	{type: "RELIC",markid: "RELIC072",coords: {x: 2128,y: 931},opa: "1",chk: "0",
	name: "<h1>鬼瓦</h1>",
	},
	{type: "RELIC",markid: "RELIC073",coords: {x: 2410,y: 708},opa: "1",chk: "0",
	name: "<h1>將棋吊飾</h1>",
	},
	{type: "RELIC",markid: "RELIC074",coords: {x: 2660,y: 1216},opa: "1",chk: "0",
	name: "<h1>寫樂的浮世繪</h1>",
	},
	{type: "RELIC",markid: "RELIC075",coords: {x: 2466,y: 1535},opa: "1",chk: "0",
	name: "<h1>褶傘蜥模型</h1>",
	},
	{type: "RELIC",markid: "RELIC076",coords: {x: 2683,y: 1535},opa: "1",chk: "0",
	name: "<h1>日本人偶</h1>",
	},
	{type: "RELIC",markid: "RELIC077",coords: {x: 2787,y: 1380},opa: "1",chk: "0",
	name: "<h1>風箏</h1>",
	},
	{type: "RELIC",markid: "RELIC078",coords: {x: 5088,y: 4718},opa: "1",chk: "0",
	name: "<h1>天狗根付</h1>",
	},
	{type: "RELIC",markid: "RELIC079",coords: {x: 5155,y: 4562},opa: "1",chk: "0",
	name: "<h1>毬藻</h1>",
	},
	{type: "RELIC",markid: "RELIC080",coords: {x: 5143,y: 4253},opa: "1",chk: "0",
	name: "<h1>槌之子</h1>",
	},
	{type: "RELIC",markid: "RELIC081",coords: {x: 4619,y: 4171},opa: "1",chk: "0",
	name: "<h1>紅鞋</h1>",
	},
	{type: "RELIC",markid: "RELIC082",coords: {x: 4639,y: 4171},opa: "1",chk: "0",
	name: "<h1>紅牛</h1>",
	},
	{type: "RELIC",markid: "RELIC083",coords: {x: 4342,y: 4583},opa: "1",chk: "0",
	name: "<h1>塗壁根付</h1>",
	},
	{type: "RELIC",markid: "RELIC084",coords: {x: 4271,y: 4144},opa: "1",chk: "0",
	name: "<h1>埴輪</h1>",
	},
	{type: "RELIC",markid: "RELIC085",coords: {x: 3630,y: 4311},opa: "1",chk: "0",
	name: "<h1>銅鏡</h1>",
	},
	{type: "RELIC",markid: "RELIC086",coords: {x: 2946,y: 3891},opa: "1",chk: "0",
	name: "<h1>羽子板</h1>",
	},
	{type: "RELIC",markid: "RELIC087",coords: {x: 4878,y: 3908},opa: "1",chk: "0",
	name: "<h1>「對貝殼」中的貝殼</h1>",
	},
	{type: "RELIC",markid: "RELIC088",coords: {x: 5268,y: 3943},opa: "1",chk: "0",
	name: "<h1>日本刀</h1>",
	},
	{type: "RELIC",markid: "RELIC089",coords: {x: 5074,y: 3313},opa: "1",chk: "0",
	name: "<h1>姑獲鳥根付</h1>",
	},
	{type: "RELIC",markid: "RELIC090",coords: {x: 4554,y: 3509},opa: "1",chk: "0",
	name: "<h1>十手</h1>",
	},
	{type: "RELIC",markid: "RELIC091",coords: {x: 4673,y: 2977},opa: "1",chk: "0",
	name: "<h1>香爐</h1>",
	},
	{type: "RELIC",markid: "RELIC092",coords: {x: 5337,y: 2797},opa: "1",chk: "0",
	name: "<h1>鵺根付</h1>",
	},
	{type: "RELIC",markid: "RELIC093",coords: {x: 4741,y: 2440},opa: "1",chk: "0",
	name: "<h1>花札</h1>",
	},
	{type: "RELIC",markid: "RELIC094",coords: {x: 4578,y: 2399},opa: "1",chk: "0",
	name: "<h1>恐怖的絨毛玩偶</h1>",
	},
	{type: "RELIC",markid: "RELIC095",coords: {x: 4904,y: 2103},opa: "1",chk: "0",
	name: "<h1>蚊香豬</h1>",
	},
	{type: "RELIC",markid: "RELIC096",coords: {x: 5002,y: 1952},opa: "1",chk: "0",
	name: "<h1>人面犬木乃伊</h1>",
	},
	{type: "RELIC",markid: "RELIC097",coords: {x: 4957,y: 1240},opa: "1",chk: "0",
	name: "<h1>餐廳料理模型</h1>",
	},
	{type: "RELIC",markid: "RELIC098",coords: {x: 3350,y: 3210},opa: "1",chk: "0",
	name: "<h1>狸像</h1>",
	},
	{type: "RELIC",markid: "RELIC099",coords: {x: 3942,y: 3215},opa: "1",chk: "0",
	name: "<h1>琵琶</h1>",
	},
	{type: "RELIC",markid: "RELIC100",coords: {x: 4200,y: 3529},opa: "1",chk: "0",
	name: "<h1>轆轤首根付</h1>",
	},
	{type: "RELIC",markid: "RELIC101",coords: {x: 2871,y: 2651},opa: "1",chk: "0",
	name: "<h1>日本獨角仙</h1>",
	},
	{type: "RELIC",markid: "RELIC102",coords: {x: 3207,y: 2748},opa: "1",chk: "0",
	name: "<h1>便攜式錄音帶撥放器</h1>",
	},
	{type: "RELIC",markid: "RELIC103",coords: {x: 3625,y: 2629},opa: "1",chk: "0",
	name: "<h1>北齋的浮世繪</h1>",
	},
	{type: "RELIC",markid: "RELIC104",coords: {x: 3648,y: 2052},opa: "1",chk: "0",
	name: "<h1>天叢雲劍（複製品）</h1>",
	},
	{type: "RELIC",markid: "RELIC105",coords: {x: 3321,y: 2004},opa: "1",chk: "0",
	name: "<h1>幽靈畫</h1>",
	},
	{type: "RELIC",markid: "RELIC106",coords: {x: 3008,y: 1912},opa: "1",chk: "0",
	name: "<h1>銅澤</h1>",
	},
	{type: "RELIC",markid: "RELIC107",coords: {x: 2931,y: 1745},opa: "1",chk: "0",
	name: "<h1>花子同學的刀</h1>",
	},
	{type: "RELIC",markid: "RELIC108",coords: {x: 2654,y: 1754},opa: "1",chk: "0",
	name: "<h1>超級真嗣貼紙</h1>",
	},
	{type: "RELIC",markid: "RELIC109",coords: {x: 2870,y: 597},opa: "1",chk: "0",
	name: "<h1>鬼根付</h1>",
	},
	{type: "RELIC",markid: "RELIC110",coords: {x: 3478,y: 507},opa: "1",chk: "0",
	name: "<h1>手鞠</h1>",
	},
	{type: "RELIC",markid: "RELIC111",coords: {x: 3750,y: 561},opa: "1",chk: "0",
	name: "<h1>休旅車模型</h1>",
	},
	{type: "RELIC",markid: "RELIC112",coords: {x: 3594,y: 960},opa: "1",chk: "0",
	name: "<h1>古伊萬里的皿</h1>",
	},
	{type: "RELIC",markid: "RELIC113",coords: {x: 3376,y: 1390},opa: "1",chk: "0",
	name: "<h1>十露盤</h1>",
	},
	{type: "RELIC",markid: "RELIC114",coords: {x: 3609,y: 1617},opa: "1",chk: "0",
	name: "<h1>一反木綿根付</h1>",
	},
	{type: "RELIC",markid: "RELIC115",coords: {x: 4050,y: 1624},opa: "1",chk: "0",
	name: "<h1>靈異照片</h1>",
	},
	{type: "RELIC",markid: "RELIC116",coords: {x: 4290,y: 1499},opa: "1",chk: "0",
	name: "<h1>懷錶</h1>",
	},
	{type: "RELIC",markid: "RELIC117",coords: {x: 4338,y: 2133},opa: "1",chk: "0",
	name: "<h1>印籠</h1>",
	},
	{type: "RELIC",markid: "RELIC118",coords: {x: 2689,y: 991},opa: "1",chk: "0",
	name: "<h1>扇子</h1>",
	},
	{type: "RELIC",markid: "RELIC119",coords: {x: 6371,y: 1071},opa: "1",chk: "0",
	name: "<h1>招財貓</h1>",
	},
	{type: "RELIC",markid: "RELIC120",coords: {x: 6361,y: 1308},opa: "1",chk: "0",
	name: "<h1>提燈妖根付</h1>",
	},
	{type: "RELIC",markid: "RELIC121",coords: {x: 6196,y: 1424},opa: "1",chk: "0",
	name: "<h1>花子同學的刀</h1>",
	},
	{type: "RELIC",markid: "RELIC122",coords: {x: 6287,y: 1983},opa: "1",chk: "0",
	name: "<h1>犬神木乃伊</h1>",
	},
	{type: "RELIC",markid: "RELIC123",coords: {x: 6000,y: 2571},opa: "1",chk: "0",
	name: "<h1>瓢簞</h1>",
	},
	//SHRINE神社
	{type: "SHRINE",markid: "SHRINE001",coords: {x: 1192,y: 6491},opa: "1",chk: "0",
	name: "<h1>河戶大樓屋頂上的鳥居</h1>",
	},
	{type: "SHRINE",markid: "SHRINE002",coords: {x: 1381,y: 6256},opa: "1",chk: "0",
	name: "<h1>波原神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE003",coords: {x: 1791,y: 6735},opa: "1",chk: "0",
	name: "<h1>初池神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE004",coords: {x: 2985,y: 5887},opa: "1",chk: "0",
	name: "<h1>霧之丘神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE005",coords: {x: 3503,y: 6276},opa: "1",chk: "0",
	name: "<h1>千島神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE006",coords: {x: 1466,y: 5435},opa: "1",chk: "0",
	name: "<h1>豐井神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE007",coords: {x: 2210,y: 5312},opa: "1",chk: "0",
	name: "<h1>比谷神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE008",coords: {x: 3391,y: 5465},opa: "1",chk: "0",
	name: "<h1>八卷神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE009",coords: {x: 3869,y: 5725},opa: "1",chk: "0",
	name: "<h1>野戶神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE010",coords: {x: 4388,y: 5765},opa: "1",chk: "0",
	name: "<h1>平宿大樓屋頂上的鳥居</h1>",
	},
	{type: "SHRINE",markid: "SHRINE011",coords: {x: 4663,y: 5835},opa: "1",chk: "0",
	name: "<h1>白月神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE012",coords: {x: 4171,y: 5316},opa: "1",chk: "0",
	name: "<h1>才濱大樓屋頂上的鳥居</h1>",
	},
	{type: "SHRINE",markid: "SHRINE013",coords: {x: 4416,y: 5302},opa: "1",chk: "0",
	name: "<h1>桃金大樓屋頂上的鳥居</h1>",
	},
	{type: "SHRINE",markid: "SHRINE014",coords: {x: 4347,y: 4955},opa: "1",chk: "0",
	name: "<h1>龍居神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE015",coords: {x: 645,y: 3793},opa: "1",chk: "0",
	name: "<h1>廣川神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE016",coords: {x: 1162,y: 4431},opa: "1",chk: "0",
	name: "<h1>松見神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE017",coords: {x: 2649,y: 4411},opa: "1",chk: "0",
	name: "<h1>歌川商店區鳥居</h1>",
	},
	{type: "SHRINE",markid: "SHRINE018",coords: {x: 4281,y: 4140},opa: "1",chk: "0",
	name: "<h1>隱天神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE019",coords: {x: 5036,y: 4495},opa: "1",chk: "0",
	name: "<h1>河童之池的鳥居</h1>",
	},
	{type: "SHRINE",markid: "SHRINE020",coords: {x: 3643,y: 3653},opa: "1",chk: "0",
	name: "<h1>三久保神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE021",coords: {x: 1483,y: 2928},opa: "1",chk: "0",
	name: "<h1>秋澤神社</h1>第二章「檢查鳥居」時主線解鎖",
	},
	{type: "SHRINE",markid: "SHRINE022",coords: {x: 1705,y: 2110},opa: "1",chk: "0",
	name: "<h1>並田神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE023",coords: {x: 2429,y: 2786},opa: "1",chk: "0",
	name: "<h1>森手神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE024",coords: {x: 2606,y: 2104},opa: "1",chk: "0",
	name: "<h1>谷森神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE025",coords: {x: 3359,y: 1977},opa: "1",chk: "0",
	name: "<h1>久櫻神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE026",coords: {x: 4572,y: 3135},opa: "1",chk: "0",
	name: "<h1>坂野神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE027",coords: {x: 5168,y: 2849},opa: "1",chk: "0",
	name: "<h1>下草神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE028",coords: {x: 2095,y: 1487},opa: "1",chk: "0",
	name: "<h1>代山神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE029",coords: {x: 3378,y: 1100},opa: "1",chk: "0",
	name: "<h1>亞木津神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE030",coords: {x: 5014,y: 1958},opa: "1",chk: "0",
	name: "<h1>上尾神社</h1>",
	},
	{type: "SHRINE",markid: "SHRINE030",coords: {x: 4428,y: 2271},opa: "1",chk: "0",
	name: "<h1>御嶽不動產大樓屋頂的鳥居(未確定)</h1>第四章?黑塔時於主線解鎖<p>此鳥居解鎖後沒有在遊戲中地圖上顯示</p>",
	},
	//JIZO地藏像
	{type: "JIZO",markid: "JIZO001",coords: {x: 1416,y: 5960},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO002",coords: {x: 1806,y: 6057},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO003",coords: {x: 2235,y: 6498},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO004",coords: {x: 2905,y: 7207},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO005",coords: {x: 2760,y: 6310},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO006",coords: {x: 2365,y: 5710},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO007",coords: {x: 4104,y: 7061},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO008",coords: {x: 4499,y: 6696},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO009",coords: {x: 4809,y: 6040},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO010",coords: {x: 1232,y: 5139},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO011",coords: {x: 2186,y: 5089},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO012",coords: {x: 2860,y: 5000},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO013",coords: {x: 3298,y: 5461},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO014",coords: {x: 3657,y: 5022},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO015",coords: {x: 4205,y: 5496},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO016",coords: {x: 4640,y: 4982},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO017",coords: {x: 5084,y: 5431},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO018",coords: {x: 976,y: 4298},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO019",coords: {x: 1527,y: 3797},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO020",coords: {x: 2029,y: 3603},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO021",coords: {x: 2394,y: 3830},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO022",coords: {x: 2820,y: 3977},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO023",coords: {x: 3173,y: 3428},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO024",coords: {x: 3416,y: 3525},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO025",coords: {x: 3579,y: 3105},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO026",coords: {x: 4034,y: 3279},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO027",coords: {x: 4712,y: 3452},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO028",coords: {x: 5112,y: 3357},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO029",coords: {x: 3854,y: 4702},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO030",coords: {x: 4153,y: 4537},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO031",coords: {x: 5266,y: 4280},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO032",coords: {x: 1103,y: 2277},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO033",coords: {x: 1645,y: 2392},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO034",coords: {x: 1817,y: 2909},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO035",coords: {x: 4117,y: 2876},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO036",coords: {x: 4511,y: 2508},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO037",coords: {x: 1648,y: 1168},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO038",coords: {x: 1976,y: 1735},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO039",coords: {x: 2438,y: 1879},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO040",coords: {x: 2682,y: 1425},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO041",coords: {x: 3083,y: 1008},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO042",coords: {x: 3217,y: 492},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO043",coords: {x: 3679,y: 755},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO044",coords: {x: 2984,y: 2319},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO045",coords: {x: 3987,y: 1994},opa: "1",chk: "0",
	name: "<h1>風之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO046",coords: {x: 4418,y: 1103},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO047",coords: {x: 4662,y: 1446},opa: "1",chk: "0",
	name: "<h1>火之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO048",coords: {x: 4897,y: 1607},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO049",coords: {x: 3360,y: 6758},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO050",coords: {x: 4753,y: 6599},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO051",coords: {x: 3290,y: 4568},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	{type: "JIZO",markid: "JIZO052",coords: {x: 3475,y: 3947},opa: "1",chk: "0",
	name: "<h1>水之地藏像</h1>",
	},
	//KKSNOTE KK的調查筆記
	{type: "KKSNOTE",markid: "KKSNOTE001",coords: {x: 804,y: 6577},opa: "1",chk: "0",
	name: "<h1>神秘體操</h1>"
	},
	{type: "KKSNOTE",markid: "KKSNOTE002",coords: {x: 776,y: 6388},opa: "1",chk: "0",
	name: "<h1>深夜泳池</h1>淵橋中學內"
	},
	{type: "KKSNOTE",markid: "KKSNOTE003",coords: {x: 796,y: 6388},opa: "1",chk: "0",
	name: "<h1>熬夜的人</h1>淵橋中學內"
	},	
	{type: "KKSNOTE",markid: "KKSNOTE004",coords: {x: 816,y: 6388},opa: "1",chk: "0",
	name: "<h1>夜間噪音</h1>淵橋中學內",
	},		
	{type: "KKSNOTE",markid: "KKSNOTE005",coords: {x: 836,y: 6388},opa: "1",chk: "0",
	 name: "<h1>恨的循環</h1>淵橋中學內",
	},		
	{type: "KKSNOTE",markid: "KKSNOTE006",coords: {x: 2630,y: 5306},opa: "1",chk: "0",
	 name: "<h1>覺醒的人工智慧</h1>",
	},		
	{type: "KKSNOTE",markid: "KKSNOTE007",coords: {x: 3773,y: 5708},opa: "1",chk: "0",
	 name: "<h1>黃牛票</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE008",coords: {x: 4344,y: 5039},opa: "1",chk: "0",
	 name: "<h1>拉麵店大排長龍</h1>",
	},	
	{type: "KKSNOTE",markid: "KKSNOTE009",coords: {x: 898,y: 3695},opa: "1",chk: "0",
	 name: "<h1>霧之丘失蹤事件</h1>",
	},		
	{type: "KKSNOTE",markid: "KKSNOTE010",coords: {x: 1330,y: 4598},opa: "1",chk: "0",
	 name: "<h1>紅燈女子</h1>",
	},		
	{type: "KKSNOTE",markid: "KKSNOTE011",coords: {x: 2638,y: 4329},opa: "1",chk: "0",
	 name: "<h1>發掘樹海蕎麥麵店</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE012",coords: {x: 2550,y: 3747},opa: "1",chk: "0",
	 name: "<h1>丸之內失蹤事件</h1>",
	},	
	{type: "KKSNOTE",markid: "KKSNOTE013",coords: {x: 4205,y: 4057},opa: "1",chk: "0",
	 name: "<h1>天狗的地盤爭奪戰</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE014",coords: {x: 5278,y: 3653},opa: "1",chk: "0",
	 name: "<h1>巨大的晴天娃娃</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE015",coords: {x: 1302,y: 2455},opa: "1",chk: "0",
	 name: "<h1>下水道的孩子</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE016",coords: {x: 2629,y: 2078},opa: "1",chk: "0",
	 name: "<h1>高利貸之王</h1>",
	},	
	{type: "KKSNOTE",markid: "KKSNOTE017",coords: {x: 3357,y: 2141},opa: "1",chk: "0",
	 name: "<h1>跳舞的無頭學生</h1>",
	},		
	{type: "KKSNOTE",markid: "KKSNOTE018",coords: {x: 5184,y: 2978},opa: "1",chk: "0",
	 name: "<h1>乙太小偷</h1>",
	},	
	{type: "KKSNOTE",markid: "KKSNOTE019",coords: {x: 6336,y: 3148},opa: "1",chk: "0",
	 name: "<h1>百鬼夜行</h1>",
	},	
	{type: "KKSNOTE",markid: "KKSNOTE020",coords: {x: 3222,y: 537},opa: "1",chk: "0",
	 name: "<h1>紅布</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE021",coords: {x: 6392,y: 1094},opa: "1",chk: "0",
	 name: "<h1>渦輪學生</h1>",
	},
	{type: "KKSNOTE",markid: "KKSNOTE022",coords: {x: 6861,y: 1115},opa: "1",chk: "0",
	 name: "<h1>怪物和蠢蛋</h1><p>由澀谷區行人保護時相十字路口北邊的門進入水泥地下室</p><p><a href='javascript:;' class='goto1'>「水泥地下室」位置</a></p>接著搭乘電梯前往地下一樓，在剛出電梯旁的椅子上",
	},
	{type: "KKSNOTE",markid: "KKSNOTE023",coords: {x: 2966,y: 5485},opa: "1",chk: "0",
	 name: "<h1>貓又與便利商店</h1>向「調皮的貓又」花費100000冥幣購買。",
	},
	{type: "KKSNOTE",markid: "KKSNOTE024",coords: {x: 3479,y: 4652},opa: "1",chk: "0",
	 name: "<h1>運動大道上的掮客</h1>向「喜歡日本的貓又」花費100000冥幣購買。",
	},
	{type: "KKSNOTE",markid: "KKSNOTE025",coords: {x: 2021,y: 4149},opa: "1",chk: "0",
	 name: "<h1>飛布教</h1>向「喜歡音樂的貓又」花費100000冥幣購買。",
	},
	{type: "KKSNOTE",markid: "KKSNOTE026",coords: {x: 4167,y: 4009},opa: "1",chk: "0",
	 name: "<h1>河童與小黃瓜</h1>向「神秘的貓又」花費100000冥幣購買。",
	},
	{type: "KKSNOTE",markid: "KKSNOTE027",coords: {x: 1923,y: 1551},opa: "1",chk: "0",
	 name: "<h1>天狗奇案</h1>向「喜歡手工品的貓又」花費100000冥幣購買。",
	},
	{type: "KKSNOTE",markid: "KKSNOTE028",coords: {x: 3669,y: 1954},opa: "1",chk: "0",
	 name: "<h1>隱形貓之謎</h1>向「喜歡閃亮亮物品的貓又」花費100000冥幣購買。",
	},
	//
	{type: "LANDMARK",markid: "LANDMARK001",coords: {x: 2839,y: 6669},opa: "1",chk: "0",
	 name: "<h1>霧之丘禁區</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK002",coords: {x: 2815,y: 5848},opa: "1",chk: "0",
	 name: "<h1>霧之丘神社</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK003",coords: {x: 3160,y: 5460},opa: "1",chk: "0",
	 name: "<h1>霧之丘水塔</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK004",coords: {x: 2941,y: 4900},opa: "1",chk: "0",
	 name: "<h1>歌川水塔</h1>",
	},	
	{type: "LANDMARK",markid: "LANDMARK005",coords: {x: 4309,y: 5029},opa: "1",chk: "0",
	 name: "<h1>龍居神社</h1>",
	},		
	{type: "LANDMARK",markid: "LANDMARK006",coords: {x: 2650,y: 4343},opa: "1",chk: "0",
	 name: "<h1>歌川商店區</h1>",
	},			
	{type: "LANDMARK",markid: "LANDMARK007",coords: {x: 4998,y: 4390},opa: "1",chk: "0",
	 name: "<h1>河童之池</h1>",
	},		
	{type: "LANDMARK",markid: "LANDMARK008",coords: {x: 2136,y: 3694},opa: "1",chk: "0",
	 name: "<h1>仙石警察亭</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK009",coords: {x: 2710,y: 3716},opa: "1",chk: "0",
	 name: "<h1>仙石坂/h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK010",coords: {x: 3477,y: 3426},opa: "1",chk: "0",
	 name: "<h1>醉漢小巷/h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK011",coords: {x: 2013,y: 3074},opa: "1",chk: "0",
	 name: "<h1>429 街/h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK012",coords: {x: 2264,y: 3191},opa: "1",chk: "0",
	 name: "<h1>街燈墳場/h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK013",coords: {x: 2712,y: 3136},opa: "1",chk: "0",
	 name: "<h1>運動大道</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK014",coords: {x: 2234,y: 2928},opa: "1",chk: "0",
	 name: "<h1>429</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK015",coords: {x: 2866,y: 2916},opa: "1",chk: "0",
	 name: "<h1>澀谷區行人保護時相十字路口</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK016",coords: {x: 1039,y: 2504},opa: "1",chk: "0",
	 name: "<h1>幽玄坂叉路</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK017",coords: {x: 1249,y: 2707},opa: "1",chk: "0",
	 name: "<h1>宴三霓虹區</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK018",coords: {x: 1448,y: 2441},opa: "1",chk: "0",
	 name: "<h1>宴三町</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK019",coords: {x: 3193,y: 2678},opa: "1",chk: "0",
	 name: "<h1>澀谷車站</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK020",coords: {x: 3068,y: 2044},opa: "1",chk: "0",
	 name: "<h1>工地迷宮</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK021",coords: {x: 3580,y: 2541},opa: "1",chk: "0",
	 name: "<h1>澀谷區加賀里綜合零售商場</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK022",coords: {x: 3631,y: 2122},opa: "1",chk: "0",
	 name: "<h1>空中花園</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK023",coords: {x: 3824,y: 2227},opa: "1",chk: "0",
	 name: "<h1>谷深重劃區</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK024",coords: {x: 4988,y: 2627},opa: "1",chk: "0",
	 name: "<h1>御嶽商店街</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK025",coords: {x: 1381,y: 1734},opa: "1",chk: "0",
	 name: "<h1>月並禁區</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK026",coords: {x: 1966,y: 1416},opa: "1",chk: "0",
	 name: "<h1>代山神社</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK027",coords: {x: 2011,y: 812},opa: "1",chk: "0",
	 name: "<h1>月並第一公園</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK028",coords: {x: 3345,y: 1363},opa: "1",chk: "0",
	 name: "<h1>澀荒公園</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK029",coords: {x: 4376,y: 1922},opa: "1",chk: "0",
	 name: "<h1>澀谷區條紋塔</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK030",coords: {x: 4464,y: 1375},opa: "1",chk: "0",
	 name: "<h1>銀平十字路口</h1>",
	},
	{type: "LANDMARK",markid: "LANDMARK031",coords: {x: 4494,y: 1000},opa: "1",chk: "0",
	 name: "<h1>銀平禁區</h1>",
	},
	
	
	
	
	
	
/*	{
		type: "RELIC",
		markid: "Shrine002",
		coords: {
			x: 1138,
			y: 976
		},
		name: "<h1>地球幣：100</h1>搭纜車時約卡在中間牆壁上，看到亮點後用動能抓取<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv0O16f9uwUzrJIELi8-7hsJ7dDxxanjqCwichlA09_JyQtGcufFtiPu45XT6mGjy2HaRNP_PyMxL3XKnSGdArAsyLHo_vQwuoKiIFdWREYXdyB4dkSPShVYw2HOy44Px6lbtAxLjxQJTQP-IQJxztCCNF65s1hNPYo_UqQqT_BZfPX-OFQj-nVEPpOA/s0/ch8-14.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv0O16f9uwUzrJIELi8-7hsJ7dDxxanjqCwichlA09_JyQtGcufFtiPu45XT6mGjy2HaRNP_PyMxL3XKnSGdArAsyLHo_vQwuoKiIFdWREYXdyB4dkSPShVYw2HOy44Px6lbtAxLjxQJTQP-IQJxztCCNF65s1hNPYo_UqQqT_BZfPX-OFQj-nVEPpOA/s640/ch8-14.webp' class='mypopupimg'/></a></p>",
		opa: "1",
		chk: "0"
	},*/

];
