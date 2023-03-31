BODY PARSER IN NODE JS
----------------------------------

First install the package by using the command
/////////////// code space ///////////////////

    npm install --save body-parser

/////////////// code space ///////////////////

After installing import it as bellow using an variable
/////////////// code space ///////////////////

    const bodyParser = require('body-parser')

/////////////// code space ///////////////////

This body-parser module will automatically "next" and parse the res.body
After we use them for parsing the response body and the extend : false is used for preventing 
the parser to use only what is inside the scope

An example of it used in middleware
/////////////// code space ///////////////////

    app.use(bodyParser.urlencoded({extended: false}));

/////////////// code space ///////////////////

this {'extended: false' basically parse the request body we are snding an example shown bellow how it is outputed in console
/////////////// code space ///////////////////

i am second middleWare
[Object: null prototype] { Title: 'Antony' }
i am main middleWare

/////////////// code space ///////////////////