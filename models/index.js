const User = require('./User');
const Entry = require('./Entry');
const Platform = require('./Platform');

User.hasMany(Entry, { foreignKey: 'user_id' });
Entry.belongsTo(User, { foreignKey: 'user_id' });

Platform.hasMany(Entry, { foreignKey: 'platform_id' });
Entry.belongsTo(Platform, { foreignKey: 'platform_id' });

module.exports = { User, Entry, Platform };
