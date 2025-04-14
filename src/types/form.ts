/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import { ZodObject } from "zod";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "number";
  placeholder?: string;
};

export type WithDynamicFormProps<T extends FieldValues> = {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<T>;
  schema?: ZodObject<any>;
  defaultValues?: Partial<T>;
};

export type FormConfig = FieldConfig[];
