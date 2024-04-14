const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app);
const socketIO = require("socket.io")
const {copyToClipboard} = require('nodepy-clip');
const io = new socketIO.Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
app.get("/",(req,res)=>{
    console.log(io.engine.clientsCount)
    console.log("hello")
})
io.on('connection', (socket) => {

    console.log(`Client connected  socket client id : ${socket.id}`);
    socket.on('clipboardContent', (clipboardText) => {
        console.log(`Received clipboard content from client: ${clipboardText}`);
        copyToClipboard(clipboardText);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
server.listen(3001,(req,res) => {
    console.log("Server started at port 3001")
});