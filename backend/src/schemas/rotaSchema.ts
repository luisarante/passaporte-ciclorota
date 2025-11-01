import { z } from "zod";

export const rotaSchema = z.object({
  nome: z.string().min(3, "O nome da rota deve ter pelo menos 3 caracteres"),
  descricao: z.string().optional(),
  cidades: z.array(z.string()).nonempty("A rota deve ter pelo menos uma cidade"),
});

export type Rota = z.infer<typeof rotaSchema>;
