Array values can change:
-----------------------------------
lets take an example
const product = [];

usually the variable name cannot be changed and values like string cannot be changed but array is different the values inside the array can change. only the elements inside will change but the array object cannot change.

After creating the constant 
we change the way we export the admin.js file to app.js or any other file

old way of exporting
/////////// code space //////////////////

    module.exports = router;

/////////// code space //////////////////

..........................................................................

new way of exporting the file
/////////// code space start //////////////////

    exports.routes = router;
    exports.products = products;

/////////// code space end //////////////////

note 'export' is a javascript element and
"routes amd products" is a element or names we are creating write there
and after the quals are the constant variable we created above like "const products"

and after this go to app.js and make change there also

/////////// code space start //////////////////
    const adminData = require('./routes/admin')
/////////// code space end //////////////////

we changed the name of the constant and when we use them in app.use middleware
we trail them like bellow

/////////// code space start //////////////////

    app.use('/admin', adminData.routes);

/////////// code space end //////////////////


------------------------------------------------------------------------------------------------------
Pushing the request body that user type in the field to the 
empty array object known as "products'

/////////// code space start //////////////////

    router.post('/Add_products', (req, res, next) => {
    //pushing the values that user inputs into this constant object = "products"
        products.push({ title: req.body.title })
        res.redirect('/');
    })

/////////// code space end //////////////////

and then we can shop this on the console of the shop page as shown bellow
importing the admin.js product to shop.js and example is shown bellow
/////////// code space start //////////////////

    const adminData = require('./admin');

/////////// code space end //////////////////

now in the console we display the user input request body
/////////// code space start //////////////////

   router.get('/', (req, res, next) => {
        console.log('From shop', adminData.products); // this were we console the input that user give
        res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'));
    })  

/////////// code space end //////////////////

Output shown in terminal
////////////// output in terminal start /////////////////////////////

    [nodemon] starting `node app.js`
    From shop [ { title: 'new try jesus' } ]

////////////// output in terminal end /////////////////////////////
