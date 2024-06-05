

//通訊塔
var Tower = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGs7ppeLSTRlIwIeksXVbyESWeYSRh5AytcZIX3CELYK6MKOo0XPECmwNYkVmxVSoPrpJ7I1PsarhLwvejCVZ6h92dzXFcQgtAshJvRmxXhdcfeElbdjy76OvJ-2QtO_ijMkGLU4RPN2bvvIYSyUlcN-vFHBQvLCrADgcGWMdtSDbQAHHWMG-_uO-uUU/s1600/Tower.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var TowerTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>啟動報告１：川中島的通訊塔</h1><p>建議等級：Lv.31</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告１：清流的生命點</li>\
		<li>召喚獸報告１：克賈達祠堂α</li>\
		<li>討伐報告１：青蛙聲樂隊</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerD01",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1402, 858]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告２：廢棄輸送管的通訊塔</h1><p>建議等級：Lv.31</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告２：深潭瀑布的生命點</li>\
		<li>討伐報告２：貪婪的食肉花</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerD02",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1999, 2511]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告３：深綠台的通訊塔</h1><p>建議等級：Lv33</p>\
	<p>由附近的<a class='goto' href='javascript:;' data-name='ChoAbiD01' data-z='6'>森陸行鳥滑行</a>前往此處。</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告３：谷底的生命點</li>\
		<li>召喚獸報告２：克賈達祠堂β</li>\
		<li>討伐報告３：撼動大地的赤鬼</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerD03",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1272, 2573]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告４：貢加加遺跡的通訊塔</h1><p>建議等級：Lv.34</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD03' data-z='6'>由瞭望塔出發，抵達啟動報告４的路線</a>。(瞭望塔走法請看該點的說明)</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD06' data-z='6'>爬上通訊塔的路線</a>。</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告４：岩洞的生命點</li>\
		<li>召喚獸報告３：克賈達祠堂γ</li>\
		<li>討伐報告４：遭汙染的青鬼</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerD04",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [866, 3025]
    }
},	

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告５：蕈菇森林的通訊塔</h1><p>建議等級：Lv.34</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD07' data-z='6'>抵達啟動報告５的路線</a></p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告：森林的莫古利</li>\
		<li>探索報告５：聖跡的生命點</li>\
		<li>探索報告６：地底湖的生命點</li>\
		<li>討伐報告５：雙擊的重戰車</li>\
		<li>討伐報告６：王家之龍</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerD05",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1509, 2810]
    }
},
];

//陸行鳥報告
var ChocoboIntel = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMjmwWkBhWuk4tOf5zVe8rRryhzlIV8INgCG4lH9FcULWm9nXSldf31nAqZEHFbT_R4jRR1DOWHnc0A0CL5oeRpK1-UuZ1CyFqmzTnZSYbc0dCM59lC22sBCxKP6YQRkfX31itw4BES35B9vKpeMGzEXbqZFGCJC5cjDhyphenhyphenfglUehuQbJq8DqWxIh7NRLM/s1600/ChocoboIntel.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var ChocoboIntelTemp = [ 
/*{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥報告：貢加加地區的山陸行鳥</h1><p>建議等級：無</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='TowerB01' data-z='5'>啟動報告１：海風吹拂的通訊塔</a>後發現</p>\
	<p>或接受「支線委託：通往明天的一線生機」後發現</p>\
	<p>獎勵</p>\
	<ul>\
		<li>黃金羽毛×2</li>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ChocoboIntelB01",
	"icon":"ChocoboIntel",
    "geometry": {
        "type": "Point",
		"coordinates": [2077, 1830]
    }
},*/


];

//莫古利
var Moogle = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu9kQwKJK9DBNK7lZ9TyrWsa4HRJixrtHaUOAut2hZiqp_NPHl7LFA1rNTE79NRDbqj8cxZrHCMiCmoKjPhXrKf_QhEpe5H-LzNmtXy4ctSU013AfF9CF9OfHh-imqzjItGuOEWn1qREnB-_97Cb9t6EUmZEFYcp_vNpBsESEpmiK56GjuItVoVWsahi4/s1600/Moogle.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var MoogleTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>莫古利報告：森林的莫古利</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店的流通等級＋１，增加可使用「莫古利獎牌」兌換的道具。</p>"},
	"levels": "1",
	"myid": "MoogleD01",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [1639, 3124]
    }
},

];

//生命點
var Lifespring = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJoL8YeXRkaiE2Z4l27oR53SXt21dEIUflnBuftESWXNF_82eIzMS_EQvIyEjU9u6aFFV3nhbgCHmOzk_5EvhIPYpy-_1piHMjw1W4ZYG31ns8K-pW-rEvfBeQLw-ijWGARiQow39bXSE_k809xs77255ty0xKztclA9AaiZIja83XUop9cx9hJ7GempY/s1600/Lifespring.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var LifespringTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告１：清流的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringD01",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1992, 1326]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告２：深潭瀑布的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringD02",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2115, 2937]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告３：谷底的生命點</h1><p>建議等級：無。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD05' data-z='5'>抵達探索報告３的路線</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringD03",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1460, 2581]
    }
},

{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告４：岩洞的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringD04",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1231, 3407]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告５：聖跡的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringD05",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1527, 3109]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告６：地底湖的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringD06",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1892, 3153]
    }
},
];	
	
//召喚獸報告
var SummonCrystal = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJcFz_Ixp0ylWj20XPQctymIGvd4sVQ5sdQta36nSqDoaFglb3b7jwe85oafud1Yhzwqw1n1bHryN08vyoF3JtHfeYCwo8KH_k88PsfO-deHZ0YXZtQAe6wS1jrFdZupcvWITelw0FWawQgRTbEqgpR-Eqj5hRmk3jxV-9nqj5OwswPfpVQBtKs_W-Z70/s1600/SummonCrystal.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var SummonCrystalTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告１：克賈達祠堂α</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：克賈達(等級+1)</li>\
		<li>弱化召喚獸戰鬥：克賈達(弱化虧損+1)</li>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalD01",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1419, 1145]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告２：克賈達祠堂β</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：克賈達(等級+1)</li>\
		<li>弱化召喚獸戰鬥：克賈達(弱化虧損+1)</li>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalD02",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1179, 1919]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告３：克賈達祠堂γ</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：克賈達(等級+1)</li>\
		<li>弱化召喚獸戰鬥：克賈達(弱化虧損+1)</li>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalD03",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [393, 3146]
    }
},
];	
	
//挖掘報告
var Excavation = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMTIhQvGZ3huWJBf6n9Xp-5XlMU6G3l2CnXUPCcEm14Akt1xguQYa0ZjY9u-2a6rVqn5JnqJdCKy6jmS4RaaKJriVPfnNeLcwnAzaqpWbw-IJU46WVoVBq5UBqBZ-sA8n4CiD90bdWPy419ybcOrI2ZGUxfkMBVkQ9QVd9AR71A7r6QkNuXv1sIYCjSqQ/s1600/Excavation.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var ExcavationTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>挖掘報告１：魔晄沉眠的溪谷</h1><p>需完成2項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationD01-1' data-z='6'>製作晶片：防具改造套組７</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationD01-2' data-z='6'>製作晶片：配件巨匠</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationD01",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [2143, 2664]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>挖掘報告２：密林的遺跡群</h1><p>需完成6項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationD02-1' data-z='6'>製作晶片：防具改造套組８</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationD02-2' data-z='6'>製作晶片：毛爾波爾幻光球</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationD02-3' data-z='6'>製作晶片：異常狀態抗性配件</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationD02",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [699, 2978]
    }
},

];

