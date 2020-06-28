// var Dyndata = require("../models");

// module.exports = function (app) {
//   app.post("/api/new", function (req, res) {
//     var req.body = req.body;

//     Dyndata.create({
//       id: req.body.id,
//       UserName: req.body.UserName,
//       Shape: req.body.Shape,
//       Gender: req.body.Gender,
//       Dynamism_Analytics: req.body.Dynamism_Analytics,
//       AGE: req.body.AGE,
//       FirstColor: req.body.FirstColor,
//       BackgroundColor: req.body.BackgroundColor,
//       Controls: req.body.Controls,
//       Upcount: req.body.Upcount,
//       Downcount: req.body.Downcount,
//       Rightcount: req.body.Rightcount,
//       Leftcount: req.body.Leftcount,
//       Dominance: req.body.Dominance,
//       InitialPath: req.body.InitialPath,
//       LastShape: req.body.LastShape,
//       LastShapeColor: req.body.LastShapeColor,
//       FullPathPattern: req.body.FullPathPattern,
//     });

//     res.status(204).end();
//   });
// };
var db = require("../models");

// Routes
// =============================================================

module.exports = function (app) {
  // GET route for getting all of the todos
  // app.get("/api/todos", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Todo.findAll({}).then(function(dbTodo) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbTodo);
  //   });
  // });

  // POST route for saving a new todo

  app.post("/api/todos", function (req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    db.dynamic_analytic
      .create({
        id: req.body.id,
        UserName: req.body.UserName,
        Shape: req.body.Shape,
        Gender: req.body.Gender,
        Email: req.body.Email,
        Dynamism_Analytics: req.body.Dynamism_Analytics,
        AGE: req.body.AGE,
        FirstColor: req.body.FirstColor,
        BackgroundColor: req.body.BackgroundColor,
        Controls: req.body.Controls,
        Upcount: req.body.Upcount,
        Downcount: req.body.Downcount,
        Rightcount: req.body.Rightcount,
        Leftcount: req.body.Leftcount,
        Dominance: req.body.Dominance,
        InitialPath: req.body.InitialPath,
        LastShape: req.body.LastShape,
        LastShapeColor: req.body.LastShapeColor,
        FullPathPattern: req.body.FullPathPattern,
      })
      .then(function (dbdynamic_analytic) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbdynamic_analytic);
      });
  });

  app.post("/api/todus", function (req, res) {
    console.log(req.body);

    db.CRPC_square.create({
      id: req.body.id,
      UserName: req.body.UserName,
      Gender: req.body.Gender,
      Email: req.body.Email,
      AGE: req.body.AGE,
      First_Color_Selected: req.body.First_Color_Selected,
      Color_Selection_Pattern: req.body.Color_Selection_Pattern,
      Color_Grid_Distribution: req.body.Color_Grid_Distribution,
      Strongest_Color: req.body.Strongest_Color,
      Quadrant_Dominance: req.body.Quadrant_Dominance,
      Halves_Dominance: req.body.Halves_Dominance,
      Quadron_Grid_Distribution: req.body.Quadron_Grid_Distribution,
      Path_Singularity: req.body.Path_Singularity,
    }).then(function (dbCRPC_Square) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbCRPC_Square);
    });
  });

  app.post("/api/tadas", function (req, res) {
    console.log(req.body);

    db.ma4t9
      .create({
        id: req.body.id,
        UserName: req.body.UserName,
        Gender: req.body.Gender,
        Email: req.body.Email,
        First_Color_Selected: req.body.First_Color_Selected,
        Colors_Selected: req.body.Colors_Selected,
        First_Quadrant_ColorSelection: req.body.First_Quadrant_ColorSelection,
        Quadrant_Pattern: req.body.Quadrant_Pattern,
        Median_Shapes: req.body.Median_Shapes,
        Path_Singularity: req.body.Path_Singularity,
        End_Tangent: req.body.End_Tangent,
      })
      .then(function (ma4t9) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(ma4t9);
      });
  });

  app.put("/api/todos", function (req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.dynamic_analytic
      .update(
        {
          Shape: req.body.Shape,
          DynamismAnalytics: req.body.DynamismAnalytics,
          Upcount: req.body.Upcount,
          Downcount: req.body.Downcount,
          Leftcount: req.body.Leftcount,
          Rightcount: req.body.Rightcount,
          FirstColor: req.body.FirstColor,
          Controls: req.body.Controls,
          Dominance: req.body.Dominance,
          FullPathPattern: req.body.FullPathPattern,
          BackgroundColor: req.body.BackgroundColor,
          InitialPath: req.body.InitialPath,
          InitialShape: req.body.InitialShape,
          InitialShapeColor: req.body.InitialShapeColor,
          LastShape: req.body.LastShape,
          LastShapeColor: req.body.LastShapeColor,
        },

        { where: { UserName: req.body.UserName, Email: req.body.Email } }
      )
      .then(function (dbdynamic_analytic) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbdynamic_analytic);
      });
  });

  app.put("/api/todus", function (req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.CRPC_square.update(
      {
        id: req.body.id,
        UserName: req.body.UserName,
        Gender: req.body.Gender,
        Email: req.body.Email,
        AGE: req.body.AGE,
        First_Color_Selected: req.body.First_Color_Selected,
        Color_Selection_Pattern: req.body.Color_Selection_Pattern,
        Color_Grid_Distribution: req.body.Color_Grid_Distribution,
        Strongest_Color: req.body.Strongest_Color,
        Quadrant_Dominance: req.body.Quadrant_Dominance,
        Halves_Dominance: req.body.Halves_Dominance,
        Quadron_Grid_Distribution: req.body.Quadron_Grid_Distribution,
        Path_Singularity: req.body.Path_Singularity,
      },

      { where: { UserName: req.body.UserName, Email: req.body.Email } }
    ).then(function (dbCRPC_Square) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbCRPC_Square);
    });
  });

  app.put("/api/tadas", function (req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.ma4t9
      .update(
        {
          id: req.body.id,
          UserName: req.body.UserName,
          Gender: req.body.Gender,
          Email: req.body.Email,
          First_Color_Selected: req.body.First_Color_Selected,
          Colors_Selected: req.body.Colors_Selected,
          First_Quadrant_ColorSelection: req.body.First_Quadrant_ColorSelection,
          Quadrant_Pattern: req.body.Quadrant_Pattern,
          Median_Shapes: req.body.Median_Shapes,
          Path_Singularity: req.body.Path_Singularity,
          End_Tangent: req.body.End_Tangent,
        },

        { where: { UserName: req.body.UserName, Email: req.body.Email } }
      )
      .then(function (ma4t9) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(ma4t9);
      });
  });

  app.get("/api/todos/:email", function (req, res) {
    console.log(req.body);
    // findAll returns all entries for a table when used with no options
    db.dynamic_analytic
      .findOne({ where: { Email: req.params.email } })
      .then(function (dbTodo) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbTodo);
      });
  });

  app.post("/api/todis", function (req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    db.quote
      .create({
        id: req.body.id,
        ClientName: req.body.ClientName,

        ClientEmail: req.body.ClientEmail,
        Message: req.body.Message,
      })
      .then(function (dbquote) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbquote);
      });
  });
  app.post("/api/todiis", function (req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    db.visitor
      .create({
        id: req.body.id,
      })
      .then(function (dbquote1) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbquote1);
      });
  });
};
