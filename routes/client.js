import express from "express";
import { getPatient, getRecord } from "../controllers/client.js";

const router = express.Router();

router.get("/patients", getPatient);
router.get("/records", getRecord);

export default router;