const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  parentCategory: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
