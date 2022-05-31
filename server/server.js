const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const { userRouter } = require("./routes");

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SECRET_CODE, resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "pw",
      session: true,
      passReqToCallback: true,
    },
    function (req, username, password, done) {
      db.collection("users").findOne({ username: username }, function (err, result) {
        // console.log(result);
        if (err) return done(err);

        if (!result) return done(null, false, { message: "Id is not exist" });
        if (password == result.password) {
          return done(null, result, { message: "Login Success" });
        } else {
          return done(null, false, { message: "Password is not Correct" });
        }
      });
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (username, done) {
  done(null, {});
});

const server = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.use("/user/", userRouter);

    app.listen(8000, async () => {
      console.log(`server listening on port 8000`);
    });
  } catch (err) {
    console.log(err);
  }
};
server();
