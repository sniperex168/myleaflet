

//通訊塔
var Tower = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGs7ppeLSTRlIwIeksXVbyESWeYSRh5AytcZIX3CELYK6MKOo0XPECmwNYkVmxVSoPrpJ7I1PsarhLwvejCVZ6h92dzXFcQgtAshJvRmxXhdcfeElbdjy76OvJ-2QtO_ijMkGLU4RPN2bvvIYSyUlcN-vFHBQvLCrADgcGWMdtSDbQAHHWMG-_uO-uUU/s1600/Tower.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var TowerTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>啟動報告１：尼福爾機場的通訊塔</h1><p>建議等級：Lv.37</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>陸行鳥報告：尼福爾地區的海陸行鳥</li>\
		<li>探索報告１：河口斷崖的生命點</li>\
		<li>召喚獸報告１：奧汀祠堂α</li>\
		<li>討伐報告１：蒼炎的嚎叫</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerF01",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1416, 2034]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告２：海鷗廢橋的通訊塔</h1><p>建議等級：Lv.37</p>\
	<p>需要有海陸行鳥才能爬上塔，在河流中藉由海陸行鳥噴流上去。</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告：山村的莫古利點</li>\
		<li>探索報告２：昆斯拉階地的生命點</li>\
		<li>討伐報告２：惡食怪蟲</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerF02",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1989, 2194]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告３：燈塔丘的通訊塔</h1><p>建議等級：Lv.38</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告３：拉恩海岸的生命點</li>\
		<li>召喚獸報告２：奧汀祠堂β</li>\
		<li>討伐報告３：受魔晄魅惑的惡魔</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerF03",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1549, 2530]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告４：洶湧岩礁的通訊塔</h1><p>建議等級：Lv.38</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告４：離島的生命點</li>\
		<li>召喚獸報告３：奧汀祠堂γ</li>\
		<li>討伐報告４：具有毒囊的怪龍</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerF04",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [970, 2368]
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
    "properties": {"party": "<h1>陸行鳥報告：尼福爾地區的海陸行鳥</h1><p>建議等級：無</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='TowerF01' data-z='5'>啟動報告１：尼福爾機場的通訊塔</a>後發現</p>\
	<p>或接受「<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-QUEST11-1.html' target='_blank'>支線委託：陸行鳥道的精隨</a>」後發現</p>\
	<p>獎勵</p>\
	<ul>\
		<li>黃金羽毛×2</li>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ChocoboIntelF01",
	"icon":"ChocoboIntel",
    "geometry": {
        "type": "Point",
		"coordinates": [1258, 2150]
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
    "properties": {"party": "<h1>莫古利報告：山村的莫古利</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店的流通等級＋１，增加可使用「莫古利獎牌」兌換的道具。</p>"},
	"levels": "1",
	"myid": "MoogleF01",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [2122, 2333]
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
    "properties": {"party": "<h1>探索報告１：河口斷崖的生命點</h1><p>建議等級：無。</p>\
	<p>需要有海陸行鳥才能抵達</p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringF01",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1478, 2455]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告２：昆斯拉階地的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringF02",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1837, 2108]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告３：拉恩海岸的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringF03",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1274, 2570]
    }
},

