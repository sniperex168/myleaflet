var states = [ //L.geoJSON層，顯示區域用
{
    "type": "Feature",
    "properties": {"party": "123",},
	"levels": "1",
	"myid": "myid1",
	"icon":"grace",
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [3721, 6944],[3714, 6974],[3687, 7055],[3603, 7085],
            [3537, 7046],[3442, 7096],[3359, 6985],[3340, 7042],
			[3453, 7338],[3296, 7573],[3345, 7680],[3434, 7679],
			[3560, 7464],[3703, 7493],[3759, 7434],[3822, 7561],
			[3952, 7606],[4059, 7776],[4167, 7811],[4350, 7736],
			[4390, 7584],[4343, 7434],[4323, 7275],[4306, 7176],
			[4030, 7111],[4068, 6840],[4086, 6759],[4024, 6701],
        ]]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>啜泣半島1</h1><p>建議等級:20</p>123"},
	"levels": "2",
	"myid": "myid2",
	"icon":"grace",
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [3810, 7626],[3742, 7703],[3715, 7807],[3530, 7860],
            [3276, 8013],[3281, 8098],[3354, 8194],[3345, 8278],
			[3553, 8431],[3692, 8409],[3812, 8306],[3861, 8239],
			[3946, 8264],[4016, 8370],[3945, 8452],[3940, 8561],
			[3879, 8649],[3886, 8888],[3982, 8897],[4050, 8698],
			[4223, 8668],[4413, 8498],[4466, 8393],[4555, 8128],
			[4534, 7818],[4385, 7755],[4180, 7827],[4052, 7794],
			[3926, 7648],
        ]]
    }
}




];


//武器
var Weapons = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieL9KuJSpLI4SzOylZ7u2AfuKFJ5A6a0UvK8oHKo8cNjLFD4kCmYxv9s3DBb4jaI_ykS5FWH0viUFY2_PHvJeie3y3A2JL-ugPjDwZDZhUJzVEq_QnibjAGNYmLZ1ykh0QWVQ-xixogKaNo1orHh11Msj1JFFOUJoCnP_xwaTpjpB7b8A_mIXN7PbnKV8/s1600/Weapons.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var WeaponsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>武器：測試點</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走"},
	"levels": "1",
	"myid": "Weapons001",
	"icon":"Weapons",
    "geometry": {
        "type": "Point",
		"coordinates": [3640, 7138]
    }
},



];

//防具
var Armor = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwDV3xedpYIrE8Mt865p0IKW8ohHLQp4XmLetzlHHMMGQ4Q5hexZyfiNugwuIjXWiuSxL_DuXex-sp5-HD40VgXhiUmUs1jqEmMuhToPax_B4tR9dZhn58vpoaghx6UgBQaGlwemFRCNoo0tGe_ElrgoUGDjnlT6BHDXYvPR1WR2s9RcRcgryKdGbX1WQ/s1600/Armor.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var ArmorTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>防具：測試點</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走"},
	"levels": "1",
	"myid": "test001",
	"icon":"Armor",
    "geometry": {
        "type": "Point",
		"coordinates": [3740, 7838]
    }
},



];

//護符
var Talisman = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA7u0tMfmpJg4gRqXVJD6gHQxBQH88SJiJtf8QlMWoxmfoinpLI6Bd4MhcgFF_-1Ulp4BaQjZHepFJ1YPUdQK9x_XLhGwETyCJon2uWd1-j27wQiTWgm3uainDgUbwtsXmoc13VV3yElTwuXSYuu0QjN621c009SWsDjs-Z6Y9p-sGPlerAE_MRg1LyAw/s1600/Talisman.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var TalismanTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>護符：測試點</h1><p>在半毀的城牆上。</p>"},
	"levels": "1",
	"myid": "Talisman001",
	"icon":"Talisman",
    "geometry": {
        "type": "Point",
		"coordinates": [7740, 7838]
    }
},



];

//戰灰
var AshesofWar = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJzoX6crG5-FmWfnn4_QJOQQcFzGxmnTL6oYwFlm2YqQBUe3Q5i8fCC2SiMQaWlJZH8N0yOkODpFm4nQVM8MavrNcSGMevsb-q47HKvLLxuB_LpZaXHLlN5ApxmG_fn12O5vCsFGPfmwQTBdxGrPxeQMK5dmNtzy0MVVJSM_7TJGJ9YP8SStDhcKNUBlo/s1600/AshesofWar.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var AshesofWarTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>戰灰：偉哉卡利亞</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "AshesofWar001",
	"icon":"AshesofWar",
    "geometry": {
        "type": "Point",
		"coordinates": [1895, 3707]
    }
},



];

