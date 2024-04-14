const { startClipboardMonitor } = require('node-clip');
function handleClipboardData(err, clipboardData) {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Clipboard content:', clipboardData);

    if (clipboardData) {
      console.log('Clipboard data received successfully!');
    } else {
      console.log('No clipboard data received.');
    }
  }
}
startClipboardMonitor(handleClipboardData);
