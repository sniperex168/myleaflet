

//通訊塔
var Tower = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGs7ppeLSTRlIwIeksXVbyESWeYSRh5AytcZIX3CELYK6MKOo0XPECmwNYkVmxVSoPrpJ7I1PsarhLwvejCVZ6h92dzXFcQgtAshJvRmxXhdcfeElbdjy76OvJ-2QtO_ijMkGLU4RPN2bvvIYSyUlcN-vFHBQvLCrADgcGWMdtSDbQAHHWMG-_uO-uUU/s1600/Tower.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var TowerTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>啟動報告１：奇瑪瑪牧場的通訊塔</h1><p>建議等級：無</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>陸行鳥報告：星殞地區的空陸行鳥</li>\
		<li>探索報告１：峽谷的生命點</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerE01",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [843, 1129]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告２：赤紅大地的通訊塔</h1><p>建議等級：Lv.37</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告２：寺院橋的生命點</li>\
		<li>召喚獸報告１：巴哈姆特改祠堂α</li>\
		<li>討伐報告１：荒地的咒術使者</li>\
		<li>討伐報告２：怒髮衝冠之鳥</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerE02",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1043, 1558]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告３：綠洲舊址的通訊塔</h1><p>建議等級：Lv.37</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告３：黎明谷的生命點</li>\
		<li>討伐報告３：守護黃金的野獸</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerE03",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1839, 1775]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告４：滑翔場的通訊塔</h1><p>建議等級：Lv.38</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告：峽谷的莫古利</li>\
		<li>探索報告４：風穴的生命點</li>\
		<li>討伐報告４：灼熱之舞</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerE04",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1440, 2118]
    }
},	

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告５：亡靈荒野的通訊塔</h1><p>建議等級：Lv.38</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告５：隱密史跡的生命點</li>\
		<li>召喚獸報告２：巴哈姆特改祠堂β</li>\
		<li>討伐報告５：無形的暗殺者</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerE05",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1851, 697]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告６：古代都市的通訊塔</h1><p>建議等級：Lv.38</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE08' data-z='6'>由莫古利之家出發，經過第１６陸行鳥滑翔場，抵達啟動報告６的路徑</a></p>\
	<p>(PS.抵達莫古利之家的方法請看該點說明)</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告６：高原古蹟的生命點</li>\
		<li>召喚獸報告３：巴哈姆特改祠堂γ</li>\
		<li>討伐報告６：古代種的人偶</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerE06",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1303, 2163]
    }
},
];

//陸行鳥報告
var ChocoboIntel = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMjmwWkBhWuk4tOf5zVe8rRryhzlIV8INgCG4lH9FcULWm9nXSldf31nAqZEHFbT_R4jRR1DOWHnc0A0CL5oeRpK1-UuZ1CyFqmzTnZSYbc0dCM59lC22sBCxKP6YQRkfX31itw4BES35B9vKpeMGzEXbqZFGCJC5cjDhyphenhyphenfglUehuQbJq8DqWxIh7NRLM/s1600/ChocoboIntel.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var ChocoboIntelTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥報告：星殞地區的空陸行鳥</h1><p>建議等級：無</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='TowerE01' data-z='5'>啟動報告１：奇瑪瑪牧場的通訊塔</a>後發現</p>\
	<p>或接受「<a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-QUEST10-1.html' target='_blank'>支線委託：飛躍天空的陸行鳥</a>」後發現</p>\
	<p></p>\
	<p>獎勵</p>\
	<ul>\
		<li>黃金羽毛×2</li>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ChocoboIntelE01",
	"icon":"ChocoboIntel",
    "geometry": {
        "type": "Point",
		"coordinates": [829, 840]
    }
},


];

//莫古利
var Moogle = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu9kQwKJK9DBNK7lZ9TyrWsa4HRJixrtHaUOAut2hZiqp_NPHl7LFA1rNTE79NRDbqj8cxZrHCMiCmoKjPhXrKf_QhEpe5H-LzNmtXy4ctSU013AfF9CF9OfHh-imqzjItGuOEWn1qREnB-_97Cb9t6EUmZEFYcp_vNpBsESEpmiK56GjuItVoVWsahi4/s1600/Moogle.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var MoogleTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>莫古利報告：峽谷的莫古利</h1><p>建議等級：無。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE07' data-z='6'>由探索報告４出發，抵達莫古利報告的路徑</a></p>\
	<p>(PS.探索報告４的抵達方式請看該點說明)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店的流通等級＋１，增加可使用「莫古利獎牌」兌換的道具。</p>"},
	"levels": "1",
	"myid": "MoogleE01",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [1685, 2400]
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
    "properties": {"party": "<h1>探索報告１：峽谷的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringE01",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1089, 822]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告２：寺院橋的生命點</h1><p>建議等級：無。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE03' data-z='6'>利用空陸行鳥，由附近的氣流產生裝置抵達</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringE02",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1031, 1704]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告３：黎明谷的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringE03",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2243, 2219]
    }
},

