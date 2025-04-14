import React from "react";

import { Employees, IEmployeesContext } from "src/types/useEmployees.structure";

const EmployerContext = React.createContext({} as IEmployeesContext);

export const EmployerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = React.useState<Employees>([]);

  return (
    <EmployerContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployerContext.Provider>
  );
};

export const useEmployees = () => {
  const context = React.useContext(EmployerContext);

  if (context === undefined) {
    throw new Error(
      "useEmployees deve ser usado dentro de um EmployerProvider",
    );
  }
  return context;
};
