//Express Init
var express = require("express"),
    app = express(),
    server = require("http").Server(app);

//express settings
app.set('views', __dirname + '/pages');
app.engine('html', require('ejs').renderFile);
app.engine('txt', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/:name", function(req, res){
    return res.render(req.params.name);
});

var port = process.argv[2];
if(!port) port = 82;
server.listen(port);
console.log("Server started on port "+port);