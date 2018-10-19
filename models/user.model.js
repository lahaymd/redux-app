var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var User = new Schema({
    userName: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    filters: [{

        name: { type: String, unique: true, required: true },
        filterData: [
            // {
                //     type: String,
                //     attributes: [],
                //     children: [] 
                // }
                    ]
            }],
    linearGradients: [{
        name: { type: String, unique: true, required: true },
        stops: [
            {
                offset: Number,
                stopColor: String,
                stopOpacity: Number
            }
        ],
        x1: Number,
        x2: Number,
        y1: Number,
        y2: Number,
        spreadMethod: String,
        gradientTransform: Number,
        gradientUnits: String
    }],
    radialGradients: [{
        name: { type: String, unique: true, required: true },
        stops: [
            {
                offset: Number,
                stopColor: String,
                stopOpacity: Number
            }
        ],
        cx: Number,
        cy: Number,
        r: Number,
        fx: Number,
        fy: Number,
        fr: Number,
        spreadMethod: String,
        gradientTransform: Number,
        gradientUnits: String
    }]       
});



module.exports = mongoose.model('users', User);