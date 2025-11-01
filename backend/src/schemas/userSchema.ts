import { z } from "zod";

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - cidadeResidencia
 *         - dataNascimento
 *         - passaporteCode
 *         - role
 *         - telefone
 *         - telefoneEmergencia
 *         - ufResidencia
 *       properties:
 *         nome:
 *           type: string
 *           example: João Silva
 *         email:
 *           type: string
 *           example: joao@email.com
 *         cidadeResidencia:
 *           type: string
 *           example: Caraguatatuba
 *         dataNascimento:
 *           type: string
 *           format: date
 *           example: 18-01-2006
 *         passaporteCode:
 *           type: string
 *           example: TESTE-ADMIN
 *         role: 
 *           type: string
 *           example: admin
 *         telefone:
 *           type: string
 *           example: "+5512987654321"
 *         telefoneEmergencia:
 *           type: string
 *           example: "+5512987612345"
 *         ufResidencia:
 *           type: string
 *           example: SP
 * 
 * 
 */
export const userSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  cidade: z.string().min(2, "Cidade inválida"),
});

export type UserData = z.infer<typeof userSchema>;