//骨灰
var SpiritAshes = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm5G3iN2FgwikCWSH9G4IvWoVRUguBZVBDhu6LqD6juYIti2i2UVeqwxvL84ZfrrTPnsdWQrUxijIWW0kMxtQ1A5lSz5RrgIfdBaI65syQXiHZ6HROUJllwD4EeXWDPCG5Z_jPR5ukblBbtsTUXsQPSC_cr4Ks3XA6vvtQ5VTdLG7eFloHBImix5yRdkg/s1600/SpiritAshes.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var SpiritAshesTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>骨灰：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "SpiritAshes001",
	"icon":"SpiritAshes",
    "geometry": {
        "type": "Point",
		"coordinates": [2895, 3707]
    }
},



];

//魔法Sorcery
var Sorcery = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmrQg9AUDHG_E-Pooh92OUEZ1SgEjr5vB4k66EoHTQzGzh3_zezfx-f1fERkdMZWW4cyE2Bueqf64G6qFnyLn9BTIPcQy49MKZO1LqmSYrVxRi-uSRv0rEy7VuCUzwBUKq53MzKtlvh8WiaY3TiBphYHm0g6XpGWy9Zz-CWWQLhdCADPrkX8SFWD1aTqw/s1600/Sorcery.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var SorceryTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>魔法：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Sorcery001",
	"icon":"Sorcery",
    "geometry": {
        "type": "Point",
		"coordinates": [2895, 2707]
    }
},



];

//禱告Incantation
var Incantation = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilSgKSCkdh7liELax2F2OXGo4HwhsiSQpqBy1XjceZBhTJgNtM4Nh-i7V5nqHfUlAuLITKzout4Zd1kU6lFJcv5EG0eTGHRehP6l9K3y5F1nbavOk8HvnJACg64WxZAD-rnWfEcZEYJHJFOleCPSNsQGlzoAmall3bk6ZwgVfPPLLvWWgp7XCy46EcZPc/s1600/Incantation.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var IncantationTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>禱告：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Incantation001",
	"icon":"Incantation",
    "geometry": {
        "type": "Point",
		"coordinates": [2895, 4707]
    }
},



];

//黃金種子GoldenSeed
var GoldenSeed = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj8ds8SjQD4_91pR8V9FG3sQj6BXOQbYKuBWJpAuHRAV3FsBzv9lMBD7rLBmlcUcCLJSaZFpj_e3ylKnoCvx7QPbwYW7M-2VjZs7wS4mMiicPWVtR-71TWvwLAq8XJrw3UPPsQu2jBapyzw7FUidX-a-GT33RQJefTRQc7JVz06Jj1zeAToql3u1yCTpI/s1600/GoldenSeed.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var GoldenSeedTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>黃金種子：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "GoldenSeed001",
	"icon":"GoldenSeed",
    "geometry": {
        "type": "Point",
		"coordinates": [4895, 4907]
    }
},



];

//聖杯露滴SacredTear
var SacredTear = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL54eaTMlSP84VGaHiIBtpZWMR8l0UHdIGezufRGdblGCSRQtK7kQ_06io_vs3vrJRtx4T1OyF4VaKINvx875O6RULGp58_oYChOshg6yEUt7guGhP1ZGmteA39TujAxAQEiO-oCbR86uLG-BGSV_Q11QpWnlV_nwwRXfnFL0kGFPCo3RzZD3Ke6cW9cs/s1600/SacredTear.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var SacredTearTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>聖杯露滴：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "SacredTear001",
	"icon":"SacredTear",
    "geometry": {
        "type": "Point",
		"coordinates": [4895, 5307]
    }
},



];

