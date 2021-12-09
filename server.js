const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000

const wss = new WebSocket.Server({ port: PORT });

// listen for connection from the clients 
wss.on('connection', (ws) => {
    console.log('Client was connected.');

    const rs = fs.createReadStream(path.join(__dirname, 'data', 'test.txt'), { encoding: 'utf-8' }); 
    rs.on('data', (dataChunk) => {
        ws.send(dataChunk);
    })

    ws.on('message', (data) => {
        console.log(`New message from client: ${data}.`);
    })

    ws.on('close', () => {
        console.log('Client has diconnected.');
    })
})

process.on('uncaughtException', (err) => {
    console.error(`Uncaught error: ${err}`);
    process.exit(1);
});