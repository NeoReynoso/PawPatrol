const axios = require('axios');
const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017'; // Your MongoDB URL

let db; // Database instance

// Function to connect to MongoDB
async function connectToMongoDB() {
    try {
        const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('your_database_name'); // Change to your actual database name
        //console.log('Connected to MongoDB');
        return 1; // Connection successful
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        return 0; // Connection failed
    }
}

// Function to get user profile
async function getUserProfile(username, password) {
    try {
        const response = await axios.post('https://us-west-2.aws.data.mongodb-api.com/app/data-rtkmt/endpoint/data/v1/action/findOne', {
            collection: "<mongo.login>",
            database: "<mongodb>",
            dataSource: "mongodb",
            projection: {
                "_id": 1
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'IbP8zUiupxjwobd1y9e7sdY53DKw20WXgJURhP7Sis58m3XoZdSOxcmXO5mnB5xh'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Cannot find user profile: ' + error.message);
    }
}

// Function to update user profile
async function updateProfile(userid, email, password, fname, lname, petname, address, city, state, zip, phone) {
    try {
        // Example of using Axios to make HTTP request
        const response = await axios.post('https://us-west-2.aws.data.mongodb-api.com/app/data-rtkmt/endpoint/data/v1/action/updateProfile', {
            userid, email, password, fname, lname, petname, address, city, state, zip, phone
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'IbP8zUiupxjwobd1y9e7sdY53DKw20WXgJURhP7Sis58m3XoZdSOxcmXO5mnB5xh'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to update user profile: ' + error.message);
    }
}

// Function to make appointment
async function makeAppointment(userid, providerid, date, time) {
    try {
        // Example of using Axios to make HTTP request
        const response = await axios.post('https://us-west-2.aws.data.mongodb-api.com/app/data-rtkmt/endpoint/data/v1/action/makeAppointment', { userid, providerid, date, time }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'IbP8zUiupxjwobd1y9e7sdY53DKw20WXgJURhP7Sis58m3XoZdSOxcmXO5mnB5xh'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to create appointment: ' + error.message);
    }
}

// Function to get medication information
async function getMedInfo(userid) {
    try {
        // Example of using Axios to make HTTP request
        const response = await axios.post('https://us-west-2.aws.data.mongodb-api.com/app/data-rtkmt/endpoint/data/v1/action/getMedInfo', { userid }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'IbP8zUiupxjwobd1y9e7sdY53DKw20WXgJURhP7Sis58m3XoZdSOxcmXO5mnB5xh'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to get medication information: ' + error.message);
    }
}

// Export all functions
module.exports = {
    connectToMongoDB,
    getUserProfile,
    updateProfile,
    makeAppointment,
    getMedInfo
};

