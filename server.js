// Backend server configuration
const app = require('express')();
const feedbackRoutes = require('./routes/index').feedbackRoutes;

app.use('/api', feedbackRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});