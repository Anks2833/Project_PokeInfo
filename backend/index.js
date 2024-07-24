

// Load environment variables from .env file located at the root of the project


// Set the server port, defaulting to 3000 if PORT is not defined in environment variables


connectDB()
.then(() => {
    
})
.catch((err) => {
    console.error(`MongoDB Connection Error: ${err.message}`);
    // Consider implementing a retry mechanism or logging additional details for troubleshooting
});

// Optionally, handle server errors
app.on('error', (error) => {
    console.error(`Server Error: ${error.message}`);
});
