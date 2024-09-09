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

    const entriesData = entries.map((entry) => entry.get({ plain: true }));
    // Render a combined JSON response with all data
    res.render('homepage', {
      entriesData
    });
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to load home data', error: err });
  }
});
module.exports = router;
