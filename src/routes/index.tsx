import { Employees } from "@/pages/Employee";
import { NotFound } from "@/pages/NotFound";
import { Routes as Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route index element={<Employees />} />
      <Route path="*" element={<NotFound />}/>
    </Switch>
  );
};

export default Routes;
