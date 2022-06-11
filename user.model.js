import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = schema({
  name: String,
  email: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const userModel = mongoose.model("onlyUsers", userSchema);
export default userModel;
