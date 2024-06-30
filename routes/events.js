// routes/events.js
const express = require('express');
const { Event } = require('../models');
const router = express.Router();

// Create a new event
router.post('/', async (req, res) => {
  const { title, description, date, time, location, createdBy } = req.body;
  try {
    const event = await Event.create({ title, description, date, time, location, createdBy });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get an event by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, date, time, location } = req.body;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    event.title = title;
    event.description = description;
    event.date = date;
    event.time = time;
    event.location = location;
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
