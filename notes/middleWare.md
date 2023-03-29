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

