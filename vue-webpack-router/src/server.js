var express = require('express');
var URL = require('url');
var path = require('path');
var app = express();
var port = 8081;
var request = require('request');
app.all('/api/', function(req, res, next) {
	var url = URL.parse(req.url).query.split("tourl=")[1];
	var referer = URL.parse(url).protocol + '//' + URL.parse(url).hostname;
	var obj = {
		url: url,
		method: req.method,
		headers: {
			'Referer': referer
		}
	}
	req.pipe(request(obj)).pipe(res)

})

app.listen(port, function() {
	console.log('服务器开启成功！')
})
app.use(express.static(path.join(process.cwd(), 'player')));
console.log(path.join(process.cwd(), 'player'))