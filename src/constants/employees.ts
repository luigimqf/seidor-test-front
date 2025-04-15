import { IEmployee } from "@/types/employee";
import { FieldConfig } from "@/types/form";

type IRRF = {
  min: number;
  max: number;
  aliquota: number;
  deductionShare: number;
};

export const DEPENDENT_DEDUCTION = 189.59

export const IRRF_TABLE: IRRF[] = [
  {
    min: 0,
    max: 2259.20,
    aliquota: 1,
    deductionShare: 0.00,
  },
  {
    min: 2259.21,
    max: 2826.65,
    aliquota: 0.075,
    deductionShare: 169.44,
  },
  {
    min: 2826.66,
    max: 3751.05,
    aliquota: 0.15,
    deductionShare: 381.44,
  },
  {
    min: 3751.06,
    max: 4664.68,
    aliquota: 0.225,
    deductionShare: 662.77,
  },
  {
    min: 4664.69,
    max: Infinity,
    aliquota: 0.275,
    deductionShare: 896.00,
  },
]

export const defaultEmployees: IEmployee[] = [
  {
    id: "678d0cb0-2aeb-551c-a376-f05672f0c3bf",
    name: "Letícia Aurora Farias",
    document: "936.938.039-60",
    salary: 998,
    discount: 74.85,
    dependents: 2,
  },
  {
    id: "41e5cd83-c923-528e-b686-29564d1f15cf",
    name: "Edson Thiago Drumond",
    document: "748.517.476-24",
    salary: 1045,
    discount: 78.38,
    dependents: 1,
  },
  {
    id: "152de23a-0e46-5593-b468-b820fe65e829",
    name: "Fátima Elza Tereza Castro",
    document: "701.118.872-08",
    salary: 5500,
    discount: 628.95,
    dependents: 0,
  },
  {
    id: "60cf0a57-d4fe-5a5a-89dc-e7af722dbec9",
    name: "Sandra Giovanna Drumond",
    document: "715.890.756-25",
    salary: 4522,
    discount: 492.03,
    dependents: 3,
  },
  {
    id: "f7076a2b-9849-532a-b6fe-d9a2fc7b3b84",
    name: "Valentina Clara Nunes",
    document: "101.151.404-41",
    salary: 10000,
    discount: 713.1,
    dependents: 4,
  },
];

export const employeeFormConfig: FieldConfig[] = [
  {name: "name", label:"Nome", type: "text", placeholder: "Some Name"},
  {name: "document", label:"CPF", type: "text", placeholder: "123.456.789-10", maxLength: 14},
  {name: "salary", label:"Salário Bruto", type: "number", placeholder: "0.000"},
  {name: "discount", label:"Desconto da previdência", type: "number", placeholder: "0.00"},
  {name: "dependents", label:"Dependentes", type: "number", placeholder: "0"},
]