//地圖碎片MapPieces
var MapPieces = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9RrNpqOZa0ex3zDtkAB7mZtnw9UpYXZ2kMVgTuGT6lGVJFLstEdc_IHV7QEIZsu7CHBMyQNw3YvSW3uXAWY0-qt-30iFrQPMCssVccykZ4DUhwVVCo8MODHSWmSPJDWXH0e5GrTjQd6mOMjF-JnRCrjKiaso5A1g4L2BHo-_pFxuKMkYiQTVuMchcAr4/s1600/MapPieces.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var MapPiecesTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>地圖碎片：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "MapPieces001",
	"icon":"MapPieces",
    "geometry": {
        "type": "Point",
		"coordinates": [6095, 5807]
    }
},



];

//鈴珠BellBearing
var BellBearing = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKFfOI0tQgTZVQKT5yiHNf7fRpJK1phNLtuOi3EoJYfMV-QRJqMk0QMQnhjKmJLzUZQl9YzrOuWGxNI0W14e8ZAY5ENX2QnFXwrYclqqj6nF-t6Hah_snLMSkO7gquj-nR6WlUCXpw5r6w31NnPepo_avsCYYr6OwjzTcVi9F-74AulYb18K8thQssNPY/s1600/BellBearing.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var BellBearingTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>鈴珠：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "BellBearing001",
	"icon":"BellBearing",
    "geometry": {
        "type": "Point",
		"coordinates": [4895, 5807]
    }
},



];

//結晶露滴CrystalTear
var CrystalTear = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWS8qVGxQ4lmQJ-ONDhI7tGHi4HEV0HwiAkqrRY8E7BSz41roDisvI-RO-t7rrg3s6eOl014MARSfErr21hcfmvmlswP6PCfGQrDCdeK-rAA1p0A4G2wx-HH_-tOfmxCmUk5Bz4fOmPtAQpN3JqKZ582s5AXz_IzAFcxy0wHoNpIhkGhK8m9IvXp-IPLc/s1600/CrystalTear.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var CrystalTearTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>結晶露滴：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "CrystalTear001",
	"icon":"CrystalTear",
    "geometry": {
        "type": "Point",
		"coordinates": [5295, 5807]
    }
},



];

//石劍鑰匙Stonesword
var Stonesword = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxsKwaBZFE02lq10D08x0dEkH6wdcT7P-aerNPvYWRScEJYLrVH-ETgPCZQpmtvn5spOIlvInkVT3EwMX_js3CJAULb0cnj44VVEbKdL-kCYNMoHKhKz_rh6QzuGRPoozznszLAn3rEd-l0pvvDrAmWmnCu8RURJBmjgk374zT6Sst7F427o1hROOZWuI/s1600/Stonesword.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var ImbuedSword = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvYODosqq4uyXnHyYQ3FefB9p3PvdMrAT8QZMdkayE_WxFUKVqLsEzOnYuEHqZYx1qPHBgNnKZ5gSFhMTjFyVBeINum1wTZCHiedBv_U5bCcXHJhQ59QBjSciEcnm5-obqrK2M83Uv3wzeKeJVLj0kCYc5E5VK8P4KE7dV6q6ovZgF1bhAIqC4GQcyo-k/s1600/ImbuedSword.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var StoneswordTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>石劍鑰匙：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Stonesword001",
	"icon":"Stonesword",
    "geometry": {
        "type": "Point",
		"coordinates": [5295, 6207]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>魔石劍鑰匙：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "ImbuedSword001",
	"icon":"ImbuedSword",
    "geometry": {
        "type": "Point",
		"coordinates": [5295, 6607]
    }
},


];

//製作筆記Cookbook
var Cookbook = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs0rtB9pc_wLA5JYq31JGz5EYSxKyfSBz5AmIZhgLzRBaWpBbajPFwVIlHx3dZIQNQmHIts5PmTQNoYHqBqU9zk2nXSafji5bUChGarNMqWt3RR4FcBJCjkJGHGt_okzunqhRQP_a2luoSmXcaF3uCOZfJ_wE2sVxOFT_w8rmrAxzat7XYeIa81PcajAI/s1600/Cookbook.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var CookbookTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>製作筆記：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Cookbook001",
	"icon":"Cookbook",
    "geometry": {
        "type": "Point",
		"coordinates": [5695, 5807]
    }
},



];

