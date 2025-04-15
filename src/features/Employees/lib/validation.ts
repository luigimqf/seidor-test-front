import { z } from "zod";

function isValidDocument(document: string): boolean {
  document = document.replace(/[^\d]+/g, '');
  if (document.length !== 11 || /^(\d)\1{10}$/.test(document)) return false;

  return true;
}

export const userSchema = z.object({
  name: z.string().nonempty("Campo nome não pode ser vazio"),
  document: z.string().refine((document) => isValidDocument(document), {
    message: "Documento Inválido"
  }),
  salary: z.coerce.number().min(1, "Salário bruto deve ser no mínimo 1"),
  discount: z.coerce.number().min(0, "Desconto da previdência deve ser no mínimo 0"),
  dependents: z.coerce.number().min(0, "Numero de dependentes deve ser no mínimo 0"),
})