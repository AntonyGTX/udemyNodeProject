MiddleWare
---------------------------------------------
Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.


.use
---------------------------
use() Method. Express JSServer Side ProgrammingProgramming. The app. use() method mounts or puts the specified middleware functions at the specified path. This middleware function will be executed only when the base of the requested path matches the defined path.

we use a function to handle this spave and this function takes three arguments
    1. request
    2. response
    3. next

but you can rename this argument but its recomended That we use the name as it is.
And note that "next" is a function that is used as a argument.
this"next" function used for navigating the request to the next Middleware

Example 
-------
app.use((req, res, next) => {
    console.log('i am going to next middleWare');
    //without next it won't go to next middleWare
    next(); // this travel in a 
})

app.use((req, res, next) => {
    console.log('i am second middleWare');
    
})

IN The Terminal it will be displayed like this
AntonyGTX@DESKTOP-OU2D6TO MINGW64 ~/UdemyNodeProject/udemyNodeProject (main)
$ node app.js
i am going to next middleWare
i am second middleWare


note if we don't use "next" it will not go to the next middleWare in line and it goes to the response
----------------------------------------------------------------------------------------------------------------

Adding Response To The MiddleWare
----------------------------------

res,send
-------------
this sends a body that has a data type as any so we can send any type of file in them
and this also sets the request headers automatically but you can change it manually by using 
"res.setHeaders" by the "res" is the argument we given in the start of the function and this sends the response of the 
request

but look at the this example
app.use((req, res, next) => {
    console.log('i am going to next middleWare');
    next(); 
})

app.use((req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>Hello From express</h1>');
})


in the above code we can use thw res in the first function itself but next will not work 
from that point onwards
because we are sending the response to the request made in the first middleware itself 

----------------------------------------------------------------------------------------------------------------------------------

Shortening the create server methods using express
----------------------------------------------------

The traditional way of writting an server creation
///////////////////////////////////////////////////////////////////
const server = http.createServer(app);
server.listen(3000);
////////////////////////////////////////

But now we can shorten the process by using this
////////////////////////////////////////////////////////////////
app.listen(3000)
/////////////////////

By changing this we shorten the code and it works like the other method
and its method is shored in express root global object


//when using express this is not required 
const http = require('http');

we don't need to import http to create the server
when using express
