const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({
          status: true,
          store_name: user.store_name,
          store_address: user.store_address,
          style_tokyo_id: user.style_tokyo_id,
          user_salon_id: user.salon_id,
          id: user._id,
          permission: user.permission,
        });
      else return res.json({ status: false });
    }
  });
};
