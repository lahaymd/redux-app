var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var mongoose = require('mongoose');
const puppeteer = require('puppeteer');



router.post('/puppeteer', async (req, res) => {
    console.log(req.body);
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    // page.screenshot({ path: 'client/public/images/fullpagebeforeclick.png' });
    await page.screenshot({ path: 'client/public/images/fullpage1beforeclick.png' });
    // await page.click('#linear-nav');
    // page.click('#linear-nav');
    // page.select('#filternames', req.body.name)
    await page.waitFor(3000);
    await page.select('#filternames', req.body.name)
    await page.waitFor(3000);
    const inputElement1 =   await page.$('#puppeteer')
    // await page.waitFor(7000);
    // page.screenshot({ path: 'client/public/images/fullpage1.png' });
    // await page.waitFor(5000); 
    console.log(inputElement1 + 'inputel');
    await page.waitFor(8000);
    // console.log(inputElement1 + 'inputelafterawait');
    inputElement1.screenshot({path: 'client/public/images/element1.png'});
    // await page.screenshot({ path: 'client/public/images/fullpage.png' });
    // await page.screenshot({ path: 'client/public/images/fullpage1.png' });
    // page.screenshot({ path: 'client/public/images/ullpage2.png' });
    // page.select('#filternames', req.body.name)
    // page.screenshot({ path: 'client/public/images/fullpage3.png' });
    // await page.screenshot({ path: 'client/public/images/fullpage4.png' });
    // page.screenshot({ path: 'client/public/images/fullpage5.png' });
    // await page.waitFor(1000);
    // const inputElement =    page.$('#puppeteer')
    // console.log(inputElement + 'inputel');
    
    // await page.waitFor(3000);
    //  await inputElement.screenshot({path: 'client/public/images/element.png'});
    // await page.$('#puppeteer').screenshot({path: 'element1.png'});
    // const imageBuffer = await page.screenshot({ path: 'fullpage.png' });
    
    
    await page.waitFor(9000);
    await browser.close();

    // res.set('Content-Type', 'image/png');
    // res.send(imageBuffer);
    
});

router.post('/', function (req, res) {
    console.log(req.body);
    User.create({
        userName: req.body.username,
        password: req.body.password,
        filters: [],
        linearGradients: [],
        radialGradients: []
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
    console.log(req.body);
    
    User.findOneAndUpdate({ userName: 'Mike' }, {
        $push: {
            'filters': 
                {
                    name: 'mongoFilter',
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
                                "in": "mongobf"
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
                    }]
                }
             }},  function (err, docs) {
        console.log(docs);
                console.log(docs.filters[0].filterData);

        console.log('updated filter data')
        res.json(docs)
    })
});

router.post('/filters', function (req, res) {
    console.log('request body' + JSON.stringify(req.body));
    
    User.findOneAndUpdate({ userName: req.body.username }, {
        $push: {
            'filters': 
                {
                    name: req.body.name,
                    filterData: req.body.filterData
                }
             }}, {new: true},  function (err, docs) {
        console.log(docs);
                console.log(docs.filters[0].filterData);

        console.log('updated filter data')
        res.json(docs)
    })
});

router.post('/linear_gradient', function (req, res) {
    console.log('request body' + JSON.stringify(req.body));
    
    User.findOneAndUpdate({ userName: 'Amelia' }, {
        $push: {
            'linearGradients': 
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

            }
             }}, {new: true},  function (err, docs) {
        console.log(docs);
                console.log(docs.filters[0].filterData);

        console.log('updated filter data')
        res.json(docs)
    })
});

router.delete('/', function (req, res) {
    // User.remove({ name: req.body.name }, function (err, docs) {
    //     res.json(docs)
    // });
})



module.exports = router;
