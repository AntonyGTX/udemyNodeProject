serve files staticaly
--------------------------
not handled by router or middleware but directly forewarded to the file system
now go to the app.js file and add this path as shown bellow
////////////////// Code Space ////////////////////////////////////

    app.use(express.static(path.join(__dirname, 'public')))

////////////////// Code Space ////////////////////////////////////

what it does is it looks for anything that is using a public path and connects node js with it
and once this done and go to the part were you want to add your css file and add the link like this

////////////////// Code Space ////////////////////////////////////

    <link rel="stylesheet" href="/shop.css">

////////////////// Code Space ////////////////////////////////////
whats the difference just that we don't need to specify the folder name as public while setting the path it automatically detect them
and this is not only applicable to css files but you can uplaod any static content
