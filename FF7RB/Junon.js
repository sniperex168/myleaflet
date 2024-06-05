

//通訊塔
var Tower = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGs7ppeLSTRlIwIeksXVbyESWeYSRh5AytcZIX3CELYK6MKOo0XPECmwNYkVmxVSoPrpJ7I1PsarhLwvejCVZ6h92dzXFcQgtAshJvRmxXhdcfeElbdjy76OvJ-2QtO_ijMkGLU4RPN2bvvIYSyUlcN-vFHBQvLCrADgcGWMdtSDbQAHHWMG-_uO-uUU/s1600/Tower.png',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [20, 36],popupAnchor: [0, -40],tooltipAnchor: [20, -15]});
var TowerTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>啟動報告１：海風吹拂的通訊塔</h1><p>建議等級：Lv.20</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>陸行鳥報告：珠諾地區的山陸行鳥</li>\
		<li>探索報告１：陸行鳥峰的生命點</li>\
		<li>召喚獸報告１：鳳凰祠堂α</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerB01",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2314, 1690]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告２：穿孔岬的通訊塔</h1><p>建議等級：Lv.21</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>討伐報告１：響亮的候鳥叫聲</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerB02",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [2629, 2255]
    }
},
{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告３：砲台丘的通訊塔</h1><p>建議等級：Lv21</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>莫古利報告：漁夫莫古利</li>\
		<li>探索報告２：廢船的生命點</li>\
		<li>討伐報告２：風之賢者</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerB03",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [3215, 2035]
    }
},

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告４：山麓的通訊塔</h1><p>建議等級：Lv.22</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告３：寨岳的生命點</li>\
		<li>召喚獸報告２：鳳凰祠堂β</li>\
		<li>討伐報告３：熱情的膽小蜥蜴</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerB04",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [3950, 1852]
    }
},	

