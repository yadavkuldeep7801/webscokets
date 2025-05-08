
import express from 'express';
import { WebSocket,WebSocketServer } from 'ws';

const httpserever = express().listen(3000)
const wss = new WebSocketServer({ server: httpserever});


wss.on('connection',(ws)=>{
       console.log('client is connected');
ws.on('message' ,function message(data ,isbinary) {
    console.log("Received: %s", data, isbinary);


    
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isbinary });
        }
    });

    ws.send('hello from server');
})
 ws.on('data' ,()=>{

    console.log('data is received');
 })
ws.on('close',()=>{
    console.log('client is disconnected');
    
})
})
