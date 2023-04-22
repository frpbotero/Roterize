import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.URL || "";
mongoose.set("strictQuery", false);

export default mongoose.connect(URL);
