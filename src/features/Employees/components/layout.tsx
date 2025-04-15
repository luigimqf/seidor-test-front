import React from "react";
import { useEmployees } from "../hooks/useEmployees";
import { CreateModal } from "./modals/Create";
import { IEmployee } from "../types";
import EmployeeTable from "./table/EmployeeTable";

export const EmployeeLayout = () => {
    const { employees, update, create } = useEmployees();
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
          onSubmit={(data) => {
            setIsCreating(false)
            create(data as IEmployee)
          }}
          setIsOpen={setIsCreating}
        />
      </div>
      <EmployeeTable 
        data={employees}
        onDelete={(emp) => {
          console.log(emp)
        }}
        onEdit={(emp) => {
          update(emp)
        }}
      />
    </>
  )
}