//禱告與卷軸Scrolls
var Scrolls = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjgfxmAQ11njeNnmUXbKa-539Y35V3KWJIY0R_xgc6p2eYawGwrZPj3tRrG3R8GbUneOSxIeGwnlPEFD5-8MXTSqQZAg7biQkBWuNFT_JObXfX1dnj9JEzDTEe-32wo6dp6cRqTGK_uYkaLxFz_EcjUKAfxlaVin41EWC3nnU-I2a13ALM5Hvsrlt0-Fo/s1600/Scrolls.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var Prayerbook = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDTIO0rV_3N3xIgMpbdH-eYYlwaV2Hhyz2Z9gEEj8euIt4L2XjDL_u0N9vVeH8N-bFVCvAr3D697lA7h2tB3oJUj5UX481dFvenaOm5yNJ8LNuTGOXew9-QVlpcIH5lITXWrShhCL1sTl3RY2Kczp56Gu6Lw2SIOjCnnIuh4G6hqd8kPKqoy6ZDJ6-hvY/s1600/Prayerbook.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var ScrollsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>卷軸：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Scrolls001",
	"icon":"Scrolls",
    "geometry": {
        "type": "Point",
		"coordinates": [6095, 5807]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>禱告書：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Prayerbook001",
	"icon":"Prayerbook",
    "geometry": {
        "type": "Point",
		"coordinates": [6495, 5807]
    }
},


];

//貴重物品KeyItem
var KeyItem = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpDu0xhsmgmP6HnwrJaCBuDYGpFMXwUG3g0aHylWuUDMUWPfwaLCAhU55ktpFs4Hhrd5k0LHmvREkWmzvyPyhoRjtuqcUbDI7rtkG3yuw9UEM_9R34dt_yKubSpIh6dUFnE4DDEY3vjFwGurpOCWyvWluXz7c01u5v1S9Ay2-pvY5SF5WpEOUS87uUxe8/s1600/KeyItem.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var KeyItemTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>貴重物品：例如靈馬哨子</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "KeyItem001",
	"icon":"KeyItem",
    "geometry": {
        "type": "Point",
		"coordinates": [6095, 5807]
    }
},



];

//重要道具Items
var Items = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhG9kSl_gxRVE0DG7h-dV2ulQKP57yRz3s7eX6SR1iswDmjMXFAYBvs6nPX5WJUfG0u8_hU5pXrP3WpgJlJ2JYazl36pgp1Vv3Uq3q0eS-59Aym4hVsU2JNkzOsmFabsmKbKSQlgLngSPRTWtOSVEHJ5i_PzT7gsm7gHIrTwwCD1-aWl4wWGikVMfxzMgk/s1600/Item.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var ItemsTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>重要道具：龜裂壺等</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Items001",
	"icon":"Items",
    "geometry": {
        "type": "Point",
		"coordinates": [6095, 6207]
    }
},



];

//鍛造石Smithing Stone
var Smithing = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisMoa1CnJnELnZR59SuKZ-E3UMumR6NsoNzlbCXnl1SumMQOmJMWCQ9KHZlFIEuV783NRFoTRQog4kXncYE02inxRNltEBpghUNVacAFTgiKtaStXE6SOviLLB4H1GCaONJZpeM8KD6Z1-m6UefI94B8uM6ATH9bw-fe7_8nG76rop0XRQSfYzkVSsxVU/s1600/Smithing.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var SomberSmithing = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq7pdagEdvXxTMC8V0dbIEkfLpR_t48mI2K9vl5T3qNJQeqqHyMn8lswKn2r6OOfKfBUz488-vr-YNlNBLNy4v2NPqVT7YDXZmYI2mRj4RaSe6gdRMCPbdISGy9cTLhaPCus6yxv4GCM56sIb9LM3NuhLpQ4xoI63TXDQxfRrvfvNsH1MgDTEbkeWAKjc/s1600/SomberSmithing.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var SmithingTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>鍛造石：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Smithing001",
	"icon":"Smithing",
    "geometry": {
        "type": "Point",
		"coordinates": [6495, 6207]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>失色鍛造石：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "SomberSmithing001",
	"icon":"SomberSmithing",
    "geometry": {
        "type": "Point",
		"coordinates": [6895, 6207]
    }
},


];


