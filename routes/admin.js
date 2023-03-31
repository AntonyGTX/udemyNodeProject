const express = require('express');
//importing path package to handle the routes
const path = require('path')

//creating an variable to store routes function in express
const router = express.Router();

//this method or page only acessed with the /admin route mentioned in app.js
// router.get('/Add_products', (req, res, next) => {
//     console.log('i am second middleWare');
//     res.send(`<form action="/admin/Add_products" method="POST"><input type="text" name="Title"> <button type="Submit">Add Product</button></form>`);
// })


// using html pages
router.get('/Add_products', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", 'Views', 'add-product.html'))
})

//this method or page only acessed with the /admin route mentioned in app.js
router.post('/Add_products', (req, res, next) => {
    console.log(req.body);
    //Express way of reDirecting usually way doing involes adding status code this redirect() function has everything you need
    res.redirect('/');
})


module.exports = router;