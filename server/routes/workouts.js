// contain all the routers that are going to be called at the server.js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts' })
})



// get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'Get a single workout' })
})

// Post a new workout
router.post('/', (req, res) => {
    res.json({ message: 'Post a new workout' })
})
// Post a new workout
router.post('/', (req, res) => {
    res.json({ message: 'Post a new workout' })
})
// delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete new workout' })
})
// Update a  workout
router.patch(':/', (req, res) => {
    res.json({ message: 'Update a workout' })
})
module.exports = router;