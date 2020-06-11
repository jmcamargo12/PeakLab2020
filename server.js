var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Static directory to be served
app.use(express.static(__dirname + "/public"));

// // Routes
// // =============================================================
require("./routes/api-routes.js")(app);

// // Here we introduce HTML routing to serve different HTML files
// require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App runs and listens on PORT " + PORT);
  });
});