{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告４：離島的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringF04",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [809, 2701]
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
    "properties": {"party": "<h1>召喚獸報告１：奧汀祠堂α</h1><p>建議等級：無。</p>\
	<p>需要有海陸行鳥才能抵達</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：奧汀(等級+1)</li>\
		<li>弱化召喚獸戰鬥：奧汀(弱化虧損+1)</li>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalF01",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1567, 2431]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告２：奧汀祠堂β</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：奧汀(等級+1)</li>\
		<li>弱化召喚獸戰鬥：奧汀(弱化虧損+1)</li>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalF02",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1276, 2696]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告３：奧汀祠堂γ</h1><p>建議等級：無。</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips02' data-z='6'>水面使用陸行鳥噴流</a>進入島中水面後，沿著路前進</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：奧汀(等級+1)</li>\
		<li>弱化召喚獸戰鬥：奧汀(弱化虧損+1)</li>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalF03",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [364, 2001]
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
    "properties": {"party": "<h1>挖掘報告：離島的防衛基地舊址</h1><p>需完成2項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationF01-1' data-z='6'>製作晶片：防具改造套組１１</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationF01-2' data-z='6'>製作晶片：防具改造套組１２</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationF01-3' data-z='6'>製作晶片：鬥爭胸章</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationF01",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [1024, 2812]
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
    "properties": {"party": "<h1>製作晶片：防具改造套組１１</h1><p>「挖掘報告：離島的防衛基地舊址」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiITEtTZeOqoyvW-2Lf6Bj98pk42fS2OYxI_h6Ighvui5Zt8To5pshhmVwZCzAbAbxXjHJ8loG1Q12M8_Hu4Jx86lUQQmLlQdnTDVg0ZL5aByiCgaiX1fZZoMD97CkFnioxso6I13vKIQBpfJ8YMT0LAt2NAE1tFurP8a-EbfkqRyrFByrG02WjXDl4KyU/s0/ExcavationE01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiITEtTZeOqoyvW-2Lf6Bj98pk42fS2OYxI_h6Ighvui5Zt8To5pshhmVwZCzAbAbxXjHJ8loG1Q12M8_Hu4Jx86lUQQmLlQdnTDVg0ZL5aByiCgaiX1fZZoMD97CkFnioxso6I13vKIQBpfJ8YMT0LAt2NAE1tFurP8a-EbfkqRyrFByrG02WjXDl4KyU/s640/ExcavationE01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationF01-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1058, 2846]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組１２</h1><p>「挖掘報告：離島的防衛基地舊址」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMEztRJyOZFdjpG8OrhlqZnPw4EWIUMbioBx-B6CT_2dY9Z9FYE_HpsrtbpdmFs2kABIdrsQH9lwlAU7Hce3QQxpHTu6De0q2uVH2OJGPEdwgGof8CbU_Yx8dWtdwHfoJG13MU7E3OnTtkIHGC_1_tK5hlGdRx2OLqrJ9R547C-KPEjsIKxVy0YQH92Tk/s0/ExcavationE01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMEztRJyOZFdjpG8OrhlqZnPw4EWIUMbioBx-B6CT_2dY9Z9FYE_HpsrtbpdmFs2kABIdrsQH9lwlAU7Hce3QQxpHTu6De0q2uVH2OJGPEdwgGof8CbU_Yx8dWtdwHfoJG13MU7E3OnTtkIHGC_1_tK5hlGdRx2OLqrJ9R547C-KPEjsIKxVy0YQH92Tk/s640/ExcavationE01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationF01-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [996, 2791]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：鬥爭胸章</h1><p>「挖掘報告：離島的防衛基地舊址」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0isO-WBC6aFaN7-Fm2vfu20CTlu7KF8r13QWfmmb3KpAETBw8BIIGfETOucWnZf-Uw9vuvEjJ2I_WceiFPFDrWqDITvX0vdJoqEJfOHOmAzb6LkIyEOy2oYzpNKZUY6z31w2jio41q6clpWGU9J46BqnlcZmqigMRacb3Tgkx0e6wSYSdNbVxrUAv-r4/s0/ExcavationE01-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0isO-WBC6aFaN7-Fm2vfu20CTlu7KF8r13QWfmmb3KpAETBw8BIIGfETOucWnZf-Uw9vuvEjJ2I_WceiFPFDrWqDITvX0vdJoqEJfOHOmAzb6LkIyEOy2oYzpNKZUY6z31w2jio41q6clpWGU9J46BqnlcZmqigMRacb3Tgkx0e6wSYSdNbVxrUAv-r4/s640/ExcavationE01-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationF01-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1092, 2763]
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
    "properties": {"party": "<h1>討伐報告１：蒼炎的嚎叫</h1><p>建議等級：Lv.40。</p>\
	<p>敵人：哮吼狼×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy034' value=1 class='confirmed'/><span>哮吼狼</span></label></p>\
	<p style='color: #0000FF'>攻略情報：當纏繞著青色火焰時，透過弱點屬性攻擊造成一定傷害，可使其青色火焰消失並陷入HEAT狀態。當並未纏繞青色火焰時，防禦或閃避特定招式可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentF01",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1550, 1996]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告２：惡食怪蟲</h1><p>建議等級：Lv.41。</p>\
	<p>敵人：快刀處刑者×4。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy072' value=1 class='confirmed'/><span>快刀處刑者</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentF02",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2003, 1820]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告３：受魔晄魅惑的惡魔</h1><p>建議等級：Lv.41。</p>\
	<p>敵人：安托士×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy156' value=1 class='confirmed'/><span>安托士</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentF03",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1715, 2666]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告４：具有毒囊的怪龍</h1><p>建議等級：Lv.42。</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips01' data-z='6'>岩洞入口</a>前往此處下方水面，再用海陸行鳥飛上去</p>\
	<p>敵人：森林獠牙×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy159' value=1 class='confirmed'/><span>森林獠牙</span></label></p>\
	<p style='color: #0000FF'>攻略情報：破壞僅有在開始發動「石化霧氣」時才能鎖定的「下顎」阻止發動，可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentF04",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [505, 2823]
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
    "properties": {"party": "<h1>隱藏報告：孤傲的巨鳥</h1><p>建議等級：Lv.43。</p><p>需完成4項「探索報告」(生命點)才會發現</p>\
	<p>敵人：帝王祖鳥×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy064' value=1 class='confirmed'/><span>帝王祖鳥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：「最後之歌」若發動完畢，將會受到一擊幾乎全滅的強大傷害。在「最後之歌」發動時破壞其左右羽翼，就可打斷招式發動並使其陷入HEAT狀態。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
	</ul>"},
	"levels": "1",
	"myid": "SecretCombatF01",
	"icon":"SecretCombat",
    "geometry": {
        "type": "Point",
		"coordinates": [358, 2362]
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
    "properties": {"party": "<h1>調查報告１：黑斗篷集團</h1>\
	<p>建議等級：Lv.41。</p>\
	<p>第11章尾聲時(可前往下一個目的地後)會出現。</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告１：追蹤黑斗篷」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicF01",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1804, 2240]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告２：機場的黑斗篷</h1>\
	<p>建議等級：Lv.41。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicF01' data-z='5'>調查報告１：追蹤黑斗篷</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告２：不畏死亡者們」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicF02",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [997, 2049]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告３：河口的黑斗篷</h1>\
	<p>建議等級：Lv.42。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicF02' data-z='5'>調查報告２：不畏死亡者們</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告３：染黑的重逢」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicF03",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1485, 2782]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告４：海岸的黑斗篷</h1>\
	<p>建議等級：Lv.45。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicF03' data-z='5'>調查報告３：染黑的重逢</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>尼福爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告４：異世界的迷途者」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicF04",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [621, 2261]
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
	"myid": "ChocoboStopsF01",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [848, 1620]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsF02",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1836, 1804]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsF03",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1178, 2262]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsF04",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1226, 2611]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsF05",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [706, 2715]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsF06",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [540, 2353]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>\
	"},
	"levels": "1",
	"myid": "ChocoboStopsF07",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2152, 2208]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsF08",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2658, 1495]
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
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：神羅箱</h1>\
	<p>「PLAY ART：神羅箱」為收藏品</p>\
	<p>此為「PLAY ART：神羅箱」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「星魔石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemF01",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1325, 2296]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：神羅箱</h1>\
	<p>「PLAY ART：神羅箱」為收藏品</p>\
	<p>此為「PLAY ART：神羅箱」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「綠寶石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemF02",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1386, 2654]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：神羅箱</h1>\
	<p>「PLAY ART：神羅箱」為收藏品</p>\
	<p>此為「PLAY ART：神羅箱」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「莫古利獎牌×5」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemF03",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1716, 2554]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：9000GIL</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF04",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1044, 1821]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星球啟示×10</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF05",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1643, 2383]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF06",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1532, 2129]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：梣樹木×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF07",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1753, 2072]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF08",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1720, 1863]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：魔獸脊骨×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF09",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1768, 2408]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF10",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2890, 1715]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：神羅箱</h1>\
	<p>「PLAY ART：神羅箱」為收藏品</p>\
	<p>此為「PLAY ART：神羅箱」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「星魔石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemF11",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2868, 1553]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF12",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2555, 1663]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：月長石×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF13",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2701, 1709]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF14",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2656, 1539]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：藍寶石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF15",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2374, 1588]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF16",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2142, 2076]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：鉻礦×10</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF17",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1950, 2117]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF18",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1993, 2271]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星球啟示×10</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF19",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [931, 2780]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF20",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [443, 2126]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF21",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1026, 2172]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星魔石×1</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemF22",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [735, 2688]
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
    "properties": {"party": "<h1>巨鷹的棲木</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF01-1' data-z='6'>寶箱1：砂金×5</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF01-2' data-z='6'>寶箱2：綠寶石×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationF01",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2280, 2260]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>偷渡者海灣</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF02-1' data-z='6'>寶箱1：加速藥×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF02-2' data-z='6'>寶箱2：藍寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF02-3' data-z='6'>寶箱3：萬能藥×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationF02",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1318, 2875]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>尼德霍格水蝕洞</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips01' data-z='6'>岩洞入口</a>前往此處</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF03-1' data-z='6'>寶箱1：紅寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF03-2' data-z='6'>寶箱2：3300GIL</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF03-3' data-z='6'>寶箱3：防具「女武神手鐲」</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationF03",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [440, 2730]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>抗拒的絕壁</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF04-1' data-z='6'>寶箱1：星魔石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF04-2' data-z='6'>寶箱2：十億治療劑×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationF04-3' data-z='6'>寶箱3：秘銀礦石×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationF04",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [490, 2058]
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
    "properties": {"party": "<h1>砂金×5</h1><p>「巨鷹的棲木」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpbUf7Vu5RT0R8pf5LcmaTBzC8oZmwqBdTjM8h85O10I5Co5KWxzrrzxNkaNnZ6Net1LDAJumqUuhTnkPaIfDp84zHW-_xRy5q4dkEiwcoq63nMkeunCRzQB6q8Mki7H6pS2KzIctGBJxJSr26OeZopugjzXmkv68G-57z_uLj0DEKGjC1DPs_ZtMFXs4/s0/CacheLocationF01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpbUf7Vu5RT0R8pf5LcmaTBzC8oZmwqBdTjM8h85O10I5Co5KWxzrrzxNkaNnZ6Net1LDAJumqUuhTnkPaIfDp84zHW-_xRy5q4dkEiwcoq63nMkeunCRzQB6q8Mki7H6pS2KzIctGBJxJSr26OeZopugjzXmkv68G-57z_uLj0DEKGjC1DPs_ZtMFXs4/s640/CacheLocationF01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF01-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2308, 2271]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石×1</h1><p>「巨鷹的棲木」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBa1i77lQkpDeB80v0mVOphLzFcnGDAzEmt3Fp1bf9sptwdkQRz1ht4dOgEYETmuak1aOBAblP8nf6ofT7GtNm_CS4TRy2YVSo2LuowDe8aMjn8eeD4cgER1vb1C6_tmPF4kHCrTI0sIGPUmwrUtna4CXZRVaBtT6cyhZDsuUPzpr0RY45kAa9iNt_G9w/s0/CacheLocationF01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBa1i77lQkpDeB80v0mVOphLzFcnGDAzEmt3Fp1bf9sptwdkQRz1ht4dOgEYETmuak1aOBAblP8nf6ofT7GtNm_CS4TRy2YVSo2LuowDe8aMjn8eeD4cgER1vb1C6_tmPF4kHCrTI0sIGPUmwrUtna4CXZRVaBtT6cyhZDsuUPzpr0RY45kAa9iNt_G9w/s640/CacheLocationF01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF01-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2290, 2270]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>加速藥×1</h1><p>「偷渡者海灣」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0_aXVzIiuJ-2mU764mX1T4dvcArNUlVoJbjSwk0G1C0nPty0mWCtgi1liVFuySANNaoZ-TneGqnGps_uuWZNc18rshXUX8gQrLjDOxIFbsiD3g1rPb7bUgF0SkjhxgSg9QEsWGCtQXaJiZvNAivE89pqfcU47ofxxz7Nj9F7vq0f5hZWoCrdAbr0H1r8/s0/CacheLocationF02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0_aXVzIiuJ-2mU764mX1T4dvcArNUlVoJbjSwk0G1C0nPty0mWCtgi1liVFuySANNaoZ-TneGqnGps_uuWZNc18rshXUX8gQrLjDOxIFbsiD3g1rPb7bUgF0SkjhxgSg9QEsWGCtQXaJiZvNAivE89pqfcU47ofxxz7Nj9F7vq0f5hZWoCrdAbr0H1r8/s640/CacheLocationF02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF02-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1348, 2863]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>藍寶石×1</h1><p>「偷渡者海灣」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-PZaHd6Y7jXfb-_PDedXHZI_jiQLlxG6quOM7hcJ4ioPigU3Y1CzDph4t5uSiKcVMvMLCi4gc5a9Y2bc0tdzocoSI8ugs7ZxtKgBWkdNSjbLOhbh6DsMCV0OG1pzMzwCx-sR1eLXe8jiYOgWqrrsbef6PTzxQdn3HCKeIEGGNTt9HUbhsSz7-o35n-_I/s0/CacheLocationF02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-PZaHd6Y7jXfb-_PDedXHZI_jiQLlxG6quOM7hcJ4ioPigU3Y1CzDph4t5uSiKcVMvMLCi4gc5a9Y2bc0tdzocoSI8ugs7ZxtKgBWkdNSjbLOhbh6DsMCV0OG1pzMzwCx-sR1eLXe8jiYOgWqrrsbef6PTzxQdn3HCKeIEGGNTt9HUbhsSz7-o35n-_I/s640/CacheLocationF02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF02-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1346, 2909]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>萬能藥×1</h1><p>「偷渡者海灣」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQrT_aWHMhyphenhyphen40JyMRfjs7ZuzfhSY1ZiCGLoaQH8FT8jYBw7PRZDSlwgYM4yPq8IigVViteMhME5_dFcjcIzhwawszpRWaYD9rLpcBssxmBCN_sASSTGxiOAnRhqMoYlI4N5mmmJncIQnxILd7NHj0L5_A4s6tYuJtrYaOitLJA-GoxMoa3WXiw1F9XlPg/s0/CacheLocationF02-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQrT_aWHMhyphenhyphen40JyMRfjs7ZuzfhSY1ZiCGLoaQH8FT8jYBw7PRZDSlwgYM4yPq8IigVViteMhME5_dFcjcIzhwawszpRWaYD9rLpcBssxmBCN_sASSTGxiOAnRhqMoYlI4N5mmmJncIQnxILd7NHj0L5_A4s6tYuJtrYaOitLJA-GoxMoa3WXiw1F9XlPg/s640/CacheLocationF02-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF02-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1326, 2914]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石×1</h1><p>「尼德霍格水蝕洞」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0kAHQNSeLyBROuggiCp4CJeamM0Dy1dpzcx9yrODxVuZaLLT7jdqpQNNmCfaih523pOWVlas3n5uUAZbNSLM6WdbOTGUkOWwx6Tr93n40YbZhK7Pe8fubDAK7iM3OXgYJ4gHUD_ZsCh7HNYRWiy81FxjlLoyqjJhzQuTc1RFNOIUsLuIkDg-t94bltFE/s0/CacheLocationF03-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0kAHQNSeLyBROuggiCp4CJeamM0Dy1dpzcx9yrODxVuZaLLT7jdqpQNNmCfaih523pOWVlas3n5uUAZbNSLM6WdbOTGUkOWwx6Tr93n40YbZhK7Pe8fubDAK7iM3OXgYJ4gHUD_ZsCh7HNYRWiy81FxjlLoyqjJhzQuTc1RFNOIUsLuIkDg-t94bltFE/s640/CacheLocationF03-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF03-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [444, 2775]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>3300GIL</h1><p>「尼德霍格水蝕洞」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibHHphQHx4wyKRUKGC7gJHkNIraU4zTzYUmu3Z5Cpz0GVYeDvRguIYdEIfFNW1Wa9VClEyRzmRPgOCNtbNUbO-v-sLCs87sTF0QzCzQ61uYnQR_z4hqNQt8b0ySn1KppzDM_H444mv5eIuR8ur3HnOoHir8T1M0ImO2QkRpmkw2sVmyelmxJ2SUp9ZCJU/s0/CacheLocationF03-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibHHphQHx4wyKRUKGC7gJHkNIraU4zTzYUmu3Z5Cpz0GVYeDvRguIYdEIfFNW1Wa9VClEyRzmRPgOCNtbNUbO-v-sLCs87sTF0QzCzQ61uYnQR_z4hqNQt8b0ySn1KppzDM_H444mv5eIuR8ur3HnOoHir8T1M0ImO2QkRpmkw2sVmyelmxJ2SUp9ZCJU/s640/CacheLocationF03-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF03-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [433, 2788]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>防具「女武神手鐲」</h1><p>「尼德霍格水蝕洞」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxeeALfdhn-TDOEabEJWFvZ49YLJvKqlTb6rLayMZ5QGkzKv-0kQumWlxkUXaVltTXpsSHTPW9wRHomvO9jtBCaLE1vdbDw79B6ixmAGeBJ1ojtnyzKPEYaESo0C-EIWY5Rg-OifKvByh8diMmjspOxdb-WbbTq7hcmE9v5puZFWEqqpstMqI6artwRjc/s0/CacheLocationF03-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxeeALfdhn-TDOEabEJWFvZ49YLJvKqlTb6rLayMZ5QGkzKv-0kQumWlxkUXaVltTXpsSHTPW9wRHomvO9jtBCaLE1vdbDw79B6ixmAGeBJ1ojtnyzKPEYaESo0C-EIWY5Rg-OifKvByh8diMmjspOxdb-WbbTq7hcmE9v5puZFWEqqpstMqI6artwRjc/s640/CacheLocationF03-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF03-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [419, 2773]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>星魔石×1</h1><p>「抗拒的絕壁」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJMWSHYg8ZxSSJUut8wNx1FtBZy-nYc-uDx1n1AAOntW7AxnBdS6CR21OeT33TLOUsZPLWzjH3S6yQl95ny3v1rca0AWTZ-rF3bXBVY7gZpfXd06yLLvobYaGBPZ7hMwAnowhlA25nLAL7EBtTA49gHqxUgjA8zrh6NzOWbEa7hQGEJ5l0iCR3fdzEwEw/s0/CacheLocationF04-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJMWSHYg8ZxSSJUut8wNx1FtBZy-nYc-uDx1n1AAOntW7AxnBdS6CR21OeT33TLOUsZPLWzjH3S6yQl95ny3v1rca0AWTZ-rF3bXBVY7gZpfXd06yLLvobYaGBPZ7hMwAnowhlA25nLAL7EBtTA49gHqxUgjA8zrh6NzOWbEa7hQGEJ5l0iCR3fdzEwEw/s640/CacheLocationF04-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF04-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [495, 2022]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>十億治療劑×1</h1><p>「抗拒的絕壁」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXe_XIpVe9hMt4fez063p5sPzmgg7rZc16Wa5gInR9gP6G-OoCtQ4AiQwZQC326CQSgXBHXS6KBmJQChhz6QBCNqO6EX42z36bu7I4hB-MVELaxBSi9WalsGMhhm0O9GPDqusUQKkVen2mz98Fod4nLiYisHQjH_KFs-3tS6M2aCb1utIvwGGYLLyJGxo/s0/CacheLocationF04-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXe_XIpVe9hMt4fez063p5sPzmgg7rZc16Wa5gInR9gP6G-OoCtQ4AiQwZQC326CQSgXBHXS6KBmJQChhz6QBCNqO6EX42z36bu7I4hB-MVELaxBSi9WalsGMhhm0O9GPDqusUQKkVen2mz98Fod4nLiYisHQjH_KFs-3tS6M2aCb1utIvwGGYLLyJGxo/s640/CacheLocationF04-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF04-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [495, 1989]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>秘銀礦石×1</h1><p>「抗拒的絕壁」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy5CiuZ2WxJ_Bve3G8oTAX0ojoIeifUzgEL89-n0ZpzDfRnUiFwX5SY06fV32pj_ewSmdt1n5bf0rkg7howhyLsD9YFA5UvNH0jY489XBX4fP_qPnczX3_Qv5qhCwuUOhdsWw92sQkBPC12ks1uKr9op6-_7of8QjvlMgx-EoVFn8jwmVT3Y7LK-SisC8/s0/CacheLocationF04-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy5CiuZ2WxJ_Bve3G8oTAX0ojoIeifUzgEL89-n0ZpzDfRnUiFwX5SY06fV32pj_ewSmdt1n5bf0rkg7howhyLsD9YFA5UvNH0jY489XBX4fP_qPnczX3_Qv5qhCwuUOhdsWw92sQkBPC12ks1uKr9op6-_7of8QjvlMgx-EoVFn8jwmVT3Y7LK-SisC8/s640/CacheLocationF04-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationF04-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [524, 1974]
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
    "properties": {"party": "<h1>敵人：尼福爾狼×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF001",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3240, 1365]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×2、尼福爾狼×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF002",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3111, 1478]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：投捕帽妖×1、尼福爾狼×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF003",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2887, 1628]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尼福爾狼×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF004",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2752, 1554]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：投捕帽妖×1、尼福爾狼×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF005",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2523, 1735]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×3、投捕帽妖×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF006",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1480, 2118]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×4</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF007",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1403, 2205]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×2、尼福爾狼×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF008",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1255, 2292]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×4</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF009",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1323, 2570]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：投捕帽妖×2、尼福爾狼×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF010",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1423, 2605]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×1、投捕帽妖×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF011",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1365, 2788]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×2、投捕帽妖×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF012",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1320, 2621]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF013",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1652, 2151]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×2、投捕帽妖×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF014",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1780, 1968]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：投捕帽妖×1、尼福爾狼×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy112' value=1 class='confirmed'/><span>投捕帽妖</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF015",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1897, 1907]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尼福爾狼×2、瓦隆×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy155' value=1 class='confirmed'/><span>瓦隆</span></label>\
	</p>\
	<p>PS. 位於機場底下的船塢。解古代物質相關任務時才能進去</p>\
	"},
	"levels": "1",
	"myid": "EnemyF016",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1146, 1911]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：頸囊獠牙×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy158' value=1 class='confirmed'/><span>頸囊獠牙</span></label></p>\
	<p>PS. 位於機場底下的船塢。解古代物質相關任務時才能進去</p>\
	"},
	"levels": "1",
	"myid": "EnemyF017",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [970, 1955]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尼福爾狼×2、瓦隆×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy155' value=1 class='confirmed'/><span>瓦隆</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF018",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [369, 2174]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：瓦隆×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy155' value=1 class='confirmed'/><span>瓦隆</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF019",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [461, 2012]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：頸囊獠牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy158' value=1 class='confirmed'/><span>頸囊獠牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF020",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [357, 2015]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×2、尼福爾狼×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF021",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1000, 2709]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：祖鳥×1、瓦隆×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy060' value=1 class='confirmed'/><span>祖鳥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy155' value=1 class='confirmed'/><span>瓦隆</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF022",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [866, 2761]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF023",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [720, 2757]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：瓦隆×2、頸囊獠牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy155' value=1 class='confirmed'/><span>瓦隆</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy158' value=1 class='confirmed'/><span>頸囊獠牙</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF024",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [608, 2708]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：丘比爾狄努斯×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy071' value=1 class='confirmed'/><span>丘比爾狄努斯</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyF025",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [556, 2816]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尼福爾狼×1、瓦隆×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy033' value=1 class='confirmed'/><span>尼福爾狼</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy155' value=1 class='confirmed'/><span>瓦隆</span></label>\
	</p>\
	"},
	"levels": "1",
	"myid": "EnemyF026",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [813, 2647]
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
    "properties": {"party": "<h1>支線委託敵人：殺手蜂×4</h1><p>建議等級：Lv.41。</p>\
	<p style='color: #FF0000'>於第十一章「支線委託：白毛天使」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy160' value=1 class='confirmed'/><span>殺手蜂</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第十一章「<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-QUEST11-2.html' target='_blank'>支線委託：白毛天使</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF01",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [3249, 1354]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：殺手蜂×6</h1><p>建議等級：Lv.41。</p>\
	<p style='color: #FF0000'>於第十一章「支線委託：白毛天使」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy160' value=1 class='confirmed'/><span>殺手蜂</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第十一章「<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-QUEST11-2.html' target='_blank'>支線委託：白毛天使</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF02",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [2886, 1617]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：女王蜂、殺手蜂×3</h1><p>建議等級：Lv.41。</p>\
	<p style='color: #FF0000'>於第十一章「支線委託：白毛天使」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy161' value=1 class='confirmed'/><span>女王蜂</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第十一章「<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-QUEST11-2.html' target='_blank'>支線委託：白毛天使</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF03",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [2751, 1543]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：隱密步伐者×2</h1><p>建議等級：Lv.41。</p>\
	<p style='color: #FF0000'>於第十一章「調查報告１：黑斗篷集團」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy020' value=1 class='confirmed'/><span>隱密步伐者</span></label></p>\
	<p style='color: #0000FF'>攻略情報：每隔一段時間就會「覺醒」。只要造成一定程度的傷害即可解除覺醒狀態，使其陷入HEAT狀態。 </p>\
	<p>攻略連結：請參考<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF04",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1784, 2243]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：隱密步伐者×3</h1><p>建議等級：Lv.41。</p>\
	<p style='color: #FF0000'>於第十一章「調查報告２：機場的黑斗篷」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy020' value=1 class='confirmed'/><span>隱密步伐者</span></label></p>\
	<p style='color: #0000FF'>攻略情報：每隔一段時間就會「覺醒」。只要造成一定程度的傷害即可解除覺醒狀態，使其陷入HEAT狀態。 </p>\
	<p>攻略連結：請參考<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF05",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1049, 1778]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：赭紅浮游死神×1</h1><p>建議等級：Lv.42。</p>\
	<p style='color: #FF0000'>於第十一章「調查報告３：河口的黑斗篷」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy170' value=1 class='confirmed'/><span>赭紅浮游死神</span></label></p>\
	<p style='color: #0000FF'>攻略情報：造成一定傷害可使其陷入HEAT狀態，瞄準眼睛使出物理攻擊雖然可造成大幅度傷害，但一旦對方HP減少，就會展開「瑪那盾牌」，使物理攻擊無效</p>\
	<p>攻略連結：請參考<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF06",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1503, 2774]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：神秘劍豪×1</h1><p>建議等級：Lv.45。</p>\
	<p style='color: #FF0000'>於第十一章「調查報告４：海岸的黑斗篷」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy225' value=1 class='confirmed'/><span>神秘劍豪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：若能精準防禦攻擊，就會劇烈踉蹌，使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考<a href='https://sniperex168.blogspot.com/2024/07/FF7RE2-Nibel-Protorelics.html' target='_blank'>尼福爾地區的古代物質相關委託</a></p>\
	"},
	"levels": "1",
	"myid": "SSEnemyF07",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [640, 2250]
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
    "properties": {"party": "<h1>尼福爾機場</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationF01",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1061, 1978]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>尼福爾海姆</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationF02",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2251, 1762]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>尼福爾海姆：尼福爾山連接口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationF03",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2369, 1647]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>神羅宅邸</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationF04",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2253, 1457]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>尼福爾山</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationF05",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2693, 560]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>神羅宅邸：魔晄研究所戰鬥模擬器</h1>\
	<p>第十二章接受相關支線委託後，抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationF06",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2433, 1104]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>尼福爾山南峰　登山口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationF07",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3223, 1408]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>吉歐爾橋</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationF08",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1988, 2012]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥宮殿</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationF09",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1744, 2482]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>尼福爾港</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationF10",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2226, 2170]
    }
},
];	
	
	
//提示
var tipsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>岩洞入口</h1>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6oWTUj_S6YnPqj3YoAU1aTHNbFEwY8ePsXb0cjv1rN7HLEG0n4fczUcz57HunPiKvfMDMoXIiAFPIr8pehdEVMvbuYNItLL2FJUE2XDJP0AH48FNVTZBp_thtvP7PwiNpBXkWDwSLKEHZeVzmpJ0SF2xDS4oCoL2je5MKKx8qEdvc3-IqOQmRjPZy1aY/s0/ChoAbiF46.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6oWTUj_S6YnPqj3YoAU1aTHNbFEwY8ePsXb0cjv1rN7HLEG0n4fczUcz57HunPiKvfMDMoXIiAFPIr8pehdEVMvbuYNItLL2FJUE2XDJP0AH48FNVTZBp_thtvP7PwiNpBXkWDwSLKEHZeVzmpJ0SF2xDS4oCoL2je5MKKx8qEdvc3-IqOQmRjPZy1aY/s640/ChoAbiF46.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips01",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [405, 2845]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥噴流</h1>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1WFmBGtZQQ9h1Bb0mLu3JzvmlSa9HGv7FSypcxdE936TnDTa9-jKdT3NB-PsGSd8dErxPwIlvQrg1t-db07fkFWzqpkzUe-C7KAlappi4uwcCb7GBJNHsruV60MpJcO2gCZSF66Q51T3O0n-IfFc-j2nD0VCAkVGoNuUWYXDMvKtULIvwH3oFDskknOY/s0/ChoAbiF48.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1WFmBGtZQQ9h1Bb0mLu3JzvmlSa9HGv7FSypcxdE936TnDTa9-jKdT3NB-PsGSd8dErxPwIlvQrg1t-db07fkFWzqpkzUe-C7KAlappi4uwcCb7GBJNHsruV60MpJcO2gCZSF66Q51T3O0n-IfFc-j2nD0VCAkVGoNuUWYXDMvKtULIvwH3oFDskknOY/s640/ChoAbiF48.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips02",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [357, 1900]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥噴流</h1>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcL7X0bYxlAsLiswp7xlw7Nkav638Yv0iJJawaAKvtw6vD-Q1pAL-506b_gxy5J5vvso6KxTUaXtWhPYCKw6Cp-jqNA0CeJYUCqz4PR4g6klCyjzmu-eA-PKsg9LsQDSxGl0UsEAkuz4XIWLzH1WdM10yfpQC88D6ijcuwve9dt2apOprjlK3B_RCQyIg/s0/ChoAbiF44.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcL7X0bYxlAsLiswp7xlw7Nkav638Yv0iJJawaAKvtw6vD-Q1pAL-506b_gxy5J5vvso6KxTUaXtWhPYCKw6Cp-jqNA0CeJYUCqz4PR4g6klCyjzmu-eA-PKsg9LsQDSxGl0UsEAkuz4XIWLzH1WdM10yfpQC88D6ijcuwve9dt2apOprjlK3B_RCQyIg/s640/ChoAbiF44.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips03",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [804, 2802]
    }
},	
		
	
];
//路線
var PolygonTemp = [
/*{
    "type": "Feature",
    "properties": {
		"party": "<h1>抵達星舟之崖提示路徑</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "LineF01",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1054, 1273],[1516, 1144],[1578, 1095],
			[1581, 1050],
        ]
    }
},*/
];


