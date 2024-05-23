import express from "express";
export const router = express.Router();
import { usersLiscenceControllers } from "../controllers/userLiscenceController";

router.get("/userLiscence/:id", usersLiscenceControllers.getUserLiscenecById);
