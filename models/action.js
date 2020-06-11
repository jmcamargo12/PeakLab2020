module.exports = function (sequelize, DataTypes) {
  var Action = sequelize.define(
    "dynamic_analytic",
    {
      UserName: DataTypes.STRING,
      Shape: DataTypes.STRING,
      Gender: DataTypes.STRING,
      Email: DataTypes.STRING,
      DynamismAnalytics: DataTypes.STRING,
      AGE: DataTypes.INTEGER,
      FirstColor: DataTypes.STRING,
      BackgroundColor: DataTypes.STRING,
      Controls: DataTypes.STRING,
      Upcount: DataTypes.STRING,
      Downcount: DataTypes.STRING,
      Rightcount: DataTypes.STRING,
      Leftcount: DataTypes.STRING,
      Dominance: DataTypes.STRING,
      InitialPath: DataTypes.STRING,
      InitialShape: DataTypes.STRING,
                     InitialShapeColor: DataTypes.STRING,
      LastShape: DataTypes.STRING,
      LastShapeColor: DataTypes.STRING,
      FullPathPattern: DataTypes.STRING,
    },
    
    {
      timestamps: false,
    }
  );
  return Action;
};