{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告４：風穴的生命點</h1><p>建議等級：無。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE05' data-z='6'>第1步：利用空陸行鳥，由第6滑翔場，經過第7滑翔場後，抵達第13滑翔場。</a></p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE06' data-z='6'>第2步：由第13滑翔場出發，經過第14滑翔場後，可抵達探索報告４。</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringE04",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1728, 2549]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告５：隱密史跡的生命點</h1><p>建議等級：無。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE09' data-z='6'>由第26滑翔場出發，依序經過第27、第28、第29滑翔場後，可以抵達探索報告５的所在高台</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringE05",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1963, 602]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告６：高原古蹟的生命點</h1><p>建議等級：無。</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='TowerE06' data-z='5'>啟動報告６</a>後即可抵達此處。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringE06",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1200, 1947]
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
    "properties": {"party": "<h1>召喚獸報告１：巴哈姆特改祠堂α</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE02' data-z='6'>利用空陸行鳥，由第４陸行鳥滑翔場抵達召喚獸報告１</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：巴哈姆特改(等級+1)</li>\
		<li>弱化召喚獸戰鬥：巴哈姆特改(弱化虧損+1)</li>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalE01",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1154, 1774]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告２：巴哈姆特改祠堂β</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：巴哈姆特改(等級+1)</li>\
		<li>弱化召喚獸戰鬥：巴哈姆特改(弱化虧損+1)</li>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalE02",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1860, 384]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告３：巴哈姆特改祠堂γ</h1><p>建議等級：無。</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='TowerE06' data-z='5'>啟動報告６</a>後即可抵達此處。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：巴哈姆特改(等級+1)</li>\
		<li>弱化召喚獸戰鬥：巴哈姆特改(弱化虧損+1)</li>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalE03",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1084, 2334]
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
    "properties": {"party": "<h1>挖掘報告１：風化的廢船</h1><p>需完成2項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationE01-1' data-z='6'>製作晶片：防具改造套組９</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationE01-2' data-z='6'>製作晶片：道具專家</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationE01-3' data-z='6'>製作晶片：療癒頸鍊</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationE01",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [1357, 2658]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>挖掘報告２：星殞山脈的遺跡</h1><p>需完成4項「探索報告」(生命點)才會發現</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='TowerE06' data-z='5'>啟動報告６</a>後即可抵達此處。</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationE02-1' data-z='6'>製作晶片：防具改造套組１０</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationE02-2' data-z='6'>製作晶片：邪龍戒指</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationE02-3' data-z='6'>製作晶片：祈安珠</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationE02",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [1248, 2062]
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
    "properties": {"party": "<h1>製作晶片：防具改造套組９</h1><p>「挖掘報告１：風化的廢船」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiITEtTZeOqoyvW-2Lf6Bj98pk42fS2OYxI_h6Ighvui5Zt8To5pshhmVwZCzAbAbxXjHJ8loG1Q12M8_Hu4Jx86lUQQmLlQdnTDVg0ZL5aByiCgaiX1fZZoMD97CkFnioxso6I13vKIQBpfJ8YMT0LAt2NAE1tFurP8a-EbfkqRyrFByrG02WjXDl4KyU/s0/ExcavationE01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiITEtTZeOqoyvW-2Lf6Bj98pk42fS2OYxI_h6Ighvui5Zt8To5pshhmVwZCzAbAbxXjHJ8loG1Q12M8_Hu4Jx86lUQQmLlQdnTDVg0ZL5aByiCgaiX1fZZoMD97CkFnioxso6I13vKIQBpfJ8YMT0LAt2NAE1tFurP8a-EbfkqRyrFByrG02WjXDl4KyU/s640/ExcavationE01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationE01-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1441, 2607]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：道具專家</h1><p>「挖掘報告１：風化的廢船」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMEztRJyOZFdjpG8OrhlqZnPw4EWIUMbioBx-B6CT_2dY9Z9FYE_HpsrtbpdmFs2kABIdrsQH9lwlAU7Hce3QQxpHTu6De0q2uVH2OJGPEdwgGof8CbU_Yx8dWtdwHfoJG13MU7E3OnTtkIHGC_1_tK5hlGdRx2OLqrJ9R547C-KPEjsIKxVy0YQH92Tk/s0/ExcavationE01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMEztRJyOZFdjpG8OrhlqZnPw4EWIUMbioBx-B6CT_2dY9Z9FYE_HpsrtbpdmFs2kABIdrsQH9lwlAU7Hce3QQxpHTu6De0q2uVH2OJGPEdwgGof8CbU_Yx8dWtdwHfoJG13MU7E3OnTtkIHGC_1_tK5hlGdRx2OLqrJ9R547C-KPEjsIKxVy0YQH92Tk/s640/ExcavationE01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationE01-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1461, 2546]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：療癒頸鍊</h1><p>「挖掘報告１：風化的廢船」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0isO-WBC6aFaN7-Fm2vfu20CTlu7KF8r13QWfmmb3KpAETBw8BIIGfETOucWnZf-Uw9vuvEjJ2I_WceiFPFDrWqDITvX0vdJoqEJfOHOmAzb6LkIyEOy2oYzpNKZUY6z31w2jio41q6clpWGU9J46BqnlcZmqigMRacb3Tgkx0e6wSYSdNbVxrUAv-r4/s0/ExcavationE01-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0isO-WBC6aFaN7-Fm2vfu20CTlu7KF8r13QWfmmb3KpAETBw8BIIGfETOucWnZf-Uw9vuvEjJ2I_WceiFPFDrWqDITvX0vdJoqEJfOHOmAzb6LkIyEOy2oYzpNKZUY6z31w2jio41q6clpWGU9J46BqnlcZmqigMRacb3Tgkx0e6wSYSdNbVxrUAv-r4/s640/ExcavationE01-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationE01-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1375, 2602]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組１０</h1><p>「挖掘報告２：星殞山脈的遺跡」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMXTRAhrW82hZRnmr1M0Ju9bc2HQTQ9fJsXJ2TPjtlozpfLWXtaus8uO6DRhehDfd9VJJj8BEMRuvj8gEs0v_PQM7zeYfyDBYB70rc8Ga95Q_nN2K-LBu0TIqvEW6InEXGFHTpWUYY3RifTzMZNFZVRAADhtwyooX2oZQJUHOOhwDi8-DI13HsAg1I63E/s0/ExcavationE02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMXTRAhrW82hZRnmr1M0Ju9bc2HQTQ9fJsXJ2TPjtlozpfLWXtaus8uO6DRhehDfd9VJJj8BEMRuvj8gEs0v_PQM7zeYfyDBYB70rc8Ga95Q_nN2K-LBu0TIqvEW6InEXGFHTpWUYY3RifTzMZNFZVRAADhtwyooX2oZQJUHOOhwDi8-DI13HsAg1I63E/s640/ExcavationE02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationE02-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1230, 2048]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：邪龍戒指</h1><p>「挖掘報告２：星殞山脈的遺跡」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1pUQeGf4SOX3baxWpd3uaPF2Li4dIGB2Mja3iSZQEb3eIHakk2EDWFwyM4PcQiu8k7er-28dG1GIxalkwqegprsXantAraKiemJ-LbVRx1khSFYnni5CjDg3C6SZHMQBs0TcwGfC4Goja_1J5EOaZzjpQQZ-RmOwqm9uBbWWo6D2Dqtqxd83MA8ry48g/s0/ExcavationE02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1pUQeGf4SOX3baxWpd3uaPF2Li4dIGB2Mja3iSZQEb3eIHakk2EDWFwyM4PcQiu8k7er-28dG1GIxalkwqegprsXantAraKiemJ-LbVRx1khSFYnni5CjDg3C6SZHMQBs0TcwGfC4Goja_1J5EOaZzjpQQZ-RmOwqm9uBbWWo6D2Dqtqxd83MA8ry48g/s640/ExcavationE02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationE02-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1205, 2009]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：祈安珠</h1><p>「挖掘報告２：星殞山脈的遺跡」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwD56imBR0D9upSGR415S08iiGw0PrjAYUIFGirL529Im_36aJbVGPVgbh8UyJvs5i91WE563x-_v_71utXzIA-XmMLgTH1Ua9xyRK1nFwJZKtyalUh7F2_pohl61jbkM-eECQ7K9-2C0ObmnA94c3foTXYIVNmi5msORAeJZNgzPY5mGXIXV3I4Ak8bk/s0/ExcavationE02-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwD56imBR0D9upSGR415S08iiGw0PrjAYUIFGirL529Im_36aJbVGPVgbh8UyJvs5i91WE563x-_v_71utXzIA-XmMLgTH1Ua9xyRK1nFwJZKtyalUh7F2_pohl61jbkM-eECQ7K9-2C0ObmnA94c3foTXYIVNmi5msORAeJZNgzPY5mGXIXV3I4Ak8bk/s640/ExcavationE02-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationE02-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1260, 2026]
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
    "properties": {"party": "<h1>討伐報告１：荒地的咒術使者</h1><p>建議等級：Lv.38。</p>\
	<p>敵人：魚人戰士×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy049' value=1 class='confirmed'/><span>魚人戰士</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>操作角色沒有陷入石化狀態</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentE01",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [999, 2123]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告２：怒髮衝冠之鳥</h1><p>建議等級：Lv.37。</p>\
	<p>敵人：杜杜杜亞秋×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy146' value=1 class='confirmed'/><span>杜杜杜亞秋</span></label></p>\
	<p style='color: #0000FF'>攻略情報：若閃避「怒髮衝冠爆擊」，可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>使用極限招式</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentE02",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [990, 1405]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告３：守護黃金的野獸</h1><p>建議等級：Lv.39。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE04' data-z='6'>利用空陸行鳥，由附近的氣流產生裝置抵達</a></p>\
	<p>敵人：鷹頭獅×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy083' value=1 class='confirmed'/><span>鷹頭獅</span></label></p>\
	<p style='color: #0000FF'>攻略情報：釋放纏繞其身的龍捲風刮飛周遭時，會陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>以弱點屬性攻擊敵人</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentE03",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2070, 1798]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告４：灼熱之舞</h1><p>建議等級：Lv.38。</p>\
	<p>敵人：熱炎旋索草×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy099' value=1 class='confirmed'/><span>熱炎旋索草</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。一「著火」就會反擊。「著火」狀態可用弱點屬性來解除。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentE04",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2121, 2417]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告５：無形的暗殺者</h1><p>建議等級：Lv.38。</p>\
	<p>敵人：膽怯翼蜥×4。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy150' value=1 class='confirmed'/><span>膽怯翼蜥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：牠一旦將自己隱藏起來弱點屬性就會改變。可透過弱點屬性攻擊使其陷入HEAT狀態。在HEAT期間，牠無法將自己隱藏起來。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentE05",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2216, 930]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告６：古代種的人偶</h1><p>建議等級：Lv.39。</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='TowerE06' data-z='5'>啟動報告６</a>後即可抵達此處。</p>\
	<p>敵人：太古魔像×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy148' value=1 class='confirmed'/><span>太古魔像</span></label></p>\
	<p style='color: #0000FF'>攻略情報：攻擊或受到傷害時能量會減少，當消耗殆盡時會進入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentE06",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1401, 1786]
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
    "properties": {"party": "<h1>隱藏報告：甦醒的邪龍</h1><p>建議等級：Lv.45。</p><p>需完成6項「探索報告」(生命點)才會發現</p>\
	<p>敵人：賈巴沃克×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy152' value=1 class='confirmed'/><span>賈巴沃克</span></label></p>\
	<p style='color: #0000FF'>攻略情報：使用「美杜莎盾牌」時，以強力的弱點屬性攻擊或造成一定傷害，可使其陷入HEAT狀態，「美杜莎盾牌」也會隨之解除。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
	</ul>"},
	"levels": "1",
	"myid": "SecretCombatE01",
	"icon":"SecretCombat",
    "geometry": {
        "type": "Point",
		"coordinates": [1146, 2377]
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
    "properties": {"party": "<h1>調查報告１：星命學的遺跡</h1>\
	<p>建議等級：無。</p>\
	<p>第10章尾聲時(可前往尼福爾海姆時)會出現。</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Cosmo-Protorelics.html' target='_blank'>星殞地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得星殞地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告１：雪崩總會」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicE01",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1245, 1893]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告２：天空的遺跡</h1>\
	<p>建議等級：無。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicE01' data-z='5'>調查報告１：雪崩總會</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Cosmo-Protorelics.html' target='_blank'>星殞地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得星殞地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告２：沉眠於遺跡之物」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicE02",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1263, 746]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告３：都市的遺跡</h1>\
	<p>建議等級：無。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicE02' data-z='5'>調查報告２：沉眠於遺跡之物</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Cosmo-Protorelics.html' target='_blank'>星殞地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得星殞地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告３：追憶戰友」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicE03",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1321, 2032]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告４：寺院的遺跡</h1><p>建議等級：無。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicE03' data-z='5'>調查報告３：追憶戰友</a>才會發現</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE10' data-z='6'>利用空陸行鳥，由第21滑翔場出發可抵達。</a></p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Cosmo-Protorelics.html' target='_blank'>星殞地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>星殞地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得星殞地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告４：送星儀式」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicE04",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [762, 1770]
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
	"myid": "ChocoboStopsE01",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [697, 1089]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsE02",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [783, 992]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsE03",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1114, 511]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsE04",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1997, 698]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsE05",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [935, 2050]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsE06",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1459, 1850]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineD08' data-z='5'>抵達陸行鳥站牌的路線</a></p>\
	"},
	"levels": "1",
	"myid": "ChocoboStopsE07",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1867, 2589]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsE08",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2009, 2462]
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
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：小野馬</h1>\
	<p>「PLAY ART：小野馬」為收藏品</p>\
	<p>此為「PLAY ART：小野馬」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemE01",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [438, 1573]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：小野馬</h1>\
	<p>「PLAY ART：小野馬」為收藏品</p>\
	<p>此為「PLAY ART：小野馬」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemE02",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [729, 1092]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：小野馬</h1>\
	<p>「PLAY ART：小野馬」為收藏品</p>\
	<p>此為「PLAY ART：小野馬」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemE03",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1003, 1895]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE04",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1026, 983]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE05",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [962, 1547]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星魔石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE06",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [920, 1383]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE07",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1639, 1098]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星魔石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE08",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1591, 1451]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE09",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1973, 1532]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：鉻礦×10</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE10",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1163, 1696]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE11",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1980, 1950]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE12",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1739, 2003]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE13",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2003, 2252]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星魔石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE14",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1830, 2380]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：鳳凰尾巴×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE15",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1627, 2208]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE16",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1604, 2719]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：7500GIL</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE17",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1677, 2610]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星球祝福×10</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE18",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1520, 2324]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE19",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1225, 2491]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE20",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2032, 941]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星魔石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE21",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1678, 694]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE22",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1514, 497]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE23",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1225, 2197]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：緋紅石×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE24",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1477, 1705]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：魔獸脊骨×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemE25",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1401, 1940]
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
    "properties": {"party": "<h1>古代都市遺構</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='TowerE06' data-z='5'>啟動報告６</a>後即可抵達此處。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE01-1' data-z='6'>寶箱1：十億治療劑×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE01-2' data-z='6'>寶箱2：藍寶石×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE01",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1151, 2135]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星舟之崖</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='LineE01' data-z='6'>利用空陸行鳥，由第５陸行鳥滑翔場抵達星舟之崖</a></p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE02-1' data-z='6'>寶箱1：紅寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE02-2' data-z='6'>寶箱2：十億治療劑×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE02-3' data-z='6'>寶箱3：脊骨手環×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE02",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1040, 1285]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>岩鹽礦場宿舍舊址</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE03-1' data-z='6'>寶箱1：3000GIL</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE03-2' data-z='6'>寶箱2：星魔石×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE03",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [539, 1775]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>古代聚落的沐浴地</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE04-1' data-z='6'>寶箱1：萬靈藥×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE04-2' data-z='6'>寶箱2：加速藥×2</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE04",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1105, 1641]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>風越之谷</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE05-1' data-z='6'>寶箱1：星魔石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE05-2' data-z='6'>寶箱2：高級乙太×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE05",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [545, 1333]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>古龍的廣場</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE06-1' data-z='6'>寶箱1：鳳凰尾巴×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE06-2' data-z='6'>寶箱2：綠寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE06-3' data-z='6'>寶箱3：萬能藥×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE06",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1660, 2175]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星泉的聖堂</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE07-1' data-z='6'>寶箱1：砂金×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationE07-2' data-z='6'>寶箱2：5000GIL</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationE07",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [788, 1805]
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
    "properties": {"party": "<h1>十億治療劑×2</h1><p>「古代都市遺構」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKn5Y_rBV8bCibXqouH_7Xrv7J275xICqDWNnMkViYb71xRv-qJ3sJPQIvpKezKUjRA7hzC6sutuAiF4ejcee89u4AzsZI1A3IRp-2y03gpJ6RpwZeBqAsaN3YA_1-oHlCiPiqCuLZ8yC8UIwCZb37XcByViyjwBbP1cciCEtSppYRCY4O2kq9jp-YDus/s0/CacheLocationE01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKn5Y_rBV8bCibXqouH_7Xrv7J275xICqDWNnMkViYb71xRv-qJ3sJPQIvpKezKUjRA7hzC6sutuAiF4ejcee89u4AzsZI1A3IRp-2y03gpJ6RpwZeBqAsaN3YA_1-oHlCiPiqCuLZ8yC8UIwCZb37XcByViyjwBbP1cciCEtSppYRCY4O2kq9jp-YDus/s640/CacheLocationE01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE01-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1167, 2162]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>藍寶石×1</h1><p>「古代都市遺構」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4Q6zinFwd1Dh23mdCtD5WDL9tSuvrrpGBVVROGJYOV0Y3mNgrug6uGL280Bix3zD8yJZeHa9VVWzZ489iH3y135RbMAgzocewFRrCHPvZJOwwAc_bijVyvKs-KAb2jVotjAiqffkb6aoaTjob9DCgeRd1Iz7hErFs5BBLuLWeGGXGe-ymPP7D921rCTQ/s0/CacheLocationE01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4Q6zinFwd1Dh23mdCtD5WDL9tSuvrrpGBVVROGJYOV0Y3mNgrug6uGL280Bix3zD8yJZeHa9VVWzZ489iH3y135RbMAgzocewFRrCHPvZJOwwAc_bijVyvKs-KAb2jVotjAiqffkb6aoaTjob9DCgeRd1Iz7hErFs5BBLuLWeGGXGe-ymPP7D921rCTQ/s640/CacheLocationE01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE01-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1155, 2149]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石×1</h1><p>「星舟之崖」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBBRKEvq6QsYgSJLAejreYwWxgBN0XzIXNj5jKDUa0KOJLsOv-7Vza5p6yn0n60Jwrn2xVeUeDKC3y5kbHerrVSVH3LPfoCZygN4JSpPnLy3QvZhiWQqEpDspJYDPeOoBqI-70RFOs7lRgACbCmnQW_yZtM3VxY7QqWqZRghmvAiJTNnvjCYcg3ZONvpE/s0/CacheLocationE02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBBRKEvq6QsYgSJLAejreYwWxgBN0XzIXNj5jKDUa0KOJLsOv-7Vza5p6yn0n60Jwrn2xVeUeDKC3y5kbHerrVSVH3LPfoCZygN4JSpPnLy3QvZhiWQqEpDspJYDPeOoBqI-70RFOs7lRgACbCmnQW_yZtM3VxY7QqWqZRghmvAiJTNnvjCYcg3ZONvpE/s640/CacheLocationE02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE02-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [993, 1310]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>十億治療劑×1</h1><p>「星舟之崖」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikyRIa8KU0i1038-RfPHYwJZfkTGe2zCTJCM0z_UdlHfkzpYVm0Ipg9WNZOGRgcR5X36fW5uyBxwW320qJTMqCYWFEZR4ZvhEVW6WsSBxEvn2OXxUqGxcKM_ox9VNpLRcyBexCW-lMzgAjv3YZ4Q5OUlCTsDRfxWsyDXhLoPpvzNeCWtiR4mji_TENBOY/s0/CacheLocationE02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikyRIa8KU0i1038-RfPHYwJZfkTGe2zCTJCM0z_UdlHfkzpYVm0Ipg9WNZOGRgcR5X36fW5uyBxwW320qJTMqCYWFEZR4ZvhEVW6WsSBxEvn2OXxUqGxcKM_ox9VNpLRcyBexCW-lMzgAjv3YZ4Q5OUlCTsDRfxWsyDXhLoPpvzNeCWtiR4mji_TENBOY/s640/CacheLocationE02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE02-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1058, 1295]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>脊骨手環×1</h1><p>「星舟之崖」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRQt_TxrnqN2crOakxeeIjXpCpBtwE3NUofIqVEHpAGqQfX8QIRhAnXNMsLFaGDPjh3VOwS0mntYSApAA67hcAZREmyl8QYGfilnnpgVISeh1BOccRS_QUhNNTwZKkrPloZeI36ABCLM5wA6aqcFTj7jPyofi9Xz8NR7aGpelOJRdcpZyjORgNJdfLsZ0/s0/CacheLocationE02-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRQt_TxrnqN2crOakxeeIjXpCpBtwE3NUofIqVEHpAGqQfX8QIRhAnXNMsLFaGDPjh3VOwS0mntYSApAA67hcAZREmyl8QYGfilnnpgVISeh1BOccRS_QUhNNTwZKkrPloZeI36ABCLM5wA6aqcFTj7jPyofi9Xz8NR7aGpelOJRdcpZyjORgNJdfLsZ0/s640/CacheLocationE02-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE02-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1063, 1284]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>3000GIL</h1><p>「岩鹽礦場宿舍舊址」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZEKEYh35U-g6CchvWLuBf3C2oSu7coHSg0_SCz1i4Nfhw77Pd4C81F0MoS-9KQ_axt9PEOT0NrE8e9MELlN60n1Mc3y5C83evbbuCG7nWZg-8u-1dqzpYa5-qcUARr5rKfb_3yBfEzYdaVeWVGnmvfFKP1xA2qTWlYe1OPy4HiJ7L1IjL0p8DIr_oonw/s0/CacheLocationE03-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZEKEYh35U-g6CchvWLuBf3C2oSu7coHSg0_SCz1i4Nfhw77Pd4C81F0MoS-9KQ_axt9PEOT0NrE8e9MELlN60n1Mc3y5C83evbbuCG7nWZg-8u-1dqzpYa5-qcUARr5rKfb_3yBfEzYdaVeWVGnmvfFKP1xA2qTWlYe1OPy4HiJ7L1IjL0p8DIr_oonw/s640/CacheLocationE03-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE03-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [516, 1746]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星魔石×1</h1><p>「岩鹽礦場宿舍舊址」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjs_pN8ujpns8DvZRsh3qI8MFyoKe65Csul0QkjKzWAyCr83vlz3Qfxc0w1cxNeWaU1Xb6WcfDxpjYfzb7yG8rw-xdgCcLKpl1IikKoCc9J63tGhsNtRgHQaOkMilqHqBSdSXodkdCp1ogG7BiFs72E6ZigP0IEK1aByaKJ-58xKqZA0X1eLWEXFVhIpM/s0/CacheLocationE03-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjs_pN8ujpns8DvZRsh3qI8MFyoKe65Csul0QkjKzWAyCr83vlz3Qfxc0w1cxNeWaU1Xb6WcfDxpjYfzb7yG8rw-xdgCcLKpl1IikKoCc9J63tGhsNtRgHQaOkMilqHqBSdSXodkdCp1ogG7BiFs72E6ZigP0IEK1aByaKJ-58xKqZA0X1eLWEXFVhIpM/s640/CacheLocationE03-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE03-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [551, 1746]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>萬靈藥×1</h1><p>「古代聚落的沐浴地」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUSnxNjDA38wR20mFcVpdmKJF-H2bJOPkK5FU3T-g3wwe_hxv4v65i8wcr8SlUYEIVvfB1h_srimhPHtvuwzapFT8ceLG5GlEjxVfCPcSQXZgFhzRJsZB3XusAyrcoWigJStg98F7hMvQE8ApEHllNO4Jzeb9DAlVgbOQy3OqQJijtGe2eTq9MoF3JtxI/s0/CacheLocationE04-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUSnxNjDA38wR20mFcVpdmKJF-H2bJOPkK5FU3T-g3wwe_hxv4v65i8wcr8SlUYEIVvfB1h_srimhPHtvuwzapFT8ceLG5GlEjxVfCPcSQXZgFhzRJsZB3XusAyrcoWigJStg98F7hMvQE8ApEHllNO4Jzeb9DAlVgbOQy3OqQJijtGe2eTq9MoF3JtxI/s640/CacheLocationE04-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE04-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1085, 1618]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>加速藥×2</h1><p>「古代聚落的沐浴地」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4gvbGZWhFegvF0ImgNj3ajhfKbA6UvYWP4OUb78Owv7ZaWJeTi9oy8QMZJvvsu-OfdrhrxEwMc56fc-siJtR37OKzbCq_omPzjoa1Giq3KHo6yMP2CdWueS2pR48OoS9pgkHsBFdY3cTl3hfcu28bWu0kemkypmqnMn-8Kpa1QQ0Fud3qEpz4APUnTEY/s0/CacheLocationE04-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4gvbGZWhFegvF0ImgNj3ajhfKbA6UvYWP4OUb78Owv7ZaWJeTi9oy8QMZJvvsu-OfdrhrxEwMc56fc-siJtR37OKzbCq_omPzjoa1Giq3KHo6yMP2CdWueS2pR48OoS9pgkHsBFdY3cTl3hfcu28bWu0kemkypmqnMn-8Kpa1QQ0Fud3qEpz4APUnTEY/s640/CacheLocationE04-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE04-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1081, 1641]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星魔石×1</h1><p>「風越之谷」寶箱1</p>\
	<p>藉由<a class='goto' href='javascript:;' data-name='ChoAbiE01' data-z='5'>第１陸行鳥滑翔場</a>過來。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinwmhcDRxuFMJcsD1JWcQUDBcNzGRn5R3GZWSNN3aJXMaGuWL9fOG0cXEY7wOC5lyc6F0jrT0RYhu2K4X0uERGx8pHt8JSzw5NhKafQCw8YB8ime34y8P9LP9Co-71SD5-Dr4KfJHd83jENwrV2BVPRrWWCvrolj4F9O5Mo_VyzWZmSPCU0csJoXGeSO0/s0/CacheLocationE05-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinwmhcDRxuFMJcsD1JWcQUDBcNzGRn5R3GZWSNN3aJXMaGuWL9fOG0cXEY7wOC5lyc6F0jrT0RYhu2K4X0uERGx8pHt8JSzw5NhKafQCw8YB8ime34y8P9LP9Co-71SD5-Dr4KfJHd83jENwrV2BVPRrWWCvrolj4F9O5Mo_VyzWZmSPCU0csJoXGeSO0/s640/CacheLocationE05-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE05-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [624, 1334]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星魔石×1</h1><p>「風越之谷」寶箱2</p>\
	<p>藉由<a class='goto' href='javascript:;' data-name='ChoAbiE03' data-z='5'>第３陸行鳥滑翔場</a>過來。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaHf1XGgE4Iqos3B1wEBMBt5LDyoR3RLWQ7LHmX0gJjSeKTy-8WTSEPGcZQ0wd_MZplYt58fcf39J10o-SuekpOvKHJRs7PofOhKiorst3DijZkujDYEPGz8jArfJvTP5fW1SBTXzh34d2lLDmhpIj8jSddt4306senEUjNkfSCzWGBNGd5OzpdZSF3tA/s0/CacheLocationE05-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaHf1XGgE4Iqos3B1wEBMBt5LDyoR3RLWQ7LHmX0gJjSeKTy-8WTSEPGcZQ0wd_MZplYt58fcf39J10o-SuekpOvKHJRs7PofOhKiorst3DijZkujDYEPGz8jArfJvTP5fW1SBTXzh34d2lLDmhpIj8jSddt4306senEUjNkfSCzWGBNGd5OzpdZSF3tA/s640/CacheLocationE05-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE05-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [444, 1356]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰尾巴×2</h1><p>「古龍的廣場」寶箱1</p>\
	<p>爬上岩壁可看到</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHJwRjDdFcNeWZVIhnqp3C-7rc8O3mK0KXxdNkLmMTjeRPA4eci7ifa5GqRPFRs5rjjw0xNBmVQmC2YaxRHKBIE38biZK6OJUHh13Q15rJbi2MLc7rSnMYAo688lpH9RsLjhAFrQP5MKXi790KTs1nvn0yrO-aaShE35aqpmfKEddNSMSXsCS28JG2l7c/s0/CacheLocationE06-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHJwRjDdFcNeWZVIhnqp3C-7rc8O3mK0KXxdNkLmMTjeRPA4eci7ifa5GqRPFRs5rjjw0xNBmVQmC2YaxRHKBIE38biZK6OJUHh13Q15rJbi2MLc7rSnMYAo688lpH9RsLjhAFrQP5MKXi790KTs1nvn0yrO-aaShE35aqpmfKEddNSMSXsCS28JG2l7c/s640/CacheLocationE06-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE06-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1661, 2064]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石×1</h1><p>「古龍的廣場」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibII_6jgWK4xguN3qgH2FnXZSC9vavTzXlv67Lo0WRaklPFdU-yF6P9rEEq1ddHJB-xQhuq_eVrn0LuiVMKDfVRVRm2_7fvJ5l6KmQA3mmubD8lw2FAGTLEMkGcUPR8ndCPWzcRWEuD-JvoLnCXcozBzRSLn5FATsfLMoA4343vZ3JB-8hciR6KBQN8rE/s0/CacheLocationE06-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibII_6jgWK4xguN3qgH2FnXZSC9vavTzXlv67Lo0WRaklPFdU-yF6P9rEEq1ddHJB-xQhuq_eVrn0LuiVMKDfVRVRm2_7fvJ5l6KmQA3mmubD8lw2FAGTLEMkGcUPR8ndCPWzcRWEuD-JvoLnCXcozBzRSLn5FATsfLMoA4343vZ3JB-8hciR6KBQN8rE/s640/CacheLocationE06-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE06-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1709, 2111]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>萬能藥×1</h1><p>「古龍的廣場」寶箱3</p>\
	<p>藉由<a class='goto' href='javascript:;' data-name='ChoAbiE07' data-z='5'>第７陸行鳥滑翔場</a>飛到上空時降落跳進去。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEib6j1EeV0ZiB-TF6C0QhbR1jOAinoKX0_a-74SLuykdlXAd3F79pCy8V7N9lSLegQg_IAlF_whPX97ItH8Vs8Vt6QHTxor3FJjrSHf1hZvZghyphenhyphen7dF_trxnGZ2WL-YlCpBWs9s5eyd3iIlcBWiBgW_SKweSLS1oxJsP77w7mS5_42upIwK_RjUXFq7NZ98/s0/CacheLocationE06-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEib6j1EeV0ZiB-TF6C0QhbR1jOAinoKX0_a-74SLuykdlXAd3F79pCy8V7N9lSLegQg_IAlF_whPX97ItH8Vs8Vt6QHTxor3FJjrSHf1hZvZghyphenhyphen7dF_trxnGZ2WL-YlCpBWs9s5eyd3iIlcBWiBgW_SKweSLS1oxJsP77w7mS5_42upIwK_RjUXFq7NZ98/s640/CacheLocationE06-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE06-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1624, 2118]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>砂金×3</h1><p>「星泉的聖堂」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM2LIivMY-w5pINT-3M8kQQ-Yozvmnj05SIyVuu2GfUr9X_qBXz1gZ0Vukx-jaHozgXm44JMGee6S6so4qCbfMIU3XHmPVxgmpAIyoKSj3ldUBkgBxGF6vyz0DOJh-Zdp56rbLj0TXjvzxbyY_8YS4-W-qhPWv4i0RxGmgtLYjkH9C9dT_KmJaF-Huw8I/s0/CacheLocationE07-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM2LIivMY-w5pINT-3M8kQQ-Yozvmnj05SIyVuu2GfUr9X_qBXz1gZ0Vukx-jaHozgXm44JMGee6S6so4qCbfMIU3XHmPVxgmpAIyoKSj3ldUBkgBxGF6vyz0DOJh-Zdp56rbLj0TXjvzxbyY_8YS4-W-qhPWv4i0RxGmgtLYjkH9C9dT_KmJaF-Huw8I/s640/CacheLocationE07-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE07-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [815, 1799]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>5000GIL</h1><p>「星泉的聖堂」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ-a-akzOMR_55bn8CoQGFhNMTovgbheKQclSFNAyxqc4CFrBWWLmF5VHgQlr5ayzyfJnloTdiqnpjJjgMqHpv5YgDtRE87QxRCIb_61jg6tQBwCfVfyN9rdYrPdC3KPAi26mfRdwfK_CVhJ0OjtvTfSb-2XOUeBh0MzH5vEitp91kciX6E7YLWockMBI/s0/CacheLocationE07-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ-a-akzOMR_55bn8CoQGFhNMTovgbheKQclSFNAyxqc4CFrBWWLmF5VHgQlr5ayzyfJnloTdiqnpjJjgMqHpv5YgDtRE87QxRCIb_61jg6tQBwCfVfyN9rdYrPdC3KPAi26mfRdwfK_CVhJ0OjtvTfSb-2XOUeBh0MzH5vEitp91kciX6E7YLWockMBI/s640/CacheLocationE07-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationE07-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [769, 1784]
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
    "properties": {"party": "<h1>敵人：砂魚人×1、巨岩魔像×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy147' value=1 class='confirmed'/><span>巨岩魔像</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE001",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1289, 1802]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE002",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [479, 1366]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE003",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [569, 1253]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE004",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [644, 1246]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE005",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [795, 1265]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2、砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE006",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1219, 1174]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×2、奇奇奇亞秋×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE007",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [933, 976]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×2、砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE008",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1145, 1028]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE009",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1455, 865]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2、砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE010",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1368, 869]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE011",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1406, 1022]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE012",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1859, 919]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×1、奇奇奇亞秋×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE013",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1999, 816]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE014",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1698, 1165]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2、砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE015",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1762, 658]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE016",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1641, 491]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×2、砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE017",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1300, 453]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE018",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1474, 662]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE019",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2335, 2028]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE020",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1973, 1738]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×1、奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE021",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1861, 1571]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×1、奇奇奇亞秋×1、砂魚人×1</h1>\
	<p>是否已洞察：<br>\
	<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE022",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1448, 1511]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE023",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1166, 1417]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE024",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1039, 1956]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE025",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1095, 1852]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×1、奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE026",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [950, 1633]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE027",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [861, 1622]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE028",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1068, 1703]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE029",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1617, 1794]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：砂魚人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE030",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1364, 2194]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×2、砂魚人×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy048' value=1 class='confirmed'/><span>砂魚人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE031",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1465, 2440]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×1、奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE032",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1566, 2607]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：石化翼蜥×1、獅鷲×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy149' value=1 class='confirmed'/><span>石化翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy082' value=1 class='confirmed'/><span>獅鷲</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE033",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1651, 2539]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×1、獅鷲×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy082' value=1 class='confirmed'/><span>獅鷲</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE034",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2092, 2223]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：獅鷲×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy082' value=1 class='confirmed'/><span>獅鷲</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE035",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1919, 2128]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE036",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1788, 1879]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇奇奇亞秋×2、獅鷲×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy145' value=1 class='confirmed'/><span>奇奇奇亞秋</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy082' value=1 class='confirmed'/><span>獅鷲</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyE037",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1719, 2267]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：巨岩魔像×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy147' value=1 class='confirmed'/><span>巨岩魔像</span></label>　\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyE038",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1288, 1935]
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
    "properties": {"party": "<h1>支線委託敵人：混成惡魔×3</h1><p>建議等級：Lv.38。</p>\
	<p style='color: #FF0000'>於第十章「支線委託：循環於星球的生命活動」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy142' value=1 class='confirmed'/><span>混成惡魔</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以弱點屬性的魔法攻擊，可使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第十章「<a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-QUEST10-3.html' target='_blank'>支線委託：循環於星球的生命活動</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyE01",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1820, 2649]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：憎恨號角×1</h1><p>建議等級：Lv.42。</p>\
	<p style='color: #FF0000'>於第十章「支線委託：徘徊的亡靈」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy144' value=1 class='confirmed'/><span>憎恨號角</span></label></p>\
	<p style='color: #0000FF'>攻略情報：發動特定招式後會進入HEAT狀態。會規律性的進入「盾牌」或「反射」狀態。雖然累積力竭量表後，牠就會藉由「預備姿勢」開始恢復，但以強力的能力攻擊擊中３次即可阻止。</p>\
	<p>攻略連結：請參考第十章「<a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-QUEST10-4.html' target='_blank'>支線委託：徘徊的亡靈</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyE02",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1133, 630]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：阿拉克蘭×1</h1><p>建議等級：Lv.38。</p>\
	<p style='color: #FF0000'>於第十章「支線委託：災厄預兆」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy151' value=1 class='confirmed'/><span>阿拉克蘭</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以冰屬性攻擊造成一定傷害，可使其陷入HEAT狀態，HEAT狀態下不耐物理攻擊，而耐魔法攻擊。若在以火屬性攻擊追擊，就能讓牠露出破綻。 </p>\
	<p>攻略連結：請參考第十章「<a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-QUEST10-2.html' target='_blank'>支線委託：災厄預兆</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyE03",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [605, 1920]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：奇奇奇亞秋×1、阿拉克蘭×1</h1><p>建議等級：Lv.38。</p>\
	<p style='color: #FF0000'>於第十章「支線委託：災厄預兆」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy151' value=1 class='confirmed'/><span>阿拉克蘭</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以冰屬性攻擊造成一定傷害，可使其陷入HEAT狀態，HEAT狀態下不耐物理攻擊，而耐魔法攻擊。若在以火屬性攻擊追擊，就能讓牠露出破綻。 </p>\
	<p>攻略連結：請參考第十章「<a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-QUEST10-2.html' target='_blank'>支線委託：災厄預兆</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyE04",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1487, 1740]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：奇奇奇亞秋×2、阿拉克蘭×1</h1><p>建議等級：Lv.38。</p>\
	<p style='color: #FF0000'>於第十章「支線委託：災厄預兆」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy151' value=1 class='confirmed'/><span>阿拉克蘭</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以冰屬性攻擊造成一定傷害，可使其陷入HEAT狀態，HEAT狀態下不耐物理攻擊，而耐魔法攻擊。若在以火屬性攻擊追擊，就能讓牠露出破綻。 </p>\
	<p>攻略連結：請參考第十章「<a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-QUEST10-2.html' target='_blank'>支線委託：災厄預兆</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyE05",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [845, 2160]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：巨型蠕蟲×1</h1><p>建議等級：Lv.45。</p>\
	<p style='color: #FF0000'>於第十二章「支線委託：潛伏於地底的怪物」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy122' value=1 class='confirmed'/><span>巨型蠕蟲</span></label></p>\
	<p style='color: #0000FF'>攻略情報：牠吸入岩石後，腹部變成瞄準攻擊的部位，破壞該部位可使其陷入HEAT。</p>\
	<p>攻略連結：請參考第十二章「<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-QUEST10-5.html' target='_blank'>支線委託：潛伏於地底的怪物</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyE06",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1680, 1605]
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
    "properties": {"party": "<h1>星殞峽谷</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationE01",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1737, 1133]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>義族的洞窟</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationE02",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2030, 1412]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星殞機場</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationE03",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [449, 1693]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>奇瑪瑪牧場</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE04",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [864, 1184]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>奇瑪瑪第１訓練場</h1>\
	<p>接受「支線委託：飛躍天空的陸行鳥」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE05",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [522, 1446]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>奇瑪瑪第２訓練場</h1>\
	<p>完成「<a class='goto' href='javascript:;' data-name='LocationE05' data-z='5'>奇瑪瑪第１訓練場</a>」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE06",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1116, 1204]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>奇瑪瑪第３訓練場</h1>\
	<p>完成「<a class='goto' href='javascript:;' data-name='LocationE06' data-z='5'>奇瑪瑪第２訓練場</a>」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE07",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [892, 1360]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>詠星洞窟</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE08",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1207, 1010]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>地面連接電梯　地面口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE09",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1893, 1061]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星殞港</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE10",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2611, 2090]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>遺跡連接電梯　下層出入口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE11",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [985, 1721]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>遺跡連接電梯　上層出入口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE12",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [963, 1706]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１生命點觀測站</h1>\
	<p>接受「支線委託：循環於星球的生命活動」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE13",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2120, 1644]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２生命點觀測站</h1>\
	<p>完成「<a class='goto' href='javascript:;' data-name='LocationE13' data-z='5'>第１生命點觀測站</a>」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE14",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1150, 1965]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第３生命點觀測站</h1>\
	<p>完成「<a class='goto' href='javascript:;' data-name='LocationE14' data-z='5'>第２生命點觀測站</a>」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE15",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [851, 1748]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第４生命點觀測站</h1>\
	<p>完成「<a class='goto' href='javascript:;' data-name='LocationE15' data-z='5'>第３生命點觀測站</a>」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE16",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1676, 2023]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第５生命點觀測站</h1>\
	<p>完成「<a class='goto' href='javascript:;' data-name='LocationE16' data-z='5'>第４生命點觀測站</a>」後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationE17",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1773, 2580]
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
		"party": "<h1>抵達星舟之崖提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineE01",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1054, 1273],[1516, 1144],[1578, 1095],
			[1581, 1050],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達召喚獸報告１提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineE02",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1159, 1752],[1196, 1680],[1257, 1705],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達探索報告２＆古代聚落的沐浴地的提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineE03",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1051, 1645],[1200, 1490],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達討伐報告３的提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineE04",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2085, 1815],[2102, 2067],[2027, 2133],
			[1985, 2153],[1923, 2060],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達探索報告４的提示路徑Part1</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineE05",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1776, 2365],[1792, 2368],[1804, 2299],
			[1839, 2266],[1854, 2231],[1760, 2218],[1678, 2213],
			[1579, 2217],[1541, 2200],[1503, 2232],[1545, 2286],
			[1570, 2358],[1547, 2416],[1544, 2468],[1577, 2590],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達探索報告４的提示路徑Part2</h1>"},
	"levels": "1",
	"strokeColor": "#00FFFF",
	"weight":"1",  
	"myid": "LineE06",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1714, 2539],[1640, 2516],[1570, 2382],[1546, 2310],
			[1585, 2265],[1642, 2294],[1716, 2328],[1776, 2365],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達莫古利報告的提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "LineE07",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1696, 2394],[1819, 2514],[1706, 2582],
			[1756, 2636],[1759, 2661],[1738, 2688],
			[1653, 2515],[1729, 2545],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達啟動報告６的提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "LineE08",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1315, 2165],[1459, 2288],[1563, 2410],
			[1629, 2492],
			[1687, 2506],[1726, 2436],[1691, 2401],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達探索報告５的提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineE09",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1951, 603],[1786, 596],[1285, 540],
			[1255, 523],[1272, 435],[1280, 390],
			[1449, 405],[1582, 430],[1604, 435],
			[1585, 448],[1472, 445],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達調查報告４的提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "LineE10",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[776, 1754],[844, 1690],[866, 1634],
			[951, 1635],[964, 1700],[1030, 1720],
			[1112, 1669],[1159, 1668],[1411, 1713],
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
    "properties": {"party": "<h1>星殞　拍攝點</h1>\
	<p>在星殞峽谷與「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photosE01",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [828, 1382]
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
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqseAoxw0ZfHv-eAkcbLSbpz8yJbx_kpc-eO6POL5k_He7vdec3i9w7U5Gdciw_SLKTwmBFGxFUwe7xgYy5ZMJIHDDH9cXDS3Bl4A32jyGQL-VciySV-jRTTQZa3H3QfpUtSzWSf3LF3XeU2QmIDIYDgKzJ8Ruf8Bs0fbuzBhZMbrAct9_NZrQnyQSL0g/s1600/ChocoboAbility.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var ChocoboAbility1 = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9EZiMc9GfX8Uz_kWYO4pnO2QKuU4M8sKMZPzmlw8nJYf4QUEM6-CjnBK98wM4iGdo6_D3Y2G4vKgf5JLIeNlReV6tNn8Uy3-2ab8In2yD_UZx4886fD0ivFKdRkIU-G0SIgxjvdRXLoaqSEHGMyXvQPYfuMYQ-LZRtpB0AWwKdLWh8tdTYyRWw_K3fk/s1600/ChocoboIntel1.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [18, 15],popupAnchor: [-4, -15],tooltipAnchor: [10, -15]});
var ChocoboAbilityTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>第１陸行鳥滑翔場【高度112m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE01",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [799, 1243]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２陸行鳥滑翔場【高度87m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE02",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [612, 1287]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第３陸行鳥滑翔場【高度83m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE03",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [525, 1404]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第４陸行鳥滑翔場【高度11m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE04",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1258, 1712]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第５陸行鳥滑翔場【高度224m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	<p>傳送到「星殞峽谷」入口後，回頭走吊橋到另一端後，在左手邊</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE05",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1579, 1052]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第６陸行鳥滑翔場【高度61m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE06",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1569, 2360]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第７陸行鳥滑翔場【高度78m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE07",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1577, 2222]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第８陸行鳥滑翔場【高度73m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE08",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1883, 2214]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第９陸行鳥滑翔場【高度55m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE09",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2027, 2182]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１０陸行鳥滑翔場【高度62m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE10",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2029, 1907]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１１陸行鳥滑翔場【高度72m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE11",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1873, 2273]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１２陸行鳥滑翔場【高度80m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE12",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1917, 2538]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１３陸行鳥滑翔場【高度88m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE13",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1774, 2369]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１４陸行鳥滑翔場【高度90m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE14",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1544, 2316]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１５陸行鳥滑翔場【高度94m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE15",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1601, 2574]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１６陸行鳥滑翔場【高度124m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE16",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1562, 2420]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１７陸行鳥滑翔場【高度62m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE17",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1275, 2233]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１８陸行鳥滑翔場【高度129m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE18",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1452, 1690]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第１９陸行鳥滑翔場【高度78m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE19",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1534, 1802]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２０陸行鳥滑翔場【高度78m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE20",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1529, 1688]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２１陸行鳥滑翔場【高度78m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='TowerE06' data-z='5'>啟動報告６</a>後即可抵達此處。</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE21",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1410, 1718]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２２陸行鳥滑翔場【高度120m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE22",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [840, 1668]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２３陸行鳥滑翔場【高度36m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE23",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1838, 654]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２４陸行鳥滑翔場【高度67m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	<p>由地面走過來即可抵達</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE24",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1429, 488]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２５陸行鳥滑翔場【高度81m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE25",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1411, 725]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２６陸行鳥滑翔場【高度67m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	<p>由地面走過來即可抵達</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE26",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1470, 450]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２７陸行鳥滑翔場【高度92m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE27",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1580, 434]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２８陸行鳥滑翔場【高度112m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE28",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1272, 438]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２９陸行鳥滑翔場【高度103m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE29",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1284, 548]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第３０陸行鳥滑翔場【高度69m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE30",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1938, 710]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第３１陸行鳥滑翔場【高度21m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE31",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1017, 1852]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第３２陸行鳥滑翔場【高度98m】</h1>\
	<p>需取得空陸行鳥後才能使用</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE32",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1219, 729]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>氣流產生裝置(地面)</h1>\
	<p>需取得空陸行鳥後才能使用，可利用此裝置從地面飛往空中</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE33",
	"icon":"ChocoboAbility1",
    "geometry": {
        "type": "Point",
		"coordinates": [1202, 1484]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>氣流產生裝置(地面)</h1>\
	<p>需取得空陸行鳥後才能使用，可利用此裝置從地面飛往空中</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE34",
	"icon":"ChocoboAbility1",
    "geometry": {
        "type": "Point",
		"coordinates": [1921, 2061]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>氣流產生裝置(地面)</h1>\
	<p>需取得空陸行鳥後才能使用，可利用此裝置從地面飛往空中</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE35",
	"icon":"ChocoboAbility1",
    "geometry": {
        "type": "Point",
		"coordinates": [1400, 2420]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>氣流產生裝置(地面)</h1>\
	<p>需取得空陸行鳥後才能使用，可利用此裝置從地面飛往空中</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiE36",
	"icon":"ChocoboAbility1",
    "geometry": {
        "type": "Point",
		"coordinates": [1564, 1304]
    }
},
];




