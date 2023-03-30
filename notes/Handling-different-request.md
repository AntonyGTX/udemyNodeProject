HANDLING DIFFERENT REQUEST
------------------------------------

Order of handling request 
========================
The example is used for explaining this process

/////////////////////////////////////////////////////////////////codde space/////////////

app.use('/products', (req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>You sre directed to prododuct page</h1>');
})

app.use((req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>Hello From express</h1>');
})

///////////////////////////////////////////////////////////////////code space///////////////

according to node the first function is the first to handle the request and if u use "next"
it will send the request to the next function in line
but the order matters even if next is not called it hanles request lin by line

This middleware function always runs because it stands first in the order
//////////////////////////// code-space /////////////////////////////////////////////

app.use('/', (req, res, next) => {
    console.log('this always run');           ///this runs always because of "next"
    next()
})

app.use('/products', (req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>You sre directed to prododuct page</h1>');
})

app.use('/welcome', (req, res, next) => {
    console.log('i am second middleWare');
    res.send('<h1>Hello From express</h1>');
})

////////////////////////////// code space /////////////////////////////////////
