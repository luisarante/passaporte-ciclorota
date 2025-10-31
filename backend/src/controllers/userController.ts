import { Request, Response } from "express";
import { db } from "../config/firebase";
import { userSchema } from "../schemas/userSchema";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const parsedData = userSchema.parse(req.body);
    const docRef = await db.collection("users").add(parsedData); 

    return res.status(201).json({
      id: docRef.id,
      message: "Usuário criado com sucesso!",
      data: parsedData,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
};
