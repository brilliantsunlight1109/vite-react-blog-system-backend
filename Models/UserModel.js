const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  store_name: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  store_address: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  style_tokyo_id: {
    type: String,
    required: [true, "Your ID is required"],
  },
  salon_id: {
    type: String,
    required: [true, "Your Salon ID is required"],
  },
  salon_password: {
    type: String,
    required: [true, "Your ID is required"],
  },
  permission: {
    type: String,
    required: [true, "Your permission is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// userSchema.pre("save", async function (next) {
//   //   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

module.exports = mongoose.model("User", userSchema);
