const { io } = require("socket.io-client");
const socket = io("http://172.16.6.144:3001");
const { startClipboardMonitor } = require('nodepy-clip');


async function sendClipboardContent(data) {
  try {
      const clipboardText = data
      socket.emit("clipboardContent", clipboardText);
  } catch (error) {
      console.error("Error reading clipboard:", error);
  }
}
socket.on("connect", () => {
  console.log("Connected with socket id:", socket.id);
});



function handleClipboardData(err, clipboardData) {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Clipboard content:', clipboardData);
    sendClipboardContent(clipboardData)

    if (clipboardData) {
      console.log('Clipboard data received successfully!');
    } else {
      console.log('No clipboard data received.');
    }
  }
}

startClipboardMonitor(handleClipboardData);

socket.on("connect", () => {
  console.log("Connected with socket id:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from socket");
});

