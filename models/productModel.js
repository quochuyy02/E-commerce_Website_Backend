const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  inventory: {
    stock: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
  },
  attributes: {
    color: String,
    size: String,
  },
  images: [String],
  ratings: {
    average: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;