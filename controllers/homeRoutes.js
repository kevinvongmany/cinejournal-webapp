const router = require("express").Router();
const { User, Platform, Entry } = require("../models");
const withAuth = require("../utils/auth");

// Home Route (GET /)
router.get("/", withAuth, async (req, res) => {
  try {
    // Fetch user data from the database with associated entries and platforms
    const users = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Entry, include: {model: Platform, attributes:['name']} }],
    });

    const usersData = users.get({ plain: true });
    // Render a combined JSON response with all data
    res.render("watchlist", {
      usersData,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to load home data", error: err });
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json({ message: "Failed to load login page", error: err });
  }
});

router.get("/register", async (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to load register page", error: err });
  }
});

router.get("/form", async (req, res) => {
  try {
    // Fetch platform data
    const platformData = await Platform.findAll();
    const userData = await User.findByPk(req.session.user_id,{
      attributes: { exclude: ["password"] },
    });
    const platforms = platformData.map((platform) =>
      platform.get({ plain: true })
    );
    const user=userData.get({plain:true});

    res.render("form", {
      user,
      platforms,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to load form page", error: err });
  }
});

router.get("/watchlist", async (req, res) => {
  try {
    // Fetch platform data from the database
    const platformData = await Platform.findAll();
    const platforms = platformData.map((platform) =>
      platform.get({ plain: true })
    );

    // Render the watchlist page and pass the platform data
    res.render("watchlist", {
      platforms,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to load watchlist page", error: err });
  }
});

module.exports = router;
