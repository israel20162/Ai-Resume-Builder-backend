import { Request, Response } from "express";
import Resume from "../models/resumeModel";
import nlp from "compromise";
import stopword from "stopword";
import { RequestHandler } from "express";

export const createResume = async (req: Request, res: Response) => {
    try {
        const resume = await Resume.create({ user: req.body.user, ...req.body });
        res.status(201).json(resume);   
    } catch (error) {
        res.status(500).json({ message: "Error creating resume"});
    }
};

export const getResumes = async (req: Request, res: Response) => {
    const resumes = await Resume.find({ user: req.body.User});
    res.json(resumes);
};

export const extractJobKeywords: RequestHandler = (req: Request, res: Response) => {
    try {
        const { jobDescription } = req.body;
        if (!jobDescription) {
            res.status(400).json({ message: "Job description is required"});
            return;
        }
        //processing NLP (Natural Language Processing)
        let doc = nlp(jobDescription);
        let skills = doc.nouns().out("array");
    
        //removing stopwords
        skills = stopword.removeStopwords(skills);
        res.status(200).json({ extractedSkills: skills });
    } catch (error) {
        console.log("Error extracting job keywords:", error);
        res.status(500).json({ message: "Server error"});
    }
};