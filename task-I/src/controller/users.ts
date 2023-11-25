import { Request, Response } from "express";
import { Document } from "mongoose";
const UserModel = require("../model/users");

interface userBody {
  username: string;
  email: string;
  password: string;
}

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const requestBody: userBody = req.body;

    const user = new UserModel(requestBody);
    await user.save();

    res.json({
      message: "user added sucessfully",
    });
  } catch (e) {
    console.error(e);
    res.json({
      e,
      message: "internal server error",
    });
  }
};

// SIGN IN USER
const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.send({
      e,
      message: "internal server error",
    });
  }
};

// LOGOUT USER
const logoutUser = async (req: any, res: any) => {
  try {
    if (req.user.tokens) {
      req.user.tokens = req.user[0]?.tokens.filter(
        (token: any) => token.token !== req.token
      );

      await req.user.save();
      res.send("You logged out");
    }
  } catch (err) {
    res.send("the user is not found");
  }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: Document[] = await UserModel.find({});
    res.send(users);
  } catch (e) {
    console.log(e);

    res.send("internal server error");
  }
};

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id);
    res.send(user);
  } catch (e) {
    console.log(e);

    res.send("internal server error");
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated successfully");
  } catch (e) {
    res.send(e);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.send("user deleted successfully");
  } catch (e) {
    res.send(e);
  }
};

export {
  createUser,
  loginUser,
  logoutUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
