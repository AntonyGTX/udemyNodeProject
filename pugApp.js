//IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//extracting functionality
const app = express();

//setting up pug engine template that provide dynamic template and its configuration
app.set('view engine', 'pug')
//additional configuration where the template path is located and it only supports a folder name called as = "Views"
app.set('Views', 'Views');

//importing from other files
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//----------------------------------- code space for handling middleware and routes logic-------------------------------

//parsing request and response body
app.use(bodyParser.urlencoded({extended: false}));

//serving static files
app.use(express.static(path.join(__dirname, 'public')))

//This filter /admin is used for directing the page through this
app.use('/admin', adminData.routes);

//exported the main page roues
app.use(shopRoutes);

//sending page from html
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '/', 'htmlViews', '404.html'))
})


//----------------------------------- code space end ------------------------------------------------------------------

//---------------------------------- server creation and port whic it listens ----------------------------------------

app.listen(3000);

//----------------------------------- code space end ------------------------------------------------------------------