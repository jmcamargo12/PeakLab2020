module.exports = function (sequelize, DataTypes) {
  var contact = sequelize.define(
    "quote",
    {
      ClientName: DataTypes.STRING,
     ClientEmail: DataTypes.STRING,
      Message: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return contact;
};
