var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var LinearGradient = new Schema({
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
});



module.exports = mongoose.model('linear_gradients', LinearGradient);