export interface IEmployeesContext {
  employees: Employees;
  setEmployees: React.Dispatch<React.SetStateAction<Employees>>;
  updateEmployee: (data: IEmployee) => void;
  createEmployee: (data: IEmployee) => void;
  deleteEmployee: (id: string) => void;
}

export interface IEmployee {
  id: string;
  name: string;
  document: string;
  salary: number;
  discount: number;
  dependents: number;
  liquid_salary?: number;
  irrf_discount?: number;
}

export type Employees = IEmployee[];
