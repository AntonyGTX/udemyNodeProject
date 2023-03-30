//when using express this is not required 
// const http = require('http');


const express = require('express');

const app = express();

// We don't need this middleware now when we are creating different routes
// app.use((req, res, next) => {
//     console.log('i am going to next middleWare');
//     //without next it won't go to next middleWare
//     next(); 
// })


//the function that always run
app.use('/', (req, res, next) => {
    console.log('this always run');
    next()
})

app.use('/products', (req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>You sre directed to prododuct page</h1>');
})

app.use('/welcome', (req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>Hello From express</h1>');
})

//using express for creating server
app.listen(3000);

//-----------------------------------------------------------------------
//old way of creating server
// const server = http.createServer(app);
// server.listen(3000);
//----------------------------------------------------------------------


