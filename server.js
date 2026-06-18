// Backend server configuration
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedbackRoutes = require('./routes/index').feedbackRoutes;

const app = express();

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', feedbackRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});