// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = process.env.MONGO_URI;
// if (!connectDB) {
//   console.error("⚠️ MONGO_URI is not defined in .env file!");
//   process.exit(1);
// }


// // MongoDB Connection
// (async () => {
//   try {
//     await mongoose.connect(connectDB, {
//       serverSelectionTimeoutMS: 5000,
//     } as mongoose.ConnectOptions);
//     console.log("Successfully connected to MongoDB!");

//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error);
//   }
// })();

// export default connectDB;