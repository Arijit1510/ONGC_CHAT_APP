import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());//to parse the incoming request with JSON payload (from req.body)
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
});
