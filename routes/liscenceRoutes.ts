import { liscenceControllers } from "./../controllers/liscenceControllers";
import express from "express";
export const router = express.Router();

router.get("/liscences", liscenceControllers.getAllLiscences);
router.get("/liscences/:id", liscenceControllers.getLiscenceById);
router.post("/liscences", liscenceControllers.createLiscence);
router.post("/liscences/associate", liscenceControllers.associateLiscence);
router.get("/liscences/active/:userId", liscenceControllers.isLiscenceActive);
router.get(
  "/liscences/aggregate/:userId",
  liscenceControllers.GetUserAggregateType
);
router.get(
  "/liscences/history/:userId",
  liscenceControllers.getUserLiscenceHistory
);
router.put("/liscences/:id", liscenceControllers.updateLiscence);
