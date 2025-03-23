

//通訊塔
var Tower = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGs7ppeLSTRlIwIeksXVbyESWeYSRh5AytcZIX3CELYK6MKOo0XPECmwNYkVmxVSoPrpJ7I1PsarhLwvejCVZ6h92dzXFcQgtAshJvRmxXhdcfeElbdjy76OvJ-2QtO_ijMkGLU4RPN2bvvIYSyUlcN-vFHBQvLCrADgcGWMdtSDbQAHHWMG-_uO-uUU/s1600/Tower.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var TowerTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>啟動報告１：太陽海岸港口的通訊塔</h1><p>建議等級：Lv.24</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告１：隱密洞穴的生命點</li>\
		<li>討伐報告１：海岸的暴徒</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerC01",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [3623, 933]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告２：貝殼海岸的通訊塔</h1><p>建議等級：Lv.24</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告１：南國的莫古利</li>\
		<li>探索報告２：飛索台的生命點</li>\
		<li>召喚獸報告１：亞歷山大祠堂α</li>\
		<li>討伐報告２：沙漠的吸血鬼</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerC02",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2890, 1167]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告３：沙漠的通訊塔</h1><p>建議等級：Lv29。(第九章才能抵達)</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告３：綠洲的生命點</li>\
		<li>討伐報告３：電擊的獨角鳥</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerC03",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [1441, 2334]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告４：水邊的通訊塔</h1><p>建議等級：Lv.29。(第九章才能抵達)</p>\
	<p>爬上西北邊的岩壁後，利用鉤繩跳到塔上</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告４：輸水管的生命點</li>\
		<li>召喚獸報告２：亞歷山大祠堂β</li>\
		<li>討伐報告４：沙漠清道夫</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerC04",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2376, 2813]
    }
},	

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告５：天然橋的通訊塔</h1><p>建議等級：Lv.30。(第九章才能抵達)</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告５：岩窟的生命點</li>\
		<li>召喚獸報告３：亞歷山大祠堂γ</li>\
		<li>討伐報告５：在沙中游泳的魚</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerC05",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2422, 2139]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告６：谷底的通訊塔</h1><p>建議等級：Lv.30。(第九章才能抵達)</p>\
	<p><a class='addpoint' href='javascript:;' data-name='tips92' data-z='5'>由北邊抵達通訊塔</a></p>\
	<p>爬上通訊塔後，<a class='goto' href='javascript:;' data-name='tips93' data-z='5'>勾住東北邊的這個鉤繩點後</a>，再往通訊塔方向跳回去。</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告２：沙漠的莫古利</li>\
		<li>探索報告６：岩石岬的生命點</li>\
		<li>討伐報告６：混合的野獸</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerC06",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2700, 3382]
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
    "properties": {"party": "<h1>陸行鳥報告：科雷爾地區的山陸行鳥</h1><p>建議等級：無</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='TowerB01' data-z='5'>啟動報告１：海風吹拂的通訊塔</a>後發現</p>\
	<p>或接受「支線委託：通往明天的一線生機」後發現</p>\
	<p>獎勵</p>\
	<ul>\
		<li>黃金羽毛×2</li>\
		<li>科雷爾地區分析點：10點</li>\
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
    "properties": {"party": "<h1>莫古利報告１：南國的莫古利</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店的流通等級＋１，增加可使用「莫古利獎牌」兌換的道具。</p>"},
	"levels": "1",
	"myid": "MoogleC01",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [2613, 825]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>莫古利報告２：沙漠的莫古利</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店的流通等級＋１，增加可使用「莫古利獎牌」兌換的道具。</p>"},
	"levels": "1",
	"myid": "MoogleC02",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [3073, 2977]
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
    "properties": {"party": "<h1>探索報告１：隱密洞穴的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringC01",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [3423, 1092]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告２：飛索台的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringC02",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [3071, 1079]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告３：綠洲的生命點</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringC03",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [1700, 2594]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告４：輸水管的生命點</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringC04",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2481, 2666]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告５：岩窟的生命點</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringC05",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2648, 2070]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告６：岩石岬的生命點</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringC06",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [3268, 2847]
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
    "properties": {"party": "<h1>召喚獸報告１：亞歷山大祠堂α</h1><p>建議等級：無。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：亞歷山大(等級+1)</li>\
		<li>弱化召喚獸戰鬥：亞歷山大(弱化虧損+1)</li>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalC01",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [2527, 1271]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告２：亞歷山大祠堂β</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p>由此處<a class='addpoint goto' href='javascript:;' data-name='tips91' data-z='5'>利用鉤繩前往</a></p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：亞歷山大(等級+1)</li>\
		<li>弱化召喚獸戰鬥：亞歷山大(弱化虧損+1)</li>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalC02",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [2094, 2938]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告３：亞歷山大祠堂γ</h1><p>建議等級：無。(第九章才能抵達)</p>\
	<p><a class='addpoint goto' href='javascript:;' data-name='tips97' data-z='5'>抵達召喚獸報告３的路線</a></p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：亞歷山大(等級+1)</li>\
		<li>弱化召喚獸戰鬥：亞歷山大(弱化虧損+1)</li>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalC03",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [2182, 2544]
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
    "properties": {"party": "<h1>挖掘報告１：控制閥工廠舊址</h1><p>需完成2項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationC01-1' data-z='6'>製作晶片：防具改造套組５</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationC01-2' data-z='6'>製作晶片：配件專家</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationC01-3' data-z='6'>製作晶片：鍋爐控制閥</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationC01",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [2899, 800]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>挖掘報告２：沙漠中的廢棄村莊</h1><p>需完成4項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationC02-1' data-z='6'>製作晶片：防具改造套組６</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationC02-2' data-z='6'>製作晶片：怨恨圍巾</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationC02-3' data-z='6'>製作晶片：捕鳥陷阱</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationC02",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [2707, 1778]
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
    "properties": {"party": "<h1>製作晶片：防具改造套組５</h1><p>「挖掘報告１：控制閥工廠舊址」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinumY9RAawQ45mLW37ZvOXEFulVjtNJT8aouKoCNENCtgyp1BWKowQAGt0IkYtCa41t-q0s0EokAJla3fS0PaaJTNa7ieZhIIso732R6M4VKVurIsA2A54x-HX2BGYUXyEZs7pBhv15_2z8bNNdXB6SexwcCHAtWHVCGX0B1f_wLsm9bEnMe_iIzsWBiM/s0/ExcavationC01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinumY9RAawQ45mLW37ZvOXEFulVjtNJT8aouKoCNENCtgyp1BWKowQAGt0IkYtCa41t-q0s0EokAJla3fS0PaaJTNa7ieZhIIso732R6M4VKVurIsA2A54x-HX2BGYUXyEZs7pBhv15_2z8bNNdXB6SexwcCHAtWHVCGX0B1f_wLsm9bEnMe_iIzsWBiM/s640/ExcavationC01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationC01-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2914, 802]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：配件專家</h1><p>「挖掘報告１：控制閥工廠舊址」挖掘點2</p>\
	<p>要由工廠外的階梯走上二樓</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLUEsklFQPzd1225oW5fONAnRZGguBFiwNIlAinWHvZz8-5KiVMSXDNuor7MOP_NG8ldwsp8h2H8GMO3s0jx5cKw_fAbwGI9rpNK9KzpYCLXYwoMI_mrdWsWv_-T5qg6huqktXEvPIT2jTvowsvMISdGvamPab8D7v5jpzJK_Gfo9pSUbcCc5xs7C1lwo/s0/ExcavationC01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLUEsklFQPzd1225oW5fONAnRZGguBFiwNIlAinWHvZz8-5KiVMSXDNuor7MOP_NG8ldwsp8h2H8GMO3s0jx5cKw_fAbwGI9rpNK9KzpYCLXYwoMI_mrdWsWv_-T5qg6huqktXEvPIT2jTvowsvMISdGvamPab8D7v5jpzJK_Gfo9pSUbcCc5xs7C1lwo/s640/ExcavationC01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationC01-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2903,759]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：鍋爐控制閥</h1><p>「挖掘報告１：控制閥工廠舊址」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj39vUzHxmUs5sWmUjfqS_Ae2GyFWA0vB33tcOcNMlBWLvJUKjEAqeSqsxuyIoEmBqDVrbZwFJQuD8mBPqXn6tOVF36BijRzNSxVPPfX2oEKw7dghxLrDqsmsyd7AgsnENYHRgx_VtMee-9qAk_zHKuVdQC_W_dDvPbBHTL9E0cEvQ2rd_Z2C6prAdbr3w/s0/ExcavationC01-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj39vUzHxmUs5sWmUjfqS_Ae2GyFWA0vB33tcOcNMlBWLvJUKjEAqeSqsxuyIoEmBqDVrbZwFJQuD8mBPqXn6tOVF36BijRzNSxVPPfX2oEKw7dghxLrDqsmsyd7AgsnENYHRgx_VtMee-9qAk_zHKuVdQC_W_dDvPbBHTL9E0cEvQ2rd_Z2C6prAdbr3w/s640/ExcavationC01-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationC01-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2945, 820]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組６</h1><p>「挖掘報告２：沙漠中的廢棄村莊」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIlBHg9-LfpM1JktJPLSRFLJfrVDbPEvHIBq9vH842OlQYlKjjX1qE5W4wghtZcs2jYGeZ-xqKY46gObbzSqougcKK40r_S_IAUvoWQODeQ51qlyhEOWL0p_6F7Yl8IOeKyvW5yDOP9NeemjuUNjC4tcuN4vXhfIdsfOo82drXuLZsgPNH6nmq0bBlCcU/s0/ExcavationC02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIlBHg9-LfpM1JktJPLSRFLJfrVDbPEvHIBq9vH842OlQYlKjjX1qE5W4wghtZcs2jYGeZ-xqKY46gObbzSqougcKK40r_S_IAUvoWQODeQ51qlyhEOWL0p_6F7Yl8IOeKyvW5yDOP9NeemjuUNjC4tcuN4vXhfIdsfOo82drXuLZsgPNH6nmq0bBlCcU/s640/ExcavationC02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationC02-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2727, 1838]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：怨恨圍巾</h1><p>「挖掘報告２：沙漠中的廢棄村莊」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJAFGyOUQvdwPCIXmwqeFhRfVV8ebrQmOIxjaLVCPNYkBJmz1F40yqKMyPuYi0MCGd3hwwc5vtRi5P6j49ARc4n3Q-IyAOc_wj_qekloul4y6LEllYtecD3EKwsijZktirEvv3C71oU7A7TXL6wNdAWL85txZ-w_uSy0JO4citKJBEk7IyaTyOcR1iPT4/s0/ExcavationC02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJAFGyOUQvdwPCIXmwqeFhRfVV8ebrQmOIxjaLVCPNYkBJmz1F40yqKMyPuYi0MCGd3hwwc5vtRi5P6j49ARc4n3Q-IyAOc_wj_qekloul4y6LEllYtecD3EKwsijZktirEvv3C71oU7A7TXL6wNdAWL85txZ-w_uSy0JO4citKJBEk7IyaTyOcR1iPT4/s640/ExcavationC02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationC02-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2710, 1711]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：捕鳥陷阱</h1><p>「挖掘報告２：沙漠中的廢棄村莊」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2K4vxIBP7a_nlKCSyQxp1_QQY2BhjYAJv_u-Rrz7-YpOwZOsOzsIJErnaoJwnuUPpQ0KA9tIvebxNPyLVOUlFS5i6Yj3Y53yXT4DQWGurkAgrpGFff1YgwpziYj-TNpJnF1pZZSYRo5-0EQSS4Y4lW1W2XZVOiJBdNmvR8EXVN_5OO9jkjcaNwaFGcis/s0/ExcavationC02-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2K4vxIBP7a_nlKCSyQxp1_QQY2BhjYAJv_u-Rrz7-YpOwZOsOzsIJErnaoJwnuUPpQ0KA9tIvebxNPyLVOUlFS5i6Yj3Y53yXT4DQWGurkAgrpGFff1YgwpziYj-TNpJnF1pZZSYRo5-0EQSS4Y4lW1W2XZVOiJBdNmvR8EXVN_5OO9jkjcaNwaFGcis/s640/ExcavationC02-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationC02-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2731, 1748]
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
    "properties": {"party": "<h1>討伐報告１：海岸的暴徒</h1><p>建議等級：Lv.25。</p>\
	<p>敵人：螺貝插頭怪×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy105' value=1 class='confirmed'/><span>螺貝插頭怪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。當牠躲進貝殼內，普通攻擊會被彈開，但以強大的能力攻擊可把牠趕出貝殼。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentC01",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [3235, 1218]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告２：沙灘的吸血鬼</h1><p>建議等級：Lv.26。</p>\
	<p>敵人：稀墨綠海馬×4。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy044' value=1 class='confirmed'/><span>稀墨綠海馬</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以弱點屬性攻擊或閃避「吸血」，可使其陷入HEAT狀態。「迴旋快攻」後及成功吸血後會轉換為迴旋模式。在迴旋模式中會難以造成傷害，但能以強力的能力攻擊打斷，使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentC02",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2731, 1529]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告３：電擊的獨角鳥</h1><p>建議等級：Lv.30。(第九章才能抵達)</p>\
	<p>敵人：劍吻鳥×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy109' value=1 class='confirmed'/><span>劍吻鳥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>操作角色沒有陷入昏眩狀態</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentC03",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [1051, 2713]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告４：沙漠清道夫</h1><p>建議等級：Lv.31。(第九章才能抵達)</p>\
	<p>敵人：沙丘蠕蟲×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy121' value=1 class='confirmed'/><span>沙丘蠕蟲</span></label></p>\
	<p style='color: #0000FF'>攻略情報：透過弱點屬性攻擊造成一定傷害可使其陷入HEAT狀態。在「吞食」發動時以弱點屬性進行攻擊，可使其陷入較長時間的HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>在不被敵人吞噬的狀態下打倒敵人</li>\
		<li>在限制時間內討伐敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentC04",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2680, 2372]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告５：在沙中游泳的魚</h1><p>建議等級：Lv.30。(第九章才能抵達)</p>\
	<p><a class='addpoint' href='javascript:;' data-name='tips95' data-z='5'>抵達討伐報告５的路線</a></p>\
	<p>敵人：飛翔開膛手×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy124' value=1 class='confirmed'/><span>飛翔開膛手</span></label></p>\
	<p style='color: #0000FF'>攻略情報：來到地面上時，造成一定傷害可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentC05",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2044, 2073]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告６：混合的野獸</h1><p>建議等級：Lv.31。(第九章才能抵達)</p>\
	<p><a class='addpoint goto' href='javascript:;' data-name='tips98' data-z='5'>抵達討伐報告６的路線</a></p>\
	<p>敵人：銀色奇美拉×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy126' value=1 class='confirmed'/><span>銀色奇美拉</span></label></p>\
	<p style='color: #0000FF'>攻略情報：發動「水花光束」後，會陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>以弱點屬性攻擊敵人</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentC06",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2899, 3364]
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
    "properties": {"party": "<h1>隱藏報告：仇恨的王冠</h1><p>建議等級：Lv.31。</p><p>需完成6項「探索報告」(生命點)才會發現</p>\
	<p>敵人：提燈怪王×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy052' value=1 class='confirmed'/><span>提燈怪王</span></label></p>\
	<p style='color: #0000FF'>攻略情報：趁攻擊落空之際造成一定傷害，可使其陷入HEAT狀態。陷入HEAT狀態時，可將落地的「美麗王冠」作為目標「偷竊」。使用特殊招式，使「無法戰鬥」狀態無法恢復。</p>\
	<p>攻略請參考「<a href='https://sniperex168.blogspot.com/2024/05/FF7RE2-QUEST7-1.html' target='_blank'>支線委託：快馬加鞭的海濱強尼</a>」。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
	</ul>"},
	"levels": "1",
	"myid": "SecretCombatC01",
	"icon":"SecretCombat",
    "geometry": {
        "type": "Point",
		"coordinates": [2802, 2569]
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
    "properties": {"party": "<h1>調查報告１：壹號小型魔晄爐</h1>\
	<p>建議等級：Lv.30。(第九章才會發現)</p>\
	<p>完成科雷爾沙漠的任意「通訊塔」(啟動報告３～６)後可發現。</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Corel-Protorelics.html' target='_blank'>科雷爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得科雷爾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告１：祕寶的守護者」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicC01",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1574, 2050]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告２：貳號小型魔晄爐</h1>\
	<p>建議等級：Lv.31。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicC01' data-z='5'>調查報告１：祕寶的守護者</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Corel-Protorelics.html' target='_blank'>科雷爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得科雷爾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告２：基德Ｇ的考驗」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicC02",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [2465, 2465]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告３：參號小型魔晄爐</h1><p>建議等級：Lv.45。</p><p>進行到第十二章尾聲，且完成<a class='goto' href='javascript:;' data-name='ProtorelicC02' data-z='5'>調查報告２：基德Ｇ的考驗</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Corel-Protorelics.html' target='_blank'>科雷爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得科雷爾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告３：混亂的爭奪戰」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicC03",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [1337, 2485]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告４：傳說中的劍豪</h1><p>建議等級：Lv.46。</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicC03' data-z='5'>調查報告３：混亂的爭奪戰</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/06/FF7RE2-Corel-Protorelics.html' target='_blank'>科雷爾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>科雷爾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得科雷爾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告４：傳說中的劍豪」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicC04",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [2504, 3245]
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
	"myid": "ChocoboStopsC01",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2889, 880]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC02",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2626, 1025]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC03",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2632, 1369]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC04",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1455, 2121]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC05",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1367, 2672]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC06",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [1979, 1964]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC07",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2833, 2166]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsC08",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [3177, 3078]
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
    "properties": {"party": "<h1>掘洞兔埋藏：星球恩惠×10</h1>"},
	"levels": "1",
	"myid": "BuriedItemC01",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2580, 934]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemC02",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3151, 1015]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：平衡車</h1>\
	<p>「PLAY ART：平衡車」為收藏品</p>\
	<p>此為「PLAY ART：平衡車」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「魔獸脊骨×5」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemC03",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2827, 812]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：平衡車</h1>\
	<p>「PLAY ART：平衡車」為收藏品</p>\
	<p>此為「PLAY ART：平衡車」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石×1」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemC04",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2600, 1411]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：平衡車</h1>\
	<p>「PLAY ART：平衡車」為收藏品</p>\
	<p>此為「PLAY ART：平衡車」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「魔獸脊骨×5」。</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemC05",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2839, 1171]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemC06",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3667, 876]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紫水晶×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemC07",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2947, 1190]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemC08",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2694, 1000]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：鋅礦×10</h1>"},
	"levels": "1",
	"myid": "BuriedItemC09",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2880, 1346]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：秘銀礦石×1</h1>"},
	"levels": "1",
	"myid": "BuriedItemC10",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3142, 872]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：砂金×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemC11",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3161, 1248]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：4500GIL</h1>"},
	"levels": "1",
	"myid": "BuriedItemC12",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2916, 970]
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
    "properties": {"party": "<h1>海風的港灣倉庫</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC01-1' data-z='6'>寶箱1：火焰雞尾酒×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC01-2' data-z='6'>寶箱2：配件「頭冠」</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC01-3' data-z='6'>寶箱3：加速藥×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC01",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3748, 818]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>日出　山崖</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC02-1' data-z='6'>寶箱1：乙太×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC02-2' data-z='6'>寶箱2：綠寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC02-3' data-z='6'>寶箱3：2000 GIL</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC02",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3247, 785]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>愛之岬的棧橋</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC03-1' data-z='6'>寶箱1：砂金×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC03-2' data-z='6'>寶箱2：紅寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC03-3' data-z='6'>寶箱3：配件「療癒頸鍊」</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC03",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3088, 1342]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>日暮　山丘</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC04-1' data-z='6'>寶箱1：鳳凰尾巴×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC04-2' data-z='6'>寶箱2：綜合高級治療劑×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC04",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2763, 1265]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>熱沙飛揚的小型魔晄爐</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC05-1' data-z='6'>寶箱1：紅寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC05-2' data-z='6'>寶箱2：徹甲手榴彈×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC05",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2165, 1762]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>日照儲藏庫</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC06-1' data-z='6'>寶箱1：秘銀礦石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC06-2' data-z='6'>寶箱2：配件「「寒氣」魔晶耳環」</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC06-3' data-z='6'>寶箱3：3000GIL</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC06",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1855, 2484]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>河床上的推積物</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC07-1' data-z='6'>寶箱1：綠寶石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC07-2' data-z='6'>寶箱2：砂金×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC07",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2637, 2725]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>滿是鏽蝕的儲水場</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC08-1' data-z='6'>寶箱1：莫古利獎牌×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC08-2' data-z='6'>寶箱2：噴霧高級治療劑×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC08-3' data-z='6'>寶箱3：防具「飛燕護臂」</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC08",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1852, 2171]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>沙海的輸水管</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC09-1' data-z='6'>寶箱1：乙太×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC09-2' data-z='6'>寶箱2：乙太洋蔥×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC09-3' data-z='6'>寶箱3：百萬治療劑×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC09",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2700, 2995]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>送貨人的走私卡車</h1>\
	<p><a class='addpoint' href='javascript:;' data-name='tips99' data-z='5'>抵達送貨人的走私卡車的路線</a></p>\
	<p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC10-1' data-z='6'>寶箱1：秘銀礦石×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC10-2' data-z='6'>寶箱2：加速藥×1</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationC10-3' data-z='6'>寶箱3：鳳凰尾巴×1</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationC10",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2830, 3135]
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
    "properties": {"party": "<h1>火焰雞尾酒×1</h1><p>「海風的港灣倉庫」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk4787OD207WiIEXwso2oL7Xy5NF50tyrTmnuMYPDt2MkwSGyYyupUJm4QTCDl2sQ5JtHReLbYihB9RqH_05v15ZnQMiPf36F7GGN8OhYNE-qy0VRlrAIVVD9UEs1nsgS1Mj8zi3ueCf3fkvBtCitiqWEzxR79kqLVmyiIqaivIg6djlJjQs23WXQAKZ4/s0/CacheLocationC01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk4787OD207WiIEXwso2oL7Xy5NF50tyrTmnuMYPDt2MkwSGyYyupUJm4QTCDl2sQ5JtHReLbYihB9RqH_05v15ZnQMiPf36F7GGN8OhYNE-qy0VRlrAIVVD9UEs1nsgS1Mj8zi3ueCf3fkvBtCitiqWEzxR79kqLVmyiIqaivIg6djlJjQs23WXQAKZ4/s640/CacheLocationC01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC01-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3783, 761]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>配件「頭冠」</h1><p>「海風的港灣倉庫」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV0ameG8sPpS3Me7o4NqOxF430yeojSvx_R7CWo4jpCA1cghrVbvIyF3oZhxP60WxMmfiPM19IEycUxn9SzYRQv1YucLbGaj5aAjI0F7_nEKMDPcRkxRFCPMC5-Fa6MD3vGNaJ04Q9CpWEtvSqvQB9qcRRXllIAmn656H1k9GzJMorOJZ_Hh4RUVo0wT8/s0/CacheLocationC01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV0ameG8sPpS3Me7o4NqOxF430yeojSvx_R7CWo4jpCA1cghrVbvIyF3oZhxP60WxMmfiPM19IEycUxn9SzYRQv1YucLbGaj5aAjI0F7_nEKMDPcRkxRFCPMC5-Fa6MD3vGNaJ04Q9CpWEtvSqvQB9qcRRXllIAmn656H1k9GzJMorOJZ_Hh4RUVo0wT8/s640/CacheLocationC01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC01-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3749, 764]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>加速藥×1</h1><p>「海風的港灣倉庫」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX2rwabjAdDVLmLN-jyB3QZ8WzX5gjVVYMJ5nMMwopuUSmUna8dKjDg3QmTbH0k3gL1sed7PiATnw9LYq8_MwZdxG3FswPm5JUDDDFljXn1vVYyzFmXRiz73vAq7UIgeza1h232cmFzn0_HmXGjOX1_K9nwE1yHSvEmSBXN6Ho3YEJPhxhTVZCcAW8wxo/s0/CacheLocationC01-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX2rwabjAdDVLmLN-jyB3QZ8WzX5gjVVYMJ5nMMwopuUSmUna8dKjDg3QmTbH0k3gL1sed7PiATnw9LYq8_MwZdxG3FswPm5JUDDDFljXn1vVYyzFmXRiz73vAq7UIgeza1h232cmFzn0_HmXGjOX1_K9nwE1yHSvEmSBXN6Ho3YEJPhxhTVZCcAW8wxo/s640/CacheLocationC01-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC01-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3782, 833]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太×1</h1><p>「日出　山崖」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhND4hBgJ_TMq5N92JiPJAx2cDuf8E9zeFpPe50wV8SkDwSsN5HafuMQKb3035-ibuOd-hvUpwuCNz5_6u2E3v5QXGdmRqiQh6aieHrszcumQVtIosS9Ch008k0QmBX9SnNAb5VDVWIIrXRI65Ay8zOQJ9iVLoWPZSVVkLSa1Jf1sozph1R_7vmvuzqmIk/s0/CacheLocationC02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhND4hBgJ_TMq5N92JiPJAx2cDuf8E9zeFpPe50wV8SkDwSsN5HafuMQKb3035-ibuOd-hvUpwuCNz5_6u2E3v5QXGdmRqiQh6aieHrszcumQVtIosS9Ch008k0QmBX9SnNAb5VDVWIIrXRI65Ay8zOQJ9iVLoWPZSVVkLSa1Jf1sozph1R_7vmvuzqmIk/s640/CacheLocationC02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC02-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3257, 829]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石×1</h1><p>「日出　山崖」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI_t9fKTiBDXBTSwzScUGysQoYT_ePIu5DeC-WQiXoY4JGZLdQcdXLCYluK5I5BS-jHTE1Z4LZcCko2iZX3uu1UjY8KkQTwlIMH5gv8rVwRP0DWJ6qBHMzlCFvcCfg9zBHMSz8N-GqAC91DVGP0dO_dNo8xsJ2aImNpFH9hRYRHEaCRIqRGv1jmKxpwuc/s0/CacheLocationC02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI_t9fKTiBDXBTSwzScUGysQoYT_ePIu5DeC-WQiXoY4JGZLdQcdXLCYluK5I5BS-jHTE1Z4LZcCko2iZX3uu1UjY8KkQTwlIMH5gv8rVwRP0DWJ6qBHMzlCFvcCfg9zBHMSz8N-GqAC91DVGP0dO_dNo8xsJ2aImNpFH9hRYRHEaCRIqRGv1jmKxpwuc/s640/CacheLocationC02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC02-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3280, 785]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>2000 GIL</h1><p>「日出　山崖」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRqwCAoogKX7NrgdYmCuMeudX1glN_2d3JpPeRO6Evh5yxja4nfEzdUvQmnbIkAnJiRW_Qyb1haPPRyD8aStAz3qd6cZ45fi8cMxyPRQ2KRCqAdOrSL3V4pvI9eeqba4Xw4xMkY3Sl-mWL9uwPAK4BLmrrsWQcOH9hdJ0kk5_XyfNdJUarBJRPsKFKTTE/s0/CacheLocationC02-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRqwCAoogKX7NrgdYmCuMeudX1glN_2d3JpPeRO6Evh5yxja4nfEzdUvQmnbIkAnJiRW_Qyb1haPPRyD8aStAz3qd6cZ45fi8cMxyPRQ2KRCqAdOrSL3V4pvI9eeqba4Xw4xMkY3Sl-mWL9uwPAK4BLmrrsWQcOH9hdJ0kk5_XyfNdJUarBJRPsKFKTTE/s640/CacheLocationC02-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC02-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3254, 755]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>砂金×2</h1><p>「愛之岬的棧橋」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIUxYzBIQwjcc-Dlh7TKbhr2G9pyAhylkhx7qo0Bce4XOKZw_0hITT2buYEtJzb8buQUFde6HCSnmZ0xRI3ddHQLx_0TLuzip9ZJyd5pUHWS0gTOGRnx950KhDCL2qlyz2jD8O4UUUlPDjOvoj0o6_22fcQFEB11yrVqKHPkOfTHD0RcuNAB_N-DoMMaE/s0/CacheLocationC03-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIUxYzBIQwjcc-Dlh7TKbhr2G9pyAhylkhx7qo0Bce4XOKZw_0hITT2buYEtJzb8buQUFde6HCSnmZ0xRI3ddHQLx_0TLuzip9ZJyd5pUHWS0gTOGRnx950KhDCL2qlyz2jD8O4UUUlPDjOvoj0o6_22fcQFEB11yrVqKHPkOfTHD0RcuNAB_N-DoMMaE/s640/CacheLocationC03-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC03-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3049, 1337]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石×1</h1><p>「愛之岬的棧橋」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2hKSXrdVT8bt9TMPPbq8vA-YYTBXrhocttHHyi2jOTtPqPxISjvTseMUxgFQi6ao9hTE3EX8BSO8ynbnhd7wITB8stmtRXcEMJt_J6MFZ8N897-YEioucBMhM68DYBoms7bA72WR88M0BqHKHsuxgH9CXIeMJCFjx47XO-rLbu1I2Nw1mu2-ptfwUAnM/s0/CacheLocationC03-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2hKSXrdVT8bt9TMPPbq8vA-YYTBXrhocttHHyi2jOTtPqPxISjvTseMUxgFQi6ao9hTE3EX8BSO8ynbnhd7wITB8stmtRXcEMJt_J6MFZ8N897-YEioucBMhM68DYBoms7bA72WR88M0BqHKHsuxgH9CXIeMJCFjx47XO-rLbu1I2Nw1mu2-ptfwUAnM/s640/CacheLocationC03-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC03-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3140, 1393]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>配件「療癒頸鍊」</h1><p>「愛之岬的棧橋」寶箱3</p>\
	<p>在棧橋下方，由寶箱2附近水面的缺口進入</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGj9Fw4oxulV8-oi4bp0qBWoaDzE_ml6xBrvtECSatyx85M6N6_kxMqKgCARTBPsd6xdsGJLf8Qnl6jyvOEGx5hXAQ5OnWfX-pMwZ2U7v16h9tf0NfQo-bgnndYdrzzLVjulQuIACl_8Vndo06PUfWdvg09kH8lqJHzUO6iwnUsbNru2jo_iQhkM3UCkU/s0/CacheLocationC03-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGj9Fw4oxulV8-oi4bp0qBWoaDzE_ml6xBrvtECSatyx85M6N6_kxMqKgCARTBPsd6xdsGJLf8Qnl6jyvOEGx5hXAQ5OnWfX-pMwZ2U7v16h9tf0NfQo-bgnndYdrzzLVjulQuIACl_8Vndo06PUfWdvg09kH8lqJHzUO6iwnUsbNru2jo_iQhkM3UCkU/s640/CacheLocationC03-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC03-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3098, 1315]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰尾巴×2</h1><p>「日暮　山丘」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheDp-HzYLp7VeWIxOtNxxqgcOOd5exI6rka7O1mvAFaBBGXGAddHL5w3-sHEITX5aBHmCSAHUouUFoJzdY0JOvRhEVJeEzE3lNdd4fyJLVXVVSBGN7DrfAsNF9vVcGFXo0yVYR2bIW-Lip8MBYyx-i8quLw86jNlABJ3tR3Hl-2-pIWVozKbncmNwjCYE/s0/CacheLocationC04-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheDp-HzYLp7VeWIxOtNxxqgcOOd5exI6rka7O1mvAFaBBGXGAddHL5w3-sHEITX5aBHmCSAHUouUFoJzdY0JOvRhEVJeEzE3lNdd4fyJLVXVVSBGN7DrfAsNF9vVcGFXo0yVYR2bIW-Lip8MBYyx-i8quLw86jNlABJ3tR3Hl-2-pIWVozKbncmNwjCYE/s640/CacheLocationC04-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC04-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2751, 1246]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綜合高級治療劑×1</h1><p>「日暮　山丘」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJck7GkVA8G0itGfUoja7lqoOGsBdtTZ1QFQkdbbP9ezPJNEl1KD52K3jYD-UHApLUTjETNBT8Aas4dN0YhzWNa1EGPAn7W6KxCRo05einiHzj8dWIKSCufzvmWpIDj8Vfgs-LEudZsQoWiuOscgh8AlKOkmL6Evjd4JehwB-VLmg-8MGrYBMoctAbqCQ/s0/CacheLocationC04-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJck7GkVA8G0itGfUoja7lqoOGsBdtTZ1QFQkdbbP9ezPJNEl1KD52K3jYD-UHApLUTjETNBT8Aas4dN0YhzWNa1EGPAn7W6KxCRo05einiHzj8dWIKSCufzvmWpIDj8Vfgs-LEudZsQoWiuOscgh8AlKOkmL6Evjd4JehwB-VLmg-8MGrYBMoctAbqCQ/s640/CacheLocationC04-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC04-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2783, 1238]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石×1</h1><p>「熱沙飛揚的小型魔晄爐」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl-Ydgq1E0y5CtyNyCJM80gszix-9d8R3U0viEtH6nqKlMO8PMRvl8U08DCq4xlzR0FpHsVTr8wdSZP-KBBp0-cXBLptgmrq4pE5MpofHu2UCtjnTx8EWMsz_28dd3gRMSOpkU3ENb7U4sGlvbXtHDlI4nspIzm_ng8jrmksLlUMLA8wA0BuuqLkHxufI/s0/CacheLocationC05-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl-Ydgq1E0y5CtyNyCJM80gszix-9d8R3U0viEtH6nqKlMO8PMRvl8U08DCq4xlzR0FpHsVTr8wdSZP-KBBp0-cXBLptgmrq4pE5MpofHu2UCtjnTx8EWMsz_28dd3gRMSOpkU3ENb7U4sGlvbXtHDlI4nspIzm_ng8jrmksLlUMLA8wA0BuuqLkHxufI/s640/CacheLocationC05-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC05-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2179, 1727]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>徹甲手榴彈×3</h1><p>「熱沙飛揚的小型魔晄爐」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMBjWdcRTy8J2vbJuY5iNd126Ob6yY8ZYY3GaXRVnkKXHIPWXCxYtxlzJaj2S6srj9mSEpIr-F3GzyVDThH3g0sfhBvbq4X4oz5tcNCg6tfJvYzGWTodcyIbuJZXRYXQ8EFKgWNRXq3JigLieQgSsNTKgZRDifLsPZHC8JqIxkkCmi4oc45NHNxVGWeA4/s0/CacheLocationC05-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMBjWdcRTy8J2vbJuY5iNd126Ob6yY8ZYY3GaXRVnkKXHIPWXCxYtxlzJaj2S6srj9mSEpIr-F3GzyVDThH3g0sfhBvbq4X4oz5tcNCg6tfJvYzGWTodcyIbuJZXRYXQ8EFKgWNRXq3JigLieQgSsNTKgZRDifLsPZHC8JqIxkkCmi4oc45NHNxVGWeA4/s640/CacheLocationC05-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC05-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2137, 1789]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>秘銀礦石×1</h1><p>「日照儲藏庫」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzZcKKr5vw73QodOSogKCQpMEdZO1VEjg-CTRJcs_covrKlFFjW-036pw0mOQrhFBWtlxJ9aZWF4A14blz6572prvJdVXDovftTUD8vP2yXwPX-z2NUfwyxmilMC1b9Y1hpuuWP3fOq6sMtQeRy-7B8TjtxBGd4_WJkFmbSkbVh45fTbzmojPwy3ybRZg/s0/CacheLocationC06-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzZcKKr5vw73QodOSogKCQpMEdZO1VEjg-CTRJcs_covrKlFFjW-036pw0mOQrhFBWtlxJ9aZWF4A14blz6572prvJdVXDovftTUD8vP2yXwPX-z2NUfwyxmilMC1b9Y1hpuuWP3fOq6sMtQeRy-7B8TjtxBGd4_WJkFmbSkbVh45fTbzmojPwy3ybRZg/s640/CacheLocationC06-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC06-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1871, 2532]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>「寒氣」魔晶耳環</h1><p>「日照儲藏庫」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8RpkLs4NrrY17TcAARKAlxXNLrWkQVsTVxMJcFlsJDGG-6QXiHe3uwNXVYiIIH88JaOEbSVhXbeYPqElGa91jvkPAO4TAzup3KBzpLmN5ETXim-mMTEEXPbv1CioOVbFussn5_aAhAT_K9z6P0nRznauoHlOxkHGv4QOLj4s1PAribMQgNv3lBRAGF_0/s0/CacheLocationC06-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8RpkLs4NrrY17TcAARKAlxXNLrWkQVsTVxMJcFlsJDGG-6QXiHe3uwNXVYiIIH88JaOEbSVhXbeYPqElGa91jvkPAO4TAzup3KBzpLmN5ETXim-mMTEEXPbv1CioOVbFussn5_aAhAT_K9z6P0nRznauoHlOxkHGv4QOLj4s1PAribMQgNv3lBRAGF_0/s640/CacheLocationC06-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC06-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1885, 2446]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>3000GIL</h1><p>「日照儲藏庫」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTaSW3breAYlzTPzx-xA2DbClQUUh2bNanbvDrsSwV_1WaeGrwAdLFNPMhAfj3S8T0RJCPIucMxAum0fyoj3Y3m_KKPRsTppzXLcjQ0W8gDS-zrM7dAn91S5pn_1v9-6hCt-cFlx49NIYK3U6dGqf8wn6CVPzU5Bm8HO-Jun8qYoL7vZDlZD4KWI3rGEk/s0/CacheLocationC06-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTaSW3breAYlzTPzx-xA2DbClQUUh2bNanbvDrsSwV_1WaeGrwAdLFNPMhAfj3S8T0RJCPIucMxAum0fyoj3Y3m_KKPRsTppzXLcjQ0W8gDS-zrM7dAn91S5pn_1v9-6hCt-cFlx49NIYK3U6dGqf8wn6CVPzU5Bm8HO-Jun8qYoL7vZDlZD4KWI3rGEk/s640/CacheLocationC06-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC06-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1818, 2454]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石×1</h1><p>「河床上的推積物」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiffTpDP7WqhXz0__6Y7Q7-aNNRDKTQmqV2U4OoWMmojRqr7knwhhvJgS6Yf7z_irKtl2MnnGwo7pGoyCSU5zg_JFbRe6bGzNsACByM_mWxKa0xE_kcwqs0L2WNZQQBoy8ttO6-Nla53RIhbeO3PEbqckDyeZMT5_KAyQXwPQ7NqoLm5Nnr7WDaqEHcIgg/s0/CacheLocationC07-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiffTpDP7WqhXz0__6Y7Q7-aNNRDKTQmqV2U4OoWMmojRqr7knwhhvJgS6Yf7z_irKtl2MnnGwo7pGoyCSU5zg_JFbRe6bGzNsACByM_mWxKa0xE_kcwqs0L2WNZQQBoy8ttO6-Nla53RIhbeO3PEbqckDyeZMT5_KAyQXwPQ7NqoLm5Nnr7WDaqEHcIgg/s640/CacheLocationC07-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC07-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2620, 2687]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>砂金×3</h1><p>「河床上的推積物」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOGvuvL6D1dNlIMFd5lGYb9ULJ8xzvVI4tSAIOu5b4ne_c2zYJIa91UQ4XGKXhNfS-MvcdAY4brlwsdCcNci0kuqYUFwJM9s60HEUmMebsZe3RllL4p3hStewqKbggmRkDKlltA9xaadngrkmevdnuHUK11kX1yqW6BIkEb3xKt9ac08jT6lXXggTVx-4/s0/CacheLocationC07-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOGvuvL6D1dNlIMFd5lGYb9ULJ8xzvVI4tSAIOu5b4ne_c2zYJIa91UQ4XGKXhNfS-MvcdAY4brlwsdCcNci0kuqYUFwJM9s60HEUmMebsZe3RllL4p3hStewqKbggmRkDKlltA9xaadngrkmevdnuHUK11kX1yqW6BIkEb3xKt9ac08jT6lXXggTVx-4/s640/CacheLocationC07-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC07-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2664, 2741]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>莫古利獎牌×3</h1><p>「滿是鏽蝕的儲水場」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk-rWWoYKUajM_R6aLQIWg1ZOpzxF8GtMW5vY4jUXkgGNgKj_8jwaotoFEdJpiaLQ_dMZ5DKWRZz3sa27NW2acJj4Y4EhRo5VmhoGl039xNsdOGD0w_GOqOk8pKkeM5A85tm0QaWmpxjvmUZPmQLrMa7bJ1gmjDvNZS7_f5GYEfYwel_H9kmBWt2ZYux4/s0/CacheLocationC08-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk-rWWoYKUajM_R6aLQIWg1ZOpzxF8GtMW5vY4jUXkgGNgKj_8jwaotoFEdJpiaLQ_dMZ5DKWRZz3sa27NW2acJj4Y4EhRo5VmhoGl039xNsdOGD0w_GOqOk8pKkeM5A85tm0QaWmpxjvmUZPmQLrMa7bJ1gmjDvNZS7_f5GYEfYwel_H9kmBWt2ZYux4/s640/CacheLocationC08-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC08-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1848, 2208]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>噴霧高級治療劑×1</h1><p>「滿是鏽蝕的儲水場」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ7ftXa3-8-LAlHQIEPh2WyJOwF0L86A7hMfgl4ILZ1z52JkrsWPTVQaDG01ZYO1UtipCI5zgk8AVv6jL6-YEnJ_7YzRHNVvjS09rUrFnq2aftmdNGqBHU_qB9utqAzhJ9r7aKeenVKGsV52C3bqyGH3m2eFxrmtH1bQgA4vtydN93DWXfhxiepvCD3DM/s0/CacheLocationC08-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ7ftXa3-8-LAlHQIEPh2WyJOwF0L86A7hMfgl4ILZ1z52JkrsWPTVQaDG01ZYO1UtipCI5zgk8AVv6jL6-YEnJ_7YzRHNVvjS09rUrFnq2aftmdNGqBHU_qB9utqAzhJ9r7aKeenVKGsV52C3bqyGH3m2eFxrmtH1bQgA4vtydN93DWXfhxiepvCD3DM/s640/CacheLocationC08-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC08-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1879, 2199]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>防具「飛燕護臂」</h1><p>「滿是鏽蝕的儲水場」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX1QtIszPJ8BxS_UmIsaGd5pNdyI52LouTue_5QbdkZ3sKHtR_WMBJ9t4GbxInwdsSspjHUZN72BER1WeGpmHg_5uhsrXrmIqlFKGdjEIDaeWEgF1VttYPvBY3r2jiLRLicn2HNH7TuCIRX5XXuxDJB-YVVKrSrUpCT6pIWe7Of513lVWlOuAZSZqfXGQ/s0/CacheLocationC08-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX1QtIszPJ8BxS_UmIsaGd5pNdyI52LouTue_5QbdkZ3sKHtR_WMBJ9t4GbxInwdsSspjHUZN72BER1WeGpmHg_5uhsrXrmIqlFKGdjEIDaeWEgF1VttYPvBY3r2jiLRLicn2HNH7TuCIRX5XXuxDJB-YVVKrSrUpCT6pIWe7Of513lVWlOuAZSZqfXGQ/s640/CacheLocationC08-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC08-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [1856, 2115]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太×1</h1><p>「沙海的輸水管」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOJQetmW0q5z8uV48cSPfPZphhSAlKJRnUluDkEtih1A1Tp4sJTteCtHLA7N6VkL2Wi7xdNaiagcNc0ST6jO4wln9ZPRiLJeRBJ3SOByYmsejHPgUCzAzH9Ugjg6Vp7NVWFnvI0p-MZFFvrZKlW-AjJ4sPIKlBzfKUN-nf5zm768br_R6opgp0n9JAqZQ/s0/CacheLocationC09-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOJQetmW0q5z8uV48cSPfPZphhSAlKJRnUluDkEtih1A1Tp4sJTteCtHLA7N6VkL2Wi7xdNaiagcNc0ST6jO4wln9ZPRiLJeRBJ3SOByYmsejHPgUCzAzH9Ugjg6Vp7NVWFnvI0p-MZFFvrZKlW-AjJ4sPIKlBzfKUN-nf5zm768br_R6opgp0n9JAqZQ/s640/CacheLocationC09-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC09-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2625, 2965]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太洋蔥×1</h1><p>「沙海的輸水管」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimeJa19zcB-y62vcobbe0M7GJJkKXWT_jEONV0WKBhrB0NtK0Qn4czJPkLAexGCmB1WX4OogZCe7KQT6exWKUzWIxFSm3G2RnzvKgUGC2qubhENU7iS69gH2iqp1I5NJ3M9qWrcBGNWk2N92WnjjuMdVGoKsU8x1nBNfQ45Ua14lwcMizS0Lpf3FatUY8/s0/CacheLocationC09-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimeJa19zcB-y62vcobbe0M7GJJkKXWT_jEONV0WKBhrB0NtK0Qn4czJPkLAexGCmB1WX4OogZCe7KQT6exWKUzWIxFSm3G2RnzvKgUGC2qubhENU7iS69gH2iqp1I5NJ3M9qWrcBGNWk2N92WnjjuMdVGoKsU8x1nBNfQ45Ua14lwcMizS0Lpf3FatUY8/s640/CacheLocationC09-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC09-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2695, 2959]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>百萬治療劑×1</h1><p>「沙海的輸水管」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRN2tcqrqrh03PpZh5dwietT8LgWfuNGj88NaBdxNI8nSPuWs6IoLd3GHsDzDzp19PSZUE88sCxWpN_ittqQLH_aeQNZCgtjZeI5CVL14Uv7fB-P2kxbykRAC3MYpMiBG8KjUqAK1qJBxzsVLjoY-jZIr3qjFl1Lb-Ttc-W0pbdiJ_NAhfiZG_4XlEAL4/s0/CacheLocationC09-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRN2tcqrqrh03PpZh5dwietT8LgWfuNGj88NaBdxNI8nSPuWs6IoLd3GHsDzDzp19PSZUE88sCxWpN_ittqQLH_aeQNZCgtjZeI5CVL14Uv7fB-P2kxbykRAC3MYpMiBG8KjUqAK1qJBxzsVLjoY-jZIr3qjFl1Lb-Ttc-W0pbdiJ_NAhfiZG_4XlEAL4/s640/CacheLocationC09-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC09-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2714, 2975]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>秘銀礦石×1</h1><p>「送貨人的走私卡車」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgzxKgcC4pq7J383O1AVP9zPEmgLqoGPpqmtOoiYYvufdXo_iMumY1TEwbmb5acf3h5z_CLdoB9GTMXLKZqBmxtiYWRk-sy4Oso2kjHN1De3tlAn1SZvkgoUTudJqJmckYt7bVqftKQT_Ty-AIvk2aiZkxXlzamdACQg_6lNjPJUVdJjaX6TjqSmQ9BRY/s0/CacheLocationC10-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgzxKgcC4pq7J383O1AVP9zPEmgLqoGPpqmtOoiYYvufdXo_iMumY1TEwbmb5acf3h5z_CLdoB9GTMXLKZqBmxtiYWRk-sy4Oso2kjHN1De3tlAn1SZvkgoUTudJqJmckYt7bVqftKQT_Ty-AIvk2aiZkxXlzamdACQg_6lNjPJUVdJjaX6TjqSmQ9BRY/s640/CacheLocationC10-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC10-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2852, 3122]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>加速藥×1</h1><p>「送貨人的走私卡車」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPud-hKpB6LWqYFqwAxjSV0D10Pll52GdraMVEnHhbMGo9D1y15-1D_GRSWc5umKqEowC7_Nm3ChL7vC5WUAPMxvqAv_H2wefgfXN8rm5Ml9iI5aTxYH7XrezYLuv-Rd8s-BZmonGTE-139xZa1S9aBn8OTGGet7AhG8eAwqqr87ByDb3nkjXxwC0WSxM/s0/CacheLocationC10-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPud-hKpB6LWqYFqwAxjSV0D10Pll52GdraMVEnHhbMGo9D1y15-1D_GRSWc5umKqEowC7_Nm3ChL7vC5WUAPMxvqAv_H2wefgfXN8rm5Ml9iI5aTxYH7XrezYLuv-Rd8s-BZmonGTE-139xZa1S9aBn8OTGGet7AhG8eAwqqr87ByDb3nkjXxwC0WSxM/s640/CacheLocationC10-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC10-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2821, 3097]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰尾巴×1</h1><p>「送貨人的走私卡車」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijS1hhyphenhyphenssBvGXyn8xkL1t2bynLfx0gvWC7d03FBeGJj5qHlqhyeS93Ac8McWLV05HCDiJwBnclojcsOqplRelLhs8KYeGyn6bwCuTP_OIpkwarzOEwQcPxJWMSuW6T2uU0GpQcJElZY0dcBUfwlojuORo0-lmWBaGz6i9hxzxm4rTwC1k9357dUNGLGj8/s0/CacheLocationC10-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijS1hhyphenhyphenssBvGXyn8xkL1t2bynLfx0gvWC7d03FBeGJj5qHlqhyeS93Ac8McWLV05HCDiJwBnclojcsOqplRelLhs8KYeGyn6bwCuTP_OIpkwarzOEwQcPxJWMSuW6T2uU0GpQcJElZY0dcBUfwlojuORo0-lmWBaGz6i9hxzxm4rTwC1k9357dUNGLGj8/s640/CacheLocationC10-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationC10-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2797, 3107]
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
    "properties": {"party": "<h1>敵人：針吻鳥×1、冠帽長矛水母×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy108' value=1 class='confirmed'/><span>針吻鳥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy106' value=1 class='confirmed'/><span>冠帽長矛水母</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC001",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3433, 806]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：海灘插頭怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy104' value=1 class='confirmed'/><span>海灘插頭怪</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC002",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3382, 973]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：針吻鳥×1、熱帶棘刺藍魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy108' value=1 class='confirmed'/><span>針吻鳥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy040' value=1 class='confirmed'/><span>熱帶棘刺藍魚</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC003",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3446, 924]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：冠帽長矛水母×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy106' value=1 class='confirmed'/><span>冠帽長矛水母</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC004",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3038, 1279]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC005",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2604, 1600]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：熱帶棘刺藍魚×2、普墨綠海馬×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy040' value=1 class='confirmed'/><span>熱帶棘刺藍魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy043' value=1 class='confirmed'/><span>普墨綠海馬</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC006",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2639, 1258]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：針吻鳥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy108' value=1 class='confirmed'/><span>針吻鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC007",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2574, 985]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：針吻鳥×1、熱帶棘刺藍魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy108' value=1 class='confirmed'/><span>針吻鳥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy040' value=1 class='confirmed'/><span>熱帶棘刺藍魚</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC008",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2704, 885]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：普墨綠海馬×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy043' value=1 class='confirmed'/><span>普墨綠海馬</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC009",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2783, 890]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：熱帶棘刺藍魚×2、冠帽長矛水母×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy040' value=1 class='confirmed'/><span>熱帶棘刺藍魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy106' value=1 class='confirmed'/><span>冠帽長矛水母</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC010",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3102, 978]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：海灘插頭怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy104' value=1 class='confirmed'/><span>海灘插頭怪</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC011",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2891, 1234]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC012",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [830, 2409]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇美拉×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC013",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [663, 2272]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×2、奇美拉×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC014",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [994, 2104]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC015",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1078, 2148]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：仙入掌怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC016",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [938, 2266]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇美拉×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC017",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1054, 2317]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC018",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1036, 2465]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：仙入掌怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC019",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1155, 2590]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、史賓賽飛魚×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC020",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1435, 2663]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×1、奇美拉×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC021",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1797, 2753]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×1、奇美拉×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC022",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1876, 2459]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC023",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1766, 2467]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、史賓賽飛魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC024",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1762, 2339]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC025",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1597, 2260]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×1、仙入掌怪×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC026",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1325, 2223]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：陸蠕蟲×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy120' value=1 class='confirmed'/><span>陸蠕蟲</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC027",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1536, 2453]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC028",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1800, 1896]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、奇美拉×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC029",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1761, 2181]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：仙入掌怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC030",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2033, 1874]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC031",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2481, 1907]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC032",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2582, 2130]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：仙入掌怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC033",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2069, 2124]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、仙入掌怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC034",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [1960, 2041]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、史賓賽飛魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC035",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2022, 2735]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC036",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2180, 2704]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、史賓賽飛魚×1、仙入掌怪×1</h1>\
	<p>是否已洞察：<br><label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC037",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2067, 2428]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×1、仙入掌怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC038",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2374, 2227]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇美拉×1、仙入掌怪×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC039",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2452, 2360]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC040",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2427, 2500]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：仙入掌怪×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC041",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2904, 2295]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：史賓賽飛魚×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC042",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2789, 2246]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇美拉×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC043",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2591, 2269]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：奇美拉×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy125' value=1 class='confirmed'/><span>奇美拉</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyC044",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2633, 3049]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：仙入掌怪×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC045",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2564, 2795]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC046",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2523, 3019]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：陸蠕蟲×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy120' value=1 class='confirmed'/><span>陸蠕蟲</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC047",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3043, 3194]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：振翅翼蜥×1、史賓賽飛魚×1、仙入掌怪×1</h1>\
	<p>是否已洞察：<br><label><input type='checkbox' data-cat='enemy' name='enemy038' value=1 class='confirmed'/><span>振翅翼蜥</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy123' value=1 class='confirmed'/><span>史賓賽飛魚</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy174' value=1 class='confirmed'/><span>仙入掌怪</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC048",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2950, 3424]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：針吻鳥×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy108' value=1 class='confirmed'/><span>針吻鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyC049",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3270, 1069]
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
    "properties": {"party": "<h1>支線委託敵人：槌鉗陸蟹×2</h1><p>建議等級：Lv.25。</p>\
	<p style='color: #FF0000'>於第七章「支線委託：在海岸約會」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy047' value=1 class='confirmed'/><span>槌鉗陸蟹</span></label></p>\
	<p style='color: #0000FF'>攻略情報：受到一定傷害後會進入防禦狀態，正面攻擊將會失效，可以用火屬性攻擊來解除該狀態。若一直不解除該狀態，牠將使用冰來強化自己。</p>\
	<p>攻略連結：請參考第七章「支線委託：在海岸約會」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC01",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [2973, 1355]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：棘刺藍魚指揮官等敵人</h1><p>建議等級：Lv.26。</p>\
	<p style='color: #FF0000'>於第七章「支線委託：在海灘練肌肉」限定出現(四場戰鬥皆有)</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy041' value=1 class='confirmed'/><span>棘刺藍魚指揮官</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。</p>\
	<p>攻略連結：請參考第七章「支線委託：在海灘練肌肉」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC02",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [2808, 955]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：巨型炸彈×1</h1><p>建議等級：Lv.30。</p>\
	<p style='color: #FF0000'>於第九章「支線委託：迷路的啾」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy058' value=1 class='confirmed'/><span>巨型炸彈</span></label></p>\
	<p style='color: #0000FF'>攻略情報：發動「加熱」時，以冰屬性對其造成一定傷害可使其陷入HEAT狀態。ＨＰ過少時會自爆並牽連周遭。</p>\
	<p>攻略連結：請參考第九章「支線委託：迷路的啾」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC03",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [1732, 2911]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：橘色仙入掌怪×4</h1><p>建議等級：Lv.30。</p>\
	<p style='color: #FF0000'>於第九章「調查報告１：壹號小型魔晄爐」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy175' value=1 class='confirmed'/><span>橘色仙入掌怪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以物理ＡＴＢ指令擊中，可使其陷入HEAT狀態。牠的移動速度飛快難以命中，但當牠陷入HEAT狀態和發動招式時，就能夠擊中牠。</p>\
	<p>攻略連結：請參考第九章「調查報告１：壹號小型魔晄爐」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC04",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [2190, 2090]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：黃金仙人掌怪×4</h1><p>建議等級：Lv.31。</p>\
	<p style='color: #FF0000'>於第九章「調查報告２：貳號小型魔晄爐」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy173' value=1 class='confirmed'/><span>黃金仙人掌怪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：以屬性魔法攻擊擊中，可使其陷入HEAT狀態。牠的移動速度飛快難以命中，但當牠陷入HEAT狀態和發動招式時，就能夠擊中牠。</p>\
	<p>攻略連結：請參考第九章「調查報告２：貳號小型魔晄爐」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC05",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [2789, 2182]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：海魔魚×2</h1><p>建議等級：Lv.44。</p>\
	<p style='color: #FF0000'>於第十二章「支線委託：來自海洋的惡魔」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy110' value=1 class='confirmed'/><span>海魔魚</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。以雷屬性攻擊造成一定傷害後，攻擊頻率會降低。</p>\
	<p>攻略連結：請參考第十二章「支線委託：來自海洋的惡魔」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC06",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [3421, 1271]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：仙人掌巨怪×1</h1><p>建議等級：Lv.45。</p>\
	<p style='color: #FF0000'>於第十二章「調查報告３：參號小型魔晄爐」限定出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy177' value=1 class='confirmed'/><span>仙人掌巨怪</span></label></p>\
	<p style='color: #0000FF'>攻略情報：「針雨」發動時會進入HEAT狀態，每次發動此技能便會提昇「千根針」的威力。</p>\
	<p>攻略連結：請參考第十二章「調查報告３：參號小型魔晄爐」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyC07",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [838, 2654]
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
    "properties": {"party": "<h1>太陽海岸</h1>\
	<p>預設解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationC01",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [3786, 510]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥出租商店</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationC02",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3800, 713]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>福爾斯海岸</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC03",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3301, 777]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>貝殼海岸</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC04",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2954, 1414]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>肌肉集訓場</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC05",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2756, 1081]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>沙漠界線</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC06",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2520, 1768]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>禁止游泳區域</h1>\
	<p>第十二章執行「支線委託：來自海洋的惡魔」中能才解鎖</p>"},
	"levels": "1",
	"myid": "LocationC07",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3487, 1344]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾山</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationC08",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1934, 721]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾山：科雷爾煤礦坑入口</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationC09",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1444, 704]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾煤礦坑</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationC10",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [986, 796]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>北科雷爾</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationC11",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [768, 1576]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>太陽海岸：海濱強尼</h1>\
	<p>完成「支線委託：快馬加鞭的海濱強尼」後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC12",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [3526, 520]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>北科雷爾：吊橋</h1>\
	<p>主線解鎖</p>"},
	"levels": "1",
	"myid": "LocationC13",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [727, 1486]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾南煤礦場舊址</h1>\
	<p>抵達後解鎖，有當地地圖，與「支線委託：黑斗篷綁架事件」相關</p>"},
	"levels": "1",
	"myid": "LocationC14",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [518, 1812]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>煤炭搬運電梯　北科雷爾連接口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC15",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [699, 1910]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>煤炭搬運電梯　沙漠連接口</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC16",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [706, 1927]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>金碟遊樂園</h1>\
	<p>主線解鎖，有當地地圖。</p>"},
	"levels": "1",
	"myid": "LocationC17",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1476, 1625]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>碟下區</h1>\
	<p>主線解鎖，有當地地圖。</p>"},
	"levels": "1",
	"myid": "LocationC18",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1296, 1840]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>沙漠牢獄</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC19",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [689, 2603]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>下等人的秘道</h1>\
	<p>主線解鎖。</p>"},
	"levels": "1",
	"myid": "LocationC20",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1271, 2086]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>越野車搭乘處</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC21",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1918, 1777]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾沙漠候車站舊址</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC22",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2063, 2638]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>巴姆普淺灘　科雷爾岸</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC23",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1617, 3358]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾機場</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationC24",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1108, 3298]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>仙人掌岩．壹</h1>\
	<p>接受「<a class='goto' href='javascript:;' data-name='ProtorelicC01' data-z='5'>調查報告１：祕寶的守護者</a>」，抵達後解鎖。</p>\
	<p><a class='addpoint' href='javascript:;' data-name='tips94' data-z='5'>抵達仙人掌岩．壹的路線</a></p>\
	"},
	"levels": "1",
	"myid": "LocationC25",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2189, 2067]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>仙人掌岩．貳</h1>\
	<p>接受「<a class='goto' href='javascript:;' data-name='ProtorelicC02' data-z='5'>調查報告２：基德Ｇ的考驗</a>」，抵達後解鎖。</p>\
	<p><a class='addpoint goto' href='javascript:;' data-name='tips96' data-z='6'>抵達仙人掌岩．貳的路線</a></p>\
	"},
	"levels": "1",
	"myid": "LocationC26",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2761, 2173]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>仙人掌岩．參</h1>\
	<p>接受「<a class='goto' href='javascript:;' data-name='ProtorelicC03' data-z='5'>調查報告３：混亂的爭奪戰</a>」，抵達後解鎖(第十二章)。</p>\
	<p><a class='addpoint goto' href='javascript:;' data-name='tips96a' data-z='6'>抵達仙人掌岩．參的路線</a></p>\
	"},
	"levels": "1",
	"myid": "LocationC27",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [830.5, 2693]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>仙人掌岩．肆</h1>\
	<p>接受「<a class='goto' href='javascript:;' data-name='ProtorelicC04' data-z='5'>調查報告４：傳說中的劍豪</a>」，抵達後解鎖(第十二章)。</p>"},
	"levels": "1",
	"myid": "LocationC28",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3174, 3223]
    }
},
];	
	
	
//提示
var tipsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
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
},
{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
	<p>爬上通訊塔後，勾住東北邊的這個鉤繩點後，再往通訊塔方向跳回去。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj06tyrPAIY32RWGHla4vj5Fm34xFn2J6muorm2R9Pf8fWZNJ3LBreNd6Mdm_klIBfNDL4vjhih1PujBO2CWf3bLztpvFvjJx4sOUOLR6boyY_QxNbPp9w3DYa-BUfkb9rk_e3cgbL-H2s0dpiirsYZTsJwGZVQGCv5ouKW4XJB4SQeHAVemLYl9qMnie0/s0/tip9-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj06tyrPAIY32RWGHla4vj5Fm34xFn2J6muorm2R9Pf8fWZNJ3LBreNd6Mdm_klIBfNDL4vjhih1PujBO2CWf3bLztpvFvjJx4sOUOLR6boyY_QxNbPp9w3DYa-BUfkb9rk_e3cgbL-H2s0dpiirsYZTsJwGZVQGCv5ouKW4XJB4SQeHAVemLYl9qMnie0/s640/tip9-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips93",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2710, 3326]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
	<p>利用鉤繩跳往仙人掌岩．貳。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb3bk6HE5IZ8eLs5KSgsuwzZsCt4mG7xi1EIu5bI7uTLsGP6LhiwaJsVcU3sAbeBaISAHNF9eEwLNEPYImRfgducyJ0pIHb3gqAWMkbUnr4D_4cQsnwjdWiTyWLct1nrErDhxxsCnf8RsJe5liBNtaCIJABrdhmWotAmWN1_bbzaqmRo5MdYER3y7SqLo/s0/Corel-Protorelics2-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb3bk6HE5IZ8eLs5KSgsuwzZsCt4mG7xi1EIu5bI7uTLsGP6LhiwaJsVcU3sAbeBaISAHNF9eEwLNEPYImRfgducyJ0pIHb3gqAWMkbUnr4D_4cQsnwjdWiTyWLct1nrErDhxxsCnf8RsJe5liBNtaCIJABrdhmWotAmWN1_bbzaqmRo5MdYER3y7SqLo/s640/Corel-Protorelics2-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips96",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2703, 2198]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>先爬上岩壁</h1>\
	<p>先爬上岩壁。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpfSovYmZegHHstOhhD8Rw8IMehIqYcWfVTlFBFVb9zn_vNRxBjhCoGq30hshDXuzZFbTnIgMm1793mF-gBwD3Q3Hk4N9QXPkFzDs9cvNNXW09aKNmMMqUBjnkpLM7tlnHGD_LkWxWOKPEzi8VCqLT7nkwGWuYm6jXUIFjZkjK1ds-JkT7lL9xPVZ7ITo/s0/Corel-Protorelics2-4.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpfSovYmZegHHstOhhD8Rw8IMehIqYcWfVTlFBFVb9zn_vNRxBjhCoGq30hshDXuzZFbTnIgMm1793mF-gBwD3Q3Hk4N9QXPkFzDs9cvNNXW09aKNmMMqUBjnkpLM7tlnHGD_LkWxWOKPEzi8VCqLT7nkwGWuYm6jXUIFjZkjK1ds-JkT7lL9xPVZ7ITo/s640/Corel-Protorelics2-4.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips96",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2674, 2212]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>走大洞旁的小路</h1>\
	<p>走大洞旁的小路會發現一條往下的路，沿著路走下去就可以抵達仙人掌岩。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhXclN1IrAE7Bu_eVkGKIeNSvy9b3SH8AaNsRM8oJy0yXuR7MWO8kdwUWgDHOSZrxVGCyU-SV7g9xAHT3pZJ63OHfu5pRsGA_mUKDbXTA1O-m8N4KNydlbDDV9jXfCnQ3XQaf2xXGhq5y-tjbBOd9_b3aEEemKfqCcI715tGyZXf9zyxWVqzhHmYCyXfA/s0/Corel-Protorelics3-4.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhXclN1IrAE7Bu_eVkGKIeNSvy9b3SH8AaNsRM8oJy0yXuR7MWO8kdwUWgDHOSZrxVGCyU-SV7g9xAHT3pZJ63OHfu5pRsGA_mUKDbXTA1O-m8N4KNydlbDDV9jXfCnQ3XQaf2xXGhq5y-tjbBOd9_b3aEEemKfqCcI715tGyZXf9zyxWVqzhHmYCyXfA/s640/Corel-Protorelics3-4.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips96a",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [842, 2600]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
	<p>利用鉤繩前進。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqFxlqlojUiI_yLVJfCGl2dmNaH0MB1r0Fh_JvUj3jdQTwduDJBx_uquRl1D4iFKSPrkQbcMN3x4FWDrgZHOOVWiBY1_XKKsDLkLLShEKR21Yl7mYZemNWEI6UMOTI31EINwovdI9bEUVxv_a0hbp-3P5nilQ9J-WFvMtTtNg_QKlCnwIFb4TfC1f8rzI/s0/tip9-7.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqFxlqlojUiI_yLVJfCGl2dmNaH0MB1r0Fh_JvUj3jdQTwduDJBx_uquRl1D4iFKSPrkQbcMN3x4FWDrgZHOOVWiBY1_XKKsDLkLLShEKR21Yl7mYZemNWEI6UMOTI31EINwovdI9bEUVxv_a0hbp-3P5nilQ9J-WFvMtTtNg_QKlCnwIFb4TfC1f8rzI/s640/tip9-7.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips97",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2125, 2379]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
	<p>利用鉤繩前進2。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGeugUkrsReXSCXl95lV3CH5cDSjIHaY5I_jz5UOSELUZE9Ohp6t8_4je7go39di8tFjvNvyv8hoTySCoafMEhNGPcXOIfPFuVJGacAnaSBHhj9hrdOoG-OX1sILhlZle1novUhAIS8rduEATHqXwJBDIxM52B_KmCTrR_t21cy_zfF7TZbCTlB3KsRus/s0/tip99.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGeugUkrsReXSCXl95lV3CH5cDSjIHaY5I_jz5UOSELUZE9Ohp6t8_4je7go39di8tFjvNvyv8hoTySCoafMEhNGPcXOIfPFuVJGacAnaSBHhj9hrdOoG-OX1sILhlZle1novUhAIS8rduEATHqXwJBDIxM52B_KmCTrR_t21cy_zfF7TZbCTlB3KsRus/s640/tip99.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips98",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2932, 3247]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>利用鉤繩前進</h1>\
	<p>利用鉤繩前進1。</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj80kmBvP1GDWvH7KnSU-fVgwFy6uhGt8jLPa5QvbnYBn-JqIP9MFTvXqi0dV53ALbuPe0LTioeL2AKZQ8RO_No2lvCzh-jLeLKEcOSWBqJUGSLsh7vCnZJQkjWUL6qMUUNlqmMbKwfIfADtTYPE2FC9skWV_apdqMwETSFsAvIXE8RRZQSLjM-MQsNtJc/s0/tip98.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj80kmBvP1GDWvH7KnSU-fVgwFy6uhGt8jLPa5QvbnYBn-JqIP9MFTvXqi0dV53ALbuPe0LTioeL2AKZQ8RO_No2lvCzh-jLeLKEcOSWBqJUGSLsh7vCnZJQkjWUL6qMUUNlqmMbKwfIfADtTYPE2FC9skWV_apdqMwETSFsAvIXE8RRZQSLjM-MQsNtJc/s640/tip98.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "tips98",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [2959, 3247]
    }
},
];
//路線
var PolygonTemp = [
{
    "type": "Feature",
    "properties": {
		"party": "<h1>召喚獸報告２的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "tips91",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2094, 2938],[2129, 2841],[2092, 2828],[2074, 2812],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>啟動報告６的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "tips92",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2697, 3345],[2683, 3239],[2617, 3101],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>仙人掌岩．壹的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "tips94",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2177, 2064],[2142, 2132],[1964, 2120],
			[1972, 1988],[2114, 1930],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>討伐報告５的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "tips95",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2057, 2062],[2100, 2062],[2097, 2131],
			[1964, 2120],[1972, 1988],[2114, 1930],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>仙人掌岩．貳的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "tips96",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2750, 2170],[2734, 2189],[2715, 2188],
			[2703, 2200],[2671, 2197],[2673, 2205],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>召喚獸報告３的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "tips97",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[1967, 2345],[2108, 2325],[2102, 2359],
			[2124, 2381],[2152, 2413],[2140, 2439],
			[2104, 2416],[2077, 2440],[2182, 2530],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>討伐報告６的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "tips98",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2909, 3342],[2941, 3296],[2932, 3249],
			[2983, 3240],[3003, 3214],[3009, 3170],
			[3058, 3141],[3156, 3065],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>藏寶點的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "tips99",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[2837, 3134],[2883, 3159],[2989, 3042],
			[3165, 3057],
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
    "properties": {"party": "<h1>科雷爾北部　拍攝點</h1>\
	<p>在太陽海岸與海濱強尼前方的「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photosC01",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [2990, 1275]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>科雷爾南部　拍攝點</h1>\
	<p>在碟下區與「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photosC02",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [1688, 1795]
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
},
{
    "type": "Feature",
    "properties": {"party": "<h1>破甲機砲</h1>\
	<p>沙漠牢獄前方的路邊明顯寶箱</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuj9zsbhdS01Xn4AZlKgIv7koDmX3BGEEWXRBmj6oqBJCtBj7xko09O2Hosfjn0na2WbgNGblSfbDDhrLDoAVUzP5DS2hLzsZLXg4p_6IqYhvQ0RpShfQtqG4hezRErhqOvQu8WBYXJ2UlCfrh7SPu_CPNX-BVBmS2Vsw3iBHx73feA2X2n6AvKMjTSos/s0/WeaponB003.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuj9zsbhdS01Xn4AZlKgIv7koDmX3BGEEWXRBmj6oqBJCtBj7xko09O2Hosfjn0na2WbgNGblSfbDDhrLDoAVUzP5DS2hLzsZLXg4p_6IqYhvQ0RpShfQtqG4hezRErhqOvQu8WBYXJ2UlCfrh7SPu_CPNX-BVBmS2Vsw3iBHx73feA2X2n6AvKMjTSos/s640/WeaponB003.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "WeaponB003",
	"icon":"WeaponB",
    "geometry": {
        "type": "Point",
		"coordinates": [765, 2481]
    }
},
];

