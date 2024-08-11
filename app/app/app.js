// app.js

const express = require('express');
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server on port 9000
app.listen(9000, () => {
    console.log('Server is running on http://localhost:9000');
});

