const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClearSchema = new Schema({
  user: { type: String, required: true },
  numberOfClears: { type: Number, required: true }
});

const Clear = mongoose.model("Book", ClearSchema);

module.exports = Clear;
