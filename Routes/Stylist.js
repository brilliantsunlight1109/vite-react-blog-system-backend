const express = require("express");
const router = express.Router();

const {
  postCreateStylist,
  getAllStylist,
  getIdStylist,
  putUpdateStylist,
  deleteStylist,
} = require("../Controllers/Stylist");

router.get("/", getAllStylist);
router.post("/", postCreateStylist);
router.get("/:id", getIdStylist);
router.put("/:id", putUpdateStylist);
router.delete("/:id", deleteStylist);

module.exports = router;
