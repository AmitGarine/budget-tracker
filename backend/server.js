const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// A simple test endpoint to verify backend connectivity
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend connection successful!" });
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Start the Express server on a different port if 5000 is in use
    const PORT = process.env.PORT || 3001; // Changed to 3001 or any other free port
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error running the server: ", error);
  }
}

run().catch(console.error);
