import { ManageEmployees } from "@/features/ManageEmployees";
import { EmployeesProvider } from "@/hooks/useEmployees";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <EmployeesProvider>
        <ManageEmployees />
      </EmployeesProvider>
    </div>
  );
};

export default App;
