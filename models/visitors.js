module.exports = function (sequelize, DataTypes) {
  var Visits = sequelize.define(
    "visitor",
    {
     
    },

    {
      timestamps: false,
    }
  );
  return Visits;
};
