var express = require('express');
var router = express.Router();
var LinearGradient = require('../models/linear_gradient.model.js');
var mongoose = require('mongoose');

router.post('/', function (req, res) {

  LinearGradient.create(
    {
      name: req.body.name,
      stops: req.body.stops,
      x1: req.body.x1,
      x2: req.body.x2,
      y1: req.body.y1,
      y2: req.body.y2,
      spreadMethod: req.body.spreadMethod,
      gradientTransform: req.body.gradientTransform,
      gradientUnits: req.body.gradientUnits

    },

    function (err, user) {
      if (err) return console.error(err);
      console.log(user, '******');
      res.json(user);
    });
});

router.get('/', function (req, res) {
  LinearGradient.find({}, function (err, docs) {
    res.json(docs)
  })
});

router.put('/', function (req, res) {
  LinearGradient.findOneAndUpdate({ name: req.body.name }, {stops: req.body.stops}, { new: true }, function (err, docs) {
    console.log(docs);
    console.log('updated linear gradient')
    res.json(docs)
  })
});

router.delete('/', function (req, res) {
  LinearGradient.remove({ name: req.body.name }, function (err, docs) {
    res.json(docs)
  });
})



module.exports = router;
