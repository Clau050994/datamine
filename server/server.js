const express = require('express');
const path = require('path');
const cors = require('cors');
const workouts = require('./routes/workouts');

// express app
const app = express();

// middleware (Intermediary between a client request and the server)
app.use(express.json());

// Enable CORS
app.use(cors());

// this is called from the forder workouts.js
app.use('/api/workouts',workouts);

// listen for requests
app.listen(4001, () => {
    console.log('listening on port 4001!!');
});
