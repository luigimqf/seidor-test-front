import React from "react";

import { Employees, IEmployee, IEmployeesContext } from "@/types/employee";
import { handleGrossSalary } from "@/utils/employee";

const EmployeesContext = React.createContext({} as IEmployeesContext);

export const EmployeesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = React.useState<Employees>([]);

  const update = (data: IEmployee) => {
    const { id, salary, discount, dependents } = data;
  
    const irrf_discount = handleGrossSalary(salary, discount, dependents);
  
    const updatedUser:IEmployee = {
      ...data,
      irrf_discount,
    };
  
    console.log({ updatedUser });
  
    return setEmployees(prev =>
      prev.map(emp => (emp.id === id ? updatedUser : emp))
    );
  };

  const create = (data: Omit<IEmployee, "id">) => {
    const { salary, discount, dependents } = data;
  
    const irrf_discount = handleGrossSalary(salary, discount, dependents);

    const newUser: IEmployee = {
      ...data,
      id: crypto.randomUUID(),
      irrf_discount,
    };

    setEmployees(prev => [...prev, newUser])
  }
  return (
    <EmployeesContext.Provider value={{ employees, setEmployees,update, create }}>
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
