import express from "express";
import mongoose from "mongoose";
import userModel from "./user.model.js";

const app = express();
app.use(express.json());
const port = 9000;
mongoose.connect(
  "mongodb+srv://MukulMatrix:Spx5ambK7rIeELdB@cluster0.ejncniu.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("DATABASE CONNECTED");
  }
);

app.post("/create/user", async (req, res) => {
  try {
    const user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
    });
    return res.status(200).json({ message: "Success", data: user });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Something went wrong!!", error: err });
  }
});

app.get("/users", async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Success", data: await userModel.find() });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong!!", error: err });
  }
});

app.listen(port, () => {
  console.log(`Starting server on ${port}`);
});
