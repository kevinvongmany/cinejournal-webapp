const router = require('express').Router();
const { User, Platform, Entry } = require('../models');
const withAuth = require('../utils/auth');

// Home Route (GET /)
router.get('/', async (req, res) => {
  try {
    // Fetch all users, platforms, and entries from the database
    const users = await User.findAll();
    const platforms = await Platform.findAll();
    const entries = await Entry.findAll();

    // Render a combined JSON response with all data
    res.status(200).json({
      users,
      platforms,
      entries,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load home data', error: err });
  }
});

// Get a user and their entries (GET /users/:id)
router.get('/users/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Entry }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get user', error: err });
  }
});

// Get a platform and its entries (GET /platforms/:id)
router.get('/platforms/:id', async (req, res) => {
  try {
    const platformData = await Platform.findByPk(req.params.id, {
      include: [{ model: Entry }],
    });

    if (!platformData) {
      res.status(404).json({ message: 'No platform found with this id' });
      return;
    }

    res.status(200).json(platformData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get platform', error: err });
  }
});

// Get an entry (GET /entries/:id)
router.get('/entries/:id', async (req, res) => {
  try {
    const entryData = await Entry.findByPk(req.params.id, {
      include: [{ model: User }, { model: Platform }],
    });

    if (!entryData) {
      res.status(404).json({ message: 'No entry found with this id' });
      return;
    }

    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get entry', error: err });
  }
});

module.exports = router;
