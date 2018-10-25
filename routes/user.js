var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const imagesURL = process.env.NODE_ENV === 'production' ?  'client/build/images/element1.png': 'client/public/images/element1.png';


router.post('/puppeteer', async (req, res) => {
    console.log(req.body);
    console.log(process.env.NODE_ENV+' env');
    console.log(imagesURL + ' images url');
    
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
   
    
    const page = await browser.newPage();
    await page.goto(process.env.NODE_ENV === 'production' ? 'https://svg-filters.herokuapp.com/' : 'http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitFor(2000); 
    const inputElement1 =   await page.waitFor('#puppeteer')
    await page.select('#filternames', req.body.name)
    await page.waitFor(5000); 
    // await page.screenshot({ path: `client/public/images/fullscreen1${Math.random()}.png` });
    // await page.waitFor(500); 
    await inputElement1.screenshot({ path: process.env.NODE_ENV === 'production' ? 'client/build/images/element1.png' :`client/public/images/element1.png`});

  
    
    
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
    
    await page.waitFor(11000);
    console.log('close me')
    await browser.close();

    res.set('Content-Type',  'application/json');
    res.send('done');
    console.log('donzo');
    
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
