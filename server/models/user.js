module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.PerformanceReview, {
      foreignKey: 'userId',
      as: 'performanceReviews',
    });
  };

  return User;
};
