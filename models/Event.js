const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Assuming 'index.js' exports the initialized Sequelize instance

const Event = sequelize.define('Event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  time: {
    type: DataTypes.TIME,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // Assumes the User model is defined and synced
      key: 'id'
    }
  }
});

module.exports = Event;
