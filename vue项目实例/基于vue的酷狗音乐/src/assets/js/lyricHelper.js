!function(){
	var lyricHelper = {
		_data: null,
		_offset: null,
		_lastIndex: null,
		parseLyric: function(lrc){
			//格式化歌詞文本
			var lyrics = lrc.split("\n");
			  var lrcObj = {};
			  for(var i=0;i<lyrics.length;i++){
			      var lyric = decodeURIComponent(lyrics[i]);
			      var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
			      var timeRegExpArr = lyric.match(timeReg);
			      if(!timeRegExpArr)continue;
			      var clause = lyric.replace(timeReg,'');
			      for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
			          var t = timeRegExpArr[k];
			          var min = Number(String(t.match(/\[\d*/i)).slice(1)),
			              sec = Number(String(t.match(/\:\d*/i)).slice(1));
			          var time = min * 60 + sec;
			          lrcObj[time] = clause;
			      }
			  }
			  return lrcObj;
		},
		getOneLine: function(time){
			//獲取單行歌詞
			var text_temp;
			var currentTime = Math.round(time);
			var lrc = this._data[currentTime];
			if(!lrc)return;
			var text = lrc.text;
			if(text != text_temp){
				text_temp = text;
			}
			return text;
		},
		getTwoLine: function(time){
			//獲取多行歌詞
			var line = this.getOneLine(time);
			if (line) {
			    var index = line.index;
			    var arr = $.extend(true, [], this._data.lyrics);
			    arr[index].current = true;
			    if ((index + 1) % 2 === 0) {
			        return [arr[index + 1] || null, arr[index]];
			    }
			    return [arr[index], arr[index + 1] || null];
			}
		},
		_init: function(data){
			var lyricData = this.parseLyric(data);
			// console.log(lyricData);
			this._data = lyricData;
			this._lastIndex = -1;
			return lyricData;
		}

	};

	module.exports = lyricHelper;
}();