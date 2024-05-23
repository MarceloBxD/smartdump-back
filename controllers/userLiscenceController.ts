import { userLiscenceModel } from "../models/userLiscenceModel";

const getUserLiscenecById = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userLiscenceModel.getUserLiscences(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const usersLiscenceControllers = {
  getUserLiscenecById,
};
