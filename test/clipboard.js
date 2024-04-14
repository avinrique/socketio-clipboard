const { spawn } = require('child_process');
const cpy = spawn('python3' , ['app.py']) 

const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");



// clipboard content
async function sendClipboardContent(data) {
    try {
        const clipboardText = data
        socket.emit("clipboardContent", clipboardText);
        console.log("Clipboard content sent to server:", clipboardText);
    } catch (error) {
        console.error("Error reading clipboard:", error);
    }
  }
socket.on("connect", () => {
    console.log("Connected with socket id:", socket.id);
  });




cpy.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
    sendClipboardContent(data)
})
cpy.stderr.on('data', (data)=>{
    console.error(`stderr: ${data}`)
})
cpy.on('close',(code)=>{
    console.log(`child process exited with code ${code}`)
})





socket.on("disconnect", () => {
  console.log("Disconnected from socket");
});



