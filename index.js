const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.use(express.json()); // For parsing JSON requests

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Iqra platform!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Iqra running on port ${PORT}`));
