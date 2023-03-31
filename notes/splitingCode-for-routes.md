Creating different files to handle our code
Create files accordingly
then inside the file first import express in them
And there is a function in express to navigate us between different files

An Eample for this is given bellow
////////////////// code Space ///////////////////

const express = require('express');

//creating an variable to store routes function in express
const router = express.Router();

router.use('/Add_products', (req, res, next) => {
    console.log('i am second middleWare');
    res.send(`<form action="/Product" method="POST"><input type="text" name="Title"> <button type="Submit">Add Product</button></form>`);
})

router.post('/Product', (req, res, next) => {
    console.log(req.body);
    //Express way of reDirecting usually way doing involes adding status code this redirect() function has everything you need
    res.redirect('/');
})

module.exports = router;

////////////////// code Space ///////////////////


the module. export is the method that export this file and by this router we export all the logic done in page
now we change the app.use to app.get in our case we use router.get
and this method just works the same as use but only handles get request


NOW IMPORT THIS ADMIN.JS FILE TO APP.JS
------------------------------------------
we first create an constant variable and store the location or absolute path of the file
and in the handling middleware part just add the constant variable inside app.js 
"app.use(adminRoutes)"
and export other method which can be exported from different files
An example of the new app.js file 

////////////////// code Space ///////////////////

//IMPORTS
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//importingAdmin.js
const addminRoutes = require('./routes/admin')
//importing shop.js
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

//order maters don't change the order and by just using the variable in the app.use we are abobe to import the logic from an different page
app.use(addminRoutes);
//exported the main page roues
app.use(shopRoutes);

app.listen(3000);

////////////////// code Space ///////////////////

and when we use "get" the order of the middleware does not matter
but when you use "use" the order must not change
and we used "get" in admin.js and shop.js but in app.js we can just use "use" type

Filter An common word that handles a specific route you mention
and this can be done in the app.js file itself
and without this "/admin' word the pages that mentioned on cannot be accessed
An example is shown bellow
////////////////// code Space ///////////////////

//This filter /admin is used for directing the page through this
app.use('/admin', addminRoutes);

in the form that depend on this is also change

router.get('/Add_products', (req, res, next) => {
    console.log('i am second middleWare');
    res.send(`<form action="/admin/Add_products" method="POST"><input type="text" name="Title"> <button type="Submit">Add Product</button></form>`);
})

////////////////// code Space ///////////////////


