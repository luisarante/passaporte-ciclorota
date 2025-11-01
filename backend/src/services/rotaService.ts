import { Rota } from "../schemas/rotaSchema";

export const criarRota = async (dados: Rota) => {
  console.log("Salvando rota no banco...", dados);

  return { message: "Rota criada com sucesso!", dados };
};
