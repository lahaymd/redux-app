var express = require("express");
var path = require("path");
// var favicon = require('serve-favicon');
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongo = require("mongodb");
var mongoose = require("mongoose");
// var index = require('./routes/index');
var linear_gradient = require("./routes/linear_gradient");
var radial_gradient = require("./routes/radial_gradient");
var filter_data = require("./routes/filter_data");
var user = require("./routes/user");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "build")));

// mongoose.connect('mongodb://lahaymd:zz040577@ds127998.mlab.com:27998/mikelahay');

//db.js

const url =
  "mongodb+srv://lahaymd:zz040577@cluster0.5zsnb.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// app.use('/', index);
app.use("/linear_gradient", linear_gradient);
app.use("/radial_gradient", radial_gradient);
app.use("/filter_data", filter_data);
app.use("/user", user);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
