import mongoose, { mongo } from "mongoose";

// export interface IResume extends Document {
//     user: string;
//     fullName: string;
//     summary?: string;
//     experience?: Array<{
//         company: string;
//         role: string;
//         duration: string;
//     }>;
//     education?: Array<{
//         school: string;
//         degree: string;
//         year: string;
//     }>;
//     skills?: string[];
// }
const ResumeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    fullName: { type: String, required: true},
    summary: { type: String },
    experience: [{ company: String, role: String, duration: String }],
    education: [{ school: String, degree: String, year: String}],
    skills: [String]
});

export default mongoose.model("Resume", ResumeSchema);