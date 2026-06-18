// Entry point for the application
const express = require('express');
const bodyParser = require('body-parser');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});