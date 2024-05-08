// Require Module
const express = require('express')

// Express Initialization
const app = express()

// Declare port and list
const port = 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// Create hello world api
app.get('/hello_world', (req, res) => {
    res.send('Hello World')
})