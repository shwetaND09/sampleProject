var express    = require('express');
var app        = express();
var constant   =require('./constant')
var path=require('path');
var port       = process.env.port||constant.port;
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '4MB'}));
// app.all('*', function(req, res) {
	
// 	res.sendFile(path.join(__dirname, "/public", "index.html"));
// });
app.listen(port);
require('./routes.js')(app);