//挖掘報告的細項	
var Excavation1 = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFMyIRbQJu-Jw4BGH9kSm6NEs-sJcBt0dDaWC01NM_d1NRme8VQeIog1IXvI9Xn5JydKTJ0aJrH6n-OKRUUBjZ3vftg07y1RW7Pi2SU9JAawI-f33hcBy3Q6teCc48XSGvaH6jkEtXRcyqsI_sRcob2WJyJJUK-9VSK_k0lYTiLIr_G2D0_zs0cEWcpLE/s1600/Excavation1.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [16, 16],popupAnchor: [0, -12],tooltipAnchor: [10, 0]});
var Excavation1Temp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組７</h1><p>「挖掘報告１：魔晄沉眠的溪谷」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBWAPLBMSosHmS75DnuVbt7b232UVaNT5FiqxEvuYPLTISyjWgg-rVQOr7QmY4VrdU6iQd0FW7KwSbMRM6UO-MDpmvr7i8rSTt2LqKjF4ZNz3sUUx-m5O928GRUySfVRnCTfslFfp6KGjF1frsVSWXaAgD9EYRSdLJ6nhntTmX4P1UZ6NG_s_F2qxW7AA/s0/ExcavationD01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBWAPLBMSosHmS75DnuVbt7b232UVaNT5FiqxEvuYPLTISyjWgg-rVQOr7QmY4VrdU6iQd0FW7KwSbMRM6UO-MDpmvr7i8rSTt2LqKjF4ZNz3sUUx-m5O928GRUySfVRnCTfslFfp6KGjF1frsVSWXaAgD9EYRSdLJ6nhntTmX4P1UZ6NG_s_F2qxW7AA/s640/ExcavationD01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationD01-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2182, 2670]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：配件巨匠</h1><p>「挖掘報告１：魔晄沉眠的溪谷」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivCX4r3Ccq-KpPklV-bSLxHWpYKsr2JXlyPYa3ftkiM3XOb4Krcr0a2trbP6xmN6pryaaoU_Rg_qyMV0xvSoxIIFfLFLLoPjqAosQlq4odXySmVCcJIaTwly-yDhV5hd1AK2xU9N-JJF6s2i_ESAvozW_pFGFB8KlFJ08XbFuNKbllDqq6ilaUrMkRMO0/s0/ExcavationD01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivCX4r3Ccq-KpPklV-bSLxHWpYKsr2JXlyPYa3ftkiM3XOb4Krcr0a2trbP6xmN6pryaaoU_Rg_qyMV0xvSoxIIFfLFLLoPjqAosQlq4odXySmVCcJIaTwly-yDhV5hd1AK2xU9N-JJF6s2i_ESAvozW_pFGFB8KlFJ08XbFuNKbllDqq6ilaUrMkRMO0/s640/ExcavationD01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationD01-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2140,2674]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組８</h1><p>「挖掘報告２：密林的遺跡群」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2dbkCMETizTTtg_w9pv0t54TE3bjr04lBK0xBBWKN2LXuVZ119a6b1vaFzRuSeGw31s2nUUZZb1sLk3NuWNmfbRb2wFgyMpWDdtf3ZFrOUJV5YNkn0KxeviVKIhLiz9krTqfsnzTakTrvNFHYTla-ZjbdF6h2eVz9CWIy8KuoKHhf3iaVupyUTsVIQg0/s0/ExcavationD02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2dbkCMETizTTtg_w9pv0t54TE3bjr04lBK0xBBWKN2LXuVZ119a6b1vaFzRuSeGw31s2nUUZZb1sLk3NuWNmfbRb2wFgyMpWDdtf3ZFrOUJV5YNkn0KxeviVKIhLiz9krTqfsnzTakTrvNFHYTla-ZjbdF6h2eVz9CWIy8KuoKHhf3iaVupyUTsVIQg0/s640/ExcavationD02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationD02-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [675, 2970]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：毛爾波爾幻光球</h1><p>「挖掘報告２：密林的遺跡群」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMPil15kRiej3vXqrmolTGvmRFXIujtcV4NVBgz9G7Bj66h-aGlBpafw52IV_qz5fxjmmIjKzkx8qCDlrWrQ13Arp0326V1TKPD4Seino-wE11w05JbRmfByMnjppu4qVRkpNweus-zAxrWqA4ZD3PnzPzjAX8WrNuKO4t9_Ua3oA8Dc78VXMB4VBdM4k/s0/ExcavationD02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMPil15kRiej3vXqrmolTGvmRFXIujtcV4NVBgz9G7Bj66h-aGlBpafw52IV_qz5fxjmmIjKzkx8qCDlrWrQ13Arp0326V1TKPD4Seino-wE11w05JbRmfByMnjppu4qVRkpNweus-zAxrWqA4ZD3PnzPzjAX8WrNuKO4t9_Ua3oA8Dc78VXMB4VBdM4k/s640/ExcavationD02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationD02-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [742, 2943]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：異常狀態抗性配件</h1><p>「挖掘報告２：密林的遺跡群」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMbiW5Zi9Z9KbtrL5a6akAE3_BFiQdsb71JkpIwGf9KOn6u2ftGknp5PXVaAiijGFsYHIFK1u2Fe-z4AE1MeQDlImdfOUn1eC0g2L5dybU3cQbs817qz-4GbIYedwaoxAD-yqVZgJmBQ-0eRaIHRlDxApS5cgwLZCQvs72gwM9aIRY3bNJ5hPsGZ3kv2U/s0/ExcavationD02-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMbiW5Zi9Z9KbtrL5a6akAE3_BFiQdsb71JkpIwGf9KOn6u2ftGknp5PXVaAiijGFsYHIFK1u2Fe-z4AE1MeQDlImdfOUn1eC0g2L5dybU3cQbs817qz-4GbIYedwaoxAD-yqVZgJmBQ-0eRaIHRlDxApS5cgwLZCQvs72gwM9aIRY3bNJ5hPsGZ3kv2U/s640/ExcavationD02-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationD02-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [717, 3034]
    }
},
];	
	
	
//討伐報告
var CombatAssignment = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1pZOSRf1gxtCIgzBhv2nw_-6TprEq7FxDsTjeTCgq9Yhzf4x0tyGPI9Gkt4yHVGwF3QcdyWB5nuFYWHo8rmfweauVk5DEgFhQtFHcrHySviAHoKkX-jyxr8IuYTy6Cu7XwC2TmthF8_F0TJzEdiHIg8oHTnnrkGnovdWQv5pA2D9laSoyw8jklIRC_b0/s1600/CombatAssignment.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var CombatAssignmentTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告１：青蛙聲樂隊</h1><p>建議等級：Lv.31。</p>\
	<p>敵人：帕亞帕亞蛙×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy135' value=1 class='confirmed'/><span>帕亞帕亞蛙</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>操作角色沒有陷入蛙化狀態</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentD01",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1599, 563]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告２：貪婪的食肉花</h1><p>建議等級：Lv.32。</p>\
	<p>敵人：盛開花×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy138' value=1 class='confirmed'/><span>盛開花</span></label></p>\
	<p style='color: #0000FF'>攻略情報：造成一定傷害可使其陷入HEAT狀態。為了避免「急速成長」，藉由造成力竭等迅速打倒吧。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
		<li>在任何敵人成為最終型態前完成討伐</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentD02",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2341, 2533]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告３：撼動大地的赤鬼</h1><p>建議等級：Lv.35。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD01' data-z='6'>抵達討伐報告３的路線</a></p>\
	<p>敵人：護角獸×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy129' value=1 class='confirmed'/><span>護角獸</span></label></p>\
	<p style='color: #0000FF'>攻略情報：在牠防禦時擊中２次就會發動反擊。而針對牠的防禦或反擊，以強力的能力攻擊擊中，可使其陷入HEAT狀態。在牠反擊時僅有遠距離攻擊能發揮效果。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentD03",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1111, 2570]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告４：遭汙染的青鬼</h1><p>建議等級：Lv.34。</p>\
	<p>敵人：狂暴巨角獸×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy130' value=1 class='confirmed'/><span>狂暴巨角獸</span></label></p>\
	<p style='color: #0000FF'>攻略情報：每隔一段時間便會發動束縛招式「毒化束縛」。使其進入力竭狀態，即可解除束縛。在牠防禦時擊中２次就會發動反擊。牠防禦時會反彈遠距離攻擊，不過若以強力的能力攻擊擊中，可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentD04",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [686, 2795]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告５：雙擊的重戰車</h1><p>建議等級：Lv.35。</p>\
	<p>敵人：重型坦克×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy143' value=1 class='confirmed'/><span>重型坦克</span></label></p>\
	<p style='color: #0000FF'>攻略情報：發動特定招式後會進入HEAT狀態。雖然累積力竭量表後就會藉由「預備姿勢」開始恢復，但以強力的能力攻擊擊中２次即可阻止。</p>\
	<p>PS. 建議在「預備姿勢」時，用兩次「中火焰」擊中</p>\
	<p>任務</p>\
	<ul>\
		<li>以攻擊解除敵人的招式「預備姿勢」</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentD05",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1972, 2738]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告６：王家之龍</h1><p>建議等級：Lv.34。</p>\
	<p>敵人：黃褐巨蜥×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy132' value=1 class='confirmed'/><span>黃褐巨蜥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：在「埋伏」時以強力的能力攻擊擊中，可以使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentD06",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1884, 3317]
    }
},
];	

//隱藏討伐報告
var SecretCombat = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFEixjDdbbby5FhxA3-ExuxQ8FTaVBF_aKr4h0T9mm1gkgH4fLh9S24R_L_bqsvFRSlfrOjXqJER1zB_69tzEVv8RsjlFIYBfkmE0_OwdwtaJ3XhkjsiLXYX_rQvfGt4NxyHBmFbBctUzEYfmCHPIvvxuJDe8NQivAAU_B1Gh0DFPbkeU0EiDt0Nomrgw/s1600/SecretCombat.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var SecretCombatTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>隱藏報告：腐臭的暴君</h1><p>建議等級：Lv.38。</p><p>需完成4項「探索報告」(生命點)才會發現</p>\
	<p>敵人：大毛爾波爾×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy059' value=1 class='confirmed'/><span>大毛爾波爾</span></label></p>\
	<p style='color: #0000FF'>攻略情報：破壞其口部位可累積力竭量表，並阻止「臭氣」。若一直未破壞其口部，則「臭氣」會越來越強。口部會在一段時間後復活。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
	</ul>"},
	"levels": "1",
	"myid": "SecretCombatD01",
	"icon":"SecretCombat",
    "geometry": {
        "type": "Point",
		"coordinates": [686, 3334]
    }
},


];
	
