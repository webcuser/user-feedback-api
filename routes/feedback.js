// Feedback routes
const express = require('express');
const router = express.Router();

let feedbacks = []; // In-memory data storage

// Submit new feedback
router.post('/', (req, res) => {
    const feedback = { id: feedbacks.length + 1, ...req.body };
    feedbacks.push(feedback);
    res.status(201).json(feedback);
});

// Get all feedback
router.get('/', (req, res) => {
    res.status(200).json(feedbacks);
});

// Update feedback by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = feedbacks.findIndex(f => f.id == id);
    if (index !== -1) {
        feedbacks[index] = { id: feedbacks[index].id, ...req.body };
        res.json(feedbacks[index]);
    } else {
        res.status(404).send('Feedback not found');
    }
});

// Delete feedback by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    feedbacks = feedbacks.filter(f => f.id != id);
    res.status(204).send();
});

module.exports = router;