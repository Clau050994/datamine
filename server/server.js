const express = require('express');
const path = require('path');
const cors = require('cors');

// express app
const app = express();

// Enable CORS
app.use(cors());

// routes 
app.get('/api/test', (req, res) => {
    console.log('here');
    res.json({message: 'Server is up and running!'});
});

// listen for requests
app.listen(4001, () => {
    console.log('listening on port 4001!!');
});
