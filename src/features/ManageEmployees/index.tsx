import EmployeeTable from "@/components/table/EmployeeTable"
import { useEmployees } from "@/hooks/useEmployees"
import { CreateModal } from "./components/modals/Create";
import React from "react";
import { IEmployee } from "@/types/employee";

export const ManageEmployees = () => {
  const { employees, update, create } = useEmployees();
  const [isCreating, setIsCreating] = React.useState<boolean>(false);

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-8 px-10"
    >
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
    </div>
  )
}