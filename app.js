const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('i am going to next middleWare');
    //without next it won't go to next middleWare
    next(); 
})

app.use((req, res, next) => {
    console.log('i am second middleWare');
    
})

const server = http.createServer(app);

server.listen(3000);