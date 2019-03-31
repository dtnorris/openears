module.exports = (sequelize, DataTypes) => {
  const PerformanceReview = sequelize.define('PerformanceReview', {
    name: DataTypes.STRING,
    currentStep: DataTypes.INTEGER
  }, {});
  PerformanceReview.associate = function(models) {
    // associations can be defined here
  };
  return PerformanceReview;
};

module.exports = (sequelize, DataTypes) => {
  const PerformanceReview = sequelize.define('PerformanceReview', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentStep: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  PerformanceReview.associate = (models) => {
    PerformanceReview.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return PerformanceReview;
};
