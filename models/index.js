const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT
});

const User = require('./User')(sequelize, DataTypes);
const Event = require('./Event')(sequelize, DataTypes);

User.hasMany(Event, { foreignKey: 'createdBy' });
Event.belongsTo(User, { foreignKey: 'createdBy' });

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Database sync error:', err));

module.exports = {
  sequelize,
  User,
  Event
};
