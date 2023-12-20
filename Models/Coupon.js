const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  coupon_name: {
    type: String,
  },
  coupon_content: {
    type: String,
  },
  menu_specification: {
    type: String,
  },
  hair_cut: {
    type: String,
  },
  hair_color: {
    type: String,
  },
  hair_perm: {
    type: String,
  },
  hair_straightening: {
    type: String,
  },
  hair_extension: {
    type: String,
  },
  hair_treatment: {
    type: String,
  },
  hair_set: {
    type: String,
  },
  hair_head_spa: {
    type: String,
  },
  hair_dressing: {
    type: String,
  },
  hair_other_menu: {
    type: String,
  },
  price: {
    type: String,
  },
  estimate_time: {
    type: String,
  },
  nomination_fee: {
    type: String,
  },
  uploadImage: {
    type: String,
  },
  visit_date_condition: {
    type: String,
  },
  target_stylist: {
    type: String,
  },
  not_used_together: {
    type: String,
  },
  used_together: {
    type: String,
  },
  only_student: {
    type: String,
  },
  only_men: {
    type: String,
  },
  only_women: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Coupon = mongoose.model("Coupon", CouponSchema);

module.exports = Coupon;