//拍攝點
var photos = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5bs6SK90TVpMRttAnt4ujQyp3KW5QaJUVF-hnbKEkHNIhcSfGV7Jy_MnRzgCIf9AFKzUwbKw3NnT_4f1FVl9jR-YUYUsH_-BcXDZHe2AaUkn_a8VQrl0-mJwdL0IkvJK6ir2S1vCKqXrzEqRdIjenZs3OYIsO3T_kg3j2lEH-Xw6OI1BTQJmmRr538qo/s1600/photos.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var  photosTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>尼福爾　拍攝點</h1>\
	<p>在尼福爾海姆與「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photosF01",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [917, 2479]
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
{
    "type": "Feature",
    "properties": {"party": "<h1>「弱化攻擊」魔晶耳環</h1>\
	<p>位於機場底下的船塢。一艘潛水艇內</p>\
	<p>PS. 接到古代物質相關任務後才能進去船塢。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFik6f19ELmPVuDjQ1_ijfU2VU0Xn8YM60C2gbBpKsxo2BkpufPe9XhluHSXhYLbTLOvZ0Ua39kl2Bo3slqQx6lC6nfH-9P-zsYx-DZtQ4ZfMDZKW2p-pXb3Muv_bXC7tZpQzNGhQqsLosgGjdoVV8GqSxmhEUiGSGiZf9yV5CXPcDzm9v9fMzpmtIPG4/s0/Accessory044.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFik6f19ELmPVuDjQ1_ijfU2VU0Xn8YM60C2gbBpKsxo2BkpufPe9XhluHSXhYLbTLOvZ0Ua39kl2Bo3slqQx6lC6nfH-9P-zsYx-DZtQ4ZfMDZKW2p-pXb3Muv_bXC7tZpQzNGhQqsLosgGjdoVV8GqSxmhEUiGSGiZf9yV5CXPcDzm9v9fMzpmtIPG4/s640/Accessory044.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "Accessory044",
	"icon":"Accessory",
    "geometry": {
        "type": "Point",
		"coordinates": [1025, 1912]
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
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsWJBZ2WVnIIk_i9FrWv5X-FsSvL648IZ5u7H6TMPi51-Z51N3FwgpDaRJEiOkPDPp3IkXUA5FXDt_OuY1kbEmAKqLR2vca7SK7P3VvvZGltxDRkvna6_Kpd7sIQKKiFTSXJqPbk7F3X8IWH0UrZjBRYuW_dLTcQUyUHsQeRr0BdKs5pugFVEHx2M5Lyo/s1600/ChocoboGrass.png',
	shadowUrl: '',iconSize: [45, 45],iconAnchor: [20, 15],popupAnchor: [0, -15],tooltipAnchor: [20, 8]});
var ChocoboAbility1 = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9EZiMc9GfX8Uz_kWYO4pnO2QKuU4M8sKMZPzmlw8nJYf4QUEM6-CjnBK98wM4iGdo6_D3Y2G4vKgf5JLIeNlReV6tNn8Uy3-2ab8In2yD_UZx4886fD0ivFKdRkIU-G0SIgxjvdRXLoaqSEHGMyXvQPYfuMYQ-LZRtpB0AWwKdLWh8tdTYyRWw_K3fk/s1600/ChocoboIntel1.png',
	shadowUrl: '',iconSize: [35, 35],iconAnchor: [18, 15],popupAnchor: [-4, -15],tooltipAnchor: [10, -15]});
var ChocoboAbilityTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF01",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1740, 2440]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF02",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1730, 2350]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF03",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1568, 2344]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF04",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1437, 2304]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF05",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1611, 2219]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF06",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1713, 2228]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF07",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1771, 2121]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF08",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1860, 2129]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF09",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2020, 2260]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF10",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2197, 2211]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF11",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1965, 1973]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF12",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1949, 1863]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF13",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1217, 2403]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF14",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1018, 2374]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF15",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [846, 2383]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF16",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [969, 2551]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF17",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1120, 2495]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF18",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1043, 2688]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF19",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1137, 2725]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF20",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1224, 2882]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF21",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [972, 2967]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF22",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [826, 2853]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF23",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [621, 2850]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF24",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [472, 2878]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF25",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [341, 2792]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF26",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [395, 2602]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF27",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [581, 2567]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF28",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [691, 2641]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF29",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [748, 2536]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF30",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [581, 2453]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF31",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [488, 2342]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF32",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [594, 2326]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF33",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [461, 2218]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF34",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [277, 2254]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF35",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [270, 2073]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF36",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [304, 1910]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF37",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [514, 1816]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF38",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [742, 2042]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF39",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [877, 2285]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF40",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [687, 2368]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>前往<a class='goto' href='javascript:;' data-name='SummonCrystalF01' data-z='6'>召喚獸報告１：奧汀祠堂α</a>的中途。</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF41",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1548, 2382]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>前往<a class='goto' href='javascript:;' data-name='SummonCrystalF02' data-z='6'>召喚獸報告２：奧汀祠堂β</a>的中途。</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF42",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1270, 2770]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF43",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [1062, 2758]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>在南邊的<a class='goto' href='javascript:;' data-name='tips03' data-z='6'>海面用陸行鳥噴流</a>在空中接近岸邊後，再用「滑翔(按R2)」飛進去</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF44",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [818, 2740]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>由<a class='goto' href='javascript:;' data-name='LifespringF04' data-z='6'>探索報告４：離島的生命點</a>的洞窟水面往西</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF45",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [753, 2706]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips01' data-z='6'>岩洞入口</a>前往此處水面</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF46",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [492, 2792]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips01' data-z='6'>岩洞入口</a>前往此處水面</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF47",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [430, 2753]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips02' data-z='6'>水面使用陸行鳥噴流</a>前往此處</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF48",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [439, 1895]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>由此處西邊的<a class='goto' href='javascript:;' data-name='tips02' data-z='6'>水面使用陸行鳥噴流</a>前往此處</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF49",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [396, 1916]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥草</h1>\
	<p>需取得海陸行鳥才能取得</p>\
	<p>由此處北邊的<a class='goto' href='javascript:;' data-name='tips02' data-z='6'>水面使用陸行鳥噴流</a>前往內部，接著沿著水路走可抵達</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiF50",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [357, 2040]
    }
},
];




