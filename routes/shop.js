const express = require('express');

//importing path package to handle the routes
const path = require('path')

const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log('i am main middleWare');
//     res.send(`
//         <h1 
//             style="
//                 text-align: center;
//                 font-weight: bold;
//                 margin-top: 20px;
//             ">You Reached The Home Page
//         </h1>
//     `)
// })

//Replacing the above code with html
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'))
})


module.exports = router;