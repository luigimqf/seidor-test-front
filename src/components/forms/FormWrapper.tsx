/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldConfig } from "@/types/form";

interface FormWrapperProps {
  fields: FieldConfig[];
  control: Control<any>;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ fields, control }) => {
  return (
    <>
      {fields.map(field => (
        <FormField
          key={field.name}
          control={control}
          name={field.name}
          render={({ field: f }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input
                  {...f}
                  {...field}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
};

export default FormWrapper;
