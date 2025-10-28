import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./config/client.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRouter.js";
import boardRoutes from "./routes/boadRouter.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/boards", boardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));