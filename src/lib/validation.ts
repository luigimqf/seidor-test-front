/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldConfig } from "@/types/form";
import { z } from "zod";

export const generateZodSchema = (fields: FieldConfig[]) => {
  const shape = fields.reduce<Record<string, any>>((acc, field) => {
    const { name, type } = field;

    acc[name] =
      type === "number"
        ? z.coerce.number().min(0, "Mínimo 0")
        : z.string().min(1, "Campo obrigatório");

    return acc;
  }, {});

  return z.object(shape);
};