//傳說級頭目LegendsBOSS
var LegendsBOSS = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTAj_lhB8jIHSru6b-XtrzaxYsv7zQU3eqLkUizsFP3yyS6TMJzbHe3Nisu6bKR4gCnKDQUhIhHS7Vn-THw2IVRfLHKiLfUF-YSQ1p_XyRANW9aZxDLDsANyWPt4N_0DBa5N-383RMhev87T9hVwrkxNv9ModsHre7yKUdOkLRglSEfO__LcDnyQh46Co/s1600/LegendsBOSS.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var LegendsBOSSTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>傳說頭目：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "LegendsBOSS001",
	"icon":"LegendsBOSS",
    "geometry": {
        "type": "Point",
		"coordinates": [3250, 4707]
    }
},



];

//頭目BOSS
var BOSS = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBJ_IiC33OCsAuYUMt80OUGXVoLF34BkvHppNzpFVeRgHVM_pvyh1lwJ8_zHCPqh4Owjb23QVeGFttcV69HLFp0FuNGkVm0qYS0y9V_OSs7awo7pYobSKQ5v_CHaBybZWpZ7eAHW4cXL7lYWJybZrzcSFfSZAC-qqvVuzMS1_73vBZbtqh_xLreV9Gzhg/s1600/BOSS.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var BOSSTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>頭目：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "BOSS001",
	"icon":"BOSS",
    "geometry": {
        "type": "Point",
		"coordinates": [3650, 4707]
    }
},



];

//小頭目MiniBOSS
var MiniBOSS = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXes1zSHIeBEWQIWQ3eTYIU6GjxPikI0wKGYLIYL9j-f0wMJ0Y-dgryN57lwqy7ubZUPdI5DKh4CxcAKtfqZ-sGHU_57yM3qsKApYSPOuizhGbv3HfcJfVz0apEZJGexAyO5QYH6GrjiciLMV1qsji25lWAFE5f4OMj6-7Ry67OXFB_X97f3w4TXYHbhs/s1600/MiniBOSS.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var MiniBOSSTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>小頭目：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "MiniBOSS001",
	"icon":"MiniBOSS",
    "geometry": {
        "type": "Point",
		"coordinates": [4250, 4707]
    }
},



];

//菁英怪Enemy
var Enemy = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUzswlZrbJ6oXXv8bdOurcum95835XM8VQu6Io83GnppqioBq3nTn3lF9tS54g4jQLRdlyc1bD2cg39h_80uV5QHKxzLmfAq718VVil0NLK0PLCcQg1act_x-Am8Z3NjJk0bSkOCDQPRFAEjIvEkfAay71CVjrkkv4znkVQzmAa2O2x7kyHF12mr99ZSI/s1600/Enemy.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var EnemyTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>小頭目：測試</h1><p>在半毀的城牆上。</p>由<a class='goto' href='javascript:;' data-name='Grace003' data-z='7'>賜福：王室賞月地</a>往回走，右手邊城牆有小門，通過後持續往下跳，最後在半毀的城牆上。"},
	"levels": "1",
	"myid": "Enemy001",
	"icon":"Enemy",
    "geometry": {
        "type": "Point",
		"coordinates": [4650, 4707]
    }
},



];


//賜福
var grace = L.icon({
	iconUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD_7oLMhVWEpfEpWX8cCddug48WpiApzyN30DLXGpoa6pdyDx56S85UbKn4Hr-eaaHl-2M7csvB1KCm1tbmsCx-UQSovev5kGQ1APMTvMz3akhsV1tClfUZ2jc3hE_sTlXkmypgvBJn5wq3BPTMUjgFeLyrlc8UcjNfjmfrycybTTbPqHc3FxkvYml1Dg/s1600/location-site-of-grace.webp',
	shadowUrl: '',iconSize: [40, 40],iconAnchor: [18, 15],popupAnchor: [2, -12]});
var GraceTemp = [ 
{
    "type": "Feature",
    "properties": {"party": "<h1>賜福：引導之始</h1>"},
	"levels": "1",
	"myid": "Grace001",
	"icon":"grace",
    "geometry": {
        "type": "Point",
		"coordinates": [3695, 7347]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>賜福：艾雷教堂</h1>"},
	"levels": "2",
	"myid": "Grace002",
	"icon":"grace",
    "geometry": {
        "type": "Point",
		"coordinates": [3672, 7222]
    }
},
{
    "type": "Feature",
    "properties": {"party": "<h1>賜福：王室賞月地</h1>"},
	"levels": "2",
	"myid": "Grace003",
	"icon":"grace",
    "geometry": {
        "type": "Point",
		"coordinates": [1888, 3609]
    }
},



];