//古代物質
var Protorelic = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEies5A-eZVKCETU_2w6jw4d6t68AbQJZh7q1dXkC09F0nlWFiJJr7IdXdfHvv-9QJOvCgi_l8wSBX5Aa0nMMrND_Jb8wfSZHlA4c_b95fJTDNH_-soKfuFdXiRJyrq-T3KbqC8HD_YPcRMmRPWrwWqhnJ3_X8VRnQAmC5gOP8Msl7mFSjINlaf6EuZZzTA/s1600/Protorelic.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var ProtorelicTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告１：極機密訓練設施【朱雀】</h1>\
	<p>建議等級：Lv.33。</p>\
	<p>啟動貢加加地區任意「通訊塔」後可發現。</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Gongaga-Protorelics.html' target='_blank'>貢加加地區的古代物質相關委託</a></p>\
	<p></p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告１：總務部調查課的訓練」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicD01",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1231, 3530]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告２：極機密訓練設施【青龍】</h1>\
	<p>建議等級：Lv.34。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicD01' data-z='5'>調查報告１：總務部調查課的訓練</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Gongaga-Protorelics.html' target='_blank'>貢加加地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告２：反神羅組織的毀滅」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicD02",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [2179, 2282]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告３：極機密訓練設施【白虎】</h1><p>建議等級：Lv.35。</p><p>完成<a class='goto' href='javascript:;' data-name='ProtorelicD02' data-z='5'>調查報告２：反神羅組織的毀滅</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Gongaga-Protorelics.html' target='_blank'>貢加加地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告３：神羅總裁的護衛」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicD03",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [2467, 593]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告４：極機密訓練設施【玄武】</h1><p>建議等級：Lv.42。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicD03' data-z='5'>調查報告３：神羅總裁的護衛</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Gongaga-Protorelics.html' target='_blank'>貢加加地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>貢加加地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告４：暗殺叛徒」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicD04",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [848, 2524]
    }
},
];	

//陸行鳥站牌
var ChocoboStops = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibmzaSpmNJf7PoY1kHEcYOHQ2L-XWKk45xYylXv9u2bA-j-MUgwaLGGVUtht6toYItHPp-TeMedku6yrumbwIAV7E9cz-jQp3QJN_3U5R00NrG9K9-Kfl1BHQu13sywmANw3mxkzMvXIjYbNLeEQ4vWt5SwJoM_1Yq6qBcU5982hTqOlKjg6g9viyTFq8/s1600/ChocoboStops.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var ChocoboStopsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD01",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2167, 640]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD02",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1759, 1040]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD03",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1379, 2388]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD04",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2126, 2543]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD05",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1955, 2900]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD06",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1180, 2883]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD08' data-z='5'>抵達陸行鳥站牌的路線</a></p>\
	"},
	"levels": "1",
	"myid": "ChocoboStopsD07",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [859, 2714]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsD08",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [834, 3213]
    }
},
];	

//掘洞兔埋藏道具
var BuriedItem = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUCsZr601Zt8kxB7i599DPfV7Zdw-RcQGw1nemTqAQznaJGKKc7zo-xCImkZYQqyWx8OkBcw-L9K-P8lpunkJ2gqAkQO7RC43aT70ZmfO13STt8GLfSUSOlwPfkqpnJFRHn51QO-w0rRUz__XBwGshM4Y6YKV7c-fX3STFig9C4amKsqtFWkGs537eMFM/s1600/BuriedItem.png',
	shadowUrl: '',iconSize: [50, 50],iconAnchor: [18, 35],popupAnchor: [10, -25],tooltipAnchor: [30, -15]});
var BuriedItemTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：越野車</h1>\
	<p>「PLAY ART：越野車」為收藏品</p>\
	<p>此為「PLAY ART：越野車」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「苔紋瑪瑙×5」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemD01",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1840, 1232]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：越野車</h1>\
	<p>「PLAY ART：越野車」為收藏品</p>\
	<p>此為「PLAY ART：越野車」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「苔紋瑪瑙×5」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemD02",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2342, 2634]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：越野車</h1>\
	<p>「PLAY ART：越野車」為收藏品</p>\
	<p>此為「PLAY ART：越野車」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「魔獸脊骨×5」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemD03",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1709, 2872]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD04",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2233, 452]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：砂金×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemD05",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1715, 470]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD06",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1557, 801]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD07",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1531, 1208]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD08",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2070, 928]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD09",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1990, 1512]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星球奧秘×10</h1>"},
	"levels": "1",
	"myid": "BuriedItemD10",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2076, 2520]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD11",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2249, 2567]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD12",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2573, 2689]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD13",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2246, 2954]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：6000GIL</h1>"},
	"levels": "1",
	"myid": "BuriedItemD14",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2272, 3234]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD15",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1861, 2375]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD16",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1372, 3388]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD17",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1708, 3399]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD18",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [987, 3411]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemD19",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1381, 2513]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD20",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1174, 2709]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD21",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1292, 2864]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemD22",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [893, 2916]
    }
},
];	

//藏寶點
var CacheLocation = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMI8DdeGPBPHJDILvqWdQmkD-xXRlpkR-vNvy0EbPL6ap4REwe5zVqcLK8VeVMe-ed3r1t5BhKXS6TyxTD2JKg0jWtpbz-4B19EhtFbMrgm9iUjSi_YkFLYvi175GEablz6Zf4xaj8ppPjKc5jYMjmdLLQRZSYg8_3tme3NmP3PnnZxCFA3F1NFylUqEQ/s1600/CacheLocation.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var CacheLocationTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>釣客之泉</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD01-1' data-z='6'>寶箱1：紅寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD01-2' data-z='6'>寶箱2：噴霧高級治療劑×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD01-3' data-z='6'>寶箱3：少女之吻×2</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD01",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2245, 1415]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠意叢生的山菜秘境</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD02-1' data-z='6'>寶箱1：綠寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD02-2' data-z='6'>寶箱2：萬能藥×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD02",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1432, 2294]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔晄爐建設作業大樓</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD03-1' data-z='6'>寶箱1：撤甲手榴彈×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD03-2' data-z='6'>寶箱2：「中毒」魔晶耳環</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD02",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2136, 2758]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>木靈棲息的聖域</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD04-1' data-z='6'>寶箱1：秘銀礦石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD04-2' data-z='6'>寶箱2：藍寶石×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD04",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [777, 3113]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>蕈菇農家的儲藏窖</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD05-1' data-z='6'>寶箱1：百萬治療劑×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD05-2' data-z='6'>寶箱2：少女之吻×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD05",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1758, 971]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>守護者的展望台</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD06-1' data-z='6'>寶箱1：乙太×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD06-2' data-z='6'>寶箱2：防具「大角手環」</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD06",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1768, 1443]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔晄汙染的邊界</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD04' data-z='5'>抵達魔晄汙染的邊界的路線</a></p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD07-1' data-z='6'>寶箱1：鳳凰尾巴×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD07-2' data-z='6'>寶箱2：藍寶石×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD07",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2207, 2900]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>密林裡的古代遺跡</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD08-1' data-z='6'>寶箱1：噴霧百萬治療劑×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD08-2' data-z='6'>寶箱2：鳳凰藥×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD08",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [420, 2975]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>岸壁的物資保管場</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD09-1' data-z='6'>寶箱1：防禦長靴</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD09-2' data-z='6'>寶箱2：3000GIL</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationD09-3' data-z='6'>寶箱3：萬靈藥×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationD09",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1393, 3631]
    }
},
];
	
