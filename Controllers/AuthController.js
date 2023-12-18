const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    const {
      store_name,
      password,
      confirm_password,
      store_address,
      style_tokyo_id,
      salon_id,
      salon_password,
      salon_confirm_password,
      createdAt,
    } = req.body;

    if (
      !store_name ||
      !password ||
      !confirm_password ||
      !store_address ||
      !style_tokyo_id ||
      !salon_id ||
      !salon_password ||
      !salon_confirm_password
    ) {
      console.log(req.body);
      return res.json({ message: "すべての項目は必須です。" });
    }
    const existingStoreName = await User.findOne({ store_name });
    if (existingStoreName) {
      return res.json({ message: "店舗名はすでに存在します。" });
    }
    const existingStoreAddress = await User.findOne({ store_address });
    if (existingStoreAddress) {
      return res.json({ message: "店舗住所はすでに存在しています。" });
    }
    const existingStyleTokyoId = await User.findOne({ style_tokyo_id });
    if (existingStyleTokyoId) {
      return res.json({ message: "IDはすでに存在します。" });
    }
    const existingSalon_id = await User.findOne({ salon_id });
    if (existingSalon_id) {
      return res.json({ message: "Salon Board IDはすでに存在します。" });
    }
    if (password != confirm_password) {
      return res.json({ message: "確認パスワードを正確に入力してください。" });
    }
    if (salon_password != salon_confirm_password) {
      return res.json({
        message: "Salon Board 確認パスワードを正確に入力してください。",
      });
    }
    const permission = "not";
    const user = await User.create({
      store_name,
      password,
      store_address,
      style_tokyo_id,
      salon_id,
      salon_password,
      permission,
      createdAt,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "ユーザ登録に成功しました。", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { style_tokyo_id, password } = req.body;
    if (!style_tokyo_id || !password) {
      return res.json({ message: "すべての項目は必須です。" });
    }
    const user = await User.findOne({ style_tokyo_id });
    if (!user) {
      return res.json({ message: "Style Tokyo IDが登録されていません。" });
    }
    if (password !== user.password) {
      return res.json({ message: "パスワードを正確に入力してください。" });
    }
    if (user.permission === "not") {
      return res.json({
        message:
          "あなたは使用する権限がありません。管理部にお問い合わせください。",
      });
    } else if (user.permission === "user" || user.permission === "manager") {
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(200)
        .json({ message: "正確にログインしています。", success: true });
    } else {
      return res.json({
        message: "管理部にお問い合わせください。",
      });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};
