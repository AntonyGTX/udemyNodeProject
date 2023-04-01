const express = require('express');

//importing path package to handle the routes
const path = require('path');

const router = express.Router();

//importing data from admin.js
const adminData = require('./admin');


//Replacing the above code with html
// router.get('/', (req, res, next) => {
//     console.log('From shop', adminData.products);
//     res.sendFile(path.join(__dirname, '../', 'htmlViews', 'shop.html'));
// })

//unlike above in template engine we don't need mention the path with lots of elements
// just type the name of the template
//-----------------------------------
//rendering the response from pug 
router.get('/', (req, res, next) => { 
    const product = adminData.products;
    //now other than passing the template in res we also now pass an object that get its source from "admin.products"
    res.render('shop', {productArray: product, newTitle: 'shop'})
})


module.exports = router;