//藏寶點的細項
var CacheLocation1 = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmnUdURpYbCBFQ03gdohgiAyxyK_jipzL33eHfRyRST03OHiKKkd8sxOo6CwudzzuFSi_HcliLYM4gfGJIGRcqkwoWA2g7ddj-qtQHoaE38a2_0sgIBU2oTali4DV2VToDhYMA0pzHa7C4OKjJX1PZsE1ca3nJMwUPRdcEcf7-WCxmqbxc9lksAVHcOgY/s1600/CacheLocation1.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [16, 16],popupAnchor: [0, -12],tooltipAnchor: [10, 0]});
var CacheLocation1Temp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石×1</h1><p>「釣客之泉」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTLqxo34hncFjFmdiZSuAppJdUg6rEhE2F1rYuHW921yhuzauuX2XxTmPbQgaHJwNH3cYnvTboMeulNnQFc014JV8CRBqGshXqopvxF-J_6V1vRPaDS0ZQyz72UtzXoBzMkEJVEamg-utv2h0tCX8BrxwfWP-0dRj8Q2ES1bFZqIEfYc2RljJHWjK6tGs/s0/CacheLocationD01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTLqxo34hncFjFmdiZSuAppJdUg6rEhE2F1rYuHW921yhuzauuX2XxTmPbQgaHJwNH3cYnvTboMeulNnQFc014JV8CRBqGshXqopvxF-J_6V1vRPaDS0ZQyz72UtzXoBzMkEJVEamg-utv2h0tCX8BrxwfWP-0dRj8Q2ES1bFZqIEfYc2RljJHWjK6tGs/s640/CacheLocationD01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD01-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2247, 1439]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>噴霧高級治療劑×2</h1><p>「釣客之泉」寶箱2，在岩石上</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGrnE3wUNZTkpqf7cxXHayTnh8Ya1EW7rd7rU1MftbnUistlKcAZfBlO8MmS-5FFuWn3OAFx6fID90d5iBTGylykNt0cnrh82I0aJubd6ePXRc6KnYvyVTpToZB4AE3Cff3X2ZQBfzHMzm4da03JBPFmXxuTimQF9wU6HYK_QawADsAaRlBxq1rp4tm2I/s0/CacheLocationD01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGrnE3wUNZTkpqf7cxXHayTnh8Ya1EW7rd7rU1MftbnUistlKcAZfBlO8MmS-5FFuWn3OAFx6fID90d5iBTGylykNt0cnrh82I0aJubd6ePXRc6KnYvyVTpToZB4AE3Cff3X2ZQBfzHMzm4da03JBPFmXxuTimQF9wU6HYK_QawADsAaRlBxq1rp4tm2I/s640/CacheLocationD01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD01-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2227, 1407]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>少女之吻×2</h1><p>「釣客之泉」寶箱3，在岩石的高處</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4yp3aRXdp9mtHyATcWnBcevdL3Zh354XJID93Mj5chXA5ytH4BoOy0R-iqhVSbeD1pxkAl5PI__0xjHBy2SDpb0Ocjg9xJeRJ_vU_DYjaO5OLQbi63yDcz_hIpSmG3I09zw_9LeV2uSIeB7LoG-Eq1fA8o8xpCa2oKpltYC6GDZ8N2U18aav5g0q2-go/s0/CacheLocationD01-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4yp3aRXdp9mtHyATcWnBcevdL3Zh354XJID93Mj5chXA5ytH4BoOy0R-iqhVSbeD1pxkAl5PI__0xjHBy2SDpb0Ocjg9xJeRJ_vU_DYjaO5OLQbi63yDcz_hIpSmG3I09zw_9LeV2uSIeB7LoG-Eq1fA8o8xpCa2oKpltYC6GDZ8N2U18aav5g0q2-go/s640/CacheLocationD01-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD01-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2229, 1395]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石×1</h1><p>「綠意叢生的山菜秘境」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuH1aoJwcs-DIfOoPqA8vcCLEaoWNfmBVgRgAwTfM_za3UPZ0Xb5oBXvr6-HKWMaYhO6aUfuAujIGtT_6EhwzvnZjRBugE41MJ2TzXXw5Ify2onxjXuuVB3WLsLl9luUvUZMAvAaPLg0MEpuC4340Y2r08UPdRKWmnl4zejMHmbVEipngnS3oJ_TIwBVI/s0/CacheLocationD02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuH1aoJwcs-DIfOoPqA8vcCLEaoWNfmBVgRgAwTfM_za3UPZ0Xb5oBXvr6-HKWMaYhO6aUfuAujIGtT_6EhwzvnZjRBugE41MJ2TzXXw5Ify2onxjXuuVB3WLsLl9luUvUZMAvAaPLg0MEpuC4340Y2r08UPdRKWmnl4zejMHmbVEipngnS3oJ_TIwBVI/s640/CacheLocationD02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD02-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1528, 2298]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>萬能藥×1</h1><p>「綠意叢生的山菜秘境」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSrE_fJxfBtGHwHbVwe6iT65LFvUCeHALqWOU1wVNgFUaI0O8fVpnl4OjuZzgjOrSEyhLrbkaJV3vc2cAUOfhPbw5Y2KvoL9xr0U8VGKxvqMVTPdkCSWw8oKESJPHLgh6csuZe3de2SuvqDVjzsHjHE-j6Hgd-2tbb5DNu4aTw8bt7BkwAw3go1rlQFIk/s0/CacheLocationD02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSrE_fJxfBtGHwHbVwe6iT65LFvUCeHALqWOU1wVNgFUaI0O8fVpnl4OjuZzgjOrSEyhLrbkaJV3vc2cAUOfhPbw5Y2KvoL9xr0U8VGKxvqMVTPdkCSWw8oKESJPHLgh6csuZe3de2SuvqDVjzsHjHE-j6Hgd-2tbb5DNu4aTw8bt7BkwAw3go1rlQFIk/s640/CacheLocationD02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD02-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1524, 2318]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>撤甲手榴彈×3</h1><p>「魔晄爐建設作業大樓」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3g4efemD3bPB9JHmrQhB8sKFcxPoXAHrDVZ_XospooDu5syw4s7BT1NvdHS6YecUsE2nyg7CO23u-vvdb-e7-ky-_y1ldwpJyZLmRPrvvYRA4fe_HGnVE6lKnO8_yjzcXYEF5E_cooZ_Wk_N4SG2AMro5aDzNvW7hS2ddhHw_cSkW7LPfqC9poNUK3PA/s0/CacheLocationD03-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3g4efemD3bPB9JHmrQhB8sKFcxPoXAHrDVZ_XospooDu5syw4s7BT1NvdHS6YecUsE2nyg7CO23u-vvdb-e7-ky-_y1ldwpJyZLmRPrvvYRA4fe_HGnVE6lKnO8_yjzcXYEF5E_cooZ_Wk_N4SG2AMro5aDzNvW7hS2ddhHw_cSkW7LPfqC9poNUK3PA/s640/CacheLocationD03-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD03-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2150, 2771]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>「中毒」魔晶耳環</h1><p>「魔晄爐建設作業大樓」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK6Y6_foD4ew-xm-z8WkkM3hOtPh1PhzNBe5kO-hmAp43uaWMJiAA3HzGWi35ULO3af-k0DqpPWWr8VizLDZFEjIBI661az6nXoA8r2d-rIUNji2m-skEz8qjlQ6teH0ucb-VssupKAqoqiGKxjQO4Dmz7dl0jwub1NGmkmt-XCYI4kG5TBy_bqoFqFu8/s0/CacheLocationD03-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK6Y6_foD4ew-xm-z8WkkM3hOtPh1PhzNBe5kO-hmAp43uaWMJiAA3HzGWi35ULO3af-k0DqpPWWr8VizLDZFEjIBI661az6nXoA8r2d-rIUNji2m-skEz8qjlQ6teH0ucb-VssupKAqoqiGKxjQO4Dmz7dl0jwub1NGmkmt-XCYI4kG5TBy_bqoFqFu8/s640/CacheLocationD03-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD03-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2084, 2800]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>秘銀礦石×1</h1><p>「木靈棲息的聖域」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNZ0TRACUfaIGxZHzMXrnsNCU-Ryojzo8123FeMt5luBmlXnz_hHjE8AggBeS5TRxQ49e-GcGHPivvXDQlI4nN5GzWv_U4NjKGVIwgxhk5lj6W9gQawDTFoFFABa5GP5z9jc4bxxzCxaOvcbT2Uz856Rp8JN36tcz75YNnWpg-N79No2WcXItLvQSsKPU/s0/CacheLocationD04-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNZ0TRACUfaIGxZHzMXrnsNCU-Ryojzo8123FeMt5luBmlXnz_hHjE8AggBeS5TRxQ49e-GcGHPivvXDQlI4nN5GzWv_U4NjKGVIwgxhk5lj6W9gQawDTFoFFABa5GP5z9jc4bxxzCxaOvcbT2Uz856Rp8JN36tcz75YNnWpg-N79No2WcXItLvQSsKPU/s640/CacheLocationD04-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD04-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [744, 3118]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>藍寶石×1</h1><p>「木靈棲息的聖域」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPZWswGPq-V2ckLlah8KiXMH2zA3q0GqtLGUxtPvVm607EXWqiXcLl2xhU7TPDlzx887GgWNF2B_J4wcKw_iC8vDUyUpqk4XY_tpZADcjAvB4WJpwEhdm4qtEy4cMKMG7GB7IdHbrP_gGoGDguiRfbIdwkjQo7_ZWDAw5PDzb-gbEw3PD19AwLB5NwIrs/s0/CacheLocationD04-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPZWswGPq-V2ckLlah8KiXMH2zA3q0GqtLGUxtPvVm607EXWqiXcLl2xhU7TPDlzx887GgWNF2B_J4wcKw_iC8vDUyUpqk4XY_tpZADcjAvB4WJpwEhdm4qtEy4cMKMG7GB7IdHbrP_gGoGDguiRfbIdwkjQo7_ZWDAw5PDzb-gbEw3PD19AwLB5NwIrs/s640/CacheLocationD04-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD04-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [753, 3102]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>百萬治療劑×1</h1><p>「蕈菇農家的儲藏窖」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKOib5LZPuY-WMQ6qlVj0r4CaE4lK6vj1UNisSAa7d2ZVL6Je1JCsTgppNl27cBdYnGeYDTb1yRs9gVmjm8VwHmVdWIkINu3SrN9CslRhNgtCnsfT0uDmeLEWPBYhYoWJ6X2uUMkHKOHwWMQF9U_F-sKRdC55-EDSH14a_9mjzjTIzSEouRXGSDPz0JEA/s0/CacheLocationD05-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKOib5LZPuY-WMQ6qlVj0r4CaE4lK6vj1UNisSAa7d2ZVL6Je1JCsTgppNl27cBdYnGeYDTb1yRs9gVmjm8VwHmVdWIkINu3SrN9CslRhNgtCnsfT0uDmeLEWPBYhYoWJ6X2uUMkHKOHwWMQF9U_F-sKRdC55-EDSH14a_9mjzjTIzSEouRXGSDPz0JEA/s640/CacheLocationD05-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD05-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1757, 1000]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>少女之吻×3</h1><p>「蕈菇農家的儲藏窖」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi02rJ5ORCLd6BHzkg2K2gVY4mc1JfHS9kJC-EQJNjuDynJ8tjRy1Zri95wwL-HSOt502eSUqp9u8d76g-Z8RgrRgJ7VyBTyRp4QrfUX2VK5SNpn4bVmQ-7Z100bpMJthLFnkwQjsvV4IT57bGC9FoQrYH_hdMe5brdAVXgayT5c8Lc2tAo6U7npJzFMUw/s0/CacheLocationD05-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi02rJ5ORCLd6BHzkg2K2gVY4mc1JfHS9kJC-EQJNjuDynJ8tjRy1Zri95wwL-HSOt502eSUqp9u8d76g-Z8RgrRgJ7VyBTyRp4QrfUX2VK5SNpn4bVmQ-7Z100bpMJthLFnkwQjsvV4IT57bGC9FoQrYH_hdMe5brdAVXgayT5c8Lc2tAo6U7npJzFMUw/s640/CacheLocationD05-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD05-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1741, 990]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太×3</h1><p>「守護者的展望台」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh04D6EmN-c4O1rWT_XspoO4uiD716_gmceO33b3IfnK6t_z3B4dgIc0OBBQ2NjYbKa6sqAcXzphC1vgC7BNhNBGi5Ztme1SvxQy3Pldi_5dVoHepI_ghvpI02PenBWeSz0ni5ijfBS6dv9KjQ_USmYiK6DVSPapi1uy53rBXHr_vjgU2BcUwDiCikhRN0/s0/CacheLocationD06-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh04D6EmN-c4O1rWT_XspoO4uiD716_gmceO33b3IfnK6t_z3B4dgIc0OBBQ2NjYbKa6sqAcXzphC1vgC7BNhNBGi5Ztme1SvxQy3Pldi_5dVoHepI_ghvpI02PenBWeSz0ni5ijfBS6dv9KjQ_USmYiK6DVSPapi1uy53rBXHr_vjgU2BcUwDiCikhRN0/s640/CacheLocationD06-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD06-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1798, 1390]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>防具「大角手環」</h1><p>「守護者的展望台」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjktbz4JAtysZfkoPS9St1iL8ReM8bn6hZNylpSfUfzaExPPs_IIXgNb8F8eAD6RrsvzxlsSMAnFcOJNH0rKSVXlBNZ23gYf43eX_jkuyUz2Xky4sMlyptcEBG3jojWymtRNCPqUMmsQ4CsuF-U5_Klzk-w-0egxREfoh3r16Eo404V0ViZzy7Vx8dusB4/s0/CacheLocationD06-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjktbz4JAtysZfkoPS9St1iL8ReM8bn6hZNylpSfUfzaExPPs_IIXgNb8F8eAD6RrsvzxlsSMAnFcOJNH0rKSVXlBNZ23gYf43eX_jkuyUz2Xky4sMlyptcEBG3jojWymtRNCPqUMmsQ4CsuF-U5_Klzk-w-0egxREfoh3r16Eo404V0ViZzy7Vx8dusB4/s640/CacheLocationD06-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD06-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1791, 1421]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰尾巴×2</h1><p>「魔晄汙染的邊界」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvtgtJZcScHuoYlyXRxhQD88q5Q1mEKk2khk0wkaqo4sAOgNHClYkDx9n3dYCKKlz8SjPsdL1S9uD7NzyYPDv9NIxNJ0PTW0Wi14JQvZ82C_GHeMDvyIlTV9m-M9TGa6m_5EFiNAnujgLngCHATknQCaRKMTbfXpPbj7WsKDj9C7EbLtOL1QmNE9dQT48/s0/CacheLocationD07-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvtgtJZcScHuoYlyXRxhQD88q5Q1mEKk2khk0wkaqo4sAOgNHClYkDx9n3dYCKKlz8SjPsdL1S9uD7NzyYPDv9NIxNJ0PTW0Wi14JQvZ82C_GHeMDvyIlTV9m-M9TGa6m_5EFiNAnujgLngCHATknQCaRKMTbfXpPbj7WsKDj9C7EbLtOL1QmNE9dQT48/s640/CacheLocationD07-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD07-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2245, 2888]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>藍寶石×1</h1><p>「魔晄汙染的邊界」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4lHQxZYkNIVUWWh3B5Jv3e3BqN21Txz22_SyOR5zYlryK3RUS_aG07h5l05Ho80RbsW0TMogQXJldci1wggxNMB6-FazX_Q7snGJgB2_rnNWeAyHUdu-eUxdGBfjRfVFFFZnzE9LkWlxJg33FetMIp4L-mgE-fgSmV8OU8fq_wHNII7vpGp8BiNohBMQ/s0/CacheLocationD07-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4lHQxZYkNIVUWWh3B5Jv3e3BqN21Txz22_SyOR5zYlryK3RUS_aG07h5l05Ho80RbsW0TMogQXJldci1wggxNMB6-FazX_Q7snGJgB2_rnNWeAyHUdu-eUxdGBfjRfVFFFZnzE9LkWlxJg33FetMIp4L-mgE-fgSmV8OU8fq_wHNII7vpGp8BiNohBMQ/s640/CacheLocationD07-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD07-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2231, 2912]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>噴霧百萬治療劑×1</h1><p>「密林裡的古代遺跡」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS2UZ37LUHEXn5sChaAccw_1_qZSizZBjsAAaiRro6sYtse4ZHu4ivbmmZ1E1HbHsxKDjviU5Boxb2eDqGAiy4uq0LDmau8tnvtVsYkr3tCJP7sJ7y9JVc7mQCJ3wVhS9KSPrMHHuwLCJe4s8AkffiAIxvGZIaTGMWCwz74pVmrJZcYOZcsIHPJRToZXg/s0/CacheLocationD08-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS2UZ37LUHEXn5sChaAccw_1_qZSizZBjsAAaiRro6sYtse4ZHu4ivbmmZ1E1HbHsxKDjviU5Boxb2eDqGAiy4uq0LDmau8tnvtVsYkr3tCJP7sJ7y9JVc7mQCJ3wVhS9KSPrMHHuwLCJe4s8AkffiAIxvGZIaTGMWCwz74pVmrJZcYOZcsIHPJRToZXg/s640/CacheLocationD08-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD08-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [459, 2943]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰藥×1</h1><p>「密林裡的古代遺跡」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsY5V08XlEsIdCO-AZymQasBXszONY_c4vIQBvjlQf5bBbr-giI7hVj-kEfhLwvnJJmafw4nxUPwj11BNs279EfDx3Zb-jkrrwKzRBJla5wgNM7zLOpi4CKKXRlmQysirmEHcZjT21pPdM97MzrtwFr0baZNOdOvGgLHRF5CzNoXuqFJ6Ery0igI2jr-8/s0/CacheLocationD08-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsY5V08XlEsIdCO-AZymQasBXszONY_c4vIQBvjlQf5bBbr-giI7hVj-kEfhLwvnJJmafw4nxUPwj11BNs279EfDx3Zb-jkrrwKzRBJla5wgNM7zLOpi4CKKXRlmQysirmEHcZjT21pPdM97MzrtwFr0baZNOdOvGgLHRF5CzNoXuqFJ6Ery0igI2jr-8/s640/CacheLocationD08-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD08-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [514, 2932]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>防禦長靴</h1><p>「岸壁的物資保管場」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgclYxChed_3cQ4V4bg5MTdJ4o9Ij9RzKCHGW99W6n2zMGiZL2N3C_tYwp2UnztxmrP3HgxMAjBXpO_5yV0yBtOwJ8sXujGDd6dM9Qo1CBZIITNX93zr_s34WlWcGOxt58_T5klx_bgFMhumBtaswEJnyc4Q8LHBNMeAcWoEQv3vkNyFokC6jM3kHtA2I/s0/CacheLocationD09-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgclYxChed_3cQ4V4bg5MTdJ4o9Ij9RzKCHGW99W6n2zMGiZL2N3C_tYwp2UnztxmrP3HgxMAjBXpO_5yV0yBtOwJ8sXujGDd6dM9Qo1CBZIITNX93zr_s34WlWcGOxt58_T5klx_bgFMhumBtaswEJnyc4Q8LHBNMeAcWoEQv3vkNyFokC6jM3kHtA2I/s640/CacheLocationD09-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD09-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1358, 3624]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>3000GIL</h1><p>「岸壁的物資保管場」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjexvXY6pTpa0MNpIPmlIVswBjs7fZzaDBYnElpyn6ebXFu1opFLZufBeF8OFZJJvqwCfenuNDk0_R01TYIIOI0LYq5owpPNqPuFqCh4H5-EZ4WMDBjE5oioayrH6DlCRqaj9kl3ZUWpnTYSWlX2iy7-Eksi3qdASCPuFHqD67tnGw7Qpt5_pcFmWy4BIM/s0/CacheLocationD09-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjexvXY6pTpa0MNpIPmlIVswBjs7fZzaDBYnElpyn6ebXFu1opFLZufBeF8OFZJJvqwCfenuNDk0_R01TYIIOI0LYq5owpPNqPuFqCh4H5-EZ4WMDBjE5oioayrH6DlCRqaj9kl3ZUWpnTYSWlX2iy7-Eksi3qdASCPuFHqD67tnGw7Qpt5_pcFmWy4BIM/s640/CacheLocationD09-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD09-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1425, 3634]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>萬靈藥×1</h1><p>「岸壁的物資保管場」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5N4fcN0zo5KFbLD09Ca8IHSSS6qlMgHOOj8mgQ2FMPTRPSlw39s7q5uZ_stxR-zn_Li0d5MVyk4FuLdU6KqXAeOF8ArJjZYcbgh1fkcyrLAUJ8glUahcm1oYDPs4_pNwXDW1KqEAL2Ld7Bx1G1ZZA6fuiO5QtsO9Yc8VDT24s1Nm9G7Y1IF4hAdh-kDQ/s0/CacheLocationD09-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5N4fcN0zo5KFbLD09Ca8IHSSS6qlMgHOOj8mgQ2FMPTRPSlw39s7q5uZ_stxR-zn_Li0d5MVyk4FuLdU6KqXAeOF8ArJjZYcbgh1fkcyrLAUJ8glUahcm1oYDPs4_pNwXDW1KqEAL2Ld7Bx1G1ZZA6fuiO5QtsO9Yc8VDT24s1Nm9G7Y1IF4hAdh-kDQ/s640/CacheLocationD09-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationD09-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1443, 3651]
    }
},
];
	
