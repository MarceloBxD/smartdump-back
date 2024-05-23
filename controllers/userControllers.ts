import { userModel } from "../models/userModel";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userModel.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req: any, res: any) => {
  try {
    const data = req.body;

    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    const user = await userModel.createUser({
      ...data,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const user = await userModel.updateUser(id, data);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    await userModel.deleteUser(id);
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userControllers = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
