const http = require('http')


//----------------------------------------------------------------------------------------------------------------------------------

//importing a file we created for handling request and resonse
//this import structure does not change for object import also
// const routes = require('./routes')

//importing the logic of the request and response by using the const variable = routes
// const server = http.createServer(routes)

//example for handling importing text
// console.log(routes.exampleTest)

//example of importing object method for handling request and response
// const server = http.createServer(routes.handler)

//----------------------------------------------------------------------------------------------------------------------------------

// using express in our project
//importing express
const express = require('express');



//example for launching a server in port 3000
server.listen(3000)