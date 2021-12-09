// for production we should use wss, but for development ws is fine 
const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', () => {
    console.log('We are connected!');

    // ws.send('Hey! How is it going?');
});

// ws.addEventListener('message', (msg) => {
//     console.log(`New message from server: ${msg.data}.`);
// });

ws.addEventListener('message', ({ data }) => {
    console.log(`New message from server: ${data}.`);
});