//敵人
var EnemyLocation = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVNX-8zpEfvARSKKmcvqtEF6jzRAgSasclrtpWpEbsTEz8A6mmA9cOzpV_oJ0n2ZrILKJS1nr_EKGP8FjsC3gVTiiXMsAOYo92nZdYoWv2T0hgTpkf4fjKDKT5EFySwFQ-UWvY-AvJJx5h0HmIMtJ8JmZl8JFZWTGiYmu2KySksbDRt6vZzwl_xNf-xf4/s1600/Enemy.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [16, 16],popupAnchor: [-2, -22],tooltipAnchor: [10, 0]});
var EnemyLocationTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyD001",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2022, 577]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、岔枝花×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD002",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2114, 403]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD003",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2392, 578]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD004",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1777, 743]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、岔枝花×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD005",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1622, 899]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、混成擬態怪×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD006",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1636, 1226]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：岔枝花×1、混成擬態怪×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD007",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1735, 1186]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD008",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1699, 1056]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、岔枝花×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD009",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1785, 1069]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD010",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1859, 1089]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：岔枝花×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD011",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1881, 996]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD012",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2005, 811]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD013",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1807, 1464]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD014",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1851, 1353]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD015",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1974, 2236]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×1、混成擬態怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD016",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2159, 2375]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×1、混成擬態怪×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD017",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2234, 2651]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD018",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2560, 2766]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×1、岔枝花×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD019",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2496, 2630]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×1、混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD020",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2328, 2694]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD021",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2217, 2787]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、石化蜥龍×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD022",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2297, 2894]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×1、岔枝花×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD023",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1713, 2179]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：古蘭迦蘭×2、岔枝花×1</h1>\
	<p>是否已洞察：<br><label><input type='checkbox' data-cat='enemy' name='enemy101' value=1 class='confirmed'/><span>古蘭迦蘭</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy102' value=1 class='confirmed'/><span>小古蘭迦蘭</span></label><br>\
	<label><input type='checkbox' data-cat='enemy' name='enemy103' value=1 class='confirmed'/><span>迷你古蘭迦蘭</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD024",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [446, 3006]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化蜥龍×2、混成擬態怪×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy131' value=1 class='confirmed'/><span>石化蜥龍</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD025",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1382, 3702]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：巨角獸×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD026",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1492, 3699]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、岔枝花×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD027",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1328, 3551]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：古蘭迦蘭×3</h1>\
	<p>是否已洞察：<br><label><input type='checkbox' data-cat='enemy' name='enemy101' value=1 class='confirmed'/><span>古蘭迦蘭</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy102' value=1 class='confirmed'/><span>小古蘭迦蘭</span></label><br>\
	<label><input type='checkbox' data-cat='enemy' name='enemy103' value=1 class='confirmed'/><span>迷你古蘭迦蘭</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD028",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1417, 3516]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：巨角獸×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD029",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1644, 3329]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：古蘭迦蘭×1、觸返蛙×2</h1>\
	<p>是否已洞察：<br><label><input type='checkbox' data-cat='enemy' name='enemy101' value=1 class='confirmed'/><span>古蘭迦蘭</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy102' value=1 class='confirmed'/><span>小古蘭迦蘭</span></label><br>\
	<label><input type='checkbox' data-cat='enemy' name='enemy103' value=1 class='confirmed'/><span>迷你古蘭迦蘭</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD030",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1892, 3400]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：岔枝花×2、巨角獸×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD031",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1566, 3264]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD032",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1682, 3034]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：古蘭迦蘭×2</h1>\
	<p>是否已洞察：<br><label><input type='checkbox' data-cat='enemy' name='enemy101' value=1 class='confirmed'/><span>古蘭迦蘭</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy102' value=1 class='confirmed'/><span>小古蘭迦蘭</span></label><br>\
	<label><input type='checkbox' data-cat='enemy' name='enemy103' value=1 class='confirmed'/><span>迷你古蘭迦蘭</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD033",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1830, 2905]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：巨角獸×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD034",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1428, 2819]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD035",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1317, 2610]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：巨角獸×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD036",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1265, 2446]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：岔枝花×1、巨角獸×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD037",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1278, 2229]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD038",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1389, 2256]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：混成擬態怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD039",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1804, 2328]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：觸返蛙×2、混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy134' value=1 class='confirmed'/><span>觸返蛙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD040",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [806, 2862]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：巨角獸×1、混成擬態怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy128' value=1 class='confirmed'/><span>巨角獸</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy141' value=1 class='confirmed'/><span>混成擬態怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD041",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [859, 2616]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：岔枝花×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy137' value=1 class='confirmed'/><span>岔枝花</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyD042",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [731, 2952]
    }
},
];

