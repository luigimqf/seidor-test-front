/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { FieldConfig } from "@/types/form";
import { Button } from "../ui/button";
import { generateZodSchema } from "@/utils/validation";

export const withDynamicForm = (WrappedComponent: React.ComponentType<any>) => {
  return ({
    fields,
    onSubmit,
    defaultValues,
  }: {
    fields: FieldConfig[];
    onSubmit: (data: unknown) => void;
    defaultValues?: unknown;
  }) => {
    const schema = generateZodSchema(fields);
    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: defaultValues ?? Object.fromEntries(fields.map(f => [f.name, ""])),
    });

    const handleSubmit = form.handleSubmit(onSubmit);

    return (
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <WrappedComponent control={form.control} fields={fields} />
          <Button
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </Form>
    );
  };
};
