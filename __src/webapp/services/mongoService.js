const axios = require('axios'); // calling axios to support client-side calls

// Function to connect to MongoDB
async function connectToMongoDB() {
    // Your MongoDB connection logic here
    // This function establishes a connection to your MongoDB instance
}

// Function to handle form submission for API endpoint /api - api being general-purpose for now but will probably modify or delte. 
async function handleSubmitForApi() {
    try {
        const response = await axios.post('https://us-west-2.aws.data.mongodb-api.com/app/data-rtkmt/endpoint/data/v1/action/findOne', {
            collection: "<mongo.customer>",
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

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle form submission for API endpoint /users - main func for now 
async function handleSubmitForUsers() {
    try {
        // Your form submission logic here
        // For example, you can perform the Axios request here
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

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Export all functions
module.exports = {
    connectToMongoDB,
    handleSubmitForApi,
    handleSubmitForUsers
};
