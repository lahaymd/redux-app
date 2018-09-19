var express = require('express');
var router = express.Router();
var LinearGradient = require('../models/radial_gradient.model.js');
var mongoose = require('mongoose');

router.post('/', function (req, res) {

    RadialGradient.create(
        {
            name: req.body.name,
            stops: req.body.stops,
            cx: req.body.cx,
            cy: req.body.cy,
            r: req.body.r,
            fx: req.body.fx,
            fy: req.body.fy,
            fr: req.body.fr,
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
    RadialGradient.find({}, function (err, docs) {
        res.json(docs)
    })
});

router.put('/', function (req, res) {
    RadialGradient.findOneAndUpdate({ name: req.body.name }, { stops: req.body.stops }, { new: true }, function (err, docs) {
        console.log(docs);
        console.log('updated radial gradient')
        res.json(docs)
    })
});

router.delete('/', function (req, res) {
    RadialGradient.remove({ name: req.body.name }, function (err, docs) {
        res.json(docs)
    });
})



module.exports = router;
