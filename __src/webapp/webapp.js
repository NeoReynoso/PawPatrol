const express = require('express');
const path = require('path');
const userController = require('./controllers/userController'); // linking userController funcs **NO USER LOGIC HERE!!
const { connectToMongoDB } = require('./services/mongoService'); // linking mongoDB funcs **NO DB LOGIC HERE!!!
const app = express();

// Define route handler for API endpoints
app.get('/api', (req, res) => {
    res.json({"test":"test"});
});

// Serve the React application's static files
app.use(express.static(path.join(__dirname, '..', '..','__src', 'jsapp', 'build')));

// Define route handler for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'jsapp', 'build', 'index.html'));
});

// Start the server with dynamic port addressing
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
    // Connect to MongoDB
    try {
        const db = await connectToMongoDB(); // connect db here on start up 
        if (db === 1) { 
            console.log('Connected to MongoDB'); // no instance, just checking if connected or not. Instances stays in mongoservice.js 
        } else {
            console.log("Database error");
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
});
