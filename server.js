// CWEB Project 3
// Participants: Gabriel & Navkaran

// Variables
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const Product = require('./models/productModel')
const app = express()



// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




// Auth Middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied. Token is missing.' });

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token.' });
        req.user = user;
        next();
    });
};


// Token generator for Authentication
app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { username: username };
    const accessToken = jwt.sign(user, 'your-secret-key');
    res.json({ accessToken: accessToken });
});


// GET functionality - The following fetches/gets all products from the mongo database.
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// GET functionality - The following fetches/gets a single product from the mongo database based on its ID.
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// POST functionality - The following uploads a product into the mongo database.
app.post('/upload-product', authenticateToken, async (req, res) => {

    //~ Uncomment the following 2 lines to see the products details displayed in VSCode console when Posted.
    // console.log(req.body);
    // res.send(req.body)

    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

// PUT functionality - The following updates an entry from the mongo database.
app.put('/products/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: `this product does not exist` })
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// DELETE functionality - The following deletes an entry from the mongo database.
app.delete('/products/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `this product does not exist` })
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



// CORS 


// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://localhost:3000/upload-product", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
  


// // Example PUT method implementation:
// async function putData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "PUT", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   putData("https://localhost:3000/products/1234", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

  

//   // Example DELETE method implementation:
// async function deleteData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "DELETE", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   deleteData("https://localhost:3000/products/1234", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
  





// Database for Products
mongoose.connect('mongodb+srv://admin:cwebproject@cwebproject3.al2m5y6.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => {
            console.log(`Server running on port 3000`)
        });
    }).catch((error) => {
        console.log(error)
    });