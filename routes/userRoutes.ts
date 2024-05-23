import express from "express";
import { userControllers } from "../controllers/userControllers";

export const router = express.Router();

router.get("/tasks", userControllers.getAllUsers);
router.get("/tasks/:id", userControllers.getUserById);
router.post("/tasks", userControllers.createUser);
router.put("/tasks/:id", userControllers.updateUser);
router.delete("/tasks/:id", userControllers.deleteUser);
