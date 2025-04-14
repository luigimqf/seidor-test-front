/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { FieldConfig } from "@/types/form";

const generateZodSchema = (fields: FieldConfig[]) => {
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

export const withDynamicForm = (WrappedComponent: React.ComponentType<any>) => {
  return ({
    fields,
    onSubmit,
  }: {
    fields: FieldConfig[];
    onSubmit: (data: unknown) => void;
  }) => {
    const schema = generateZodSchema(fields);
    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: Object.fromEntries(fields.map(f => [f.name, ""])),
    });

    const handleSubmit = form.handleSubmit(onSubmit);

    return (
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <WrappedComponent control={form.control} fields={fields} />
          <button
            className="rounded bg-black px-4 py-2 text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </Form>
    );
  };
};
