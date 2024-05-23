import { liscenceModel } from "../models/liscenceModels";

const getAllLiscences = async (req: any, res: any) => {
  try {
    const liscences = await liscenceModel.getAllLiscences();
    res.status(200).json(liscences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLiscenceById = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const liscence = await liscenceModel.getLiscenceById(id);
    res.status(200).json(liscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLiscence = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const { type, price } = req.body;
    const liscence = await liscenceModel.updateLiscence(id, {
      type,
      price,
    });
    res.status(200).json(liscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewLiscence = async (req: any, res: any) => {
  try {
    const { type, price } = req.body;
    const liscence = await liscenceModel.createNewLiscence(type, price);
    res.status(201).json(liscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const associateLiscenceToUser = async (req: any, res: any) => {
  try {
    const { userId, liscenceId } = req.body;
    const userLiscence = await liscenceModel.associateLiscenceToUser(
      userId,
      liscenceId
    );
    res.status(201).json(userLiscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const isLiscenceActive = async (req: any, res: any) => {
  try {
    const userId = parseInt(req.params.userId);
    const userLiscence = await liscenceModel.isLiscenceActive(userId);
    res.status(200).json(userLiscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetUserAggregateType = async (req: any, res: any) => {
  try {
    const userId = parseInt(req.params.userId);
    const userAggregate = await liscenceModel.GetUserAggregateType(userId);
    res.status(200).json(userAggregate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserLiscenceHistory = async (req: any, res: any) => {
  try {
    const userId = parseInt(req.params.userId);
    const userLiscenceHistory = await liscenceModel.getUserLiscenceHistory(
      userId
    );
    res.status(200).json(userLiscenceHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLiscence = async (req: any, res: any) => {
  try {
    const { type, price } = req.body;
    const liscence = await liscenceModel.createLiscence(type, price);
    res.status(201).json(liscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const associateLiscence = async (req: any, res: any) => {
  try {
    const { userId, liscenceId } = req.body;
    const userLiscence = await liscenceModel.associateLiscence(
      userId,
      liscenceId
    );
    res.status(201).json(userLiscence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const liscenceControllers = {
  getAllLiscences,
  getLiscenceById,
  createNewLiscence,
  associateLiscenceToUser,
  isLiscenceActive,
  GetUserAggregateType,
  getUserLiscenceHistory,
  createLiscence,
  associateLiscence,
  updateLiscence,
};
