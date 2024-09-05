const router = require('express').Router();
const { User } = require('../../models');

// create a new user (register)
router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to register user', error: err });
  }
});

// Route to login an existing user
router.post('/login', async (req, res) => {
  try {
    // Find the user by email
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Check if the password is valid
    const validPassword = userData.checkPassword(req.body.password);

    // If the password is invalid
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Save the user session if login is successful
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to log in', error: err });
  }
});

// Route to log out the user
router.post('/logout', (req, res) => {
  // Check if the user is logged in
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
