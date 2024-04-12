		//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwwouyRsh6EBn_uDYwmY9ljNkoGaWxNaysmvS8YjgfqCldVmdecYBl199oc1bY3NtxsvtP-vjwvfANqUClLqGTyb2JR6Vy0XqaIDImIcPV_bgg2DAOFEWwc_kZ9QgM4cifJF9SoVNLTyOlvrdQC_BbMY94I2-R9A7yAAgXNc-1gbKAaSidzWFD7X5Ssa8/s1600/MATERIA.png
		//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit1p1y1zpCO3nKPL7mvUUbmgzCOhy4kbFJfAm0BvGNOQ7oVbG7bc1szW2Qckq7LE4GBzBlzE0ehVbxXMrr34rHfoQ1iBioq5Fu8HwtZOsN_XoY9znN8kw-hUH7kH6EUH1N0vV4fNr6Acpu1Jq_6Z_7f2ZrOdv2UiMRHDZyz513vpz8DdhokL4zxGo2GHw/s1600/WeaponR.png
	
		//https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ1KGd5-jPFlvrqo2btPQ8xJw9G2JVA1Ui_VwGB5Pn3GGdARuGuyXO-0n6PSjy-WGPo5h55Ltx22mInTG_9yvCaG2_fcTpQOQhiXgby9hxk_hP0pT7N9SdQIXOSPBOU5hyECC4BiADe1atjRiiBrPZ4-pvLScReACbDEaZusK6neZ-09JzHxdn48P_gSM/s1600/treasure.png