{
    "type": "Feature",
    "properties": {"party":"<h1>啟動報告５：望海岬的通訊塔</h1><p>建議等級：Lv.22</p>\
	<p>周邊地區</p>\
	<ul>\
		<li>探索報告４：燈塔岬的生命點</li>\
		<li>召喚獸報告３：鳳凰祠堂γ</li>\
		<li>討伐報告４：疾風獵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "TowerB05",
	"icon":"Tower",
    "geometry": {
        "type": "Point",
		"coordinates": [3906, 2446]
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
    "properties": {"party": "<h1>陸行鳥報告：珠諾地區的山陸行鳥</h1><p>建議等級：無</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='TowerB01' data-z='5'>啟動報告１：海風吹拂的通訊塔</a>後發現</p>\
	<p>或接受「支線委託：通往明天的一線生機」後發現</p>\
	<p>獎勵</p>\
	<ul>\
		<li>黃金羽毛×2</li>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ChocoboIntelB01",
	"icon":"ChocoboIntel",
    "geometry": {
        "type": "Point",
		"coordinates": [2077, 1830]
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
    "properties": {"party": "<h1>莫古利報告：漁夫莫古利</h1><p>建議等級：無。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul><p>完成小遊戲「<a href='/2024/04/FF7RE2-MiniGame-MoogleMischief.html' target='_blank'>莫古利追逐賽</a>」可讓莫古利商店的流通等級＋１，增加可使用「莫古利獎牌」兌換的道具。</p>"},
	"levels": "1",
	"myid": "MoogleB01",
	"icon":"Moogle",
    "geometry": {
        "type": "Point",
		"coordinates": [3841, 1865]
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
    "properties": {"party": "<h1>探索報告１：陸行鳥峰的生命點</h1><p>建議等級：無。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringB01",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [2725, 1480]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告２：廢船的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringB02",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [3321, 2446]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告３：寨岳的生命點</h1><p>建議等級：無。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringB03",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [4151, 1712]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>探索報告４：燈塔岬的生命點</h1><p>建議等級：無。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>建議由<a class='addpoint' href='javascript:;' data-name='test98' data-z='5'>「側珠諾：南門」</a>出去前往這裡。(需解鎖側珠諾)</p>\
	<p>或可由<a class='addpoint' href='javascript:;' data-name='test99' data-z='5'>「亡國的寶物庫」</a>經過海面與廢船過來。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "LifespringB04",
	"icon":"Lifespring",
    "geometry": {
        "type": "Point",
		"coordinates": [4007, 3317]
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
    "properties": {"party": "<h1>召喚獸報告１：鳳凰祠堂α</h1><p>建議等級：無。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：鳳凰(等級+1)</li>\
		<li>弱化召喚獸戰鬥：鳳凰(弱化虧損+1)</li>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalB01",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [2565, 1389]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告２：鳳凰祠堂β</h1><p>建議等級：無。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：鳳凰(等級+1)</li>\
		<li>弱化召喚獸戰鬥：鳳凰(弱化虧損+1)</li>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalB02",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [4279, 1350]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>召喚獸報告３：鳳凰祠堂γ</h1><p>建議等級：無。</p>\
	<p>建議由<a class='addpoint' href='javascript:;' data-name='test97' data-z='5'>「側珠諾：南門」</a>(需解鎖側珠諾)出去就可看到引導石。。</p>\
	<p>或<a class='addpoint' href='javascript:;' data-name='test96' data-z='5'>「經過海面與廢船過來」</a>(需有山陸行鳥)過來。</p>\
	<p>分析召喚獸水晶後，可獲得獎勵</p>\
	<p>獎勵</p>\
	<ul>\
		<li>強化召喚獸魔晶石：鳳凰(等級+1)</li>\
		<li>弱化召喚獸戰鬥：鳳凰(弱化虧損+1)</li>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "SummonCrystalB03",
	"icon":"SummonCrystal",
    "geometry": {
        "type": "Point",
		"coordinates": [4433, 2089]
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
    "properties": {"party": "<h1>挖掘報告：穿孔岬的遺跡</h1><p>需完成2項「探索報告」(生命點)才會發現</p>\
	<p>挖掘點</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationB01-1' data-z='6'>製作晶片：防具改造套組３</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationB01-2' data-z='6'>製作晶片：防具改造套組４</a></li>\
		<li><a class='goto' href='javascript:;' data-name='ExcavationB01-3' data-z='6'>製作晶片：精神幸運符</a></li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
	</ul>"},
	"levels": "1",
	"myid": "ExcavationB01",
	"icon":"Excavation",
    "geometry": {
        "type": "Point",
		"coordinates": [2673, 2766]
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
    "properties": {"party": "<h1>製作晶片：防具改造套組３</h1><p>「挖掘報告：穿孔岬的遺跡」挖掘點1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMAHbhKGoITenZIgjYmFB5VbxMRBztDeLzZFaKoMO2rtkl3yxqB6Tpv6cV6Z90u3G1znWtIXjczRkEr4QNZZuqFPXRYMdyuyla5XLBtBHtiyMiqn6Xo1vSqPf5pGxs0ZnQsiNoJJgzxM-5j_m_M8GlbVqbSpzX72aw2xErtAJ6RPNooK4c1e_HJwsDCBw/s0/ExcavationB01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMAHbhKGoITenZIgjYmFB5VbxMRBztDeLzZFaKoMO2rtkl3yxqB6Tpv6cV6Z90u3G1znWtIXjczRkEr4QNZZuqFPXRYMdyuyla5XLBtBHtiyMiqn6Xo1vSqPf5pGxs0ZnQsiNoJJgzxM-5j_m_M8GlbVqbSpzX72aw2xErtAJ6RPNooK4c1e_HJwsDCBw/s640/ExcavationB01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationB01-1",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2623, 2746]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：防具改造套組４</h1><p>「挖掘報告：穿孔岬的遺跡」挖掘點2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdZXpwedEfYt-B1yDE0G0zCVoMuDR-2it3B438m_L1s6MnsQHMI9WySCv0ITVT38-63LbsOzVG-mrUVSLcdzCVkDKTJBtGyRauEwfEVi59DZCYZN2Lrw_YDnMXMGLNI0YyiO5Z8wcoKJAPV-UVpV3UkisEmmOzr_pEVwJVjvlePjXpIqkOTCjWb2LqrQs/s0/ExcavationB01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdZXpwedEfYt-B1yDE0G0zCVoMuDR-2it3B438m_L1s6MnsQHMI9WySCv0ITVT38-63LbsOzVG-mrUVSLcdzCVkDKTJBtGyRauEwfEVi59DZCYZN2Lrw_YDnMXMGLNI0YyiO5Z8wcoKJAPV-UVpV3UkisEmmOzr_pEVwJVjvlePjXpIqkOTCjWb2LqrQs/s640/ExcavationB01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationB01-2",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2674, 2811]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>製作晶片：精神幸運符</h1><p>「挖掘報告：穿孔岬的遺跡」挖掘點3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYDOZJdDXFcSiGnytiA4MvQ2jGKPxg4jJOrIolkDAwEAvWFfZ1oR_g-z2fkEcrA-dZYxge1E3nAicTxLn0YcOBFYFD2Zs97H99XqmNHDehppty7W5vyGZHTlMwoUC-gvAYZF4i6Ab22FANGXrBkhPQEfSmhOIGBv463KmjhH70zvV_Ev_ATD-FjZSNmJ0/s0/ExcavationB01-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYDOZJdDXFcSiGnytiA4MvQ2jGKPxg4jJOrIolkDAwEAvWFfZ1oR_g-z2fkEcrA-dZYxge1E3nAicTxLn0YcOBFYFD2Zs97H99XqmNHDehppty7W5vyGZHTlMwoUC-gvAYZF4i6Ab22FANGXrBkhPQEfSmhOIGBv463KmjhH70zvV_Ev_ATD-FjZSNmJ0/s640/ExcavationB01-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "ExcavationB01-3",
	"icon":"Excavation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2695, 2737]
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
    "properties": {"party": "<h1>討伐報告１：響亮的候鳥叫聲</h1><p>建議等級：Lv.23。</p>\
	<p>敵人：音旋鳥×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy063' value=1 class='confirmed'/><span>音旋鳥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：造成一定傷害後會使出「突襲」反擊，成功閃避此招式可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentB01",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [2469, 2152]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告２：風之賢者</h1><p>建議等級：Lv.22。</p>\
	<p>敵人：懷茲雷特巨梟×2。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy095' value=1 class='confirmed'/><span>懷茲雷特巨梟</span></label></p>\
	<p style='color: #0000FF'>攻略情報：在「療癒之風」發動時造成一定傷害可使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人力竭</li>\
		<li>在敵方使用招式「療癒之風」時，使其一次也無法飛翔</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>PS. 補充第二個戰鬥任務：不讓敵人成功使用招式「療癒之風」，在「療癒之風」準備階段時用魔法「暴雪」打斷牠</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentB02",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [3800, 2258]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告３：熱情的膽小蜥蜴</h1><p>建議等級：Lv.22。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>敵人：考特尖喙獸×4。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy097' value=1 class='confirmed'/><span>考特尖喙獸</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性攻擊使其陷入HEAT狀態。HEAT期間牠不會使用部分招式。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentB03",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [4195, 1552]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>討伐報告４：疾風獵人</h1><p>建議等級：Lv.21。</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='LocationB03' data-z='5'>「側珠諾」</a>後可過來。</p>\
	<p>或可由<a class='addpoint' href='javascript:;' data-name='test95' data-z='5'>「經過海面與廢船過來」</a>(需有山陸行鳥)過來。</p>\
	<p>敵人：颶風鳥×3。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy066' value=1 class='confirmed'/><span>颶風鳥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過弱點屬性的攻擊使其陷入HEAT狀態。</p>\
	<p>任務</p>\
	<ul>\
		<li>使敵人陷入HEAT狀態</li>\
		<li>使敵人力竭</li>\
		<li>在限制時間內討伐所有敵人</li>\
	</ul>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
		<li>隊伍經驗值：5EXP(完成所有任務)</li>\
	</ul>"},
	"levels": "1",
	"myid": "CombatAssignmentB04",
	"icon":"CombatAssignment",
    "geometry": {
        "type": "Point",
		"coordinates": [4218, 2466]
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
    "properties": {"party": "<h1>隱藏報告：墮入黑暗的賢者</h1><p>建議等級：Lv.26。</p><p>需完成4項「探索報告」(生命點)才會發現</p>\
	<p>敵人：精神吸取者×1。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy100' value=1 class='confirmed'/><span>精神吸取者</span></label></p>\
	<p style='color: #0000FF'>攻略情報：若用聯手能力擊中，可一口氣使其陷入HEAT狀態。</p>\
	<p>PS. 建議在精神吸取者使用招式「精神衝擊」時用聯手能力打斷。</p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP(討伐敵人)</li>\
	</ul>"},
	"levels": "1",
	"myid": "SecretCombatB01",
	"icon":"SecretCombat",
    "geometry": {
        "type": "Point",
		"coordinates": [3537, 2466]
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
    "properties": {"party": "<h1>調查報告１：被沖上岸的遇難船隻</h1>\
	<p>建議等級：無。</p><p>完成<a class='goto' href='javascript:;' data-name='TowerB01' data-z='5'>啟動報告１：海風吹拂的通訊塔</a>後發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-Junon-Protorelics.html' target='_blank'>珠諾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得珠諾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告１：兀鷹堡壘的世界」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicB01",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [2879, 2462]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告２：瓦礫小島</h1><p>建議等級：無。</p><p>完成<a class='goto' href='javascript:;' data-name='ProtorelicB01' data-z='5'>調查報告１：兀鷹堡壘的世界</a>才會發現</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-Junon-Protorelics.html' target='_blank'>珠諾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得珠諾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告２：吵鬧的隊長」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicB02",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [3454, 2677]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告３：共和國軍的舊基地</h1><p>建議等級：無。</p><p>完成<a class='goto' href='javascript:;' data-name='ProtorelicB02' data-z='5'>調查報告２：吵鬧的隊長</a>才會發現</p>\
	<p>解鎖<a class='goto' href='javascript:;' data-name='LocationB03' data-z='5'>「側珠諾」</a>後可過來。</p>\
	<p>或可由<a class='addpoint' href='javascript:;' data-name='test100' data-z='5'>「經過海面與廢船過來」</a>(需有山陸行鳥)過來。</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-Junon-Protorelics.html' target='_blank'>珠諾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得珠諾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告３：被囚禁的公主」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicB03",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [4282, 2782]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>調查報告４：山岳的軍營舊址</h1><p>建議等級：無。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>完成<a class='goto' href='javascript:;' data-name='ProtorelicB03' data-z='5'>調查報告３：被囚禁的公主</a>才會發現</p>\
	<p><a class='addpoint' href='javascript:;' data-name='test101' data-z='5'>「前往此處的路線」</a>。</p>\
	<p><a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-Junon-Protorelics.html' target='_blank'>珠諾地區的古代物質相關委託</a></p>\
	<p>獎勵</p>\
	<ul>\
		<li>珠諾地區分析點：10點</li>\
		<li>隊伍經驗值：5EXP</li>\
		<li>隊伍經驗值：5EXP(完成任務模式)</li>\
	</ul>\
	<p>PS. 解鎖任務模式：取得珠諾地區的古代物質</p>\
	<p>完成調查報告後，此項名稱變為「調查報告４：異世界的魔王」</p>\
	"},
	"levels": "1",
	"myid": "ProtorelicB04",
	"icon":"Protorelic",
    "geometry": {
        "type": "Point",
		"coordinates": [3977, 1471]
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
	"myid": "ChocoboStopsB01",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2566, 1707]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB02",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [2540, 2492]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB03",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [3472, 2158]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB04",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [3778, 1926]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB05",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [4243, 1692]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\
	<p>需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達</p>\
	<p><a class='addpoint' href='javascript:;' data-name='test102' data-z='5'>「前往此處的路線」</a>。</p>\
	<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB06",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [3794, 1488]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB07",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [4414, 2420]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>陸行鳥站牌</h1>\<p>獎勵：黃金羽毛×1</p>"},
	"levels": "1",
	"myid": "ChocoboStopsB08",
	"icon":"ChocoboStops",
    "geometry": {
        "type": "Point",
		"coordinates": [4125, 3138]
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
	"myid": "BuriedItemB01",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3882, 2518]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItemB02",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3264, 1896]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItemB03",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [1980, 1602]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：獵敵者</h1>\
	<p>「PLAY ART：獵敵者」為收藏品</p>\
	<p>此為「PLAY ART：獵敵者」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石」</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemB04",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2715, 1913]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：莫古利獎牌×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemB05",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3524, 2138]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItemB06",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [4022, 2877]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：鳳凰尾巴×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemB07",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2449, 1472]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：獵敵者</h1>\
	<p>「PLAY ART：獵敵者」為收藏品</p>\
	<p>此為「PLAY ART：獵敵者」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石」</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemB08",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2995, 2722]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：獸骨×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemB09",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3683, 2133]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：星球果實×10</h1>"},
	"levels": "1",
	"myid": "BuriedItemB10",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2428, 1644]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：電氣石×5</h1>"},
	"levels": "1",
	"myid": "BuriedItemB11",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [2528, 2397]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：綠寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItemB12",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3934, 2147]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥</h1>"},
	"levels": "1",
	"myid": "BuriedItemB13",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [4031, 1341]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：紅寶石</h1>"},
	"levels": "1",
	"myid": "BuriedItemB14",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [4305, 1793]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：PLAY ART：獵敵者</h1>\
	<p>「PLAY ART：獵敵者」為收藏品</p>\
	<p>此為「PLAY ART：獵敵者」可取得位置的其中之一。如已擁有這個收藏品，這裡會變「秘銀礦石」</p>\
	"},
	"levels": "1",
	"myid": "BuriedItemB15",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [4340, 2687]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>掘洞兔埋藏：乙太洋蔥</h1>\
	"},
	"levels": "1",
	"myid": "BuriedItemB16",
	"icon":"BuriedItem",
    "geometry": {
        "type": "Point",
		"coordinates": [3335, 2101]
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
    "properties": {"party": "<h1>荒廢的工地</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB01-1' data-z='6'>寶箱1：有害物質×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB01-2' data-z='6'>寶箱2：高級治療劑×2</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB01",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2456, 1520]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔晄海岩礁</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB02-1' data-z='6'>寶箱1：鐵礦×10</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB02-2' data-z='6'>寶箱2：綠寶石</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB02",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2469, 1982]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>神羅工地</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB03-1' data-z='6'>寶箱1：解毒藥×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB03-2' data-z='6'>寶箱2：配件「威力護腕」</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB03-3' data-z='6'>寶箱3：980GIL</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB03",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2778, 2238]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>遇難船隻的運送物資</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB04-1' data-z='6'>寶箱1：噴霧高級治療劑</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB04-2' data-z='6'>寶箱2：手榴彈×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB04-3' data-z='6'>寶箱3：配件「救贖徽章」</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB04",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3312, 2175]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>共和國的擱淺船隻</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB05-1' data-z='6'>寶箱1：紅寶石</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB05-2' data-z='6'>寶箱2：鳳凰尾巴×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB05",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3600, 2507]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>亡國的寶物庫</h1><p>收集範圍內寶箱後完成藏寶點。(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB06-1' data-z='6'>寶箱1：高級治療劑×2</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB06-2' data-z='6'>寶箱2：780GIL</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB06",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3950, 2811]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>漁夫們的岩岸</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB07-1' data-z='6'>寶箱1：魔霧種子×3</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB07-2' data-z='6'>寶箱2：乙太洋蔥×2</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB07",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3748, 1607]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>反神羅青年團的露營地</h1><p>收集範圍內寶箱後完成藏寶點。</p>\
	<p>寶箱</p>\
	<ul>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB08-1' data-z='6'>寶箱1：高級乙太</a></li>\
		<li><a class='goto' href='javascript:;' data-name='CacheLocationB08-2' data-z='6'>寶箱2：提神劑×3</a></li>\
	</ul>\
	"},
	"levels": "1",
	"myid": "CacheLocationB08",
	"icon":"CacheLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3893, 1365]
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
    "properties": {"party": "<h1>有害物質×3</h1><p>「荒廢的工地」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPmNzzTxmVbjgw1bXojqFZLXGwLOM2POCtdpKbe_OJBttZIKsmmVg65c3-w3Jx34MiH0xJk0A0_54yIL2bBiV76DCvVusa9JNa8ckhWJtyEnkYxDNa5NmX3VE1fkaO5j3PPSysm3Fo2nov3ZFcTpNz4fN9IOtxd5Dviu_2E1HrBVms0UvGnJC-kBU8BaQ/s0/CacheLocationB01-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPmNzzTxmVbjgw1bXojqFZLXGwLOM2POCtdpKbe_OJBttZIKsmmVg65c3-w3Jx34MiH0xJk0A0_54yIL2bBiV76DCvVusa9JNa8ckhWJtyEnkYxDNa5NmX3VE1fkaO5j3PPSysm3Fo2nov3ZFcTpNz4fN9IOtxd5Dviu_2E1HrBVms0UvGnJC-kBU8BaQ/s640/CacheLocationB01-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB01-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2445, 1494]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級治療劑×2</h1><p>「荒廢的工地」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5DwdolWHRoYx2C3xW_TeDF-i9B_vECS2JdaUPhsT_LSKAdaG9VeRnwhp2Pj-5yax7f1lQ61sEkCMiCq9dXOpHdGrS3EGqJdce_k0lEpftMj-N7ZaQNxk7X5j7Wy0SvCPG8xotjLMx_KYUKh_D0HQIo1r2GPDaWPdspCdfxa8L48QjqAYQgkQ-FUGo9h0/s0/CacheLocationB01-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5DwdolWHRoYx2C3xW_TeDF-i9B_vECS2JdaUPhsT_LSKAdaG9VeRnwhp2Pj-5yax7f1lQ61sEkCMiCq9dXOpHdGrS3EGqJdce_k0lEpftMj-N7ZaQNxk7X5j7Wy0SvCPG8xotjLMx_KYUKh_D0HQIo1r2GPDaWPdspCdfxa8L48QjqAYQgkQ-FUGo9h0/s640/CacheLocationB01-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB01-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2432, 1520]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鐵礦×10</h1><p>「魔晄海岩礁」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1b-uvhLsxplLsrm0XTHNKe7SG4bHDkUA_X76ZZ_CjwUD30ii6TyDXwkymn6fMDPyYgX5b1l58vXPu-PGytRgCPL1uTRkHKMEFx6YluxfvQYuYL0PcamZG1b37iid3takh69JIudV6FksgD-pNXHvegZcMOySS9ftdM8-b_3LAvR9FQY4ERWHuidGp3WM/s0/CacheLocationB02-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1b-uvhLsxplLsrm0XTHNKe7SG4bHDkUA_X76ZZ_CjwUD30ii6TyDXwkymn6fMDPyYgX5b1l58vXPu-PGytRgCPL1uTRkHKMEFx6YluxfvQYuYL0PcamZG1b37iid3takh69JIudV6FksgD-pNXHvegZcMOySS9ftdM8-b_3LAvR9FQY4ERWHuidGp3WM/s640/CacheLocationB02-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB02-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2441, 1977]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>綠寶石</h1><p>「魔晄海岩礁」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu18dezSPxilgrPH3wORyywWt4DAqqFpl1lnA2bNuRxkRSFlfhJf4Yn3tzM907ABLXvH0W5vu1puaCnk7MSxB83odM7WulGPjppuZbRgp6kxW5Ci7xLjim-I31W7CVvp207kUQnbaiC2a0VF7HGbqiqXEfTt_OTAQbUi_3OxC7dKkO2nXGC0DOyrTuprY/s0/CacheLocationB02-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu18dezSPxilgrPH3wORyywWt4DAqqFpl1lnA2bNuRxkRSFlfhJf4Yn3tzM907ABLXvH0W5vu1puaCnk7MSxB83odM7WulGPjppuZbRgp6kxW5Ci7xLjim-I31W7CVvp207kUQnbaiC2a0VF7HGbqiqXEfTt_OTAQbUi_3OxC7dKkO2nXGC0DOyrTuprY/s640/CacheLocationB02-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB02-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2464, 1959]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>解毒藥×3</h1><p>「神羅工地」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPxeT5UJ5dLBC5I7D1IXI2SOEARMPolJq-6K6LLQQwHnHGNwHBobumcrnxqimGwKeaACGVfxazWZGs6thH62Jajeo5RuvJsQ-GZUNhJJYnBylUd3vACtuzDP-Gq2e295fmeqYCOyWGaNATAG4iUDCYd9tBztb4REKrnyVgoSl_FMIYrFLt-qvLdnXOXfw/s0/CacheLocationB03-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPxeT5UJ5dLBC5I7D1IXI2SOEARMPolJq-6K6LLQQwHnHGNwHBobumcrnxqimGwKeaACGVfxazWZGs6thH62Jajeo5RuvJsQ-GZUNhJJYnBylUd3vACtuzDP-Gq2e295fmeqYCOyWGaNATAG4iUDCYd9tBztb4REKrnyVgoSl_FMIYrFLt-qvLdnXOXfw/s640/CacheLocationB03-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB03-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2794, 2223]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>配件「威力護腕」</h1><p>「神羅工地」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3OcAqh-g7q92P4lDozXBa1X4TN9nME177vms_Xx4AQlmJkEEd0VicPoxPoU1m026oeDF8CbtLF0GUZdnZhRmWwczL3d0NUrErwOlKbp14kqeByj2gc7L0qmvqIlMOhLWC3GB-lQglfVku-IKsbkp-L71JYaDlUf8rPn5dHRIHLEnB63HHhbOYXZAiivo/s0/CacheLocationB03-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3OcAqh-g7q92P4lDozXBa1X4TN9nME177vms_Xx4AQlmJkEEd0VicPoxPoU1m026oeDF8CbtLF0GUZdnZhRmWwczL3d0NUrErwOlKbp14kqeByj2gc7L0qmvqIlMOhLWC3GB-lQglfVku-IKsbkp-L71JYaDlUf8rPn5dHRIHLEnB63HHhbOYXZAiivo/s640/CacheLocationB03-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB03-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2765, 2211]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>980GIL</h1><p>「神羅工地」寶箱3</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFUhaeM3AQOlMuzeHBDpVy1nYkYz3JNyQp7rlKKcEj_FR4FHKDLA_c6hyc7Dl7vH8BIRMmeN_vvpebOrPkj0K7Q-mn59KEz_Ftz038lQH35L6eJA1VmUXrJ8wsF-tTFYnOiBRwHoRaSzKfd3tsqsFC-zD39DsFcA9rie421hOADSoH23hd5KNFXul-sjU/s0/CacheLocationB03-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFUhaeM3AQOlMuzeHBDpVy1nYkYz3JNyQp7rlKKcEj_FR4FHKDLA_c6hyc7Dl7vH8BIRMmeN_vvpebOrPkj0K7Q-mn59KEz_Ftz038lQH35L6eJA1VmUXrJ8wsF-tTFYnOiBRwHoRaSzKfd3tsqsFC-zD39DsFcA9rie421hOADSoH23hd5KNFXul-sjU/s640/CacheLocationB03-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB03-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [2749, 2200]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>噴霧高級治療劑</h1><p>「遇難船隻的運送物資」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5Z7FQ1qAyWOyXgk-lnBicWukRhQit1fpYwLYtmG3pgTBPoAIHEtwnHBRjoUTXcAxpNPF6y7VA7OLHICVpZFR8-a6TKb04nX5z5YVPQBILiC0f2d_7igL8oMamgi2rpCiouQtjtlHOV5_phaLr-e76LTQc1Fp6m0TMC-QN3uZIUROF8g3ppdb2tZw6bjE/s0/CacheLocationB04-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5Z7FQ1qAyWOyXgk-lnBicWukRhQit1fpYwLYtmG3pgTBPoAIHEtwnHBRjoUTXcAxpNPF6y7VA7OLHICVpZFR8-a6TKb04nX5z5YVPQBILiC0f2d_7igL8oMamgi2rpCiouQtjtlHOV5_phaLr-e76LTQc1Fp6m0TMC-QN3uZIUROF8g3ppdb2tZw6bjE/s640/CacheLocationB04-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB04-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3316, 2214]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>手榴彈×2</h1><p>「遇難船隻的運送物資」寶箱2</p>\
	<p>遇難船隻的船艙，寶箱1西邊有攀爬點</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr6DCIewzcn-ymjsioGoE5Fr0bBOLh-s8SK4juwZOqmoRZERubcMnJaU91l49rvFBaWbHzNzrtHSgUdWamubkBAp1LqC_WtAZ2QUWXP6jWTKvKHGy5SzMU3-4QsR7E1qavGsTInV7fxkqzRab1S9baLhfy7_d4SFBl5mfBbRrlNiwLj83Ueelzd9DaEZE/s0/CacheLocationB04-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr6DCIewzcn-ymjsioGoE5Fr0bBOLh-s8SK4juwZOqmoRZERubcMnJaU91l49rvFBaWbHzNzrtHSgUdWamubkBAp1LqC_WtAZ2QUWXP6jWTKvKHGy5SzMU3-4QsR7E1qavGsTInV7fxkqzRab1S9baLhfy7_d4SFBl5mfBbRrlNiwLj83Ueelzd9DaEZE/s640/CacheLocationB04-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB04-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3286, 2214]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>配件「救贖徽章」</h1><p>「遇難船隻的運送物資」寶箱3</p>\
	<p>遇難船隻的甲板，寶箱1西邊有攀爬點</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglFySmJHY48GgehW1smNuZLiHXVmcqG2vT488-rHOR1ZSIFahj0wc6LKX3_PrVCO1jg8ROb7VXDw7R4872jvcdgKIB59d5iN1iIHdQWQMavHXwipQ79OezJHog5vdsnoB8OwtX3KONG-0Opqof58zPq2vTFjZ8J3c4T-LglIlqON7JkbdSA5csklJygPk/s0/CacheLocationB04-3.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglFySmJHY48GgehW1smNuZLiHXVmcqG2vT488-rHOR1ZSIFahj0wc6LKX3_PrVCO1jg8ROb7VXDw7R4872jvcdgKIB59d5iN1iIHdQWQMavHXwipQ79OezJHog5vdsnoB8OwtX3KONG-0Opqof58zPq2vTFjZ8J3c4T-LglIlqON7JkbdSA5csklJygPk/s640/CacheLocationB04-3.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB04-3",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3262, 2219]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>紅寶石</h1><p>「共和國的擱淺船隻」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB3_lCQctl4RkJSpEnf9VlxrGCf7P4pSYx-yyIz8LUowUefWMeaV3DgHLHyMA324b_93ir25_6RITEEcRpastefv3RjgDNivu5fzRC2fIgxnJcofoIOnMuqKo09QW6Kn-D4gHYfRtPbi3nOLVPo6OADEqScigPFbq68vFBItt8OPyvmctduDLiuOfaAWw/s0/CacheLocationB05-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB3_lCQctl4RkJSpEnf9VlxrGCf7P4pSYx-yyIz8LUowUefWMeaV3DgHLHyMA324b_93ir25_6RITEEcRpastefv3RjgDNivu5fzRC2fIgxnJcofoIOnMuqKo09QW6Kn-D4gHYfRtPbi3nOLVPo6OADEqScigPFbq68vFBItt8OPyvmctduDLiuOfaAWw/s640/CacheLocationB05-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB05-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3586, 2498]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>鳳凰尾巴×3</h1><p>「共和國的擱淺船隻」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMHftPe7wcfcgWKsrvflpwcKURAEa3xHkuQT_uYqc2c9Q7DqVr6SycUu-khF-1qnaLjw9oo5MB2uGVsXN3stkrN4L52PXqBBhBeLLtFEsx7X3mydGcJNZNHzlDAAIia689xKjJ_8W-orFXQB-eeoMmjg7lCDsW_rASZkw1EkZHvNvTEReKNbAAQK2DeTg/s0/CacheLocationB05-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMHftPe7wcfcgWKsrvflpwcKURAEa3xHkuQT_uYqc2c9Q7DqVr6SycUu-khF-1qnaLjw9oo5MB2uGVsXN3stkrN4L52PXqBBhBeLLtFEsx7X3mydGcJNZNHzlDAAIia689xKjJ_8W-orFXQB-eeoMmjg7lCDsW_rASZkw1EkZHvNvTEReKNbAAQK2DeTg/s640/CacheLocationB05-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB05-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3613, 2487]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級治療劑×2</h1><p>「亡國的寶物庫」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcHwYeiJMNTPu0SHxLFAcRBGJzIw_BtO_4UR-Y28cjrOhHzaiPVPsc06lOE02rON0Dq2SZtfCV_R6dGPAToNW2Tmk-QHPf80OE_tLSsaZoJG2jWaDWl73JfYCuiX7rP_POqHLapd5fsC44bPkHmBoct0CZ0LnBM1vQEBziC8VXhSGjTV-3xfHBml2NE_M/s0/CacheLocationB06-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcHwYeiJMNTPu0SHxLFAcRBGJzIw_BtO_4UR-Y28cjrOhHzaiPVPsc06lOE02rON0Dq2SZtfCV_R6dGPAToNW2Tmk-QHPf80OE_tLSsaZoJG2jWaDWl73JfYCuiX7rP_POqHLapd5fsC44bPkHmBoct0CZ0LnBM1vQEBziC8VXhSGjTV-3xfHBml2NE_M/s640/CacheLocationB06-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB06-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3922, 2799]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>780GIL</h1><p>「亡國的寶物庫」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv0XYT-7eMXJvGoOre8C9C_Bh6DDwN1kJfha148-JgRXsiyXYY-RAtMiRbggApRv1DeHuv9LRhnXWzZMFChlnGWnfSK395njNDCDLpQJtj_qZhJrBAQb26Zs50HEM-HwQlejI-JQOXKh3fjGGKc-6ARhNS0DVOJTOI8nVmnuUC52Q_7KNl4kROzukNxM8/s0/CacheLocationB06-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv0XYT-7eMXJvGoOre8C9C_Bh6DDwN1kJfha148-JgRXsiyXYY-RAtMiRbggApRv1DeHuv9LRhnXWzZMFChlnGWnfSK395njNDCDLpQJtj_qZhJrBAQb26Zs50HEM-HwQlejI-JQOXKh3fjGGKc-6ARhNS0DVOJTOI8nVmnuUC52Q_7KNl4kROzukNxM8/s640/CacheLocationB06-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB06-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3951, 2828]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔霧種子×3</h1><p>「漁夫們的岩岸」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSm_bzqgWKT3mP-dCq_tcIWfJ2PaX1jl6p9sRBtX6c7P8Vd-66vaKDPlp1nGxD_o9ecFNxzqRxiCxL74k-ZLLCh6QvgIYbLE0hJkexP2BZ_QaHYjk39cCXhN05F-v9NTRv1u1y17Me_lGtKayjYLu58fUh3oydnNge-6bUGQy2t5NITnfxm_KM-mB-bSU/s0/CacheLocationB07-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSm_bzqgWKT3mP-dCq_tcIWfJ2PaX1jl6p9sRBtX6c7P8Vd-66vaKDPlp1nGxD_o9ecFNxzqRxiCxL74k-ZLLCh6QvgIYbLE0hJkexP2BZ_QaHYjk39cCXhN05F-v9NTRv1u1y17Me_lGtKayjYLu58fUh3oydnNge-6bUGQy2t5NITnfxm_KM-mB-bSU/s640/CacheLocationB07-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB07-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3749, 1574]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>乙太洋蔥×2</h1><p>「漁夫們的岩岸」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvBUttPedOcXyi0KBOeFbXBSTJlZagZlsLH0j7bcCIxxbgzf2YNNT3WCqXt8uPi2Q-RvsFleyjM6u53z1qNDE_colo23UB5euQ4AKy6GoSazMXqfkiY8WmcfAicvUvCFaypW_eewQl5OBOKQ8a12E1xJ4h_cd64TC6KbINU0_nJb1udMdcBaMuK2bQGsg/s0/CacheLocationB07-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvBUttPedOcXyi0KBOeFbXBSTJlZagZlsLH0j7bcCIxxbgzf2YNNT3WCqXt8uPi2Q-RvsFleyjM6u53z1qNDE_colo23UB5euQ4AKy6GoSazMXqfkiY8WmcfAicvUvCFaypW_eewQl5OBOKQ8a12E1xJ4h_cd64TC6KbINU0_nJb1udMdcBaMuK2bQGsg/s640/CacheLocationB07-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB07-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3780, 1616]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>高級乙太</h1><p>「反神羅青年團的露營地」寶箱1</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje7JAARQJT-UZwP7u71gy6kKodgPPOBv9r5W29gupCjLoBeXABZnBcyHssYA7YasJXBy5wxLpCPwzg943OETBXfCQ4YoOLeUd6YaEJB96RrtNZ7IDiikecdptBrQnfigr66l2oA4L4YsZkXnvXQvakrAPtwMZZuj_e6Eos95yFt28x8zNz5kLdthvX0qU/s0/CacheLocationB08-1.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje7JAARQJT-UZwP7u71gy6kKodgPPOBv9r5W29gupCjLoBeXABZnBcyHssYA7YasJXBy5wxLpCPwzg943OETBXfCQ4YoOLeUd6YaEJB96RrtNZ7IDiikecdptBrQnfigr66l2oA4L4YsZkXnvXQvakrAPtwMZZuj_e6Eos95yFt28x8zNz5kLdthvX0qU/s640/CacheLocationB08-1.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB08-1",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3909, 1337]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>提神劑×3</h1><p>「反神羅青年團的露營地」寶箱2</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9rWjbQqRvuiFkg4u_fBFFXilz9RKrN9h6ThH47b9Xl4qdzpfEnrJ6ISnYAFTlDS3bgrSNWb7BKhKPHPIFBqAWjyOSzAm5Gb0cej78-FwDaGUwyz6o9lLrFYMwiKkcrxiJqOVt_o5e-5qS5qtz9ixaoP2lp6IGgb2D0vkx3F-JwgEgX8Z_oGe72cyxdzw/s0/CacheLocationB08-2.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9rWjbQqRvuiFkg4u_fBFFXilz9RKrN9h6ThH47b9Xl4qdzpfEnrJ6ISnYAFTlDS3bgrSNWb7BKhKPHPIFBqAWjyOSzAm5Gb0cej78-FwDaGUwyz6o9lLrFYMwiKkcrxiJqOVt_o5e-5qS5qtz9ixaoP2lp6IGgb2D0vkx3F-JwgEgX8Z_oGe72cyxdzw/s640/CacheLocationB08-2.webp' class='mypopupimg'/></a></p>\
	<p class='leaflet-collect'><a class='remove' href='javascript:;'>隱藏點位</a></p>\
	"},
	"levels": "1",
	"myid": "CacheLocationB08-2",
	"icon":"CacheLocation1",
    "geometry": {
        "type": "Point",
		"coordinates": [3877, 1346]
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
    "properties": {"party": "<h1>敵人：尖喙獸×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyB001",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2455, 1556]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：戰機鳥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy065' value=1 class='confirmed'/><span>戰機鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB002",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2213, 1506]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：旋索草×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy098' value=1 class='confirmed'/><span>旋索草</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB003",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2139, 1448]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尖喙獸×3</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>\
	"},
	"levels": "1",
	"myid": "EnemyB004",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2029, 1521]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尖喙獸×1、旋索草×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy098' value=1 class='confirmed'/><span>旋索草</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB005",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2175, 1635]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：戰機鳥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy065' value=1 class='confirmed'/><span>戰機鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB006",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2337, 1382]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尖喙獸×1、旋索草×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy098' value=1 class='confirmed'/><span>旋索草</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB007",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2647, 2122]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：戰機鳥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy065' value=1 class='confirmed'/><span>戰機鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB008",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2810, 2623]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：賽姆澤雷特巨梟×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy094' value=1 class='confirmed'/><span>賽姆澤雷特巨梟</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB009",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [2945, 2670]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尖喙獸×2、戰機鳥×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy065' value=1 class='confirmed'/><span>戰機鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB010",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3060, 2455]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：賽姆澤雷特巨梟×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy094' value=1 class='confirmed'/><span>賽姆澤雷特巨梟</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB011",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3485, 1803]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：龍旋鳥×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy062' value=1 class='confirmed'/><span>龍旋鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB012",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3626, 2122]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尖喙獸×1、旋索草×1、賽姆澤雷特巨梟×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy098' value=1 class='confirmed'/><span>旋索草</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy094' value=1 class='confirmed'/><span>賽姆澤雷特巨梟</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB013",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [4360, 2585]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：賽姆澤雷特巨梟×2、戰機鳥×1</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy094' value=1 class='confirmed'/><span>賽姆澤雷特巨梟</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy065' value=1 class='confirmed'/><span>戰機鳥</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB014",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [4342, 1599]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>敵人：尖喙獸×1、旋索草×2</h1>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy096' value=1 class='confirmed'/><span>尖喙獸</span></label>　\
	<label><input type='checkbox' data-cat='enemy' name='enemy098' value=1 class='confirmed'/><span>旋索草</span></label>　\
	"},
	"levels": "1",
	"myid": "EnemyB015",
	"icon":"EnemyLocation",
    "geometry": {
        "type": "Point",
		"coordinates": [3942, 1559]
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
    "properties": {"party": "<h1>主線BOSS：擺尾龍魚</h1><p>建議等級：Lv.21。</p>\
	<p style='color: #FF0000'>第四章下珠諾BOSS，限定於主線出現。</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy211' value=1 class='confirmed'/><span>擺尾龍魚</span></label></p>\
	<p style='color: #0000FF'>攻略情報：在牠潛於水中時對其頭部造成一定傷害，牠就會往空中移動並陷入HEAT狀態。「水球」造成的束縛在破壞「水球」後即可解除。</p>\
	<p>攻略連結：待補充</p>\
	<p>獎勵</p>\
	<ul>\
		<li>隊伍經驗值：50EXP</li>\
		<li>200EXP、10AP</li>\
		<li>800GIL</li>\
	</ul>"},
	"levels": "1",
	"myid": "SSEnemyB01",
	"icon":"EnemyMAIN",
    "geometry": {
        "type": "Point",
		"coordinates": [1694, 1180]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：風暴翼蜥×2</h1><p>建議等級：Lv.21。</p>\
	<p style='color: #FF0000'>於第四章「支線委託：心意的形式」限定出現</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy039' value=1 class='confirmed'/><span>風暴翼蜥</span></label></p>\
	<p style='color: #0000FF'>攻略情報：攻擊擊中圍繞在牠身上的氣場時，就會產生龍捲風。產生龍捲風的同時，氣場也會變弱，一旦氣場消失便會陷入HEAT狀態。從後方攻擊便可在不產生龍捲風的狀態下削弱其氣場。</p>\
	<p>攻略連結：請參考第四章「<a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-QUEST4-2.html' target='_blank'>支線委託：心意的形式</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyB02",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [4067, 1865]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：白慕斯×2</h1><p>建議等級：Lv.23。</p>\
	<p style='color: #FF0000'>於第四章「支線委託：海角的廣告塔」限定出現</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy090' value=1 class='confirmed'/><span>白慕斯</span></label></p>\
	<p style='color: #0000FF'>攻略情報：可透過屬性攻擊使其陷入HEAT狀態，但遭到屬性攻擊時會變為「抗性模式」，開始吸收能量。累積能量後會將能量以強力魔法的形式釋放出來。</p>\
	<p>攻略連結：請參考第四章「<a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-QUEST4-4.html' target='_blank'>支線委託：海角的廣告塔</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyB03",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [4112, 3280]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>支線委託敵人：神秘龍×1</h1><p>建議等級：Lv.23。</p>\
	<p style='color: #FF0000'>於第四章「支線委託：蒼穹之夢」限定出現</p>\
	<p>是否已洞察：<label><input type='checkbox' data-cat='enemy' name='enemy087' value=1 class='confirmed'/><span>神秘龍</span></label></p>\
	<p style='color: #0000FF'>攻略情報：造成一定傷害可使其陷入HEAT狀態，但HEAT期間的高度將會固定。</p>\
	<p>攻略連結：請參考第四章「<a href='https://sniperex168.blogspot.com/2024/04/FF7RE2-QUEST4-5.html' target='_blank'>支線委託：蒼穹之夢</a>」</p>\
	"},
	"levels": "1",
	"myid": "SSEnemyB04",
	"icon":"EnemyQUEST",
    "geometry": {
        "type": "Point",
		"coordinates": [3940, 1657]
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
    "properties": {"party": "<h1>秘銀礦山</h1>\
	<p>預設解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationB01",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [2880, 1962]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>下珠諾</h1>\
	<p>主線解鎖，有當地地圖</p>"},
	"levels": "1",
	"myid": "LocationB02",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1735, 1146]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>側珠諾</h1>\
	<p>執行「支線委託：心意的形式」時才會解鎖並可進入。有當地地圖。</p>\
	"},
	"levels": "1",
	"myid": "LocationB03",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [4434, 2056]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>下珠諾：青蛙的遊樂場</h1>\
	<p>接受「支線委託：青蛙們集合」時，抵達後解鎖。</p>\
	"},
	"levels": "1",
	"myid": "LocationB04",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [1730, 1440]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>側珠諾：南門</h1>\
	<p>執行「支線委託：心意的形式」時才會解鎖並可進入側珠諾。在側珠諾內抵達南門後解鎖</p>\
	"},
	"levels": "1",
	"myid": "LocationB05",
	"icon":"LocationMap",
    "geometry": {
        "type": "Point",
		"coordinates": [4429, 2215]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>加彭牧場</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationB06",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2415, 1791]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>漁夫的置物間</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationB07",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1929, 1488]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>珠諾檢查哨</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationB08",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [1987, 1360]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>布雷迪的山中小屋</h1>\
	<p>抵達後解鎖(需要有<a class='goto' href='javascript:;' data-name='ChocoboIntelB01' data-z='5'>山陸行鳥</a>才能抵達)</p>"},
	"levels": "1",
	"myid": "LocationB09",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [2690, 1566]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>獵人之森</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationB10",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3840, 2041]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>龍之巢穴</h1>\
	<p>接受「支線委託：蒼穹之夢」後，抵達後解鎖。</p>\
	"},
	"levels": "1",
	"myid": "LocationB11",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [3890, 1776]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>兀鷹山丘</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationB12",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [4219, 2262]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>海角的燈塔</h1>\
	<p>抵達後解鎖</p>"},
	"levels": "1",
	"myid": "LocationB13",
	"icon":"Location",
    "geometry": {
        "type": "Point",
		"coordinates": [4125, 3252]
    }
},
];	
	
	
//提示
var tipsTemp = [ 
/*{
    "type": "Feature",
    "properties": {"party": "<h1>由此處走樓梯走上建築物</h1>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTDHP5DGptbjsoou6hn9CdUc_QaCZJVpyQ_71Tno83ZMW0LSCNqJaoFCYwRltg9L-mF4fPtFtgwcrdRlpjaWDA3Ib98iG_zl8wrBObX9eGq7_gYCMQCkMtDwE8aH4nzlvwIhr1sAt1YbNZb1ialr5aI5Pc6EI6Lf5_5ofqwQKe5zb99M4akFs3mBh2yYQ/s0/tips001.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTDHP5DGptbjsoou6hn9CdUc_QaCZJVpyQ_71Tno83ZMW0LSCNqJaoFCYwRltg9L-mF4fPtFtgwcrdRlpjaWDA3Ib98iG_zl8wrBObX9eGq7_gYCMQCkMtDwE8aH4nzlvwIhr1sAt1YbNZb1ialr5aI5Pc6EI6Lf5_5ofqwQKe5zb99M4akFs3mBh2yYQ/s640/tips001.webp' class='mypopupimg'/></a></p>\
	"},
	"levels": "1",
	"myid": "tips001",
	"icon":"tips",
    "geometry": {
        "type": "Point",
		"coordinates": [4432, 2215]
    }
},*/

];
//路線
var PolygonTemp = [
{
    "type": "Feature",
    "properties": {
		"party": "<h1>討伐報告４的提示路線1</h1>"},
	"levels": "1",
	"strokeColor": "#00FFFF",
	"weight":"1",  
	"myid": "test95",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[4242, 2444],[4333, 2550],[4246, 2878],
			[4189, 2915],[4139, 3094],[4053, 3124],
			[3994, 3170],[3956, 3078],[4117, 3003],		
			[4021, 2908],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>召喚獸報告３的提示路線1</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "test96",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[4436, 2085],[4538, 2155],[4476, 2220],
			[4428, 2242],[4333, 2550],[4246, 2878],
			[4189, 2915],[4139, 3094],[4053, 3124],
			[3994, 3170],[3956, 3078],[4117, 3003],		
			[4021, 2908],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>召喚獸報告３的提示路線2</h1>"},
	"levels": "1",
	"strokeColor": "#0000FF",
	"weight":"1",  
	"myid": "test97",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [4436, 2085],[4538, 2155],[4476, 2220],
            [4431, 2210],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>前往探索報告４的提示路線1</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "test98",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [3985, 3293],[3994, 3170],[4053, 3124],
            [4139, 3094],[4189, 2915],[4246, 2878],
			[4333, 2550],[4431, 2210],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>前往探索報告４的提示路線2</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "test99",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [3985, 3293],[3951, 3063],[4101, 3004],
            [3967, 2875],[3951, 2800],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>前往調查報告３的提示路線1</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "test100",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [4283, 2770],[4247, 2880],[4198, 2904],
            [4144, 3101],[4063, 3112],[3998, 3157],
			[3964, 3077],[4119, 2997],[4026, 2906],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>前往調查報告４的提示路線1</h1>"},
	"levels": "1",
	"strokeColor": "#FFFF00",
	"weight":"1",  
	"myid": "test101",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[3984, 1455],[4014, 1389],[3978, 1346],
			[3953, 1350],[3911, 1390],[3911, 1420],
			[3877, 1450],[3855, 1500],[3898, 1518],
			[3890, 1563],[3864, 1580],[3660, 1695],
			[3580, 1738],[3560, 1750],
        ]
    }
},
{
    "type": "Feature",
    "properties": {
		"party": "<h1>前往陸行鳥站牌的提示路線</h1>"},
	"levels": "1",
	"strokeColor": "#FF0000",
	"weight":"1",  
	"myid": "test102",
	"icon":"tips",
    "geometry": {
        "type": "LineString",
        "coordinates": [
			[3797, 1486],[3854, 1500],[3904, 1515],
			[3889, 1565],[3856, 1577],[3659, 1690],
			[3580, 1740],[3542, 1763],
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
    "properties": {"party": "<h1>珠諾　拍攝點</h1>\
	<p>先與下珠諾的「攝影師佛卡斯」對話後獲得拍攝點位置。</p>\
	<p>抵達拍攝點只要進入拍照模式即可，無論有無拍照都算攝影完成。</p>\
	<p>回報給「攝影師佛卡斯」可提昇在相片俱樂部的會員等級並獲得拍照模式的濾鏡或外框。</p>"},
	"levels": "1",
	"myid": "photos002",
	"icon":"photos",
    "geometry": {
        "type": "Point",
		"coordinates": [3886, 3091]
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
    "properties": {"party": "<h1>魔晶石躍昇★</h1>\
	<p>魔晶石「魔晶石躍昇★」，砲彈坑內</p>\
	<p><a href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxDKn7_rszxx8PDhik9PH6bBThRgEzrF4KfcjcULrg-_pgVKm5R8i6S7kplCsxm9AdF08mzVjAsLxz3BNu9YLk3PguSp3cwRBOpa8D2ecJq9izF2QHucXrDYDc1HPU0cX3WA4IxS-kYNTMbINJb-p6hlTnrQr3xMmM5IRrzox8TF2uyl2S1Z6eAGLL0nQ/s0/MATERIA015.webp' target='_blank'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxDKn7_rszxx8PDhik9PH6bBThRgEzrF4KfcjcULrg-_pgVKm5R8i6S7kplCsxm9AdF08mzVjAsLxz3BNu9YLk3PguSp3cwRBOpa8D2ecJq9izF2QHucXrDYDc1HPU0cX3WA4IxS-kYNTMbINJb-p6hlTnrQr3xMmM5IRrzox8TF2uyl2S1Z6eAGLL0nQ/s640/MATERIA015.webp' class='mypopupimg'/></a></p>"},
	"levels": "1",
	"myid": "MATERIA015",
	"icon":"MATERIA",
    "geometry": {
        "type": "Point",
		"coordinates": [2569, 2382]
    }
},
];

//陸行鳥能力點
var ChocoboAbility = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9EZiMc9GfX8Uz_kWYO4pnO2QKuU4M8sKMZPzmlw8nJYf4QUEM6-CjnBK98wM4iGdo6_D3Y2G4vKgf5JLIeNlReV6tNn8Uy3-2ab8In2yD_UZx4886fD0ivFKdRkIU-G0SIgxjvdRXLoaqSEHGMyXvQPYfuMYQ-LZRtpB0AWwKdLWh8tdTYyRWw_K3fk/s1600/ChocoboIntel1.png',
	shadowUrl: '',iconSize: [30, 30],iconAnchor: [18, 15],popupAnchor: [-4, -15],tooltipAnchor: [10, -15]});
