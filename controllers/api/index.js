const router = require('express').Router();
const userRoutes = require('./userRoutes');
const platformRoutes = require('./platformRoutes');
const entryRoutes = require('./entryRoutes');

router.use('/users', userRoutes);
router.use('/platforms', platformRoutes);
router.use('/entries', entryRoutes);

module.exports = router;
