const fs = require('fs')

const requestHandler = (req, res) => {
     
    // /creating a page for handling requefa-stack
    const url = req.url;
    const method = req.method;

    if(url === "/message" && method === "POST"){
        //creating a example for handling streams of data
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message)
        })

        //example for redirecting request with response
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    //example of writing on the DOM
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello from node js</title></head');
        res.write('<body><form action="/message" Method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }


//basic way writeing in template
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello from node js</title></head');
    res.write('<body><h1>First Implementation</h1></body>');
    res.write('</html>');
    res.end();
}

//exporting this file that can be used for handling request and response
// module.exports = requestHandler

// second method for exporting using an object that can have multiple values
module.exports = {
    handler: requestHandler,
    exampleTest: 'An example text for showing importing through object'
}

//Third Method for exporting a file
// exports.handler =requestHandler;
// exports.exampleTest = 'An example text for showing importing through object';

//forth Method for exporting a file
// module.exports.handler =requestHandler;
// module.exports.exampleTest = 'An example text for showing importing through object';

