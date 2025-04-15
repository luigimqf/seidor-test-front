import { EmployeeLayout } from "./layout"
import { EmployeesProvider } from "./hooks/useEmployees"


export const Employees = () => {

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-8 px-10"
    >
      <EmployeesProvider>
        <EmployeeLayout />
      </EmployeesProvider>
    </div>
  )
}