const router = require("express").Router();
const { User, Platform, Entry } = require("../models");
const withAuth = require("../utils/auth");

// Home Route (GET /)
router.get("/", withAuth, async (req, res) => {
  try {
    // Fetch user data from the database with associated entries and platforms
    const users = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        { model: Entry, include: { model: Platform, attributes: ["name"] } },
      ],
      order: [[Entry, "created_at", "DESC"]],
    });

    const user = users.get({ plain: true });
    // Render a combined JSON response with all data
    res.render("watchlist", {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load home data", error: err });
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.error(err);
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

router.get("/form", withAuth, async (req, res) => {
  try {
    // Fetch platform data
    const platformData = await Platform.findAll();
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const platforms = platformData.map((platform) =>
      platform.get({ plain: true })
    );
    const user = userData.get({ plain: true });

    res.render("form", {
      user,
      platforms,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load form page", error: err });
  }
});

// Logout Route (GET /logout)
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to log out", error: err });
    }
    // Redirect to the login page after logging out
    res.redirect("/login");
  });
});

module.exports = router;
