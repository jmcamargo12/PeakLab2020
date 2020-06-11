module.exports = function (sequelize, DataTypes) {
  var PowerofLove = sequelize.define(
    "ma4t9",
    {
      UserName: DataTypes.STRING,
      Gender: DataTypes.STRING,
      Email: DataTypes.STRING,
      First_Color_Selected: DataTypes.STRING,
      Colors_Selected: DataTypes.INTEGER,
      First_Quadrant_ColorSelection: DataTypes.INTEGER,
      Quadrant_Pattern: DataTypes.INTEGER,
      Median_Shapes: DataTypes.INTEGER,
      Path_Singularity: DataTypes.INTEGER,
      End_Tangent: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  return PowerofLove;
};