//強敵BOSS
var EnemyMAIN = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5wnGvJdN539a2WUKAKKSPZLCOTa4wq3tlBt3yA3bkIk7KtZNcv3g4SD9uXuliQDUkl4euv6ZyiY6kz59A2crEaZZrlWGOwFx6z7FCOFAUOnbgihsrOw6OCQ5Vem2ZnHmE71vNc8Showq-l2VlVLmn57hTeMCXGBR4_b5LOctzgNXhz-VKGGHwPPuicLk/s1600/Enemy-MAIN.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var EnemyQUEST = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9kOaJhIXYLrq3Sh9VkjHv3L1f8xxwULcQxK1bdaVJ9l0wVDzqIhJiUULz1Ao4OVCnoxAwMt8PeeB_Gy73ijZLpjK12I4iqNZvYSTF51K5AHStyfEiIYvlue2Bt6SVzeFFAtaDDphCpXU21JfEa-VDrKP9dh28U9pTEu29nw3TV0RZGOULNGgbKcNSEJw/s1600/Enemy-QUEST.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var SSEnemyTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：閃光匕首×5</h1><p>建議等級：Lv.31。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：寄託在武器上的願望」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy067' value=1 class='confirmed'/><span>閃光匕首</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊或於「電漿充能」發動時對牠造成一定傷害使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第九章「支線委託：寄託在武器上的願望」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyD01",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1717, 1190]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：巨齒象怪×2</h1><p>建議等級：Lv.34。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：令人仰慕的師父」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy079' value=1 class='confirmed'/><span>巨齒象怪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊來吸引目標。經過一段時間後會「休息」，休息時造成一定傷害可使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第九章「支線委託：令人仰慕的師父」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyD02",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1607, 2630]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：列伏利恫鳥×1</h1><p>建議等級：Lv.34。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：令人仰慕的師父」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy055' value=1 class='confirmed'/><span>列伏利恫鳥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：經過一段時間後就會陷入HEAT狀態，同時處於帶電狀態。在帶電狀態下能夠使用昏眩攻擊或反擊。只要使其力竭就能解除帶電狀態。</p>\
	<p>攻略連結：請參考第九章「支線委託：令人仰慕的師父」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyD03",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1856, 2065]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：魔魂美杜莎×1、巨角獸×2</h1><p>建議等級：Lv.35。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：提味秘方」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy107' value=1 class='confirmed'/><span>魔魂美杜莎</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。若使其陷入沉默，在魔法發動失敗時會陷入HEAT狀態。在搖晃不停的狀態下，即使連續攻擊也無法擊中，冷靜下來攻擊吧。</p>\
	<p>攻略連結：請參考第九章「支線委託：提味秘方」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyD04",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1852, 905]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：魔魂美杜莎×2</h1><p>建議等級：Lv.35。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：提味秘方」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy107' value=1 class='confirmed'/><span>魔魂美杜莎</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。若使其陷入沉默，在魔法發動失敗時會陷入HEAT狀態。在搖晃不停的狀態下，即使連續攻擊也無法擊中，冷靜下來攻擊吧。</p>\
	<p>攻略連結：請參考第九章「支線委託：提味秘方」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyD05",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1380, 2932]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：魔魂美杜莎×3</h1><p>建議等級：Lv.35。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：提味秘方」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy107' value=1 class='confirmed'/><span>魔魂美杜莎</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。若使其陷入沉默，在魔法發動失敗時會陷入HEAT狀態。在搖晃不停的狀態下，即使連續攻擊也無法擊中，冷靜下來攻擊吧。</p>\
	<p>攻略連結：請參考第九章「支線委託：提味秘方」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyD06",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1192, 2972]
    }
},
];
	
	
//位置
var LocationMap = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlkQ6W5pA0F3FbnL3_DZYD3KiasBi2ICqmVEFPJdoh-XEF6f05vtH9fFJZgiVZXXvAUxeP8OjHk4eYt7ewaWm5e_sBSDFq2pj2pH0m1i5bjmhte7g3qjG_qnXeljSUqLHmfGFYRkhvI1F7PiYTS7alF1LKjIULn0Dl0OY3N7fXxX7bo5cHLXCoDysGTuY/s1600/LocationMap.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var Location = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglB7yUef0iFFvJoG7z7ApXmS8MmhMwiJocwTXhYqqD2usoxj6G_eurRCmV4nBrSNOkOnuNm69uTp5dbuV_Xfp0adAL0sfjlB6M_DnaRsXdl4FBi4iNxFg68t6N_GAbx9pHb6JiMAkN6aUb81Ixf66I3431WkXTVLsJd22IkAd-frCVAU7B1zIVwEjFx1Q/s1600/Location.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var LocationTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>巴姆普淺灘　貢加加岸</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationD01",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1903, 501]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加港</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD02",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2346, 325]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>伊佐的工坊</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD03",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2110, 1120]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>伊佐的倉庫</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD04",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2157, 1258]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>冬瓜的蔬菜田</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD05",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1867, 1583]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加吊橋</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD06",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1468, 1592]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加村</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationD07",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1578, 1951]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加村：南門</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationD08",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1634, 2063]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>真貢山丘</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD09",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1500, 2420]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加機場</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationD10",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [986, 2338]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>秘密特訓場</h1>\
	<p>接受「支線委託：」於委託中解鎖</p>"},
	"levels": "1",
	"myid": "LocationD11",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1587, 2643]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>瞭望塔</h1>\
	<p>抵達後解鎖</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD02' data-z='5'>由啟動報告３出發，抵達瞭望塔的路線</a></p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD09' data-z='5'>由地面出發，抵達瞭望塔的路線</a></p>\
	"},
	"levels": "1",
	"myid": "LocationD12",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1237, 2790]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加魔晄爐</h1>\
	<p>抵達後解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationD13",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2841, 3162]
    }
},
];	
	
	
//提示
var tipsTemp = [ 
/*{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
	<p><a class='addpoint' href='javascript:;' data-name='test01' data-z='5'>按此顯示移動路徑</a></p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN7kyCr2047ECnpH2beAmGKuqohWpQfro1g6kNV9L1CpryzlwXPB9R5oGqjqs2-EZG-2KAa_ZoiD3kcL1bESqsVgYir-k5IUH2Y6PSJGyHqlSvtxtJqWNS41o0s6oBRr3fDUciWCy8HN4TzEnIj6YFOxlZpqOZNyFnfwoVZZiVq7psWntlrLnMhH-V6us/s0/tip9-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN7kyCr2047ECnpH2beAmGKuqohWpQfro1g6kNV9L1CpryzlwXPB9R5oGqjqs2-EZG-2KAa_ZoiD3kcL1bESqsVgYir-k5IUH2Y6PSJGyHqlSvtxtJqWNS41o0s6oBRr3fDUciWCy8HN4TzEnIj6YFOxlZpqOZNyFnfwoVZZiVq7psWntlrLnMhH-V6us/s640/tip9-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips91",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2074, 2812]
    }
},*/


];
//路線
var PolygonTemp = [
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD03P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1268, 2504],[1240, 2505],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD04P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1243, 2520],[1281, 2536],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD05P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1277, 2519],[1208, 2412],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD06P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1227, 2527],[1216, 2603],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD07P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1243, 2622],[1278, 2616],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD08P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1177, 2614],[1110, 2594],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>討伐報告３提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "LineD01",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1110, 2574],[1101, 2596],[1177, 2615],
			[1216, 2609],[1228, 2530],[1236, 2506],
			[1267, 2500],[1308, 2508],[1315, 2566],
			[1287, 2559],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD09P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1329, 2571],[1401, 2581],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD10P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1476, 2649],[1485, 2713],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD11P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2370, 515],[2358, 565],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD12P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1768, 2087],[1961, 2426],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD13P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1987, 2431],[2107, 2486],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD14P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1977, 2331],[2074, 2402],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD15P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2092, 2455],[2028, 2476],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD16P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2034, 2378],[2076, 2405],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD17P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2216, 2564],[2203, 2589],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD18P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2201, 2640],[2239, 2732],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD19P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2240, 2765],[2186, 2809],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD20P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2174, 2870],[2208, 2884],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD21P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2274, 2931],[2682, 3069],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD22P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2300, 2588],[2451, 2806],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD23P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1283, 2389],[1272, 2257],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD24P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1472, 2401],[1375, 2497],[1341, 2556],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD25P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1327, 2375],[1297, 2459],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達瞭望塔提示路徑１</h1>"},
	"levels": "1",
	"strokeColor": "#FF00FF",
	"weight":"1",  
	"myid": "LineD02",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1235, 2820],[1280, 2790],[1419, 2660],
			[1436, 2629],[1399, 2583],[1326, 2570],
			[1296, 2562],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達啟動報告４提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "LineD03",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[880, 3018],[980, 3004],[980, 2868],
			[1006, 2864],[1017, 2904],[1058, 2929],
			[1058, 2929],[1080, 2835],[1246, 2824],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達魔晄汙染的邊界提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "LineD04",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2216, 2881],[2173, 2870],[2180, 2813],
			[2240, 2763],[2242, 2737],[2198, 2638],
			[2127, 2536],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達探索報告３提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "LineD05",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1458, 2584],[1412, 2585],[1328, 2570],
			[1290, 2565],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>爬上啟動報告４通訊塔的路線</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "LineD06",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[871, 3033],[866, 3105],[856, 3142],
			[848, 3142],[842, 3094],[839, 3044],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達啟動報告５的路線</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "LineD07",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1541, 2801],[1606, 2916],[1614, 2939],
			[1564, 2976],[1500, 2998],[1534, 2980],
			[1503, 2974],[1454, 2815],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達陸行鳥站牌的路線</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "LineD08",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[859, 2719],[849, 2756],[823, 2763],
			[787, 2849],[923, 2902],[889, 3005],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達瞭望塔提示路徑１</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineD09",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1236, 2761],[1243, 2728],[1277, 2725],
			[1318, 2780],[1330, 2779],[1336, 2707],
			[1419, 2723],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD28P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1506, 1574],[1506, 1624],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD29P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2272, 2656],[2290, 2733],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD30P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2312, 2806],[2462, 2822],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD32P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2451, 2650],[2293, 2739],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD33P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1547, 2357],[1568, 2368],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD36P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1064, 3302],[1102, 3324],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD37P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1101, 3285],[1056, 3270],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD38P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1608, 2909],[1539, 2814],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD39P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1341, 2867],[1368, 2885],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD40P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1366, 2963],[1322, 2994],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD41P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1351, 3133],[1369, 3062],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD42P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1333, 3033],[1260, 3049],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD43P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1255, 2956],[1315, 2961],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD44P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1481, 3112],[1494, 3191],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD45P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1551, 3101],[1594, 3114],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD46P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1738, 2874],[1777, 2828],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD47P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1757, 2843],[1717, 2904],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD48P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2072, 2492],[2107, 2446],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD49P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2179, 2793],[2375, 2983],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD50P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [2207, 2751],[2293, 2742],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD51P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [385, 3048],[401, 3056],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD52P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [417, 3114],[597, 2970],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD53P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [957, 3237],[995, 3253],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD54P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1058, 3212],[1093, 3227],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD55P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [1359, 2817],[1329, 2844],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>森陸行鳥跳躍抵達位置</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "ChoAbiD56P",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			 [890, 2673],[875, 2650],
        ]
    }
},
];


