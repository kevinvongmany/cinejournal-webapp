const sequelize = require('../config/connection');
const { User, Entry, Platform } = require('../models');

const userData = require('./userData.json');
const entryData = require('./entryData.json');
const platformData = require('./platformData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const platforms = await Platform.bulkCreate(platformData, {
      returning: true,
    });

    for (const entry of entryData) {
      const platform = platforms.find(platform => platform.id === entry.platform_id);

      await Entry.create({
        ...entry,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
    process.exit(0);
};

seedDatabase();