//陸行鳥能力點
var ChocoboAbility = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9EZiMc9GfX8Uz_kWYO4pnO2QKuU4M8sKMZPzmlw8nJYf4QUEM6-CjnBK98wM4iGdo6_D3Y2G4vKgf5JLIeNlReV6tNn8Uy3-2ab8In2yD_UZx4886fD0ivFKdRkIU-G0SIgxjvdRXLoaqSEHGMyXvQPYfuMYQ-LZRtpB0AWwKdLWh8tdTYyRWw_K3fk/s1600/ChocoboIntel1.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [18, 15],popupAnchor: [-4, -15],tooltipAnchor: [10, -15]});
var ChocoboAbilityTemp = [ 
/*	
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB01",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2569, 1550]
    }
},*/

];

//空中滑索
var Zipline = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh183_CYMrnaGMz-zPOf5nPbT0w7J-qH5SpsQ2FZZk_h-Y_sdD4_utAMzhqbSgoxmUZCjVJ4yTeSSPT2E5smpdfx69875-QJ27bI_daJS6KQTtU4QKqVhcuigEfvvd2gTY_tMb6ijVEMcMjDhfsOd0wHtVkk15Arhp1tgsrIDsYHmjTmbgVTL-97Bp4XvA/s1600/Zipline.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 35],popupAnchor: [0, -35],tooltipAnchor: [20, -15]});
var ZiplineTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>第１空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline01",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [3483, 866]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第２空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline02",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [3383, 934]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第３空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline03",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [2835, 1237]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第４空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline04",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [2966, 908]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第５空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline05",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [3065, 1205]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第６空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline06",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [3057, 1157]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>第７空中滑索</h1>\
	<p>抵達後解鎖</p>\
	"},
	"levels": "1",
	"myid": "Zipline07",
	"icon":"Zipline",
    "geometry": {
        "type": "Point",
		"coordinates": [2719, 1178]
    }
},
{
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
},
];
