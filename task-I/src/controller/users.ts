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

export { createUser, getUsers, getUser, updateUser, deleteUser };
