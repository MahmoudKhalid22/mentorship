const mongoose = require("mongoose");
import bcrypt from "bcrypt";
import { Document, Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import { Types } from 'mongoose';


interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 7,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// DELETE SOME PRIVATE DATA
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// GENERATE AUTH TOKEN
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisistaskone");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// LOGGING IN
userSchema.statics.findByCredentials = async (
  email,
  password
): Promise<UserDocument> => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Email is not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("No valid password");
  return user;
};

// HASH PASSWORD BEFORE SAVING IT
userSchema.pre(
  "save",
  async function (this: UserDocument, next): Promise<void> {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 8);
      next();
    }
  }
);

const User = model<UserDocument>("User", userSchema);

module.exports = User;
