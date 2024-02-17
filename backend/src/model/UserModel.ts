import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export type UserType = {
  name: string;
  email: string;
  password: string;
  comparePassword: (current: string) => boolean;
  getJwtToken: () => string;
};
let Schema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

Schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(String(this.password!), 8);
  next();
});

let expire = process.env.JWT_EXPIRE || "4d";
Schema.methods.getJwtToken = function () {
  let key = process.env.JWT_SECRET_KEY || "";
  return jwt.sign({ id: this._id }, key, {
    expiresIn: expire,
  });
};

Schema.methods.comparePassword = function (current: string) {
  return bcrypt.compare(String(this.password!), current);
};

let model = mongoose.model("User", Schema);

export default model;
