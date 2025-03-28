import express from "express";
import { createResume, getResumes, extractJobKeywords } from "../controllers/resumeController";

const router = express.Router();

router.post("/", createResume);
router.get("/", getResumes);

router.post("/extract-keywords", extractJobKeywords);


export default router;

