var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var FilterData = new Schema({
  name: { type: String, unique: true, required: true },
  filterData: [
    // {
    //     type: String,
    //     attributes: [],
    //     children: []
    // }
  ],
});

module.exports = mongoose.model("filter_data", FilterData);