var ChocoboAbilityTemp = [ 
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
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB02",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2566, 1530]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB03",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2545, 1467]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB04",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2544, 1438]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB05",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2572, 1480]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB06",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2606, 1467]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB07",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2828, 2604]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB08",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2842, 2578]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB09",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2946, 2472]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB10",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [2996, 2454]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB11",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3936, 1885]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB12",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3998, 1759]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB13",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4106, 1697]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB14",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4072, 1695]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB15",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4036, 1661]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB16",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4216, 1630]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB17",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4325, 1662]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB18",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4387, 1555]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB19",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3978, 2821]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB20",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3997, 3168]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB21",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4055, 3118]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB22",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4150, 3152]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB23",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4247, 2871]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB24",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3562, 1752]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB25",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3581, 1739]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB26",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3660, 1693]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB27",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3756, 1745]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB28",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3589, 1788]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB29",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3842, 1693]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB30",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3865, 1575]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB31",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3891, 1557]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB32",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3855, 1499]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB33",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3879, 1452]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB34",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3912, 1420]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB35",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3955, 1353]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB36",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [3921, 1540]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>山陸行鳥攀爬</h1>\
	<p>需取得山陸行鳥</p>\
	"},
	"levels": "1",
	"myid": "ChoAbiB37",
	"icon":"ChocoboAbility",
    "geometry": {
        "type": "Point",
		"coordinates": [4001, 1624]
    }
},
];


