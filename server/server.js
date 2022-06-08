const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const { userRouter } = require("./routes");

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

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
