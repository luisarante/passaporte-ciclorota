import { Request, Response } from "express";
import { rotaSchema } from "../schemas/rotaSchema";
import { criarRota } from "../services/rotaService";

export const criarRotaController = async (req: Request, res: Response) => {
  try {
    const validacao = rotaSchema.parse(req.body);
    const resultado = await criarRota(validacao);
    res.status(201).json(resultado);
  } catch (error: any) {
    res.status(400).json({ error: error.errors || "Erro ao criar rota" });
  }
};
