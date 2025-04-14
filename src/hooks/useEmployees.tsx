import { defaultEmployees } from "@/constants/employees";
import React from "react";

import { Employees, IEmployeesContext } from "@/types/employee";

const EmployeesContext = React.createContext({} as IEmployeesContext);

export const EmployeesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = React.useState<Employees>(defaultEmployees);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
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
