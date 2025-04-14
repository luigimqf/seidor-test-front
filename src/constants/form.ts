import { FieldConfig } from "@/types/form";

export const employeeFormConfig: FieldConfig[] = [
  {name: "name", label:"Nome", type: "text", placeholder: "Some Name"},
  {name: "document", label:"CPF", type: "text", placeholder: "123.456.789-10"},
  {name: "salary", label:"Salário Bruto", type: "number", placeholder: "0000"},
  {name: "discount", label:"Desconto da previdência", type: "number", placeholder: "000"},
  {name: "dependents", label:"Dependentes", type: "number", placeholder: "0"},
]