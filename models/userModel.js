const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  { _id: false }
);

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  name: {
    first: String,
    last: String,
  },
  addresses: [addressSchema],
  orderHistory: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;