//拍攝點
var photos = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5bs6SK90TVpMRttAnt4ujQyp3KW5QaJUVF-hnbKEkHNIhcSfGV7Jy_MnRzgCIf9AFKzUwbKw3NnT_4f1FVl9jR-YUYUsH_-BcXDZHe2AaUkn_a8VQrl0-mJwdL0IkvJK6ir2S1vCKqXrzEqRdIjenZs3OYIsO3T_kg3j2lEH-Xw6OI1BTQJmmRr538qo/s1600/photos.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var  photosTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>貢加加　拍攝點</h1>\
	<p>在貢加加村與「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photosD01",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [928, 3419]
    }
},
];

//重要收集
var MATERIA = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPnaURCDBEgb_sHQPzWZJRpENs25PBTsnUfZuyfyt6vnROc-xoZ1a7Fhs0vVjRyudPpvKRlFOhoq6PJRnt2YTbqoDSNr4G7p6YLw_ywtJoSA-d7qMt_pA5qoMlMc3RHJNmGCpBC2fmqWY6s6v1Q9uNbAeY-KtLVA23Gw3GFdvsYD9PucyE7eBcIm5gJWk/s1600/MATERIA.png',
	shadowUrl: '',iconSize: [35, 35],iconAnchor: [18, 35],popupAnchor: [0, -40],tooltipAnchor: [15, -15]});
var Accessory = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9aFu1BOTVXlu1LWfH9xMhi1Y6khtXX4Z57hoineUY7nbU2VuLca2TTNjR6HsghI96RfpNc7lCF1WBaFJr5IGLKQcgOj3fKH5EyTHLl2HjZvCxL8zz3ZzNLPsVXanaSVHgcsYA46N09UhsM8LFlUzHc6D1KkkiLW1hNWE50piPyYkeFU09jpkyQmijt_A/s1600/Accessories.png',
	shadowUrl: '',iconSize: [50, 50],iconAnchor: [18, 35],popupAnchor: [5, -35],tooltipAnchor: [25, -10]});
