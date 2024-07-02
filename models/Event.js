module.exports = (sequelize, DataTypes) => {
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

  return Event;
};
