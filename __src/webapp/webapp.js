const express = require('express');
const path = require('path');
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
