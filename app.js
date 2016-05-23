var express = require('express'),
	app = express(),

server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket) {
	socket.on('send message',function(data) {
		io.sockets.emit('new message',data);
	})
})

















// var mongo = require('mongodb').MongoClient,
// client = require('socket.io').listen(8080).sockets;


// mongo.connect('mongodb://127.0.0.1/chat', function(err,db) {
// 	if (err) throw err;

// 	client.on('connection',function(socket) {
// 		//wait for input
// 		socket.on('input', function(data){
			
// 		})
// 	});
// });