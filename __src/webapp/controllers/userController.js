const express = require('express');
const router = express.Router();
const mongoService = require('./mongoService');

// Route for inserting new user data
router.post('/insertUser', async (req, res) => {
    try {
        const userData = req.body; // Assuming request body contains user data

        // Call method from mongoService to insert user data into MongoDB
        await mongoService.insertUserData(userData);

        // Respond with a success message
        res.status(201).json({ message: 'User data inserted successfully!' });
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error('Error inserting user data:', error);
        res.status(500).json({ error: 'Failed to insert user data!' });
    }
});

// Route for querying user data
router.get('/getUser/:userId', async (req, res) => {
    try {
        const userId = req.params.userId; // Extract user ID from request parameters

        // Call method from mongoService to query user data from MongoDB
        const userData = await mongoService.getUserData(userId);

        // Respond with the queried user data
        res.status(200).json(userData);
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error('Error querying user data:', error);
        res.status(500).json({ error: 'Failed to query user data!' });
    }
});

// Export the router
module.exports = router;

