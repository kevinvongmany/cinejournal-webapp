const router = require('express').Router();
const { User, Platform, Entry } = require('../models');
const withAuth = require('../utils/auth');

// Home Route (GET /)
router.get('/', withAuth,async (req, res) => {
  try {
    // Fetch all users, platforms, and entries from the database
    const users = await User.findAll();
    const platforms = await Platform.findAll();
    const entries = await Entry.findAll();

    const entriesData = entries.map((entry) => entry.get({ plain: true }));
    // Render a combined JSON response with all data
    res.render('watchlist', {
      entriesData
    });
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to load home data', error: err });
  }
});


router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to load login page', error: err });
  }
});

router.get('/register', async (req, res) => {
  try {
    res.render('register');
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to load register page', error: err });
  }
});

router.get('/form', async (req, res) => {
  try {
    // Fetch platform data
    const platformData = await Platform.findAll();
    const platforms = platformData.map((platform) => platform.get({ plain: true }));

    res.render('form', {
      platforms,
      loggedIn: req.session.loggedIn 
    });
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to load form page', error: err });
  }
});

router.get('/watchlist', async (req, res) => {
  try {
    // Fetch platform data from the database
    const platformData = await Platform.findAll();
    const platforms = platformData.map((platform) => platform.get({ plain: true }));

    // Render the watchlist page and pass the platform data
    res.render('watchlist', {
      platforms,
      loggedIn: req.session.loggedIn
    });
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to load watchlist page', error: err });
  }
});

module.exports = router;