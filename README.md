# Socket.IO Server and Client Example

This is a simple example of a Socket.IO server and client application using Express and Node.js.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/avinrique/socket_io
   cd socket_io
2. nstall dependencies using npm:
   ```bash
   npm install 
## Running the Server
1. Run socket.io server
   ```bash
   node server.js
## Running the client
1. Run socket.io client using nodejs
   ```bash
   node client.js
## Modifying Server URL in Client
### Change the server address for the socketio connection
```javascript
const socket = io("http://your-server-ip-or-domain");
```
```html
<script>
const socket = io("http://your-server-ip-or-domain")
</script>
```