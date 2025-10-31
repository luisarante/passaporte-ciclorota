import { Router } from "express";
import { criarRotaController } from "../controllers/rotaController";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, criarRotaController);

export default router;
