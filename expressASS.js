//i already created the project and imported the express in my project

//importing express
const express = require('express');

//creating an variable to store express functionality
const app = express()

//creating middleware
app.use((req, res, next) => {
    console.log('created first middleware');
    next();
})

app.use((req, res, next) => {
    console.log('created Second middleware');
    next();
})

//last task creating two routs
app.use('/user', (req, res) => {
    res.send('<h1>Welcome to student portal</h1>')

})

//the rout 
app.use('/', (req, res) => {
    res.send('<h1>Welcome express Assignment</h1>')
})

//creating server using express
app.listen(4200);