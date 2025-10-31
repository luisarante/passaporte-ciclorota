import express from "express";
import userRoutes from "./routes/userRoutes";
import { swaggerDocs } from "./config/swagger.config";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

swaggerDocs(app);

export default app;
