var busesito_app = require('express')();
const { appendFile } = require('fs');
const { Socket } = require('socket.io');
var http = require('http').createServer(busesito_app);
var io = require('socket.io')(http);

const { joinUser, removeUser } = require('./users')

busesito_app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let thisRoom = "";

io.on("connection", (socket) => {
  console.log("New connection!");
});

io.on("join room", (userName, room) => {
  console.log(userName + ' se ha unido a la sala ' + room);
})

http.listen(3000);