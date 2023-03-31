//IMPORTS
const express = require('express');
const bodyParser = require('body-parser')

//importing path package to handle the routes
const path = require('path')

const app = express();

//importingAdmin.js
const addminRoutes = require('./routes/admin')
//importing shop.js
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

//serving static files
app.use(express.static(path.join(__dirname, 'public')))

//order maters don't change the order and by just using the variable in the app.use we are abobe to import the logic from an different page
//This filter /admin is used for directing the page through this
app.use('/admin', addminRoutes);

//exported the main page roues
app.use(shopRoutes);



//creating 404 page
// app.use((req,res,next) => {
//     res.status(404).send(`
//         <h1  
//             style="
//                 text-align: center;
//                 font-weight: bold;
//                 margin-top: 50px;
//                 color: red;
//                 font-size: 30px;
//             ">
//             Page Not Found
//         </h1>
//         <hr>
//     `)
// })

//sending page from html
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '/', 'Views', '404.html'))
})




app.listen(3000);