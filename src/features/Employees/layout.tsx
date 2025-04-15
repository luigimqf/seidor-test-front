import React from "react";
import { useEmployees } from "./hooks/useEmployees";
import { CreateModal } from "./components/modals/Create";
import { IEmployee } from "./types";
import EmployeeTable from "./components/table/EmployeeTable";
import { userSchema } from "./lib/validation";

export const EmployeeLayout = () => {
    const { employees, updateEmployee, createEmployee, deleteEmployee } = useEmployees();
    const [isCreating, setIsCreating] = React.useState<boolean>(false);
  return (
    <>
      <div
        className="w-full flex justify-between items-center px-2"
      >
        <span className="font-bold text-2xl">
          Funcionários
        </span>
        <CreateModal 
          isOpen={isCreating}
          schema={userSchema}
          onSubmit={(data) => {
            setIsCreating(false)
            createEmployee(data as IEmployee)
          }}
          setIsOpen={setIsCreating}
        />
      </div>
      <EmployeeTable 
        data={employees}
        schema={userSchema}
        onDelete={({id}) => {
          deleteEmployee(id)
        }}
        onEdit={(emp) => {
          updateEmployee(emp)
        }}
      />
    </>
  )
}