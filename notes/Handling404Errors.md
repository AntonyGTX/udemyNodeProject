A seperate page that displays when we make wrong requesr
----------------------------------------------------------
this page can be created in the app.js itself
and the "statu" method allows us use the status code for the request
and in the order were we place middleare it must be the last of all last
And Example is shown bellow
///////////////////// Code Space /////////////////////////

//creating 404 page
app.use((req,res,next) => {
    res.status(404).send(`
        <h1  
            style="
                text-align: center;
                font-weight: bold;
                margin-top: 50px;
                color: red;
                font-size: 30px;
            ">
            Page Not Found
        </h1>
        <hr>
    `)
})

///////////////////// Code Space /////////////////////////

Ffilering routes with the file name

