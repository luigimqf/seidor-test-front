/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { ZodObject } from "zod";

export type FieldConfig = Omit<ComponentProps<"input">,"name"> & {
  name: string;
  label: string;
};

export type WithDynamicFormProps<T extends FieldValues> = {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<T>;
  schema?: ZodObject<any>;
  defaultValues?: Partial<T>;
};

export type FormConfig = FieldConfig[];
