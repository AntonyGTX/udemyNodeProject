//when using express this is not required 
// const http = require('http');

//IMPORTS
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// We don't need this middleware now when we are creating different routes
// app.use((req, res, next) => {
//     console.log('i am going to next middleWare');
//     //without next it won't go to next middleWare
//     next(); 
// })

//the function that always run
// app.use('/', (req, res, next) => {
//     console.log('this always run');
//     next()
// })

app.use(bodyParser.urlencoded({extended: false}));

//Adding a form in the response and directing to an new middleware known as products
// app.use('/Add_products', (req, res, next) => {
//     console.log('i am second middleWare');
//     res.send(`<form action="/Product" method="POST"><input type="text" name="Title"> <button type="Submit">Add Product</button></form>`);
// })

// app.use('/Product', (req, res, next) => {
//     console.log(req.body);
//     //Express way of reDirecting usually way doing involes adding status code this redirect() function has everything you need
//     res.redirect('/');
// })

//imported this logic in admin.js this will work from there
// using app.post that is only used for post request
// app.post('/Product', (req, res, next) => {
//     console.log(req.body);
//     //Express way of reDirecting usually way doing involes adding status code this redirect() function has everything you need
//     res.redirect('/');
// })

app.use('/', (req, res, next) => {
    console.log('i am main middleWare');
    res.send(`
        <h1 
            style="
                text-align: center;
                font-weight: bold;
                margin-top: 20px;
            ">You Reached The Home Page
        </h1>
    `)
})

//using express for creating server
app.listen(3000);

//-----------------------------------------------------------------------
//old way of creating server
// const server = http.createServer(app);
// server.listen(3000);
//----------------------------------------------------------------------


