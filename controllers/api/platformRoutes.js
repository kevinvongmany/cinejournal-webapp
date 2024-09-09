const router = require('express').Router();
const { Platform } = require('../../models');
// const { Entry } = require('../../models');

// // Get a platform and its entries (GET /platforms/:id)
// router.get('/:id', async (req, res) => {
//   try {
//     const platformData = await Platform.findByPk(req.params.id, {
//       include: [{ model: Entry }],
//     });

//     if (!platformData) {
//       res.status(404).json({ message: 'No platform found with this id' });
//       return;
//     }

//     res.status(200).json(platformData);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get platform', error: err });
//   }
// });

// Create a new platform (POST /api/platforms)
router.post('/', async (req, res) => {
  try {
    const newPlatform = await Platform.create(req.body);
    res.status(200).json(newPlatform);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create platform', error: err });
  }
});

// Get all platforms (GET /api/platforms)
router.get('/', async (req, res) => {
  try {
    const platformData = await Platform.findAll();
    res.status(200).json(platformData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get platforms', error: err });
  }
});

// Get a platform by ID (GET /api/platforms/:id)
router.get('/:id', async (req, res) => {
  try {
    const platformData = await Platform.findByPk(req.params.id);

    if (!platformData) {
      res.status(404).json({ message: 'No platform found with this id' });
      return;
    }

    res.status(200).json(platformData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get platform', error: err });
  }
});

// Update a platform by ID (PUT /api/platforms/:id)
router.put('/:id', async (req, res) => {
  try {
    const platformData = await Platform.update(req.body, {
      where: { id: req.params.id },
    });

    if (!platformData[0]) {
      res.status(404).json({ message: 'No platform found with this id' });
      return;
    }

    res.status(200).json({ message: 'Platform updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update platform', error: err });
  }
});

// Delete a platform by ID (DELETE /api/platforms/:id)
router.delete('/:id', async (req, res) => {
  try {
    const platformData = await Platform.destroy({
      where: { id: req.params.id },
    });

    if (!platformData) {
      res.status(404).json({ message: 'No platform found with this id' });
      return;
    }

    res.status(200).json({ message: 'Platform deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete platform', error: err });
  }
});

module.exports = router;