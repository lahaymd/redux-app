var express = require("express");
var router = express.Router();
var FilterData = require("../models/filter_data.model.js");
var mongoose = require("mongoose");

router.post("/", function (req, res) {
  console.log(req.body);

  FilterData.create(
    {
      name: req.body.name,
      filterData: req.body.filterData,
    },

    function (err, user) {
      if (err) return console.error(err);
      console.log(user, "******");
      res.json(user);
    }
  );
});

router.get("/", function (req, res) {
  console.log("get route filter data");
  FilterData.find({}, function (err, docs) {
    res.json(docs);
  });
});

router.get("/name", function (req, res) {
  FilterData.find({ name: req.query.name }, function (err, docs) {
    res.json(docs);
  });
});

router.put("/", function (req, res) {
  FilterData.findOneAndUpdate(
    { name: req.body.name },
    { attributes: req.body.attributes },
    { new: true },
    function (err, docs) {
      console.log(docs);
      console.log("updated filter data");
      res.json(docs);
    }
  );
});

router.delete("/", function (req, res) {
  FilterData.remove({ name: req.body.name }, function (err, docs) {
    res.json(docs);
  });
});

module.exports = router;
