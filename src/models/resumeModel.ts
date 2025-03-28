import mongoose, { mongo } from "mongoose";

const ResumeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    fullName: { type: String, required: true},
    summary: { type: String },
    experience: [{ company: String, role: String, duration: String }],
    education: [{ school: String, degree: String, year: String}],
    skills: [String]
});

export default mongoose.model("Resume", ResumeSchema);