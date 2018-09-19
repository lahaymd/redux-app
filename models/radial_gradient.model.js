var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RadialGradient = new Schema({
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
});



module.exports = mongoose.model('radial_gradients', RadialGradient);