var WeaponC = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqe6lDceQ82evpFgY7uXVz0ojF9IKOHWbOgROmRsgfLubdg63DDJHdtb4U980OAcfrU32HzsSvJSemCccayNNXqHGSohjzvnOiNX7owb_RA1NT87J_-ycSRFNZP-VArguLXwFGU-TpKR8paoljHJjJpQ-cgA0c4StiqmzrGzwn_pl3_spPNU5TD94M-qo/s1600/WeaponC.png',
	shadowUrl: '',iconSize: [50, 50],iconAnchor: [18, 35],popupAnchor: [5, -35],tooltipAnchor: [25, -10]});
var WeaponA = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS9sA9upH6PrG49a8adtNZ4uJD1r1_wWQiPy_IuHL3UcLid8MeUzgWR_DeIEMBLsJaZATKSFwTw6uIL4zTQBP7ARQzaAKivk-oXspCpi-UGKNy_ohb3qxUdmisqENn3Yf0tt5pntofaTQplvS-so8mzZcFXdlmT7cF3CLUep3uCU1HhAI_eII44wrXxoU/s1600/WeaponA.png',
	shadowUrl: '',iconSize: [45, 45],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var WeaponB = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEituwlmupBGhq7hlT0RbqyrGdjCzHYjtKa0omFKivwNRt8aX2Cv-aE5jZrUzUZTVJjd4qwBQuSTozNqbLFqsaJikzXbvFhgWtKDVCdJIgB3F6dqRTKAc2Dkm8LIcW6uBpDKsXJRUp3xfnEn8tYXH9dF2IhyphenhyphenCyIBpZYLeB9hyphenhyphen4xJyZO-v8Ps1cFElfv8dIg/s1600/WeaponB.png',
	shadowUrl: '',iconSize: [50, 50],iconAnchor: [18, 35],popupAnchor: [5, -35],tooltipAnchor: [25, -10]});
var EquipmentTemp = [ 
/*{
    "type": "Feature",
    "properties": {"party": "<h1>「幸運」魔晶耳環</h1>\
	<p>在「掘洞兔埋藏點」裡面</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ10FJlhZEhD_hIVWLTxZJ4DTdpYsLSC7DvJds5IanZsqIzIIjJL0bibfH0Nk6hBRpZdh5NmL5pDePITzfbSJsZYyuscsiD7McZwhxOhTzSdtE_FBt61n19C8LU1idjKmjmTb5rHJtrDXd4sLf3UhoQy-72B75AVU_UM1RjfPmdtd9fh6TNd9QliR-iPY/s0/Accessory019.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ10FJlhZEhD_hIVWLTxZJ4DTdpYsLSC7DvJds5IanZsqIzIIjJL0bibfH0Nk6hBRpZdh5NmL5pDePITzfbSJsZYyuscsiD7McZwhxOhTzSdtE_FBt61n19C8LU1idjKmjmTb5rHJtrDXd4sLf3UhoQy-72B75AVU_UM1RjfPmdtd9fh6TNd9QliR-iPY/s640/Accessory019.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "Accessory019",
	"icon":"Accessory",
    "geometry": {
        "type": "Point",
		"coordinates": [3320, 854]
    }
},*/
{
    "type": "Feature",
    "properties": {"party": "<h1>抗性★</h1>\
	<p>在貢加加吊橋的橋頭利用大朵蕈菇跳躍(需取得森陸行鳥)</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuj9zsbhdS01Xn4AZlKgIv7koDmX3BGEEWXRBmj6oqBJCtBj7xko09O2Hosfjn0na2WbgNGblSfbDDhrLDoAVUzP5DS2hLzsZLXg4p_6IqYhvQ0RpShfQtqG4hezRErhqOvQu8WBYXJ2UlCfrh7SPu_CPNX-BVBmS2Vsw3iBHx73feA2X2n6AvKMjTSos/s0/WeaponB003.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuj9zsbhdS01Xn4AZlKgIv7koDmX3BGEEWXRBmj6oqBJCtBj7xko09O2Hosfjn0na2WbgNGblSfbDDhrLDoAVUzP5DS2hLzsZLXg4p_6IqYhvQ0RpShfQtqG4hezRErhqOvQu8WBYXJ2UlCfrh7SPu_CPNX-BVBmS2Vsw3iBHx73feA2X2n6AvKMjTSos/s640/WeaponB003.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "MATERIA036",
	"icon":"MATERIA",
    "geometry": {
        "type": "Point",
		"coordinates": [1497, 1635]
    }
},
];


//空中滑索
var Zipline = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh183_CYMrnaGMz-zPOf5nPbT0w7J-qH5SpsQ2FZZk_h-Y_sdD4_utAMzhqbSgoxmUZCjVJ4yTeSSPT2E5smpdfx69875-QJ27bI_daJS6KQTtU4QKqVhcuigEfvvd2gTY_tMb6ijVEMcMjDhfsOd0wHtVkk15Arhp1tgsrIDsYHmjTmbgVTL-97Bp4XvA/s1600/Zipline.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var ZiplineTemp = [ 
/*{
    "type": "Feature",
    "properties": {"party": "<h1>第８空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline08",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [2717, 1032]
    }
},*/
];

//陸行鳥能力點
var ChocoboAbility = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9EZiMc9GfX8Uz_kWYO4pnO2QKuU4M8sKMZPzmlw8nJYf4QUEM6-CjnBK98wM4iGdo6_D3Y2G4vKgf5JLIeNlReV6tNn8Uy3-2ab8In2yD_UZx4886fD0ivFKdRkIU-G0SIgxjvdRXLoaqSEHGMyXvQPYfuMYQ-LZRtpB0AWwKdLWh8tdTYyRWw_K3fk/s1600/ChocoboIntel1.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [18, 15],popupAnchor: [-4, -15],tooltipAnchor: [10, -15]});
var ChocoboAbilityTemp = [ 
	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='goto' href='javascript:;' data-name='ChoAbiD02' data-z='6'>滑行抵達位置</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD01",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1435, 2397]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='goto' href='javascript:;' data-name='ChoAbiD01' data-z='6'>滑行抵達位置</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD02",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1301, 2493]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD03P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD03",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1269, 2502]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD04P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD04",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1244, 2521]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD05P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD05",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1277, 2519]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD06P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD06",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1227, 2527]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD07P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD07",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1243, 2622]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD08P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD08",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1177, 2614]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD09P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD09",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1329, 2571]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD10P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD10",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1476, 2649]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD11P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD11",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2370, 515]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD12P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD12",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1768, 2087]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD13P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD13",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1987, 2431]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD14P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD14",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1977, 2331]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD15P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD15",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2092, 2455]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD16P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD16",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2034, 2378]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD17P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD17",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2216, 2564]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD18P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD18",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2201, 2640]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD19P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD19",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2240, 2765]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD20P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD20",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2174, 2870]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD21P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD21",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2274, 2931]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD22P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD22",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2300, 2588]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD23P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD23",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1283, 2389]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD24P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD24",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1472, 2401]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD25P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD25",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1327, 2375]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='goto' href='javascript:;' data-name='ChoAbiD27' data-z='6'>滑行抵達位置</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD26",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1421, 2659]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='goto' href='javascript:;' data-name='ChoAbiD26' data-z='6'>滑行抵達位置</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD27",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1283, 2793]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD28P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD28",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1506, 1574]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD29P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD29",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2272, 2656]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD30P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD30",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2312, 2806]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p>會抵達魔晄爐前方(單向)</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD31",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2248, 3065]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD32P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD32",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2451, 2650]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD33P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD33",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1547, 2357]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='goto' href='javascript:;' data-name='ChoAbiD35' data-z='6'>滑行抵達位置</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD34",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [867, 3106]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥滑行(大樹枝)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='goto' href='javascript:;' data-name='ChoAbiD34' data-z='6'>滑行抵達位置</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD35",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [873, 3033]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD36P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD36",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1064, 3302]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD37P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD37",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1101, 3285]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD38P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD38",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1608, 2909]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD39P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD39",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1341, 2867]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD40P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD40",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1366, 2963]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD41P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD41",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1351, 3133]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD42P' data-z='6'>跳躍抵達位置(到高處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD42",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1333, 3033]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD43P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD43",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1255, 2956]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD44P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD44",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1481, 3112]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD45P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD45",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1551, 3101]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD46P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD46",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1738, 2874]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD47P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD47",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1757, 2843]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD48P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD48",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2072, 2492]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD49P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD49",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2179, 2793]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD50P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD50",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2207, 2751]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD51P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD51",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [385, 3048]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD52P' data-z='6'>跳躍抵達位置(到低處)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD52",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [417, 3114]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD53P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD53",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [957, 3237]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD54P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD54",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1058, 3212]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD55P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD55",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1359, 2817]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>森陸行鳥跳躍(蕈菇)</h1>\
	<p>需取得森陸行鳥</p>\
	<p><a class='addpoint' href='javascript:;' data-name='ChoAbiD56P' data-z='6'>跳躍抵達位置(到對面)</a></p>\
	"},
	"levels": "1",
	"myid": "ChoAbiD56",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [890, 2673]
    }
},
];




