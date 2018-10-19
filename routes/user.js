var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var mongoose = require('mongoose');

router.post('/', function (req, res) {
    // console.log(req.body);
    User.create({
        userName: 'Mike',
        password: 'z040577',
        filters: [
            {name: 'testFilter',
                filterData: [{
                    "type": "feOffset",
                    "attributes": [
                        {
                            "dx": 10
                        },
                        {
                            "dy": 5
                        },
                        {
                            "in": ""
                        },
                        {
                            "result": ""
                        }
                    ]
                },
                    {
                        "type": "feComposite",
                        "attributes": [
                            {
                                "operator": "over"
                            },
                            {
                                "in": ""
                            },
                            {
                                "in2": "SourceAlpha"
                            },
                            {
                                "result": ""
                            }
                        ]
                    }]}
        ],
        linearGradients: [{
            
            "name": "linear9",
            "stops": [
                {
                  
                    "offset": 0,
                    "stopColor": "red",
                    "stopOpacity": 1
                },
                {
                  
                    "offset": 0.5,
                    "stopColor": "white",
                    "stopOpacity": 1
                },
                {
                    
                    "offset": 0.1,
                    "stopColor": "blue",
                    "stopOpacity": 1
                }
            ],
            "x1": 0.1,
            "x2": 0.2,
            "y1": 0.3,
            "y2": 1,
            "spreadMethod": "repeat",
            "gradientTransform": 187,
            "gradientUnits": "objectBoundingBox"
            
        }],
        radialGradients: [
            {
              
                "name": "AmericanBullseye",
                "stops": [
                    {
                       
                        "offset": 0,
                        "stopColor": "red",
                        "stopOpacity": 1
                    },
                    {
                       
                        "offset": 0.5,
                        "stopColor": "white",
                        "stopOpacity": 1
                    },
                    {
                      
                        "offset": 1,
                        "stopColor": "blue",
                        "stopOpacity": 1
                    }
                ],
                "cx": 0.5,
                "cy": 0.5,
                "r": 0.5,
                "fx": 0.5,
                "fy": 0.5,
                "fr": 0,
                "spreadMethod": "pad",
                "gradientTransform": 0,
                "gradientUnits": "objectBoundingBox"
               
            }
        ]
    },
        function (err, user) {
            if (err) return console.error(err);
            console.log(user, '******');
            res.json(user);
})
    // User.create(
    //     {
    //         name: req.body.name,
    //         filterData: req.body.filterData

    //     },

    //     function (err, user) {
    //         if (err) return console.error(err);
    //         console.log(user, '******');
    //         res.json(user);
    //     });
});

router.get('/', function (req, res) {
    // User.find({}, function (err, docs) {
    //     res.json(docs)
    // })
});

router.get('/name', function (req, res) {
    // User.find({ name: req.query.name }, function (err, docs) {
    //     res.json(docs)
    // })
});

router.put('/', function (req, res) {
    // User.findOneAndUpdate({ name: req.body.name }, { attributes: req.body.attributes }, { new: true }, function (err, docs) {
    //     console.log(docs);
    //     console.log('updated filter data')
    //     res.json(docs)
    // })
});

router.delete('/', function (req, res) {
    // User.remove({ name: req.body.name }, function (err, docs) {
    //     res.json(docs)
    // });
})



module.exports = router;
