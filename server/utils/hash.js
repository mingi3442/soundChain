const crypto = require("crypto");

module.exports = {
  createHashedPassword: (plainPassword) =>
    new Promise(async (resolve, reject) => {
      const salt = await createSalt();
      crypto.pbkdf2(plainPassword, salt, 2022, 64, "sha512", (err, key) => {
        if (err) reject(err);
        resolve({ password: key.toString("base64"), salt });
      });
    }),
  ValidationPassword: (password, salt) =>
    new Promise(async (resolve, reject) => {
      crypto.pbkdf2(password, salt, 2022, 64, "sha512", (err, key) => {
        if (err) reject(err);
        resolve({ password: key.toString("base64") });
      });
    }),
};

const createSalt = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
