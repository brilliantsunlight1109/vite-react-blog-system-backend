const { Signup, Login } = require("../Controllers/AuthController");
const {
  GeneralSetting,
  putUpdateSetting,
  getIdSetting,
  deleteSetting,
} = require("../Controllers/Setting");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/", GeneralSetting);
router.put("/:id", putUpdateSetting);
router.get("/:id", getIdSetting);
router.delete("/:id", deleteSetting);

module.exports = router;
