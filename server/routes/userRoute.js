const { Router } = require("express");
const userRouter = Router();
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");
const lightwallet = require("eth-lightwallet");
const { User, Post, Nft } = require("../src/models");
const { getEth } = require("../libs/eth");
const { createHashedPassword, ValidationPassword } = require("../libs/hash");

require("dotenv").config();

userRouter.post("/eth", async (req, res) => {
  const { userId } = req.body;
  try {
    if (!isValidObjectId(userId)) return res.status(400).send({ err: "userId is invalid" });
    const { address } = await User.findById(userId);
    const user = getEth(address, userId);
    return res.status(200).send({ user });
  } catch (err) {
    console.log(err);
  }
});

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
      if (eth === 0 || eth < 0.1) getEth(address, _id);
      return res.status(200).send({ user, msg: "Sucess Login" });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // console.log(userId);
    if (!mongoose.isValidObjectId(userId)) return res.status(400).send({ err: "invalid userId" });
    const user = await User.findById({ _id: userId });
    res.send({ user });
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/:userId/post", async (req, res) => {
  const { userId } = req.params;
  try {
    if (!isValidObjectId(userId)) return res.status(400).send({ err: "invalid userId" });
    const posts = await Post.find({ userId: userId });
    return res.status(200).send({ posts });
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/:userId/nft", async (req, res) => {
  const { userId } = req.params;
  try {
    if (!isValidObjectId(userId)) return res.status(400).send({ err: "invalid userId" });
    const nfts = await Nft.find({ ownerId: userId });
    return res.status(200).send({ nfts });
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  userRouter,
};
