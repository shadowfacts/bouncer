var fs = require('fs'),
	bouncy = require('bouncy');

var server = bouncy(function(req, res, bounce) {
	fs.readFile('bouncer.json', function(err, data) {
		if (err) {
			console.error('Error reading bouncer.json');
			throw err;
		}
		var json = JSON.parse(data);
		if (json[req.headers.host] != undefined) {
			bounce(json[req.headers.host]);
		} else {
			console.error('Match for host ' + req.headers.host + ' was not found in bouncer.json');
			res.statusCode = 404;
			res.end('No such host');
		}
	});
});
server.listen(80);