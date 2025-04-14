export interface IEmployeesContext {
  employees: Employees;
  setEmployees: React.Dispatch<React.SetStateAction<Employees>>;
}

export interface IEmployee {
  name: string;
  document: string;
  salary: number;
  discount: number;
  dependents: number;
  base_salary?: number;
  irrf_discount?: number;
}

export type Employees = IEmployee[];