//通訊塔
var Tower = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGs7ppeLSTRlIwIeksXVbyESWeYSRh5AytcZIX3CELYK6MKOo0XPECmwNYkVmxVSoPrpJ7I1PsarhLwvejCVZ6h92dzXFcQgtAshJvRmxXhdcfeElbdjy76OvJ-2QtO_ijMkGLU4RPN2bvvIYSyUlcN-vFHBQvLCrADgcGWMdtSDbQAHHWMG-_uO-uUU/s1600/Tower.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var TowerTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>啟動報告１：格林牧場的通訊塔</h1><p>建議等級：無(主線劇情解鎖)</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告：大草原的莫古利</li>\
		<li>探索報告１：岩蔭下的生命點</li>\
		<li>討伐報告１：暴食的毒老鼠</li>\
		<li>調查報告１：海岸的守望哨</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Tower001",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2978, 1952]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告２：東海岸的通訊塔</h1><p>建議等級：Lv.17</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>召喚獸報告１：泰坦祠堂α</li>\
		<li>討伐報告２：復仇的失控野獸</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Tower002",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [3576, 2188]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告３：濕地的通訊塔</h1><p>建議等級：Lv.17</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告２：濕地的生命點</li>\
		<li>探索報告３：沼澤地的生命點</li>\
		<li>召喚獸報告２：泰坦祠堂β</li>\
		<li>討伐報告３：巢穴的守衛</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Tower003",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2576, 2732]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告４：平原的通訊塔</h1><p>建議等級：Lv.18</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告４：平原的生命點</li>\
		<li>討伐報告４：歇斯底里的草原</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Tower004",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2372, 1461]
    }
},	

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告５：卡姆附近的通訊塔</h1><p>建議等級：Lv.18</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告５：魔晄輸送管的生命點</li>\
		<li>討伐報告５：挑食的美食戰士</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Tower005",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1485, 1137]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告６：荒野的通訊塔</h1><p>建議等級：Lv.18</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告６：洞窟的生命點</li>\
		<li>召喚獸報告３：泰坦祠堂γ</li>\
		<li>討伐報告６：荒野的電獸</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Tower006",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [835, 1711]
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
    "properties": {"party": "<h1>陸行鳥報告：格拉斯蘭的陸行鳥</h1><p>建議等級：無(於主線劇情捕捉)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>黃金羽毛×2</li>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ChocoboIntel001",
	"icon":"ChocoboIntel",
    "geometry": {
        "type": "Point",
		"coordinates": [2849, 2399]
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
    "properties": {"party": "<h1>莫古利報告：大草原的莫古利</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店開始營業，可使用「莫古利獎牌」兌換道具。</p>"},
	"levels": "1",
	"myid": "Moogle001",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [3244, 2218]
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
    "properties": {"party": "<h1>探索報告１：岩蔭下的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Lifespring001",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2868, 1690]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告２：濕地的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Lifespring002",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2193, 2722]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告３：沼澤地的生命點</h1><p>建議等級：無。</p>\
	<p><a class='goto' href='javascript:;' data-name='tips001' data-z='6'>由此處走樓梯走上建築物，並跟著胡胡鳥走</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Lifespring003",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1582, 2712]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告４：平原的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Lifespring004",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2074, 1466]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告５：魔晄輸送管的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Lifespring005",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1652, 1957]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告６：洞窟的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Lifespring006",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1154, 2019]
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
    "properties": {"party": "<h1>召喚獸報告１：泰坦祠堂α</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：泰坦(等級+1)</li>\
		<li>弱化召喚獸戰鬥：泰坦(弱化虧損+1)</li>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystal001",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [3672, 1793]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告２：泰坦祠堂β</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：泰坦(等級+1)</li>\
		<li>弱化召喚獸戰鬥：泰坦(弱化虧損+1)</li>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystal002",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [1748, 2650]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告３：泰坦祠堂γ</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：泰坦(等級+1)</li>\
		<li>弱化召喚獸戰鬥：泰坦(弱化虧損+1)</li>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystal003",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [713, 2076]
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
    "properties": {"party": "<h1>挖掘報告１：毀壞的聚落</h1><p>需完成2項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='Excavation001-1' data-z='6'>製作晶片：防具改造套組１</a></li>\
		<li><a class='goto' href='javascript:;' data-name='Excavation001-2' data-z='6'>製作晶片：風車齒輪</a></li>\
		<li><a class='goto' href='javascript:;' data-name='Excavation001-3' data-z='6'>製作晶片：坐墊</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Excavation001",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [2154, 1915]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>挖掘報告２：魔晄輸送管的廢棄地</h1><p>需完成6項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='Excavation002-1' data-z='6'>製作晶片：配件初階</a></li>\
		<li><a class='goto' href='javascript:;' data-name='Excavation002-2' data-z='6'>製作晶片：友愛耳環</a></li>\
		<li><a class='goto' href='javascript:;' data-name='Excavation002-3' data-z='6'>製作晶片：防具改造套組２</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "Excavation002",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [690, 590]
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
    "properties": {"party": "<h1>製作晶片：防具改造套組１</h1><p>「挖掘報告１：毀壞的聚落」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijLqB6jROCifYXbkPnAk49ZDi4-2AC_-d9mbCST0RTiJ06HUvh7GzK_2e0TXio9I0YajNCRq8QDEOJAWJQC4oR6urOHBA4RccNogYDFT6Z7F3WUd4vVUX-qZW1PZopAzw756-OufntUv_lx0HZ38vcOoFH4Aoq-7X2I9AS8kOR6GQObNXkr58IH_j-Vz8/s0/Excavation001-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijLqB6jROCifYXbkPnAk49ZDi4-2AC_-d9mbCST0RTiJ06HUvh7GzK_2e0TXio9I0YajNCRq8QDEOJAWJQC4oR6urOHBA4RccNogYDFT6Z7F3WUd4vVUX-qZW1PZopAzw756-OufntUv_lx0HZ38vcOoFH4Aoq-7X2I9AS8kOR6GQObNXkr58IH_j-Vz8/s640/Excavation001-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "Excavation001-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2202, 1906]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：風車齒輪</h1><p>「挖掘報告１：毀壞的聚落」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglxBT6rTGnR8DFEKMXkOtiRaF98GWTe45WS28BwF2mtmBbtEFl-D-jriJHO6p_hX72d3lFxTv-maLlURCiWns2puqKldUTlTD3HNPhwaYGQzOz3zBGbahZV1zWTrXHJJZ5cLVtzzE05X-JqmkQtp-QgpL7-ilb-07KkmW9zWyMmAP-tRTnysMRxXiabfM/s0/Excavation001-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglxBT6rTGnR8DFEKMXkOtiRaF98GWTe45WS28BwF2mtmBbtEFl-D-jriJHO6p_hX72d3lFxTv-maLlURCiWns2puqKldUTlTD3HNPhwaYGQzOz3zBGbahZV1zWTrXHJJZ5cLVtzzE05X-JqmkQtp-QgpL7-ilb-07KkmW9zWyMmAP-tRTnysMRxXiabfM/s640/Excavation001-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "Excavation001-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2138, 1856]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：坐墊</h1><p>「挖掘報告１：毀壞的聚落」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqpOHem9E30jzlgWFWrtSF_aylgMne6cnUnH41dzi4YBEv6PBx9Y3tC0bIIPVMF1mCpT5ThIKpN5DSsltkQbm9EwcJvKHbui8URYiNstGkJeORT3m-TKGbvFw3QNUOdOUS4zKlaOkQvuAvHkQc14_yNgnuroplj89WTl6K1HZnC4Lo_W9oeBoIalZsIB4/s0/Excavation001-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqpOHem9E30jzlgWFWrtSF_aylgMne6cnUnH41dzi4YBEv6PBx9Y3tC0bIIPVMF1mCpT5ThIKpN5DSsltkQbm9EwcJvKHbui8URYiNstGkJeORT3m-TKGbvFw3QNUOdOUS4zKlaOkQvuAvHkQc14_yNgnuroplj89WTl6K1HZnC4Lo_W9oeBoIalZsIB4/s640/Excavation001-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "Excavation001-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2151, 1973]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：配件初階</h1><p>「挖掘報告２：魔晄輸送管的廢棄地」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDYP7RCBJw-LO0WEhigCuXQiSvuKlEsgqGFWMeRl_TdTYzq4qXz8ewCQFmuqeR5tCYMFc8_073JBsPCEdmtdWK2p-Ix-l3676kc4v0ExeY2C-jiMvGYcY-GXzSWzLZlUX0SVGvPz9bnQfmzhj37snFgSU9J1WSfVUQLAquk1y_W41SXFoXy76ATclQfnc/s0/Excavation002-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDYP7RCBJw-LO0WEhigCuXQiSvuKlEsgqGFWMeRl_TdTYzq4qXz8ewCQFmuqeR5tCYMFc8_073JBsPCEdmtdWK2p-Ix-l3676kc4v0ExeY2C-jiMvGYcY-GXzSWzLZlUX0SVGvPz9bnQfmzhj37snFgSU9J1WSfVUQLAquk1y_W41SXFoXy76ATclQfnc/s640/Excavation002-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "Excavation002-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [665, 590]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：友愛耳環</h1><p>「挖掘報告２：魔晄輸送管的廢棄地」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMB1l_HI1aA9xLJCQPDsB9DjLs-gsUYE5nHBwl7BVTUVa8mfet_cz-5cdmbeYAFhY-rgoZYRCQkijgDpk_B84qg76AK2tZihFsVpkLIIg2PhcoNWAc30ZgP-iSFzHhNIExunDgZuFnZrRX6IgfO6HXjrnrBwR-4Xx-VXB-zagaS21jTjOqqEtcFHM65pM/s0/Excavation002-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMB1l_HI1aA9xLJCQPDsB9DjLs-gsUYE5nHBwl7BVTUVa8mfet_cz-5cdmbeYAFhY-rgoZYRCQkijgDpk_B84qg76AK2tZihFsVpkLIIg2PhcoNWAc30ZgP-iSFzHhNIExunDgZuFnZrRX6IgfO6HXjrnrBwR-4Xx-VXB-zagaS21jTjOqqEtcFHM65pM/s640/Excavation002-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "Excavation002-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [676, 547]
    }
},	
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組２</h1><p>「挖掘報告２：魔晄輸送管的廢棄地」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWnw1xCtCcBJzMaelrAb126UH07NOyP52-pp_AdT8Db139r12NbX_eAwtpJFahQpQgdNY06nmCDfZGW5oYpqTOFnWC_8m4yAfdAaVvOV23bXiG-xdPdZVnH0IGM8wAvHgwXkQ0xoKOBVdIdcpNrlVUoABN3INoUeRKtSLUXPGkvwZuqCYSbpWdQyzP8yw/s0/Excavation002-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWnw1xCtCcBJzMaelrAb126UH07NOyP52-pp_AdT8Db139r12NbX_eAwtpJFahQpQgdNY06nmCDfZGW5oYpqTOFnWC_8m4yAfdAaVvOV23bXiG-xdPdZVnH0IGM8wAvHgwXkQ0xoKOBVdIdcpNrlVUoABN3INoUeRKtSLUXPGkvwZuqCYSbpWdQyzP8yw/s640/Excavation002-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "Excavation002-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [725, 600]
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
    "properties": {"party": "<h1>討伐報告１：暴食的毒老鼠</h1><p>建議等級：Lv.17。</p>\
	<p>敵人：劇毒鼠×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy037' value=1 class='confirmed'/><span>劇毒鼠</span></label></p>\
	<p style='color: #0000FF'>攻略情報：透過弱點屬性攻擊，可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>操作角色沒有陷入中毒狀態</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignment001",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [3185, 1558]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告２：復仇的失控野獸</h1><p>建議等級：Lv.18。</p>\
	<p>敵人：怒灌象怪×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy078' value=1 class='confirmed'/><span>怒灌象怪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態，但同時也會進入失控模式，此時牠會加強防禦並反擊。隨著時間經過，其夥伴也會跟著進入失控模式。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignment002",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [3388, 2985]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告３：巢穴的守衛</h1><p>建議等級：Lv.18。</p>\
	<p>敵人：掘地鼠王×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy074' value=1 class='confirmed'/><span>掘地鼠王</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以弱點屬性的攻擊擊中或以強力攻擊使其退縮，將牠趕出巢穴可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>分別在冰狀態與火狀態下使目標陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>PS.以巢穴的顏色判斷敵人狀態，紅色為火狀態、藍色為冰狀態，兩種狀態都要分別HEAT一次</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignment003",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1681, 2405]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告４：歇斯底里的野草</h1><p>建議等級：Lv.18。</p>\
	<p>敵人：曼陀羅×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy076' value=1 class='confirmed'/><span>曼陀羅</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性的攻擊使其陷入HEAT狀態。造成一定傷害後會進入「打盹」狀態，但可用強力的能力攻擊打斷。</p>\
	<p>任務</p>\
	<ul>\
		<li>不讓敵人施展招式「打盹」</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignment004",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2245, 1471]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告５：挑食的美式戰士</h1><p>建議等級：Lv.19。</p>\
	<p>敵人：有翼列伏利恐鳥×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy054' value=1 class='confirmed'/><span>有翼列伏利恐鳥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性的攻擊使其陷入HEAT狀態。當牠手持岩石時，正面攻擊會被反彈，但若在投擲岩石前以強力的能力攻擊擊中，就會放開岩石並陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignment005",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1470, 1798]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告６：荒野的電獸</h1><p>建議等級：Lv.19。</p>\
	<p>敵人：電擊之牙×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy031' value=1 class='confirmed'/><span>電擊之牙</span></label></p>\
	<p style='color: #0000FF'>攻略情報：附加異常狀態可使其陷入HEAT狀態。</p>\
	<p>PS.「中毒」即為異常狀態，在赤紅ⅩⅢ身上預設有一顆</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignment006",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [600, 1568]
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
    "properties": {"party": "<h1>隱藏報告：太古翼龍</h1><p>建議等級：Lv.22。</p><p>需完成4項「探索報告」(生命點)才會發現</p>\
	<p>敵人：魁札爾科亞特爾×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy080' value=1 class='confirmed'/><span>魁札爾科亞特爾</span></label></p>\
	<p style='color: #0000FF'>攻略情報：透過弱點屬性攻擊造成一定傷害，可使其陷入HEAT狀態。往返空中與地面之際，必定施放強力招式。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
	</ul>"},
	"levels": "1",
	"myid": "SecretCombat001",
	"icon":"SecretCombat",
    "geometry": {
        "type": "Point",
		"coordinates": [1351, 2030]
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
    "properties": {"party": "<h1>調查報告１：海岸的守望哨</h1>\
	<p>建議等級：Lv.17。</p><p>完成<a class='goto' href='javascript:;' data-name='Tower001' data-z='5'>啟動報告１：格林牧場的通訊塔</a>才會發現</p>\
	<p><a href='/2024/04/FF7RE2-Grasslands-Protorelics.html' target='_blank'>格拉斯蘭地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告１：竊盜團的尋寶」</p>\
	"},
	"levels": "1",
	"myid": "Protorelic001",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [3663, 1358]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告２：魔晄輸送管的管理大樓</h1><p>建議等級：Lv.18。</p><p>完成<a class='goto' href='javascript:;' data-name='Protorelic001' data-z='5'>調查報告１：竊盜團的尋寶</a>才會發現</p>\
	<p><a href='/2024/04/FF7RE2-Grasslands-Protorelics.html' target='_blank'>格拉斯蘭地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告２：竊盜團的烤肉」</p>\
	"},
	"levels": "1",
	"myid": "Protorelic002",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1913, 1772]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告３：共和國時代的廢工廠</h1><p>建議等級：Lv.18。</p><p>完成<a class='goto' href='javascript:;' data-name='Protorelic002' data-z='5'>調查報告２：竊盜團的烤肉</a>才會發現</p>\
	<p><a href='/2024/04/FF7RE2-Grasslands-Protorelics.html' target='_blank'>格拉斯蘭地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告３：竊盜團的擾亂作戰」</p>\
	"},
	"levels": "1",
	"myid": "Protorelic003",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [866, 1382]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告４：竊盜團的基地</h1><p>建議等級：Lv.19。</p><p>完成<a class='goto' href='javascript:;' data-name='Protorelic003' data-z='5'>調查報告３：竊盜團的擾亂作戰</a>才會發現</p>\
	<p>PS. 完成「調查報告３」後才有鑰匙解鎖這個地區的上鎖門</p>\
	<p><a href='/2024/04/FF7RE2-Grasslands-Protorelics.html' target='_blank'>格拉斯蘭地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>格拉斯蘭地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>\
	<p>完成調查報告後，此項名稱變為「調查報告４：貝格公司的誕生」</p>\
	"},
	"levels": "1",
	"myid": "Protorelic004",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [2150, 851]
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
	"myid": "ChocoboStops001",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2421, 1543]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops002",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2580, 1818]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops003",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2537, 2298]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops004",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [3411, 1732]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops005",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [3594, 2765]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops006",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1696, 1653]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops007",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [928, 1476]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStops008",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [805, 1058]
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
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥</h1>"},
	"levels": "1",
	"myid": "BuriedItem001",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2390, 1193]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：鐵礦×10</h1>"},
	"levels": "1",
	"myid": "BuriedItem002",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2380, 1368]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：獸骨×5</h1>"},
	"levels": "1",
	"myid": "BuriedItem003",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2647, 1289]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem004",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2847, 1217]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星球恩賜×10</h1>"},
	"levels": "1",
	"myid": "BuriedItem005",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2183, 2288]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：休息點</h1><p>「PLAY ART：休息點」為收藏品</p>\
    <p>此為「PLAY ART：休息點」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「草地鈦×5」。</p>"},
	"levels": "1",
	"myid": "BuriedItem006",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3066, 2231]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem007",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3566, 1889]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：1131 Gil</h1>"},
	"levels": "1",
	"myid": "BuriedItem008",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3353, 2623]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：休息點</h1><p>「PLAY ART：休息點」為收藏品</p>\
    <p>此為「PLAY ART：休息點」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「草地鈦×5」。</p>"},
	"levels": "1",
	"myid": "BuriedItem009",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1846, 1437]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥</h1>"},
	"levels": "1",
	"myid": "BuriedItem010",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1792, 1656]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem011",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1374, 1223]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：手榴彈×5</h1>"},
	"levels": "1",
	"myid": "BuriedItem012",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1267, 1651]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：高級治療劑×3</h1>"},
	"levels": "1",
	"myid": "BuriedItem013",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [905, 1266]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥</h1>"},
	"levels": "1",
	"myid": "BuriedItem014",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [801, 1602]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem015",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [563, 1700]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem016",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [853, 1887]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>"},
	"levels": "1",
	"myid": "BuriedItem017",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1772, 2835]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem018",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2015, 3131]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem019",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2193, 1755]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem020",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3510, 2373]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItem021",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2467, 2652]
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
    "properties": {"party": "<h1>打穀場的廢棄水車</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation001-1' data-z='6'>寶箱1：噴霧治療劑</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation001-2' data-z='6'>寶箱2：高級治療劑</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation001",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2239, 1274]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>渡草高架橋</h1><p>收集範圍內寶箱後完成藏寶點。</p><p>寶箱都在高架橋上，可由這個地點的南邊地面找到攀爬點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation002-1' data-z='6'>寶箱1：鳳凰尾巴×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation002-2' data-z='6'>寶箱2：綠寶石</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation002-3' data-z='6'>寶箱3：治療劑×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation002",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2377, 1267]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>無名士兵們的車轍</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation003-1' data-z='6'>寶箱1：高級治療劑</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation003-2' data-z='6'>寶箱2：1000 Gil</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation003",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2325, 2034]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠風吹拂的風車山丘</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation004-1' data-z='6'>寶箱1：治療劑×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation004-2' data-z='6'>寶箱2：綜合治療劑</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation004-3' data-z='6'>寶箱3：乙太</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation004",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3345, 2195]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔晄輸送管分歧處</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation005-1' data-z='6'>寶箱1：草地鈦×5</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation005-2' data-z='6'>寶箱2：手榴彈×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation005",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1202, 1440]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>濃霧淨水場</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p><a class='goto' href='javascript:;' data-name='tips001' data-z='6'>由此處走樓梯走上建築物會抵達</a></p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation006-1' data-z='6'>寶箱1：獸人護腕</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation006-2' data-z='6'>寶箱2：高級治療劑</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation006-3' data-z='6'>寶箱3：乙太</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation006",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1624, 2810]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>濕地的沉淤處</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation007-1' data-z='6'>寶箱1：高級乙太</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocation007-2' data-z='6'>寶箱2：紅寶石</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocation007",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1637, 3010]
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
    "properties": {"party": "<h1>噴霧治療劑</h1><p>「打穀場的廢棄水車」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ8s7nJhHs0fDsS6fdoqBUt5Ntrfi9pH0GCrjesELZRAdUtjqEPWzmmJXuYQ18LO3GV5-qEI1yUsv04u0I3BaXUEuooo0IvT5fwnHw0WRfWm6-Zyw5KvP5OMdOEIRb66uwEK2SjFvR8bpB-x0lw7rDyFBOEc3NpxruupJyvwEOGXYjchS0YXfHqo7joq0/s0/CacheLocation001-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ8s7nJhHs0fDsS6fdoqBUt5Ntrfi9pH0GCrjesELZRAdUtjqEPWzmmJXuYQ18LO3GV5-qEI1yUsv04u0I3BaXUEuooo0IvT5fwnHw0WRfWm6-Zyw5KvP5OMdOEIRb66uwEK2SjFvR8bpB-x0lw7rDyFBOEc3NpxruupJyvwEOGXYjchS0YXfHqo7joq0/s640/CacheLocation001-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation001-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2230, 1284]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級治療劑</h1><p>「打穀場的廢棄水車」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBY1R0a7Ab9GjTuyC6ZpqeHRzLaydj15aTv5aKYifRIRLBFuGKoZwzAtzq2L0_e6FLG5NTO3YcKkElnroaB2gB4bjFbLnNJCG_I8rj1mAQ89RUkBIxVAo_tEV6tGwu-9b5Y9qZ0XIoho8w69hxbdYlYfJbelSrRpmplJsmGn-s0PFiYQs5IpO2gws9_c4/s0/CacheLocation001-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBY1R0a7Ab9GjTuyC6ZpqeHRzLaydj15aTv5aKYifRIRLBFuGKoZwzAtzq2L0_e6FLG5NTO3YcKkElnroaB2gB4bjFbLnNJCG_I8rj1mAQ89RUkBIxVAo_tEV6tGwu-9b5Y9qZ0XIoho8w69hxbdYlYfJbelSrRpmplJsmGn-s0PFiYQs5IpO2gws9_c4/s640/CacheLocation001-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation001-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2265, 1293]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰尾巴×3</h1><p>「渡草高架橋」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZeQDDwxFkZHTK7QSJPvSHz03lRT7RjUnoWewuKvD5zq2D1nsN108rwWgMtOAGOv2uAOkaKsimBK0DfGaDpUgRQisTW74RQpwACu3b7GKojCYlxDWsD495HP5p1jXC8QM1KYgHwImhGC5adinamtuvwBt-SbAu4cgQGiWh2MNMDittUoPf46ilIVLmn5c/s0/CacheLocation002-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZeQDDwxFkZHTK7QSJPvSHz03lRT7RjUnoWewuKvD5zq2D1nsN108rwWgMtOAGOv2uAOkaKsimBK0DfGaDpUgRQisTW74RQpwACu3b7GKojCYlxDWsD495HP5p1jXC8QM1KYgHwImhGC5adinamtuvwBt-SbAu4cgQGiWh2MNMDittUoPf46ilIVLmn5c/s640/CacheLocation002-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation002-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2358, 1269]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石</h1><p>「渡草高架橋」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhicyTcbrl6_zrNXWY9rUOIPBDJUMRf_yIYRuJBf936xxpe4KaoD1_gpzvxN-u9vaBesSZJob3MptAZzP8NB9RyHrjyykK5HRSd7vnbbvXfVkdV5dpy8UNebsFmp5Z128VNx1JtPvvk1woqhjXmDNozNfsAJ9Swc2FozBVFHONKu2Af6RnH_ORVp6uop1g/s0/CacheLocation002-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhicyTcbrl6_zrNXWY9rUOIPBDJUMRf_yIYRuJBf936xxpe4KaoD1_gpzvxN-u9vaBesSZJob3MptAZzP8NB9RyHrjyykK5HRSd7vnbbvXfVkdV5dpy8UNebsFmp5Z128VNx1JtPvvk1woqhjXmDNozNfsAJ9Swc2FozBVFHONKu2Af6RnH_ORVp6uop1g/s640/CacheLocation002-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation002-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2373, 1276]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>治療劑×3</h1><p>「渡草高架橋」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA97_defkDOK79jw_tB8Lk9cU_BQ5jTgayAUJWXO1RWJaBcFD4V80ah0HB_ULLSXJID9_dqvYDm1yk_mx2XgS8VW-APZlri1wi26uX5RVOkrA3S8GgNbvQFkFjMy7G_DeSnYbvZYpufjpEHJdGzWK5hZOJF1k9aTS0LG2dc1ryp4LMaZN_FbNtzoAk2lM/s0/CacheLocation002-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA97_defkDOK79jw_tB8Lk9cU_BQ5jTgayAUJWXO1RWJaBcFD4V80ah0HB_ULLSXJID9_dqvYDm1yk_mx2XgS8VW-APZlri1wi26uX5RVOkrA3S8GgNbvQFkFjMy7G_DeSnYbvZYpufjpEHJdGzWK5hZOJF1k9aTS0LG2dc1ryp4LMaZN_FbNtzoAk2lM/s640/CacheLocation002-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation002-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2400, 1282]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級治療劑</h1><p>「無名士兵們的車轍」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKleRMj0hMi9ptd3RB3Q4rRD0SLLGJ5JWN69gYJrSarSsq5SICpLqbqN0JbPHRnSOxqpRQ-SLMo-mOpZYnqV182fTBDZFrTuxBjvTBzgQIojWmnUHld3dhzZ0D79TuEvIa6ljYuPHa2YC-QSX2fWYXGeaBQ97VRz84URiHuPbbQH8Ikxc4_JqSMCIWCi4/s0/CacheLocation003-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKleRMj0hMi9ptd3RB3Q4rRD0SLLGJ5JWN69gYJrSarSsq5SICpLqbqN0JbPHRnSOxqpRQ-SLMo-mOpZYnqV182fTBDZFrTuxBjvTBzgQIojWmnUHld3dhzZ0D79TuEvIa6ljYuPHa2YC-QSX2fWYXGeaBQ97VRz84URiHuPbbQH8Ikxc4_JqSMCIWCi4/s640/CacheLocation003-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation003-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2315, 2015]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>1000 Gil</h1><p>「無名士兵們的車轍」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWyXTCq7y64KQ0aJkvdIQBZBY73gaYqpOEra-i4nq4m_y4corsuVwFBv6F4nfAmzS65J4hnnM60f8UaLyiP4QogeqOeZrgI08umnVQG9RctD0GOhGNDiajyln0DTVrKLk74KIoDriZ6YngJiSj3RLE_gJplzD74Tr9iwpwKjfg53J3vgSLe1YQUJPhUGs/s0/CacheLocation003-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWyXTCq7y64KQ0aJkvdIQBZBY73gaYqpOEra-i4nq4m_y4corsuVwFBv6F4nfAmzS65J4hnnM60f8UaLyiP4QogeqOeZrgI08umnVQG9RctD0GOhGNDiajyln0DTVrKLk74KIoDriZ6YngJiSj3RLE_gJplzD74Tr9iwpwKjfg53J3vgSLe1YQUJPhUGs/s640/CacheLocation003-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation003-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2311, 2039]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>治療劑×3</h1><p>「綠風吹拂的風車山丘」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4dPhgXc6qhjxI2lCMQWN-RMBrEP_QiP759zY0YVHAiq3qQpsBHOjXgm0gtR1GCS036lyV9FYF1hYw5FQtMHRX-A5UIba4y6_kqiHN0JbLLB3Ihb0JdjUkZQ0J3eFRBsY_M4WK-4LuJGeicRdB_o9glbu0h43xicWrPrdBu2si7_DOiMxlh3SzCE6JyJs/s0/CacheLocation004-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4dPhgXc6qhjxI2lCMQWN-RMBrEP_QiP759zY0YVHAiq3qQpsBHOjXgm0gtR1GCS036lyV9FYF1hYw5FQtMHRX-A5UIba4y6_kqiHN0JbLLB3Ihb0JdjUkZQ0J3eFRBsY_M4WK-4LuJGeicRdB_o9glbu0h43xicWrPrdBu2si7_DOiMxlh3SzCE6JyJs/s640/CacheLocation004-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation004-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3311, 2196]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綜合治療劑</h1><p>「綠風吹拂的風車山丘」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIufRpsTQv5gnAOj798aoUyqCeOl9jICRXZKopJqzNmHZVEmV6T5bxOqZsv3rYqrwodtVbnhP-8Ev_58OelDX_p5unNqHcBtz9ziBRpxgPZ-qBLCprmB7bRdoKS0-8qwbtiNbWEtbVGO1NtchaCTj2YtrVSKw7AX9zloe4Y62f1AmdYciQhgT5yaOMOaI/s0/CacheLocation004-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIufRpsTQv5gnAOj798aoUyqCeOl9jICRXZKopJqzNmHZVEmV6T5bxOqZsv3rYqrwodtVbnhP-8Ev_58OelDX_p5unNqHcBtz9ziBRpxgPZ-qBLCprmB7bRdoKS0-8qwbtiNbWEtbVGO1NtchaCTj2YtrVSKw7AX9zloe4Y62f1AmdYciQhgT5yaOMOaI/s640/CacheLocation004-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation004-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3332, 2236]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太</h1><p>「綠風吹拂的風車山丘」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUomQ-lTTmd_xV8hcnBcumec1reSuOFADy_qRQm5w-M56TBuyGavyJzh5S8EreXJPW-hkw3sV3zhucj3rkwznPPzLTXLq9ZxPDIZDb1CLS7_nI5rzJt7gf54ApZ_Df5FkkkOphV2qM5H8R0nTDwEjLVxnseW-AMMkXB6idtrOBicdYN3lHVXfMKsHtoGg/s0/CacheLocation004-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUomQ-lTTmd_xV8hcnBcumec1reSuOFADy_qRQm5w-M56TBuyGavyJzh5S8EreXJPW-hkw3sV3zhucj3rkwznPPzLTXLq9ZxPDIZDb1CLS7_nI5rzJt7gf54ApZ_Df5FkkkOphV2qM5H8R0nTDwEjLVxnseW-AMMkXB6idtrOBicdYN3lHVXfMKsHtoGg/s640/CacheLocation004-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation004-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3347, 2318]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>草地鈦×5</h1><p>「魔晄輸送管分歧處」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMATLqvHMinBZF6NQ-G4Oh7qMrP-FkcbYXUrjmno2I2EQcLNZcrOWf5voSlBMcfdsA5Zfex0S6e7qfiqZ7YsWZXjYrXRtpywPfCfxEZM0F0N7ELzBnWuknAG8-5sH-879A6ur2H9cxQBlf8B-j-hBxkR2-7cOfzT3-XTryQ_snWlnfyU1vQUwqN1OLrek/s0/CacheLocation005-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMATLqvHMinBZF6NQ-G4Oh7qMrP-FkcbYXUrjmno2I2EQcLNZcrOWf5voSlBMcfdsA5Zfex0S6e7qfiqZ7YsWZXjYrXRtpywPfCfxEZM0F0N7ELzBnWuknAG8-5sH-879A6ur2H9cxQBlf8B-j-hBxkR2-7cOfzT3-XTryQ_snWlnfyU1vQUwqN1OLrek/s640/CacheLocation005-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation005-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1247, 1421]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>手榴彈×3</h1><p>「魔晄輸送管分歧處」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9BKCmWSlhZ79TKkfcWdxtoYqeNCYV0qhwq-TgOJC7GQ83R2BaZSJmDAv4fyLPY8AMC5uZHVevxZJAcve25VG_HFWDhpHjcYjHrK25MH8aC3VbqgFfTAibAF3Jf-CNVWLoTxZsvNd1H9d5ZjBeziRXcTEHDZfjoW6uCLfggwA9p0cKOmN0aiQ5xuLTymU/s0/CacheLocation005-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9BKCmWSlhZ79TKkfcWdxtoYqeNCYV0qhwq-TgOJC7GQ83R2BaZSJmDAv4fyLPY8AMC5uZHVevxZJAcve25VG_HFWDhpHjcYjHrK25MH8aC3VbqgFfTAibAF3Jf-CNVWLoTxZsvNd1H9d5ZjBeziRXcTEHDZfjoW6uCLfggwA9p0cKOmN0aiQ5xuLTymU/s640/CacheLocation005-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation005-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1170, 1446]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>獸人護腕</h1><p>「濃霧淨水場」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqtSQovldcNGgw7rvBo1qJcehQlt_3hL48_QGAolOQd_uzMCUd2-lPRKpkEMfmZPvJeDt5lLSdvohvgY6CIemDYILqvTrRHx2WvjWuxdskStPw5jkxdwAtmewUV2Eb-UzldUTuAm-o8PPq3r10qEotsQRg9PocoE39KN4mtb0uSyr8Qy2bsPW3QcCoh3o/s0/CacheLocation006-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqtSQovldcNGgw7rvBo1qJcehQlt_3hL48_QGAolOQd_uzMCUd2-lPRKpkEMfmZPvJeDt5lLSdvohvgY6CIemDYILqvTrRHx2WvjWuxdskStPw5jkxdwAtmewUV2Eb-UzldUTuAm-o8PPq3r10qEotsQRg9PocoE39KN4mtb0uSyr8Qy2bsPW3QcCoh3o/s640/CacheLocation006-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation006-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1618, 2815]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級治療劑</h1><p>「濃霧淨水場」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUAks8xAK6tFBkbwCs-wM4sXAGyJhxkW9whTCiZTLxK2YlQANZV4HTKaNvqZgXUS2Fg_LyDrulScPIMLenEr8qnKtGs9FUippdJL6-M623Ozg5oAyEtafzKDu-JYXeo4NirGSmyj8kbYW9pu8S8EXLeC1TXoisdwPIR8e2tQqQ9EAoWEO4khHI97aRkfc/s0/CacheLocation006-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUAks8xAK6tFBkbwCs-wM4sXAGyJhxkW9whTCiZTLxK2YlQANZV4HTKaNvqZgXUS2Fg_LyDrulScPIMLenEr8qnKtGs9FUippdJL6-M623Ozg5oAyEtafzKDu-JYXeo4NirGSmyj8kbYW9pu8S8EXLeC1TXoisdwPIR8e2tQqQ9EAoWEO4khHI97aRkfc/s640/CacheLocation006-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation006-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1690, 2754]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太</h1><p>「濃霧淨水場」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl72_AbEq115Jj7sYiEbuEANznIzwmcvqSuSvrnidt-LcmI4vpPIxsXeBM__dOqqDx1-Y6i9HIM-YICb76RTOk_1Au1mdttKrTDj9DbdVqTds1P-VGCpJo12IB9ENeD9aFWcme9iqNh0V72VDTHsUjSG6qwUPSqf6qrNDLYpA_Sls-4msjV6vRyuw5I_4/s0/CacheLocation006-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl72_AbEq115Jj7sYiEbuEANznIzwmcvqSuSvrnidt-LcmI4vpPIxsXeBM__dOqqDx1-Y6i9HIM-YICb76RTOk_1Au1mdttKrTDj9DbdVqTds1P-VGCpJo12IB9ENeD9aFWcme9iqNh0V72VDTHsUjSG6qwUPSqf6qrNDLYpA_Sls-4msjV6vRyuw5I_4/s640/CacheLocation006-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation006-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1632, 2723]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級乙太</h1><p>「濕地的沉淤處」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj3T7UtTD0cQrnUXAmCjmHGth0D34VTgSv4ssrSmgqYTbFIEEM_GcCaKnJKMZvfpKjpTRZ_N5MQsa058kEcKh93KyJzf7Qa-UIlyorb33lCqjGtp9gaBg43ven9x37hKFWI360KUHCcZTcVIRqqTs8ey98n-Bt4olhDci-4a7NPeZUKb_zhdjcb4Mcivg/s0/CacheLocation007-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj3T7UtTD0cQrnUXAmCjmHGth0D34VTgSv4ssrSmgqYTbFIEEM_GcCaKnJKMZvfpKjpTRZ_N5MQsa058kEcKh93KyJzf7Qa-UIlyorb33lCqjGtp9gaBg43ven9x37hKFWI360KUHCcZTcVIRqqTs8ey98n-Bt4olhDci-4a7NPeZUKb_zhdjcb4Mcivg/s640/CacheLocation007-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation007-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1647, 2984]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石</h1><p>「濕地的沉淤處」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkEtC4SAoTKWPdgTIzM3kAmvF-SDyNtvmuYGmCUn8zJcQtlmPis4IPe1ip0H9pYhl3stlU0HgNIu8HdMDibgycH0e3Sbk8QYuqHjubjmCk1NTXRXhDHbS9nBB4nNtUw7ILHlGD5tBLXgz_sFqn9l5pvgLgOOewZQgXtXAK4_wbnzzua224Rml5Es-LWrA/s0/CacheLocation007-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkEtC4SAoTKWPdgTIzM3kAmvF-SDyNtvmuYGmCUn8zJcQtlmPis4IPe1ip0H9pYhl3stlU0HgNIu8HdMDibgycH0e3Sbk8QYuqHjubjmCk1NTXRXhDHbS9nBB4nNtUw7ILHlGD5tBLXgz_sFqn9l5pvgLgOOewZQgXtXAK4_wbnzzua224Rml5Es-LWrA/s640/CacheLocation007-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "CacheLocation007-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1617, 3020]
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
    "properties": {"party": "<h1>敵人：半獸人×1、曼德拉草×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy075' value=1 class='confirmed'/><span>曼德拉草</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA001",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2037, 1226]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×1、曼德拉草×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy075' value=1 class='confirmed'/><span>曼德拉草</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA002",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2193, 1138]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×1、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA003",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2572, 1432]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA004",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2351, 1083]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：灌頂象怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy077' value=1 class='confirmed'/><span>灌頂象怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA005",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3060, 1620]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×3、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA006",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2415, 1575]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：灌頂象怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy077' value=1 class='confirmed'/><span>灌頂象怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA007",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2580, 1530]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA008",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3263, 1677]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA009",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2702, 1672]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA010",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2556, 1862]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：列伏利恐鳥×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy053' value=1 class='confirmed'/><span>列伏利恐鳥</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA011",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [984, 1520]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：灌頂象怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy077' value=1 class='confirmed'/><span>灌頂象怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA012",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2168, 1648]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：灌頂象怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy077' value=1 class='confirmed'/><span>灌頂象怪</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA013",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2361, 1849]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、曼德拉草×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy075' value=1 class='confirmed'/><span>曼德拉草</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA014",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1653, 1690]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、生化鼠×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy036' value=1 class='confirmed'/><span>生化鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA015",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1231, 1536]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、生化鼠×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy036' value=1 class='confirmed'/><span>生化鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA016",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3434, 2728]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：卡姆之牙×1、生化鼠×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy036' value=1 class='confirmed'/><span>生化鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA017",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3327, 2406]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：列伏利恐鳥×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy053' value=1 class='confirmed'/><span>列伏利恐鳥</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA018",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3092, 2392]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：卡姆之牙×1、生化鼠×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy036' value=1 class='confirmed'/><span>生化鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA019",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2702, 2610]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA020",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2278, 2540]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：列伏利恐鳥×1、半獸人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy053' value=1 class='confirmed'/><span>列伏利恐鳥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA021",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2496, 2548]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA022",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2576, 2311]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：掘地鼠×1、生化鼠×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy073' value=1 class='confirmed'/><span>掘地鼠</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy036' value=1 class='confirmed'/><span>生化鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA023",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2674, 2232]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：卡姆之牙×1、生化鼠×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy036' value=1 class='confirmed'/><span>生化鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA024",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2700, 2312]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×1、掘地鼠×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy073' value=1 class='confirmed'/><span>掘地鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA025",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1509, 1577]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：卡姆之牙×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA026",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1900, 1577]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA027",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3612, 1642]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：卡姆之牙×1、列伏利恐鳥×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy053' value=1 class='confirmed'/><span>列伏利恐鳥</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA028",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3617, 2843]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：掘地鼠×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy073' value=1 class='confirmed'/><span>掘地鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA029",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2660, 1945]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×1、掘地鼠×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy073' value=1 class='confirmed'/><span>掘地鼠</span></label></p>\
	"},
	"levels": "1",
	"myid": "EnemyA030",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1965, 2835]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2、卡姆之牙×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyA031",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1647, 2825]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyA032",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1041, 1315]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：卡姆之牙×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy030' value=1 class='confirmed'/><span>卡姆之牙</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyA033",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1185, 1325]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：半獸人×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy091' value=1 class='confirmed'/><span>半獸人</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyA034",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2056, 968]
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
    "properties": {"party": "<h1>主線BOSS：米德加爾特巨蛇</h1><p>建議等級：Lv.19。</p>\
	<p style='color: #FF0000'>第二章BOSS，限定於主線出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy209' value=1 class='confirmed'/><span>米德加爾特巨蛇</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以弱點屬性的攻擊擊中或以強力攻擊使其退縮，將牠趕出巢穴可使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第二章的章節攻略</p>\
	<p>獎勵</p>\
	<ul>\
		<li>隊伍經驗值：50EXP</li>\
		<li>163EXP、10AP</li>\
		<li>650GIL</li>\
	</ul>"},
	"levels": "1",
	"myid": "SSEnemy001",
	"icon":"EnemyMAIN",
    "geometry": {
        "type": "Point",
		"coordinates": [1935, 3100]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：白色之牙</h1><p>建議等級：Lv.18。</p>\
	<p style='color: #FF0000'>於第二章「支線委託：襲擊家畜的魔獸」限定出現</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy032' value=1 class='confirmed'/><span>白色之牙</span></label></p>\
	<p style='color: #0000FF'>攻略情報：隨著時間流逝累積能量就會變強。造成傷害或防禦攻擊會使能量減少，使其失去累積的能量會陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第二章<a href='https://sniperex168.blogspot.com/2024/03/FF7RE2-QUEST2-4.html' target='_blank'>「支線委託：襲擊家畜的魔獸」</a></p>\
	"},
	"levels": "1",
	"myid": "SSEnemy002",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [3374, 1567]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：毒帽妖</h1><p>建議等級：Lv.18。</p>\
	<p style='color: #FF0000'>於第二章「支線委託：卡姆的生命線」限定出現</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy113' value=1 class='confirmed'/><span>毒帽妖</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第二章<a href='https://sniperex168.blogspot.com/2024/03/FF7RE2-QUEST2-3.html' target='_blank'>「支線委託：卡姆的生命線」</a></p>\
"},
	"levels": "1",
	"myid": "SSEnemy003",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1082, 1525]
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
    "properties": {"party": "<h1>卡姆</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "Location001",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1750, 1316]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>奧利弗牧場</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "Location002",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2696, 1385]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>風車村</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "Location003",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2795, 1072]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>圖隆的卡片商店</h1>\
	<p>抵達後解鎖。商店需在執行「支線委託：被奪走的稀有卡片」時才會開始開店。</p>"},
	"levels": "1",
	"myid": "Location004",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2375, 1044]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>格林牧場</h1>\
	<p>主線解鎖。</p>"},
	"levels": "1",
	"myid": "Location005",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2901, 2043]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>濕地前碼頭舊址</h1>\
	<p>主線解鎖。</p>"},
	"levels": "1",
	"myid": "Location006",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2113, 2352]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>花朵綻放的高原</h1>\
	<p>抵達後解鎖。</p>"},
	"levels": "1",
	"myid": "Location007",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [621, 393]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>米德加檢查哨</h1>\
	<p>抵達後解鎖。</p>"},
	"levels": "1",
	"myid": "Location008",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [380, 1609]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>格拉斯蘭港</h1>\
	<p>抵達後解鎖。</p>"},
	"levels": "1",
	"myid": "Location009",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [406, 1860]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔晄輸送管修理工坊</h1>\
	<p>抵達後解鎖。</p>"},
	"levels": "1",
	"myid": "Location010",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1185, 1845]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>秘銀礦山</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "Location011",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1581, 3383]
    }
},
];	
	
	
//提示
var tipsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>由此處走樓梯走上建築物</h1>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTDHP5DGptbjsoou6hn9CdUc_QaCZJVpyQ_71Tno83ZMW0LSCNqJaoFCYwRltg9L-mF4fPtFtgwcrdRlpjaWDA3Ib98iG_zl8wrBObX9eGq7_gYCMQCkMtDwE8aH4nzlvwIhr1sAt1YbNZb1ialr5aI5Pc6EI6Lf5_5ofqwQKe5zb99M4akFs3mBh2yYQ/s0/tips001.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTDHP5DGptbjsoou6hn9CdUc_QaCZJVpyQ_71Tno83ZMW0LSCNqJaoFCYwRltg9L-mF4fPtFtgwcrdRlpjaWDA3Ib98iG_zl8wrBObX9eGq7_gYCMQCkMtDwE8aH4nzlvwIhr1sAt1YbNZb1ialr5aI5Pc6EI6Lf5_5ofqwQKe5zb99M4akFs3mBh2yYQ/s640/tips001.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>"},
	"levels": "1",
	"myid": "tips001",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [1711, 2800]
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
    "properties": {"party": "<h1>格拉斯蘭　拍攝點</h1>\
	<p>先與卡姆的「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photos001",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [3157, 1893]
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
    "properties": {"party": "<h1>絲滑劍</h1>\
	<p>克勞德武器。在濕地的碼頭明顯處寶箱</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIRVgJTGGoTgTK4G6cIR3wfLWRCXbWNTm_88Pf6W6u5-P_quZ9hH4kbnYmz3W6KhIooYWSuHsgPEuSOddTm87p4FFwim8CnUdm36cWimLhWSOElmzw_8aZjeGRSdn0M4CpgewAOzXA5U_zHulsYmfTXrQCf68cid0BlX1aAO3Ucil1nCjnR85dnNLGP3A/s0/WeaponC001.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIRVgJTGGoTgTK4G6cIR3wfLWRCXbWNTm_88Pf6W6u5-P_quZ9hH4kbnYmz3W6KhIooYWSuHsgPEuSOddTm87p4FFwim8CnUdm36cWimLhWSOElmzw_8aZjeGRSdn0M4CpgewAOzXA5U_zHulsYmfTXrQCf68cid0BlX1aAO3Ucil1nCjnR85dnNLGP3A/s640/WeaponC001.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "WeaponC001",
	"icon":"WeaponC",
    "geometry": {
        "type": "Point",
		"coordinates": [2112, 2335]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>永恆長杖</h1>\
	<p>艾莉絲武器。在格林牧場內，可琳的商店右手邊的寶箱。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiry59zaXg_GsX0-pi3nk5oxXUytAlffaDRNMTu32BW9PMf7IQ9T0wmIY8ALpYXMHhGaO429r8xJ7wlDIZTuS8xlSq-6eD9M35iT1DdDxc3gvSXraV0Fh9cJb32jw3wtpja0JfMoiHDPuQMuRxRenFi6RYOFehCyzK6gX5sItc5lxnFv1Jqfg91DVTCH_o/s0/WeaponA001.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiry59zaXg_GsX0-pi3nk5oxXUytAlffaDRNMTu32BW9PMf7IQ9T0wmIY8ALpYXMHhGaO429r8xJ7wlDIZTuS8xlSq-6eD9M35iT1DdDxc3gvSXraV0Fh9cJb32jw3wtpja0JfMoiHDPuQMuRxRenFi6RYOFehCyzK6gX5sItc5lxnFv1Jqfg91DVTCH_o/s640/WeaponA001.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "WeaponA001",
	"icon":"WeaponA",
    "geometry": {
        "type": "Point",
		"coordinates": [2983, 2060]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>大口徑槍</h1>\
	<p>巴雷特武器。濕地地帶，看到黑斗篷後，黑斗篷所在地的寶箱。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOkBfbowTc2CrqghEbfyR9XyQuoB2ZIWzodbiMEnZG-pdve2PnFQlz84-y4jPaZ3N7-ovNgTGnIsOYnRZvwl4VHP-nUr_EXijEGIOQspRb8ilLkLy9lJ15H0uCWiL774jGZrpU1gHJSTQlHNlxyceynoO55vrFtumUMAEnRBQJMNhbDMrLZO8hQuEROS0/s0/WeaponB001.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOkBfbowTc2CrqghEbfyR9XyQuoB2ZIWzodbiMEnZG-pdve2PnFQlz84-y4jPaZ3N7-ovNgTGnIsOYnRZvwl4VHP-nUr_EXijEGIOQspRb8ilLkLy9lJ15H0uCWiL774jGZrpU1gHJSTQlHNlxyceynoO55vrFtumUMAEnRBQJMNhbDMrLZO8hQuEROS0/s640/WeaponB001.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "WeaponB001",
	"icon":"WeaponB",
    "geometry": {
        "type": "Point",
		"coordinates": [1987, 2851]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>強化精準防禦★</h1>\
	<p>魔晶石「強化精準防禦★」，由海邊游泳或騎陸行鳥到小島上</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg25uRlxM63U_fmeCdsNU3GdqIY87g7GWekUIhSN6dOU-HovVW94xwCccXDvL6TRFM4J0IgDhoMcV4PPxBs3lKaa0akUCfqLWbb683HKLgDR_4c-4Sjo3H2w-mCpq-br2D6SJNgE6bf4SAamwkFrywU_RT7pivRQd-bMo9hDlT2-hdSSJ_BETDbuV71cEc/s0/MATERIA010.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg25uRlxM63U_fmeCdsNU3GdqIY87g7GWekUIhSN6dOU-HovVW94xwCccXDvL6TRFM4J0IgDhoMcV4PPxBs3lKaa0akUCfqLWbb683HKLgDR_4c-4Sjo3H2w-mCpq-br2D6SJNgE6bf4SAamwkFrywU_RT7pivRQd-bMo9hDlT2-hdSSJ_BETDbuV71cEc/s640/MATERIA010.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "MATERIA010",
	"icon":"MATERIA",
    "geometry": {
        "type": "Point",
		"coordinates": [3294, 1325]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>道具高手★</h1>\
	<p>魔晶石「道具高手★」，在格拉斯蘭港的碼頭</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi90r3MZfOGZejmdUDRSHyOBd84CpCTtvMoszt9au9_l7RAgbwaRiMANpoD1mR8V4p3HhtAOqJ3KjPxpAYDnsSKCn0oc_vw73XcqZsAJNnShigQeD64Amgm1veC4Gc4LSnwejrBtG07Sj_Z3ZBXkTBZXfDTXsniUXk6tZuYyHI-60A2dIcgW7H0gD8jdhE/s0/MATERIA011.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi90r3MZfOGZejmdUDRSHyOBd84CpCTtvMoszt9au9_l7RAgbwaRiMANpoD1mR8V4p3HhtAOqJ3KjPxpAYDnsSKCn0oc_vw73XcqZsAJNnShigQeD64Amgm1veC4Gc4LSnwejrBtG07Sj_Z3ZBXkTBZXfDTXsniUXk6tZuYyHI-60A2dIcgW7H0gD8jdhE/s640/MATERIA011.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "MATERIA011",
	"icon":"MATERIA",
    "geometry": {
        "type": "Point",
		"coordinates": [385,1880]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥羽毛</h1>\
	<p>格林牧場的陸行鳥房後方，柵欄旁的寶箱內</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnXzeqhyzdrEOGtFrhG2KwRUb0xP3zaxcEkBmNx8aJSEaDA6oyMwlO9FrZ1rEVbydq87drnKerytFiHemY3DNw8ESowdbcvTzJcc00NZYaw72EYrQN4xFThF2_iUQZf6zje58CYKG-J9S2yB-cRf6frBszVixDUu2Wrw7AOFUcusDfJRNDHqT_UR9C0R4/s0/Accessory004.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnXzeqhyzdrEOGtFrhG2KwRUb0xP3zaxcEkBmNx8aJSEaDA6oyMwlO9FrZ1rEVbydq87drnKerytFiHemY3DNw8ESowdbcvTzJcc00NZYaw72EYrQN4xFThF2_iUQZf6zje58CYKG-J9S2yB-cRf6frBszVixDUu2Wrw7AOFUcusDfJRNDHqT_UR9C0R4/s640/Accessory004.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "Accessory004",
	"icon":"Accessory",
    "geometry": {
        "type": "Point",
		"coordinates": [3007,2072]
    }
},
];




