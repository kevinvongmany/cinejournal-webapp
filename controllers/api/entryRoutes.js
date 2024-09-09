const router = require('express').Router();
const { Entry } = require('../../models');
// const { User } = require('../../models');
// const { Platform } = require('../../models');

// // Get an entry (GET /entries/:id)
// router.get('/:id', async (req, res) => {
//   try {
//     const entryData = await Entry.findByPk(req.params.id, { 
//       include: [{ model: User }, { model: Platform }],
//     });

//     if (!entryData) {
//       res.status(404).json({ message: 'No entry found with this id' });
//       return;
//     }

//     res.status(200).json(entryData);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get entry', error: err });
//   }
// });


// Create a new entry (POST /api/entries)
router.post('/', async (req, res) => {
  try {
    const newEntry = await Entry.create(req.body);
    res.status(200).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create entry', error: err });
  }
});

// Get all entries (GET /api/entries)
router.get('/', async (req, res) => {
  try {
    const entryData = await Entry.findAll();
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get entries', error: err });
  }
});

// Get an entry by ID (GET /api/entries/:id)
router.get('/:id', async (req, res) => {
  try {
    const entryData = await Entry.findByPk(req.params.id);

    if (!entryData) {
      res.status(404).json({ message: 'No entry found with this id' });
      return;
    }

    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get entry', error: err });
  }
});

// Update an entry by ID (PUT /api/entries/:id)
router.put('/:id', async (req, res) => {
  try {
    const entryData = await Entry.update(req.body, {
      where: { id: req.params.id },
    });

    if (!entryData[0]) {
      res.status(404).json({ message: 'No entry found with this id' });
      return;
    }

    res.status(200).json({ message: 'Entry updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update entry', error: err });
  }
});

// Delete an entry by ID (DELETE /api/entries/:id)
router.delete('/:id', async (req, res) => {
  try {
    const entryData = await Entry.destroy({
      where: { id: req.params.id },
    });

    if (!entryData) {
      res.status(404).json({ message: 'No entry found with this id' });
      return;
    }

    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete entry', error: err });
  }
});

module.exports = router;