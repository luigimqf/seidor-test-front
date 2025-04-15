export interface IEmployeesContext {
  employees: Employees;
  setEmployees: React.Dispatch<React.SetStateAction<Employees>>;
  update: (data: IEmployee) => void;
  create: (data: IEmployee) => void;
}

export interface IEmployee {
  id: string;
  name: string;
  document: string;
  salary: number;
  discount: number;
  dependents: number;
  base_salary?: number;
  irrf_discount?: number;
}

export type Employees = IEmployee[];
