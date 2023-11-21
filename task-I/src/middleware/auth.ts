import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
const UserM = require("../model/users");

const auth = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisistaskone") as {
      _id: string;
      iat: number;
    };
    // console.log(decoded);
    const user = await UserM.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(500).send("please Authenticate");
  }
};

module.exports = auth;
