import EmployeeTable from "@/components/table/EmployeeTable"
import { useEmployees } from "@/hooks/useEmployees"
import { CreateModal } from "./components/modals/Create";

export const ManageEmployees = () => {
  const { employees } = useEmployees();

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
        <CreateModal />
      </div>
      <EmployeeTable 
        data={employees}
        onDelete={(emp) => {
          console.log(emp)
        }}
        onEdit={(emp) => {
          console.log(emp)
        }}
      />
    </div>
  )
}