const mongoose = require("mongoose");
const { Schema } = mongoose;
const inventorySchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  stock: { type: Number, default: 0 },
  sold: { type: Number, default: 0 },
  location: String,
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
