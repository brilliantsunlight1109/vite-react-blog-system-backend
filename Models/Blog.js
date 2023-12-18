const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  post_date: {
    type: String,
  },
  contributor: {
    type: String,
  },
  category: {
    type: String,
  },
  title_character: {
    type: String,
  },
  coupon: {
    type: String,
  },
  signature: {
    type: String,
  },
  uploadImage: {
    type: String,
  },
  post_text: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
