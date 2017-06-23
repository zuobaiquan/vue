import Vue from 'vue'
import { Indicator } from 'mint-ui'

const state = {
	offset: 0,
	havemore: false,
	hot_list : {},
	singer_list : {},
	offset: 0,
	songlist: [],
	havemore: null,
	singerInfo: {
		singerId: null,
		img_url: null,
		intro: null,
		name: null
	},
	china_male: {
		typeId: 1,
		singer_list:  [
			{
				singer_name: '薛之谦',
				singer_id: 2517,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170515/20170515114300444.jpg' 
			},
			{
				singer_name: '祁隆',
				singer_id: 245815,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160908/20160908122327220.jpg' 
			},
			{
				singer_name: '张学友',
				singer_id: 2507,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140527/20140527095042283066.jpg' 
			},
			{
				singer_name: '周杰伦',
				singer_id: 7994,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170119/20170119105146606.jpg' 
			},
			{
				singer_name: '陈奕迅',
				singer_id: 1077,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170518/20170518003547365.jpg' 
			},
			{
				singer_name: '林俊杰',
				singer_id: 1052,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161209/20161209164303152140.jpg' 
			},
			{
				singer_name: '杨宗纬',
				singer_id: 8477,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170109/20170109150710384221.jpg' 
			},
			{
				singer_name: '汪苏泷',
				singer_id: 211833,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170412/20170412162146478.jpg' 
			},
			{
				singer_name: '许嵩',
				singer_id: 1557,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20150108/20150108174616117572.jpg' 
			},
			{
				singer_name: '李荣浩',
				singer_id: 75672612,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170524/20170524192830978.jpg' 
			}
				],	
		title: '华语男歌手'
	},
	china_female: {
		typeId: 2,
		singer_list: [
				{
					singer_name: '庄心妍',
					singer_id: 28646904,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161012/20161012161017418.jpg'
				},
				{
					singer_name: 'G.E.M邓紫棋',
					singer_id: 7898,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161206/20161206150644553.jpg'
				},
				{
					singer_name: '王菲',
					singer_id: 45561,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161206/20161206001829989.jpg'
				},
				{
					singer_name: '那英',
					singer_id: 1076,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160711/20160711151037573639.jpg'
				},
				{
					singer_name: '陈慧娴',
					singer_id: 11699,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160918/20160918160121544.jpg'
				},
				{
					singer_name: '梁静茹',
					singer_id: 1095,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160728/20160728235333363212.jpg'
				},
				{
					singer_name: '邓丽君',
					singer_id: 1091,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140118/20140118112603422807.jpg'
				},
				{
					singer_name: '郁可唯',
					singer_id: 1581,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170105/20170105123749140115.jpg'
				},
				{
					singer_name: '张碧晨',
					singer_id: 163361619,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170106/20170106171217388.jpg'
				},
				{
					singer_name: 'ALin',
					singer_id: 1968,
					img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160914/20160914154505224.jpg'
				}
			],
		title: '华语女歌手'
	},
	china_group: {
		typeId: 3,
		title: '华语组合',
		singer_list: [
			{
				singer_name: 'Beyond',
				singer_id: 1100,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160418/20160418100531196.jpg'
			},
			{
				singer_name: '凤凰传奇',
				singer_id: 1490,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170410/20170410164949175.jpg'
			},
			{
				singer_name: 'TFBOYS',
				singer_id: 81381913,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160829/20160829115057579.jpg'
			},
			{
				singer_name: '五月天',
				singer_id: 1098,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140117/20140117153257704856.jpg'
			},
			{
				singer_name: '筷子兄弟',
				singer_id: 9295,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170101/20170101005922562.jpg'
			},
			{
				singer_name: '羽泉',
				singer_id: 1389,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120614277.jpg'
			},
			{
				singer_name: 'Twins',
				singer_id: 1050,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120602972.jpg'
			},
			{
				singer_name: '牛奶咖啡',
				singer_id: 1445,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160418/20160418100536676.jpg'
			},
			{
				singer_name: 'By2',
				singer_id: 1418,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140508/20140508100241960174.jpg'
			},
			{
				singer_name: '草蜢',
				singer_id: 1462,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140227/20140227142444706181.jpg'
			}
		]
	},
	rihan_male: {
		typeId: 4,
		title: '日韩男歌手',
		singer_list: [
			{
				singer_name: 'G-DRAGON',
				singer_id: 56824000,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161229/20161229183012269.jpg'
			},
			{
				singer_name: 'PSY',
				singer_id: 18104396,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120225741.jpg'
			},
			{
				singer_name:'久石让',
				singer_id: 290071,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140220/20140220165820659073.jpg'
			},
			{
				singer_name: '宗次郎',
				singer_id: 44628903,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20151219/20151219102814345.jpg'
			},
			{
				singer_name: 'Rain',
				singer_id: 1175,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170116/20170116093608209.jpg'
			},
			{
				singer_name: 'The One',
				singer_id: 55390877,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140529/20140529112315416902.jpg'
			},
			{
				singer_name: '黄致列',
				singer_id: 232953783,
				img_url: 'http://singerimg.kugou.com/uploadpic/softhead/200/20161011/20161011114942779.jpg'
			},
			{
				singer_name: '张根硕',
				singer_id: 443814,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140218/20140218190503222050.jpg'
			},
			{
				singer_name: 'K.Will',
				singer_id: 76806384,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160829/20160829155941486.jpg'
			},
			{
				singer_name: '朴灿烈',
				singer_id: 232945117,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160511/20160511101825132285.jpg'
			}
		]
	},
	rihan_female: {
		typeId: 5,
		title: '日韩女歌手',
		singer_list: [
			{
				singer_name: '朴智妍',
				singer_id: 92456559,
				img_url: 'http://singerimg.kugou.com/uploadpic/softhead/200/20140520/20140520170517808876.jpg'
			},
			{
				singer_name: 'Ailee',
				singer_id:85577581,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120517392.jpg'
			},
			{
				singer_name: 'IU',
				singer_id: 55625,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170421/20170421161113482.jpg'
			},
			{
				singer_name: 'Sara',
				singer_id: 1320,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140213/20140213165111325756.jpg'
			},
			{
				singer_name: '白智英',
				singer_id: 1120,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20150324/20150324152438788516.jpg'
			},
			{
				singer_name: '泫雅',
				singer_id: 85121515,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160801/20160801111637875422.jpg'
			},
			{
				singer_name: '李贞贤',
				singer_id: 254110,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120233532.jpg'
			},
			{
				singer_name: '浜崎あゆみ',
				singer_id: 1124,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20150201/20150201114617891250.jpg'
			},
			{
				singer_name: '尹美莱',
				singer_id: 86934205,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140604/20140604132229338358.jpg'
			},
			{
				singer_name: '简美妍',
				singer_id: 1407,
				img_url: 'http://singerimg.kugou.com/uploadpic/softhead/200/20120330/20120330171435134204.jpg'
			},

		]
	},
	rihan_group: {
		typeId: 6,
		title: '日韩组合',
		singer_list: [
			{
				singer_name: 'BINGBANG',
				singer_id: 70810,
				img_url:'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161213/20161213183633540.jpg'
			},
			{
				singer_name: 'T-ara',
				singer_id: 18342140,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170613/20170613194547222.jpg'
			},
			{
				singer_name: 'EXO',
				singer_id: 61885914,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161219/20161219112538266.jpg'
			},
			{
				singer_name: '少女时代',
				singer_id: 56914,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160418/20160418100501854.jpg'
			},
			{
				singer_name: 'AOA',
				singer_id: 26180441,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160516/20160516144648737671.jpg'
			},
			{
				singer_name: '防弹少年团(BTS)',
				singer_id: 102878022,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170210/20170210131911377.jpg'
			},
			{
				singer_name: 'Apink',
				singer_id: 62965150,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161215/20161215184233903.jpg'
			},
			{
				singer_name: '高耀太',
				singer_id: 2550,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140901/20140901135805825214.jpg'
			},
			{
				singer_name: 'EXID',
				singer_id: 87958462,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170410/20170410111700195.jpg'
			},
			{
				singer_name: '4minute',
				singer_id: 85139924,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140317/20140317154047564023.jpg'
			}
		]
	},
	oumei_male: {
		typeId: 7,
		title: '欧美男歌手',
		singer_list: [
			{
				singer_name: 'Alan Walker',
				singer_id: 198820448,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170316/20170316182005449.jpg'
			},
			{
				singer_name: 'Justin Bieber',
				singer_id: 88985,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161109/20161109155400970766.jpg'
			},
			{
				singer_name: 'Charlie Puth',
				singer_id: 221570469,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170421/20170421164338489.jpg'
			},
			{
				singer_name: 'Wiz Khalifa',
				singer_id: 1773400,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161109/20161109160316706340.jpg'
			},
			{
				singer_name: 'Bruno Mars',
				singer_id: 96394,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161109/20161109160818377591.jpg'
			},
			{
				singer_name: 'Michael Jackson',
				singer_id: 83626,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140409/20140409145904650908.jpg'
			},
			{
				singer_name: 'Eminem',
				singer_id: 83632,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170517/20170517142348192.jpg'
			},
			{
				singer_name: 'Akon',
				singer_id: 11704,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160918/20160918164501807.jpg'
			},
			{
				singer_name: 'Jason Chen',
				singer_id: 65791716,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160703/20160703142246434665.jpg'
			},
			{
				singer_name: 'Zedd',
				singer_id: 66079129,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170228/20170228130159106.jpg'
			}
		]
	},
	oumei_female: {
		typeId: 8,
		title: '欧美女歌手',
		singer_list: [
			{
				singer_name: 'Taylor Swift',
				singer_id: 9319,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140219/20140219154202584035.jpg'
			},
			{
				singer_name: 'Lady Gaga',
				singer_id: 6792,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160909/20160909155300175.jpg'
			},
			{
				singer_name: 'Adele',
				singer_id: 172072,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170316/20170316184254744.jpg'
			},
			{
				singer_name: 'Rihanna',
				singer_id: 11703,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160419/20160419164602544498.jpg'
			},
			{
				singer_name: 'Katy Perry',
				singer_id: 2716,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170211/20170211213110643338.jpg'
			},
			{
				singer_name: 'Avril Lavigne',
				singer_id: 11701,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170426/20170426152155521.jpg'
			},
			{
				singer_name: 'Mariah Carey',
				singer_id: 3944,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120415496.jpg'
			},
			{
				singer_name: 'LenKa',
				singer_id: 11714,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140829/20140829154146138673.jpg'
			},
			{
				singer_name: 'Carly Rae Jepsen',
				singer_id: 2387380,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120523986.jpg'
			},
			{
				singer_name: 'Britney Spears',
				singer_id: 11720,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120315827.jpg'
			}
		]
	},
	oumei_group: {
		typeId: 9,
		title: '欧美组合',
		singer_list: [
			{
				singer_name: 'Maroon 5',
				singer_id: 55191,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170316/20170316183028992.jpg'
			},
			{
				singer_name: 'Groove Coverage',
				singer_id: 1612,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120501103.jpg'
			},
			{
				singer_name: 'Westlife',
				singer_id: 49248,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140403/20140403171832528255.jpg'
			},
			{
				singer_name: 'Owl City',
				singer_id: 177787,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140327/20140327120923892173.jpg'
			},
			{
				singer_name: 'Fall Out Boy',
				singer_id: 174819,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161012/20161012162713655.jpg'
			},
			{
				singer_name: 'The Chainsmokers',
				singer_id: 108128682,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20170410/20170410101849838.jpg'
			},
			{
				singer_name: 'OneRepublic',
				singer_id: 381293,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161123/20161123154812538305.jpg'
			},
			{
				singer_name: 'Coldplay',
				singer_id: 2713,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161123/20161123145446371871.jpg'
			},
			{
				singer_name: 'Backstreet Boys',
				singer_id: 11732,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20140901/20140901103545412614.jpg'
			},
			{
				singer_name: 'One Direction',
				singer_id: 2375465,
				img_url: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20160429/20160429120518896.jpg'
			}
		]
	}

}

