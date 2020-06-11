//MA4T9 renderer//
var userLog = [];
var PAME9 = [];
var a = false;
var b = false;
var c = false;
var d = false;
var e = false;
var f = false;
var render = -6;

let render4T9 = function () {
  var valuename = localStorage.getItem("Idname");
  var valueemail = localStorage.getItem("Email");
  var valueage = localStorage.getItem("Age");
  var valuegender = localStorage.getItem("Gender");

  var DaddWorks = {
    UserName: valuename,

    Email: valueemail,
    Colors_Selected: cs9.join("-"),
    First_Color_Selected: cs9[0],
    // First_Color_Selected: sc[0],
    // Color_Selection_Pattern: sc.join("-"),
  };

  $.post("/api/tadas", DaddWorks);
  //a grid/ 9X9//
  $("#a1").click(function () {
    PAME9.push(" a1 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a11,#a12,#a13,#a21,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a1").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a2").click(function () {
    PAME9.push(" a2 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a1,#a3,#a11,#a12,#a13,#a21,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a2").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a3").click(function () {
    PAME9.push(" a3 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a1,#a11,#a12,#a13,#a21,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a3").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a11").click(function () {
    PAME9.push(" a11 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a1,#a12,#a13,#a21,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a11").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a12").click(function () {
    PAME9.push(" a12 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a11,#a1,#a13,#a21,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a12").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a13").click(function () {
    PAME9.push(" a13 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a11,#a12,#a1,#a21,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a13").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a21").click(function () {
    PAME9.push(" a21 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a11,#a12,#a13,#a1,#a22,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a21").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a22").click(function () {
    PAME9.push(" a22 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a11,#a12,#a13,#a1,#a21,#a23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a22").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#a23").click(function () {
    PAME9.push(" a23 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("a");
    a = true;
    if (a == true) {
      $("#a2,#a3,#a11,#a12,#a13,#a1,#a22,#a21").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#a23").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  //b grid/ 9X9//
  $("#b1").click(function () {
    PAME9.push(" b1 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b11,#b12,#b13,#b21,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b1").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b2").click(function () {
    PAME9.push(" b2 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b1,#b3,#b11,#b12,#b13,#b21,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b2").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b3").click(function () {
    PAME9.push(" b3 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b1,#b11,#b12,#b13,#b21,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b3").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b11").click(function () {
    PAME9.push(" b11 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b1,#b12,#b13,#b21,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b11").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b12").click(function () {
    PAME9.push(" b12 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b11,#b1,#b13,#b21,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b12").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b13").click(function () {
    PAME9.push(" b13 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b11,#b12,#b1,#b21,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b13").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b21").click(function () {
    PAME9.push(" b21 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b11,#b12,#b13,#b1,#b22,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b21").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b22").click(function () {
    PAME9.push(" b22 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b11,#b12,#b13,#b1,#b21,#b23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b22").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#b23").click(function () {
    PAME9.push(" b23 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("b");
    b = true;
    if (b == true) {
      $("#b2,#b3,#b11,#b12,#b13,#b21,#b22,#b1").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#b23").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  //c grid/ 9X9//
  $("#c1").click(function () {
    PAME9.push(" c1 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c11,#c12,#c13,#c21,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c1").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c2").click(function () {
    PAME9.push(" c2 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c1,#c3,#c11,#c12,#c13,#c21,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c2").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c3").click(function () {
    PAME9.push(" c3 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c1,#c11,#c12,#c13,#c21,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c3").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c11").click(function () {
    PAME9.push(" c11 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c1,#c12,#c13,#c21,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c11").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c12").click(function () {
    PAME9.push(" c12 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c11,#c1,#c13,#c21,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c12").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c13").click(function () {
    PAME9.push(" c13 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c11,#c12,#c1,#c21,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c13").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c21").click(function () {
    PAME9.push(" c21 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c11,#c12,#c13,#c1,#c22,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c21").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c22").click(function () {
    PAME9.push(" c22 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c11,#c12,#c13,#c1,#c21,#c23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c22").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#c23").click(function () {
    PAME9.push(" c23 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("c");
    c = true;
    if (c == true) {
      $("#c2,#c3,#c11,#c12,#c13,#c1,#c22,#c21").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#c23").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  //d grid/ 9X9//
  $("#d1").click(function () {
    PAME9.push(" d1 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("d");
    d = true;
    if (d == true) {
      $("#d2,#d3,#d11,#d12,#d13,#d21,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d1").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d2").click(function () {
    PAME9.push(" d2 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    userLog.push("d");
    d = true;
    if (d == true) {
      $("#d1,#d3,#d11,#d12,#d13,#d21,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d2").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d3").click(function () {
    userLog.push("d");

    PAME9.push(" d3 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d1,#d11,#d12,#d13,#d21,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d3").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d11").click(function () {
    userLog.push("d");

    PAME9.push(" d11 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d3,#d1,#d12,#d13,#d21,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d11").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d12").click(function () {
    userLog.push("d");

    PAME9.push(" d12 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d3,#d11,#d1,#d13,#d21,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d12").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d13").click(function () {
    userLog.push("d");

    PAME9.push(" d13 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d3,#d11,#d12,#d1,#d21,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d13").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d21").click(function () {
    userLog.push("d");

    PAME9.push(" d21 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d3,#d11,#d12,#d13,#d1,#d22,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d21").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d22").click(function () {
    userLog.push("d");

    PAME9.push(" d22 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d3,#d11,#d12,#d13,#d1,#d21,#d23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d22").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#d23").click(function () {
    userLog.push("d");

    PAME9.push(" d23 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    d = true;
    if (d == true) {
      $("#d2,#d3,#d11,#d12,#d13,#d1,#d22,#d21").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#d23").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  //e grid/ 9X9//
  $("#e1").click(function () {
    userLog.push("e");

    PAME9.push(" e1 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e11,#e12,#e13,#e21,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e1").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e2").click(function () {
    userLog.push("e");

    PAME9.push(" e2 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e1,#e3,#e11,#e12,#e13,#e21,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e2").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e3").click(function () {
    userLog.push("e");
    e = true;
    if (e == true) {
      $("#e2,#e1,#e11,#e12,#e13,#e21,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e3").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e11").click(function () {
    userLog.push("e");

    PAME9.push(" e11 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e1,#e12,#e13,#e21,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e11").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e12").click(function () {
    userLog.push("e");

    PAME9.push(" e12 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e11,#e1,#e13,#e21,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e12").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e13").click(function () {
    userLog.push("e");

    PAME9.push(" e13 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e11,#e12,#e1,#e21,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e13").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e21").click(function () {
    userLog.push("e");

    PAME9.push(" e21 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e11,#e12,#e13,#e1,#e22,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e21").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e22").click(function () {
    userLog.push("e");

    PAME9.push(" e22 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e11,#e12,#e13,#e1,#e21,#e23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e22").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#e23").click(function () {
    userLog.push("e");

    PAME9.push(" e23 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    e = true;
    if (e == true) {
      $("#e2,#e3,#e11,#e12,#e13,#e1,#e22,#e21").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#e23").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  //f grid/ 9X9//
  $("#f1").click(function () {
    userLog.push("f");

    PAME9.push(" f1 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f11,#f12,#f13,#f21,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f1").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f2").click(function () {
    userLog.push("f");

    PAME9.push(" f2 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f1,#f3,#f11,#f12,#f13,#f21,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f2").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f3").click(function () {
    userLog.push("f");

    PAME9.push(" f3 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f1,#f11,#f12,#f13,#f21,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f3").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f11").click(function () {
    userLog.push("f");

    PAME9.push(" f11 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f1,#f12,#f13,#f21,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f11").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f12").click(function () {
    userLog.push("f");

    PAME9.push(" f12 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f11,#f1,#f13,#f21,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f12").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f13").click(function () {
    userLog.push("f");

    PAME9.push(" f13 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f11,#f12,#f1,#f21,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f13").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f21").click(function () {
    userLog.push("f");

    PAME9.push(" f21 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f11,#f12,#f13,#f1,#f22,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f21").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f22").click(function () {
    userLog.push("f");

    PAME9.push(" f22 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f11,#f12,#f13,#f21,#f1,#f23").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f22").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      $("#growth9").removeAttr("disabled");
      $("#growth99").removeAttr("disabled");
      console.log("wawango");

      console.log(userLog);
    }
  });
  $("#f23").click(function () {
    userLog.push("f");

    PAME9.push(" f23 ");
    var aValue = localStorage.getItem("Idname");
    var eValue = localStorage.getItem("Email");

    var todo = {
      Path_Singularity: PAME9.join("-"),
      Quadrant_Pattern: userLog,
      UserName: aValue,
      Email: eValue,
    };
    console.log(todo);

    $.ajax({
      method: "PUT",
      url: "/api/tadas",
      data: todo,
    });

    f = true;
    if (f == true) {
      $("#f2,#f3,#f11,#f12,#f13,#f1,#f22,#f21").replaceWith(
        "<div class='an9 wawa' id='an'></div>"
      );
      $("#f23").replaceWith(
        "<div class='aa9 wawa' id='an'><img src='Images/triangle69.png'/></div>"
      );
      render++;
    }
    if (render == 0) {
      userLog = userLog.join("");

      $("#theImg").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );
      $(".wawa").css({ opacity: 0.3 });
      $(".inner9").append(
        "<br><a href='ma949.html'><hr><h6 id='progressisreal2'>Try the MA4T9 again!!</h6><hr></a"
      );
      $("#rest1").replaceWith("<h5>YOUR RESULTS</h5>");
      $(".ugh").css("visibility", "visible");
      $(".inner99").css("margin-top", "0");
      $(".inner99").css("height", "178px");
      $("#yingyang").replaceWith(
        "<h6 id='yingyang2'>Awesome!! You've just selected one combination out of the 25.8 million available, the MA4T9 has rendered your analytics report.Thanks for participating and enjoy your results. </h6>"
      );

      console.log(userLog);
    }
  });

  // C(n, r) =?
  //  C(n, r) = C(54, 6)
  //  = 54!(6!(54−6)!)
  //  = 2.5827165E+7
  //  = 25827165

  $("#growth9").mouseenter(function () {
    $("#theImg").replaceWith(
      "<img id='theImg2'  src='Images/" + userLog + "1.png'/>"
    );
    $("#growth39").css("font-style", "normal");
    $("#growth39").css("color", "black");

    $("#growth9").mouseleave(function () {
      $("#theImg2").replaceWith(
        "<img id='theImg'  src='Images/" + userLog + ".png'/>"
      );

      $("#growth39").css("font-style", "italic");
      $("#growth39").css("color", "darkseagreen");

      $("#growth99").mouseenter(function () {
        $("#theImg").replaceWith(
          "<img id='theImg2'  src='Images/" + userLog + "2.png'/>"
        );
        $("#growth39").css("font-style", "normal");
        $("#growth39").css("color", "black");

        $("#growth99").mouseleave(function () {
          $("#theImg2").replaceWith(
            "<img id='theImg'  src='Images/" + userLog + ".png'/>"
          );

          $("#growth39").css("font-style", "italic");
          $("#growth39").css("color", "darkseagreen");
        });
      });
    });
  });
  //Results time for the users//
};

let cpicked = [];
let abCo = [];
var colorO = 0;
let tr = false;
var cs9 = [];
var colorOr = function () {
  if (colorO == 1) {
    abCo.push("a");
  } else if (colorO == 2) {
    abCo.push("b");
  } else if (colorO == 3) {
    abCo.push("c");
  } else if (colorO == 4) {
    abCo.push("d");
  } else if (colorO == 5) {
    abCo.push("e");
  } else if (colorO == 6) {
    abCo.push("f");

    $(".T4T9").replaceWith(T949);

    $("#a1,#a2,#a3,#a11,#a12,#a13,#a21,#a22,#a23").css(
      "background-color",
      cpicked[0]
    );
    $("#b1,#b2,#b3,#b11,#b12,#b13,#b21,#b22,#b23").css(
      "background-color",
      cpicked[1]
    );
    $("#c1,#c2,#c3,#c11,#c12,#c13,#c21,#c22,#c23").css(
      "background-color",
      cpicked[2]
    );
    $("#d1,#d2,#d3,#d11,#d12,#d13,#d21,#d22,#d23").css(
      "background-color",
      cpicked[3]
    );
    $("#e1,#e2,#e3,#e11,#e12,#e13,#e21,#e22,#e23").css(
      "background-color",
      cpicked[4]
    );
    $("#f1,#f2,#f3,#f11,#f12,#f13,#f21,#f22,#f23").css(
      "background-color",
      cpicked[5]
    );

    return render4T9();
    // $("#d21").click(function () {
    //   alert("yes sir");
    //   $("#theImg").replaceWith("<img id='theImg'  src='Images/aecbdf.png'/>");
    //   $(".wawa").css({ opacity: 0.3 });
    // });
  }

  console.log("color picked array " + cpicked);

  console.log("leter for colorgram selected array: " + abCo);

  console.log("color count: " + colorO);
};

$("#ay1").click(function () {
  colorO++;

  cs9.push(" Light Tan ");

  cpicked.push("ffffe6");

  $("#ay1").replaceWith("<div class='aa99 a11' id='ayad'></div>");

  return colorOr();
});
$("#ay2").click(function () {
  colorO++;

  cs9.push(" Yellow ");

  cpicked.push("#ffff00");
  $("#ay2").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#ay3").click(function () {
  colorO++;

  cs9.push(" Yellow Green ");

  cpicked.push("#99ff33");
  $("#ay3").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#ay4").click(function () {
  colorO++;

  cs9.push(" Green ");
  cpicked.push("#009933");
  $("#ay4").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#ay5").click(function () {
  colorO++;

  cs9.push(" Black ");
  cpicked.push("#000000");
  $("#ay5").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#by1").click(function () {
  colorO++;

  cs9.push(" Sky Blue ");

  cpicked.push("#ebf0ff");
  $("#by1").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#by2").click(function () {
  colorO++;

  cs9.push(" Blue ");

  cpicked.push("#0066ff");
  $("#by2").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#by3").click(function () {
  colorO++;

  cs9.push(" Dark Blue ");

  cpicked.push("#0033cc");
  $("#by3").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#by4").click(function () {
  colorO++;

  cs9.push(" Orange ");

  cpicked.push("#ffad33");
  $("#by4").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#by5").click(function () {
  colorO++;

  cs9.push(" Gray ");

  cpicked.push("#808080");
  $("#by5").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#cy1").click(function () {
  colorO++;

  cs9.push(" Pink ");

  cpicked.push("#ffcccc");
  $("#cy1").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#cy2").click(function () {
  colorO++;

  cs9.push(" Red ");

  cpicked.push("#ff0000");
  $("#cy2").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#cy3").click(function () {
  colorO++;

  cs9.push(" Dark Red ");

  cpicked.push("#990000");
  $("#cy3").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#cy4").click(function () {
  colorO++;

  cs9.push(" Purple ");

  cpicked.push("#862d86");
  $("#cy4").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});
$("#cy5").click(function () {
  colorO++;

  cs9.push(" White ");

  cpicked.push("#ffffff");
  $("#cy5").replaceWith("<div class='aa99 a11' id='ayad'></div>");
  return colorOr();
});

let T949 =
  "<div class='col-12 T4T9'><div class='col-3 leftq hdog'><h6 id='MA4T9'></h6><div class='col-12 infortant2'><p id='ma9t91'><h4 id='yingyang'>Now select one triangle from the nine triangles in each of the six squares</h4></p></div></div><div class='col-5 midq2'><div class='col 12 row T1'><div class='col-12 CT99'><div class='aa9 wawa' id='a1'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='a2'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='a3'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='b1'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='b2'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='b3'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='c1'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='c2'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='c3'><img src='Images/triangle69.png' /></div></div></div><div class='col 12 row T1'><div class='col-12 CT99'><div class='aa9 wawa' id='a11'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='a12'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='a13'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='b11'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='b12'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='b13'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='c11'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='c12'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='c13'><img src='Images/triangle69.png' /></div></div></div><div class='col 12 row T1'><div class='col-12 CT99'><div class='aa9 wawa' id='a21'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='a22'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='a23'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='b21'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='b22'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='b23'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='c21'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='c22'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='c23'><img src='Images/triangle69.png' /></div></div></div><div class='col 12 row T1'><div class='col-12 CT99'><div class='aa9 wawa' id='d1'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='d2'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='d3'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='e1'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='e2'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='e3'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='f1'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='f2'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='f3'><img src='Images/triangle69.png' /></div></div></div><div class='col 12 row T1'><div class='col-12 CT99'><div class='aa9 wawa' id='d11'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='d12'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='d13'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='e11'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='e12'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='e13'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='f11'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='f12'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='f13'><img src='Images/triangle69.png' /></div></div></div><div class='col 12 row T1'><div class='col-12 CT99'><div class='aa9 wawa' id='d21'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='d22'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='d23'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='e21'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='e22'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='e23'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='f21'><img src='Images/triangle69.png'/></div><div class='aa9 wawa' id='f22'><img src='Images/triangle69.png' /></div><div class='aa9 wawa' id='f23'><img src='Images/triangle69.png' /></div></div></div><div id='theImg'></div></div><div class='col-4 growth9'><div class='inner9'><div class ='tousr'><h3 id='rest1'>Program Potential</h3><div class='ugh'><h6 id='growth39'>Linear Angularity<h6 id='growth9'>Your Median shape(s)</h6><h6 id='growth99'>Root End Tangent</h6><h6><hr>Medial Apex 4T9</h6></div></div><div class='inner99'><p>The MA4T9 was created by PeakLab as a data procesor. The program evaluates user rationalization and their distributional outcomes, to do so, it highlights the mean geometrical congruencies, discovering natural patterns and correlations amongst all the selections made.  It is a 6X9 choice processing tool that captures, measures and compares interactions amongst thousands of users. When applied to the classic business model, the MA4T9 algorythm excels at graphing projections and tendencies. The results allow the program provides, allow us to better understand consumer/market behavior,  optimization diagrams, and overall to increase production quality, while analyzing user/consumer preference in interaction.</p><p> The MA4T9 was designed and built by PeakLab founder Jonathan Camargo Labeau in April 2020, during the Coronacrisis. His algorythm runs on a geometrically vector based node. The program was designed to analyze angle pontentials within constraint, and by using vertex merge points, it can partition, bring to light and or offer a better understanding of change within the relationships of choice, to harvest certainty towards real growth.   </p></div></div></div></div></div>";
