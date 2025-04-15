import React from "react";
import { Employees, IEmployee, IEmployeesContext } from "../types";
import { handleGrossSalary } from "../lib/utils";


const EmployeesContext = React.createContext({} as IEmployeesContext);

export const EmployeesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = React.useState<Employees>([]);

  const updateEmployee = (data: IEmployee) => {
    const { id, salary, discount, dependents } = data;
  
    const irrf_discount = handleGrossSalary(salary, discount, dependents);
  
    const updatedUser:IEmployee = {
      ...data,
      irrf_discount,
    };
  
    setEmployees(prev =>
      prev.map(emp => {
        return (
          (emp.id === id ? updatedUser : emp)
        )
      })
    );
  };

  const createEmployee = (data: Omit<IEmployee, "id">) => {
    const { salary, discount, dependents } = data;
  
    const irrf_discount = handleGrossSalary(salary, discount, dependents);

    const newUser: IEmployee = {
      ...data,
      id: crypto.randomUUID(),
      irrf_discount,
    };

    setEmployees(prev => [...prev, newUser])
  }

  const deleteEmployee = (id: string) => {
    const filtered = employees.filter(emp => emp.id !== id);

    setEmployees(filtered);
  }


  return (
    <EmployeesContext.Provider value={{ employees, setEmployees,updateEmployee, createEmployee, deleteEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  const context = React.useContext(EmployeesContext);

  if (context === undefined) {
    throw new Error(
      "useEmployees deve ser usado dentro de um EmployerProvider",
    );
  }
  return context;
};
