// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sample API endpoint
app.get('/api/data', (req, res) => {
    const sampleData = { name: 'Node.js', type: 'JavaScript runtime' };
    res.json(sampleData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
