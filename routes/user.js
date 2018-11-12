var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const puppeteer = require('puppeteer');
const imagesURL = process.env.NODE_ENV === 'production' ?  'client/build/images/element1.png': 'client/public/images/element1.png';


router.post('/puppeteer', async (req, res) => {
    console.log(req.body.image + 'image!!!!');
    // console.log(process.env.NODE_ENV+' env');
    // console.log(imagesURL + ' images url');
    
    const imageURL = req.body.image 
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox']});
   
    
    const page = await browser.newPage();
    await page.goto(process.env.NODE_ENV === 'production' ? 'https://svg-filters.herokuapp.com/' : 'http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitFor(8000); 
    console.log(imageURL.length);
    // console.log(typeof imageURL);
    
    
    
    const inputElement1 =   await page.waitFor('#puppeteer')
    await page.select('#SourceGraphicSelect', req.body.SourceGraphic)
    // await page.$('#imageElement', e => e.setAttribute("xlink:href", image))
    await page.select('#gradientSelect', req.body.gradient)
    await page.select('#filternames', req.body.name)
    if (req.body.image !== 'images/tiger.svg') {

        await page.evaluate((imageURL) => {
            document.querySelector('#imageElement').setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imageURL)
            
            
        },imageURL);
    }
    // await page.$('#imageElement').setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', image);
    // await page.waitFor(5000); 

    await inputElement1.screenshot({ path: process.env.NODE_ENV === 'production' ? `client/build/images/${req.body.name}.png` : `client/public/images/${req.body.name}.png`, omitBackground: true});
    console.log('close me')
    ; 
    // await browser.close();  

    res.json({element: req.body.name})
    console.log('donzo');
    
});

router.post('/', function (req, res) {
    console.log(req.body.headers);
    User.create({
        userName: req.body.username,
        password: req.body.password,
        // filters: [],
        // linearGradients: [],
        // radialGradients: []
    },
        function (err, user) {
            if (err) return console.error(err);
            console.log(user, '******');
            // create a token
            var token = jwt.sign({ id: user._id }, 'superSecretKey', {
                expiresIn: 86400 // expires in 24 hours
            });
            res.json({ auth: true, token: token, user: user });
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

router.post('/login', (req,res) => {
console.log('req.body.username' +req.body.username);

    User.findOne({userName: req.body.username}, (err,docs) => {
        console.log('docs' + docs);
        if(docs.password === req.body.password) {
            // res.json(docs)

            jwt.sign({ docs }, 'superSecretKey', {
                expiresIn: '30s' // expires in 24 hours
            }, (err, token) => {
                res.json({token, auth: true})
            })
        }else{
            res.json('wrong password dumby')
        }
        
    })

})


router.get('/', function (req, res) {
    // console.log(req.headers);
    
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, 'superSecretKey', function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.send({decoded, auth: true});
    });
});

router.get('/name', function (req, res) {
    User.find({ }, function (err, docs) {
        res.json(docs)
    })
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
