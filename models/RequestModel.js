const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const RequestModel = new Schema(
  {
    act: { type: String, required: true },
    name: { type: String, required: true },
    mobile: { type: String, require: true },

    address: { type: String, required: false },
    area: { type: String, required: true },
    region: { type: [String], required: true },
    pin: { type: String, required: true },

    desc: { type: String, required: true },
  },
  { timestamps: true }
);

RequestModel.plugin(mongoosePaginate);

module.exports = mongoose.model("Request", RequestModel);