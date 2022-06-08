const { Router } = require("express");
const userRouter = Router();
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");
const lightwallet = require("eth-lightwallet");
const { User } = require("../src/models");
const { getEth } = require("../utils/eth");
const { verifyToken, createHashedPassword, ValidationPassword } = require("../utils/userMiddleware");
const jwt = require("jsonwebtoken");
require("dotenv").config();

userRouter.post("/signup", async (req, res) => {
  let { username, password, userId } = req.body;
  if (!userId) return res.status(400).send({ err: "userID is required!" });
  if (!username) return res.status(400).send({ err: "username is required!" });
  if (!password) return res.status(400).send({ err: "password is required!" });
  const userIdCheck = await User.exists({ userID: userId });
  if (userIdCheck) return res.status(400).send({ err: "UserId is already singup" });
  const usernameCheck = await User.exists({ username: username });
  if (usernameCheck) return res.status(400).send({ err: "UserName is already singup" });
  let mnemonic, address, pk;
  const { password: hashedPassword, salt } = await createHashedPassword(password);
  // console.log(hashedPassword, salt);
  try {
    mnemonic = lightwallet.keystore.generateRandomSeed();
    lightwallet.keystore.createVault(
      {
        password: password,
        seedPhrase: mnemonic,
        hdPathString: "m/0'/0'/0'",
      },
      function async(err, ks) {
        ks.keyFromPassword(password, function (err, pwDerivedKey) {
          ks.generateNewAddress(pwDerivedKey);
          address = ks.getAddresses().toString();
          pk = ks.exportPrivateKey(address, pwDerivedKey);
          // const eth = await getEth(address, userId);
          // console.log(eth);
          const user = new User({ userID: userId, username, password: hashedPassword, address: address.toString(), privateKey: pk, mnemonic, erc20: 0, eth: 0, salt });
          user.save();
          return res.send({ user, message: "OK" });
        });
      }
    );
  } catch (err) {
    console.log({ err });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { userId, password } = req.body;
    const { salt } = await User.findOne({ userID: userId });
    const { password: hashedPassword } = await ValidationPassword(password, salt);
    const userIdCheck = await User.exists({ userID: userId });
    if (!userIdCheck) return res.status(400).send({ err: "userId is not exists." });
    const user = await User.findOne({ userID: userId, password: hashedPassword });

    if (!user) return res.status(400).send({ err: "Password is wrong." });
    if (user) {
      const { _id, address, eth } = user;
      const token = jwt.sign(
        {
          _id,
          address,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1m",
          issuer: "나",
        }
      );

      if (eth === 0 || eth < 0.1) getEth(address, _id);
      return res.status(200).send({ token, user, msg: "Sucess Login" });
    }
  } catch (err) {
    console.log(err);
  }
});
userRouter.get("/tokentest", verifyToken, (req, res) => {
  res.json(req.decoded);
});

module.exports = {
  userRouter,
};
