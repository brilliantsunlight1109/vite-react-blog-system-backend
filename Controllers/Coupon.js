const Coupon = require("../Models/Coupon");

module.exports.getAllCoupon = (req, res) => {
  Coupon.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(404).json({ message: "Coupon not find", error: err.message })
    );
};

module.exports.getIdCoupon = (req, res) => {
  const id = req.params.id;
  Coupon.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Coupon not found" });
      }
      res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error fetching Coupon", error: err.message });
    });
};

module.exports.postCreateCoupon = (req, res) => {
  const url = "/backend";
  const {
    type,
    coupon_name,
    coupon_content,
    menu_specification,
    hair_cut,
    hair_perm,
    hair_straightening,
    hair_extension,
    hair_treatment,
    hair_set,
    hair_head_spa,
    hair_dressing,
    hair_other_menu,
    price,
    estimate_time,
    nomination_fee,
    visit_date_condition,
    target_stylist,
    not_used_together,
    used_together,
    only_student,
    only_men,
    only_women,
  } = req.body;
  const uploadImage = url + "/images/" + req.file.filename;
  const newCouponData = {
    type,
    coupon_name,
    coupon_content,
    menu_specification,
    hair_cut,
    hair_perm,
    hair_straightening,
    hair_extension,
    hair_treatment,
    hair_set,
    hair_head_spa,
    hair_dressing,
    hair_other_menu,
    price,
    estimate_time,
    nomination_fee,
    visit_date_condition,
    target_stylist,
    not_used_together,
    used_together,
    only_student,
    only_men,
    uploadImage,
    only_women,
  };
  Coupon.create(newCouponData)
    .then((data) => res.json({ message: "Coupon added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add Coupon", error: err.message })
    );
};

module.exports.putUpdateCoupon = (req, res) => {
  const url = "/backend";
  const {
    type,
    coupon_name,
    coupon_content,
    menu_specification,
    hair_cut,
    hair_perm,
    hair_straightening,
    hair_extension,
    hair_treatment,
    hair_set,
    hair_head_spa,
    hair_dressing,
    hair_other_menu,
    price,
    estimate_time,
    nomination_fee,
    visit_date_condition,
    target_stylist,
    not_used_together,
    used_together,
    only_student,
    only_men,
    uploadImage,
    only_women,
  } = req.body;
  let uploadImageFolder = "";
  if (req.file) {
    uploadImageFolder = url + "/images/" + req.file.filename;
  }
  const newCouponData = {
    type,
    coupon_name,
    coupon_content,
    menu_specification,
    hair_cut,
    hair_perm,
    hair_straightening,
    hair_extension,
    hair_treatment,
    hair_set,
    hair_head_spa,
    hair_dressing,
    hair_other_menu,
    price,
    estimate_time,
    nomination_fee,
    visit_date_condition,
    target_stylist,
    not_used_together,
    used_together,
    only_student,
    only_men,
    only_women,
    uploadImage: uploadImageFolder ? uploadImageFolder : uploadImage,
  };
  Coupon.findByIdAndUpdate(req.params.id, newCouponData)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update Coupon", error: err.message })
    );
};

module.exports.deleteCoupon = (req, res) => {
  Coupon.findByIdAndDelete(req.params.id, req.body)
    .then((data) => res.json({ message: "Coupon deleted successfully", data }))
    .catch((err) => {
      res.status(404).json({ message: "book not found", error: err.message });
    });
};
