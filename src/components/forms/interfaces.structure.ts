/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldConfig } from "@/types/form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { ZodObject } from "zod";

export type WithDynamicFormProps<T extends FieldValues> = {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<T>;
  schema?: ZodObject<any>;
  defaultValues?: Partial<T>;
}