const mutations = {
	getSingerHotList (state,payload) {
		state.offset = payload.offset;
		state.hot_list = payload.hot_list;
		state.havemore = payload.havemore;
	},
	updateSingerList (state,payload) {
		state.singer_list = payload.singer_list;
	},
	getSingerInfo (state,payload) {
		state.singerInfo = payload.singerInfo;
	},
	getSingerSongs (state,payload) {
		state.offset = payload.offset;
		state.songlist = payload.songlist;
		state.havemore = payload.havemore
	},
	updateSingerOffset (state,payload) {
		state.offset = payload.offset;
	}

}

const actions = {

	getSingerList ({state,commit},payload) {
		if(payload.typeId ==0) {
			Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&format=jsonp&offset='+payload.offset+'&limit=30')
				.then(res => {
					//console.log(res);
					Indicator.close();
					if(res.status == 200) {
						commit({
							type: 'getSingerHotList',
							offset: payload.offset,
							hot_list: res.body.artist,
							havemore: res.body.havemore
						})
					}
				})
		}else{
			switch(payload.typeId) {
				case 1 : commit({
							type: 'updateSingerList',
							singer_list: state.china_male
						});
					break;
				case 2 : commit({
							type: 'updateSingerList',
							singer_list: state.china_female
						});
					break;
				case 3 : commit({
						type: 'updateSingerList',
						singer_list: state.china_group
						});
					break;
				case 4 : commit({
						type: 'updateSingerList',
						singer_list: state.rihan_male
						});
					break;
				case 5 : commit({
						type: 'updateSingerList',
						singer_list: state.rihan_female
						});
					break;
				case 6 : commit({
						type: 'updateSingerList',
						singer_list: state.rihan_group
						});
					break;
				case 7 : commit({
						type: 'updateSingerList',
						singer_list: state.oumei_male
						});
					break;
				case 8 : commit({
						type: 'updateSingerList',
						singer_list: state.oumei_female
						});
					break;	
				case 9 : commit({
						type: 'updateSingerList',
						singer_list: state.oumei_group
						});
					break;			
			}
		}
	},
	getSingerInfo ({commit},payload) {
		Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.getinfo&format=json&tinguid='+payload.artistId)
			.then(res => {
				//console.log(res);
				if(res.status == 200) {
					commit({
						type: 'getSingerInfo',
						singerInfo: {
							singerId: payload.artistId,
							img_url: res.body.avatar_s500,
							intro: res.body.intro,
							name: res.body.name
						}
					})
				}
			})
	},
	getSingerSongs ({commit},payload) {
		Vue.http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.getSongList&format=jsonp=2&tinguid='+payload.artistId+'&offset='+payload.offset+'&limits=30')
			.then(res => {
				Indicator.close();
				if(res.status == 200) {
					commit({
						type: 'getSingerSongs',
						songlist: res.body.songlist,
						havemore: res.body.havemore,
						offset: payload.offset
					})
				}
			})
	}

}

export default {
	state,
	mutations,
	actions
}