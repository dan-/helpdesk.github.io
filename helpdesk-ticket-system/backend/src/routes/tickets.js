const express = require('express');
const Ticket = require('../models/ticket');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Create a new ticket
router.post('/', authenticate, async (req, res) => {
    try {
        const { subject, description, priority } = req.body;
        const ticket = new Ticket({
            subject,
            description,
            priority,
            status: 'Open',
            submittedBy: req.user._id,
            date: new Date()
        });
        await ticket.save();
        res.status(201).send(ticket);
    } catch (error) {
        res.status(400).send({ error: 'Failed to create ticket' });
    }
});

// Get all tickets
router.get('/', authenticate, async (req, res) => {
    try {
        const tickets = await Ticket.find({ submittedBy: req.user._id });
        res.send(tickets);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch tickets' });
    }
});

// Get a specific ticket by ID
router.get('/:id', authenticate, async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket || ticket.submittedBy.toString() !== req.user._id.toString()) {
            return res.status(404).send({ error: 'Ticket not found' });
        }
        res.send(ticket);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch ticket' });
    }
});

// Update a ticket
router.patch('/:id', authenticate, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['subject', 'description', 'priority', 'status'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket || ticket.submittedBy.toString() !== req.user._id.toString()) {
            return res.status(404).send({ error: 'Ticket not found' });
        }

        updates.forEach(update => ticket[update] = req.body[update]);
        await ticket.save();
        res.send(ticket);
    } catch (error) {
        res.status(400).send({ error: 'Failed to update ticket' });
    }
});

// Delete a ticket
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket || ticket.submittedBy.toString() !== req.user._id.toString()) {
            return res.status(404).send({ error: 'Ticket not found' });
        }
        await ticket.remove();
        res.send({ message: 'Ticket deleted' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete ticket' });
    }
});

module.exports = router;