module.exports = function (sequelize, DataTypes) {
 var Positivo = sequelize.define(
  "CRPC_square",
  {
   UserName: DataTypes.STRING,
   Shape: DataTypes.STRING,
   Gender: DataTypes.STRING,
   Email: DataTypes.STRING,
   First_Color_Selected: DataTypes.STRING,
  Color_Selection_Pattern: DataTypes.INTEGER,
   Color_Grid_Distribution: DataTypes.INTEGER,
   Strongest_Color: DataTypes.INTEGER,
   Quadrant_Dominance: DataTypes.INTEGER,
   Halves_Dominance: DataTypes.INTEGER,
   Quadron_Grid_Distribution: DataTypes.INTEGER,
   Path_Singularity: DataTypes.INTEGER,
},
  {
   timestamps: false,
  }
 );
 return Positivo;
};
