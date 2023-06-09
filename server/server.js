import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
import cors from "cors";
import uploadrouter from "./routes/uploadRoute.js";
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://Harshita:%23Harshii2201@cluster0.ybbgycd.mongodb.net/test"
  )
  .then((con) => console.log("data connection established"))
  .catch((err) => console.log("failed", err));

const app = express();
app.use(cors());
app.use(uploadrouter);
app.use(express.urlencoded());
app.use(express.json());
app.use(router);
app.listen(4000, () => console.log("listening port to 4k..."));
